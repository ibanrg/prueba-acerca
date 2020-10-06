using Microsoft.Extensions.DependencyInjection;
using PruebaAcerca.Data;
using PruebaAcerca.Services.Interfaces;
using PruebaAcerca.Services.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace PruebaAcerca.Services
{
    public static class RegisterServices
    {
        public static IServiceCollection AddCustomServices(this IServiceCollection services)
        {
            services.AddScoped<IVehiculoService, VehiculoService>();

            services.AddCustomDataServices();

            return services;
        }
    }
}
