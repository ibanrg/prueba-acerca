using PruebaAcerca.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PruebaAcerca.Services.Interfaces
{
    public interface IVehiculoService
    {
        Task<List<Vehiculo>> GetAll();
        Task<Vehiculo> GetOne(int numPedido);
        Task<bool> Save(Vehiculo vehiculo);
        Task<bool> Delete(Vehiculo vehiculo);
    }
}
