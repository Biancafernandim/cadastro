// backend/Data/AppDbContext.cs
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Client> Clients { get; set; } // Mapeia nossa classe Client para uma tabela "Clients"

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configurações adicionais do modelo, se necessário
    }
}