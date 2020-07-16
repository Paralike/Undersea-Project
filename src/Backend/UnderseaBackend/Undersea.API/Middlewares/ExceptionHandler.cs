using Microsoft.AspNetCore.Http;
using System;
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

        public ExceptionHandler(RequestDelegate next)
        {
           // _logger = logger;
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext, ILogService _logger)
        {
            try
            {
                await _next(httpContext);
            }
            catch (UnauthorizedAccessException ex)
            {
                await _logger.LogError($"Unauthorized Access Happened " + ex,ex);
                await HandleAllException(httpContext, ex,401);
            }
            catch (ExistingUpgradeException ex)
            {
                await _logger.LogError($"Upgrade exception " + ex, ex);
                await HandleAllException(httpContext, ex, 406);
            }
            catch (ExistingBuildingException ex)
            {
                await _logger.LogError($"Building Exception " + ex, ex);
                await HandleAllException(httpContext, ex, 405);
            }
            catch (TimeoutException ex)
            {
                await _logger.LogError($"Timeout Happened " + ex, ex);
                await HandleTimeoutException(httpContext, ex);
            }
            catch (NotEnoughMoneyException ex)
            {
                await _logger.LogError($"Something went wrong: {ex}", ex);
                await HandleNotEnoughMoneyException(httpContext, ex);
            }

            catch (HadvezerException ex)
            {
                await _logger.LogError($"Something went wrong: {ex}", ex);
                await HandleHadvezerException(httpContext, ex);
            }

            catch (Exception ex)
            {
                await _logger.LogError($"Something went wrong: {ex}", ex);
                await HandleExceptionAsync(httpContext, ex);
            }

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

        private Task HandleNotEnoughMoneyException(HttpContext httpContext, NotEnoughMoneyException ex)
        {
            httpContext.Response.ContentType = "application/json";
            httpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;

            return httpContext.Response.WriteAsync(new ErrorDto()
            {
                Message = "You don't have enough pearl"
            }.ToString());

        }

        private Task HandleHadvezerException(HttpContext httpContext, HadvezerException ex)
        {
            httpContext.Response.ContentType = "application/json";
            httpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;

            return httpContext.Response.WriteAsync(new ErrorDto()
            {
                Message = ex.Message
            }.ToString());

        }

        private Task HandleExceptionAsync(HttpContext context, Exception exception)
        {

            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            return context.Response.WriteAsync(new ErrorDto()
            {
                Message = exception.Message
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
        private Task HandleAllException(HttpContext context, Exception ex, int statuscode)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = statuscode;
            return context.Response.WriteAsync(new ErrorDto()
            {
                Message = ex.Message
            }.ToString());
        }

    }
}
