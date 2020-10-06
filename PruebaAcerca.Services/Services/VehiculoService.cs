using PruebaAcerca.Data.Interfaces;
using PruebaAcerca.Data.Models;
using PruebaAcerca.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PruebaAcerca.Services.Services
{
    public class VehiculoService : IVehiculoService
    {
        IVehiculoRepository _vehiculoRepository;

        public VehiculoService(IVehiculoRepository vehiculoRepository)
        {
            _vehiculoRepository = vehiculoRepository;
        }

        public Task<List<Vehiculo>> GetAll()
        {
            return _vehiculoRepository.GetAll();
        }

        public Task<Vehiculo> GetOne(int numPedido)
        {
            return _vehiculoRepository.GetOne(numPedido);
        }

        public Task<bool> Save(Vehiculo vehiculo)
        {
            if (vehiculo.Id == null)
            {
                return _vehiculoRepository.Create(vehiculo);
            }
            else
            {
                return _vehiculoRepository.Update(vehiculo);
            }
        }

        public Task<bool> Delete(Vehiculo vehiculo)
        {
            return _vehiculoRepository.Delete(vehiculo);
        }
    }
}
