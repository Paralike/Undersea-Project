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

        public ExceptionHandler(RequestDelegate next)
        {
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
                await _logger.LogError($"Unauthorized Access Happened " + ex, ex);
                await HandleAllException(httpContext, ex, 401);
            }
            catch (ExistingUpgradeException ex)
            {
                await _logger.LogError($"Upgrade exception " + ex, ex);
                await HandleAllException(httpContext, ex, 400);
            }
            catch (ExistingBuildingException ex)
            {
                await _logger.LogError($"Building Exception " + ex, ex);
                await HandleAllException(httpContext, ex, 400);
            }
            catch (TimeoutException ex)
            {
                await _logger.LogError($"Timeout Happened " + ex, ex);
                await HandleAllException(httpContext, ex, (int)HttpStatusCode.RequestTimeout);
            }
            catch (NotEnoughMoneyException ex)
            {
                await _logger.LogError($"Something went wrong: {ex}", ex);
                await HandleAllException(httpContext, ex, 400);

            }
            catch (HadvezerException ex)
            {
                await _logger.LogError($"Something went wrong: {ex}", ex);
                await HandleAllException(httpContext, ex, 400);
            }

            catch (Exception ex)
            {
                await _logger.LogError($"Something went wrong: {ex}", ex);
                await HandleExceptionAsync(httpContext, ex);
            }
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
        private Task HandleAllException(HttpContext context, Exception ex, int statuscode)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = statuscode;
            return context.Response.WriteAsync(new ErrorDto()
            {
                Message = ex?.Message
            }.ToString());
        }

    }
}
