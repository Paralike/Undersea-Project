using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Undersea.BLL.DTOs.Exception;
using Undersea.BLL.Exceptions;
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
            catch (UnauthorizedAccessException ex)
            {
                //await _logger.LogError($"Unauthorized Access Happened " + ex);
                await HandleUnautorizedException(httpContext, ex);
            }
            catch (ExistingUpgradeException ex)
            {

            }
            catch(TimeoutException ex)
            {
                //await _logger.LogError($"Timeout Happened " + ex);
                await HandleTimeoutException(httpContext, ex);
            }
            catch (Exception ex)
            {
               // await _logger.LogError($"Something went wrong: {ex}");
                await HandleExceptionAsync(httpContext, ex);
            }
            
            // TODO új exception alapján lekezelni
        }

        private Task HandleTimeoutException(HttpContext httpContext, TimeoutException ex)
        {
            httpContext.Response.ContentType = "application/json";
            httpContext.Response.StatusCode = (int)HttpStatusCode.RequestTimeout;

            return httpContext.Response.WriteAsync(new ErrorDto()
            {
                Message = "Timeout Happened"
            }.ToString());

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
        private Task HandleUnautorizedException(HttpContext context, UnauthorizedAccessException ex)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.Unauthorized;

            return context.Response.WriteAsync(new ErrorDto()
            {
                Message = "Unauthorized Server Access "
            }.ToString());

        }

    }
}
