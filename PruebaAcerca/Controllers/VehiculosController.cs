using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PruebaAcerca.Data.Models;
using PruebaAcerca.Services.Interfaces;

namespace PruebaAcerca.Controllers
{
    [Route("api/[controller]")]
    public class VehiculosController : Controller
    {
        IVehiculoService _vehiculoService;

        public VehiculosController(IVehiculoService vehiculoService)
        {
            _vehiculoService = vehiculoService;
        }

        [HttpGet]
        public async Task<ActionResult> GetVehiculos(int numeroPedido)
        {
            var result = await _vehiculoService.GetAll();
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> SaveVehiculo([FromBody] Vehiculo vehiculo)
        {
            var result = await _vehiculoService.Save(vehiculo);
            return Ok(result);
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveVehiculo([FromBody] Vehiculo vehiculo)
        {
            var result = await _vehiculoService.Delete(vehiculo);
            return Ok(result);
        }
    }
}
