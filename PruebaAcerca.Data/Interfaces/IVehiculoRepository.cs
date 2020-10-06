using PruebaAcerca.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PruebaAcerca.Data.Interfaces
{
    public interface IVehiculoRepository
    {
        Task<List<Vehiculo>> GetAll();
        Task<Vehiculo> GetOne(int numPedido);
        Task<bool> Create(Vehiculo vehiculo);
        Task<bool> Update(Vehiculo vehiculo);
        Task<bool> Delete(Vehiculo vehiculo);
    }
}
