using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PruebaAcerca.Data.Models
{
    public class Vehiculo
    {
        [Key]
        public Guid? Id { get; set; }
        public int? NumeroPedido { get; set; }
        public string Bastidor { get; set; }
        public string Modelo { get; set; }
        public string Matricula { get; set; }
        public DateTime? FechaEntrega { get; set; }
    }
}
