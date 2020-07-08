using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Undersea.BLL.DTOs.Exception;
using Undersea.BLL.Interfaces;

namespace Undersea.API.Middlewares
{
    public class ExceptionHandler
    {
        private readonly RequestDelegate _next;
        private readonly ILogService _logger;

        public ExceptionHandler(RequestDelegate next, ILogService logger)
        {
            _logger = logger;
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                //_logger.LogError($"Something went wrong: {ex}");
                await HandleExceptionAsync(httpContext, ex);
            }

            // TODO új exception alapján lekezelni
        }

        private Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            // TODO státuszkódokat állítani

            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            return context.Response.WriteAsync(new ErrorDto()
            {
                Message = "Internal Server Error from the custom middleware."
            }.ToString());
        }
    }
}
