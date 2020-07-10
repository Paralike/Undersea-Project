using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

namespace Undersea.DAL.Models
{
    public class ApplicationLog : IDbEntity
    {
        public Guid Id { get; set; }
        public string StackTrace { get; set; }
        public DateTime DateTime { get; set; }
        public string Message { get; set; }
        public ApplicationLog(string stackTrace, string message)
        {
            StackTrace = stackTrace;
            DateTime = DateTime.Now;
            Message = message;
        }
    }
}
