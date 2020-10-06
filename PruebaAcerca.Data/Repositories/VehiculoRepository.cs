using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using PruebaAcerca.Data.Interfaces;
using PruebaAcerca.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PruebaAcerca.Data.Repositories
{
    public class VehiculoRepository : IVehiculoRepository
    {
        private AcercaDbContext _db;

        public VehiculoRepository(AcercaDbContext acercaDbContext)
        {
            _db = acercaDbContext;
        }

        private async Task<bool> SaveChanges()
        {
            try
            {
                int result = await _db.SaveChangesAsync();
                return result > 0;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex?.InnerException.Message ?? ex.Message);
                return false;
            }
        }

        public Task<List<Vehiculo>> GetAll()
        {
            return _db.Vehiculos.ToListAsync();
        }

        public Task<Vehiculo> GetOne(int numPedido)
        {
            return _db.Vehiculos.Where(x => x.NumeroPedido == numPedido).FirstOrDefaultAsync();
        }

        public async Task<bool> Create(Vehiculo vehiculo)
        {
            _db.Vehiculos.Add(vehiculo);
            return await SaveChanges();
        }

        public async Task<bool> Update(Vehiculo vehiculo)
        {
            _db.Vehiculos.Update(vehiculo);
            return await SaveChanges();
        }

        public async Task<bool> Delete(Vehiculo vehiculo)
        {
            _db.Vehiculos.Remove(vehiculo);
            return await SaveChanges();
        }
    }
}
