using Microsoft.EntityFrameworkCore;
using PruebaAcerca.Data.Models;
using System;

namespace PruebaAcerca.Data
{
    public partial class AcercaDbContext : DbContext
    {
        public AcercaDbContext(DbContextOptions<AcercaDbContext> options)
        : base(options)
        {
        }

        public virtual DbSet<Vehiculo> Vehiculos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }

    }


}
