using System;
using System.Collections.Generic;
using System.Linq;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.DAL.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class, IDbEntity
    {
        private readonly AppDbContext _context;

        public BaseRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<T> GetAll()
        {
            return _context.Set<T>().AsEnumerable();
        }
        public T GetById(Guid id)
        {
            return _context.Set<T>().SingleOrDefault(s => s.Id == id);
        }
        public void Insert(T entity)
        {
            _context.Add(entity);
            _context.SaveChanges();
        }
        public void Update(T entity)
        {
            _context.SaveChanges();
        }
        public void Delete(Guid id)
        {
            T entity = _context.Set<T>().SingleOrDefault(s => s.Id == id);
            _context.Remove(entity);
            _context.SaveChanges();
        }
    }
}
