using Microsoft.Extensions.DependencyInjection;
using PruebaAcerca.Data.Interfaces;
using PruebaAcerca.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace PruebaAcerca.Data
{
    public static class RegisterDataServices
    {
        public static IServiceCollection AddCustomDataServices(this IServiceCollection services)
        {
            services.AddScoped<IVehiculoRepository, VehiculoRepository>();

            return services;
        }
    }

}
