using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Text;
using Undersea.API.Middlewares;
using Undersea.BLL.Interfaces;
using Undersea.BLL.Services;
using Undersea.DAL;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories;
using Undersea.DAL.Repositories.Interfaces;
using Undersea.DAL.Repositories.Repositories;
using Undersea.DAL.Repository.Interfaces;
using Undersea.DAL.Repository.Repositories;
using Hangfire;
using Hangfire.SqlServer;
using Undersea.BLL.Hubs;

namespace Undersea.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<User, IdentityRole<Guid>>(options =>
            {
                options.User.AllowedUserNameCharacters = "aábcdeéfghijklmnoöõpqrstuüûvwxyzAÁBCDEÉFGHIJKLMNOÖÕPQRSTUÜÛVWXYZ0123456789 -._@+";
            })
            .AddEntityFrameworkStores<AppDbContext>();

            services.AddDbContext<AppDbContext>(o =>
            o.UseSqlServer(Configuration["ConnectionStrings:DefaultConnection"]));
            services.AddHttpContextAccessor();

            services.AddTransient<IAuthService, AuthService>();
            services.AddTransient<IAttackService, AttackService>();
            services.AddTransient<IArmyService, ArmyService>();
            services.AddTransient<IUpgradeService, UpgradeService>();
            services.AddTransient<ICityService, CityService>();
            services.AddTransient<ILogService, LoggerService>();
            services.AddTransient<IGameService, GameService>();
            services.AddTransient<IBuildingService, BuildingService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<ISignalHub, SignalHub>();

            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IArmyRepository, ArmyRepository>();
            services.AddTransient<IAttackRepository, AttackRepository>();
            services.AddTransient<IUnitRepository, UnitRepository>();
            services.AddTransient<ICityRepository, CityRepository>();
            services.AddTransient<IUpgradeAttributeRepository, UpgradeAttributeRepository>();
            services.AddTransient<IBuildingAttributeRepository, BuildingAttributeRepository>();
            services.AddTransient<IUpgradeJoinRepository, UpgradeJoinRepository>();
            services.AddTransient<IBuildingJoinRepository, BuildingJoinRepository>();
            services.AddTransient<IBuildingRepository, BuildingRepository>();
            services.AddTransient<IArmyUnitJoinRepository, ArmyUnitJoinRepository>();
            services.AddTransient<IUpgradeRepository, UpgradeRepository>();
            services.AddTransient<IProfileService, ProfileService>();

            services.AddTransient<UserManager<User>>();
            services.AddTransient<SignInManager<User>>();

            services.AddAutoMapper(typeof(Startup));

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,

                    ValidIssuer = "http://localhost:5000",
                    ValidAudience = "http://localhost:5000",
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"))
                };

            });

            // Add Hangfire services.
            services.AddHangfire(configuration => configuration
                .SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
                .UseSimpleAssemblyNameTypeSerializer()
                .UseRecommendedSerializerSettings()
                .UseSqlServerStorage(Configuration.GetConnectionString("HangfireConnection"), new SqlServerStorageOptions
                {
                    CommandBatchMaxTimeout = TimeSpan.FromMinutes(5),
                    SlidingInvisibilityTimeout = TimeSpan.FromMinutes(5),
                    QueuePollInterval = TimeSpan.Zero,
                    UseRecommendedIsolationLevel = true,
                    DisableGlobalLocks = true
                }));

            services.AddHangfireServer();

            services.AddCors();

            services.AddControllers();

            services.AddSwaggerDocument();

            services.AddSignalR();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IBackgroundJobClient backgroundJobs)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(
            options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
            );

            app.UseMiddleware<ExceptionHandler>();

            app.UseStaticFiles();
            app.UseHangfireDashboard();
            app.UseOpenApi();
            app.UseSwaggerUi3();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            InitDatabase(app);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<SignalHub>("/signalHub");
            });
        }

        private static void InitDatabase(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices
                .GetRequiredService<IServiceScopeFactory>()
                .CreateScope())
            {
                using (var context = serviceScope.ServiceProvider.GetService<AppDbContext>())
                {
                    //context.Database.Migrate();
                }

                var _gameService = serviceScope.ServiceProvider.GetService<IGameService>();
                RecurringJob.AddOrUpdate(() => _gameService.NextTurn(), Cron.Hourly);
            }
        }
    }
}
