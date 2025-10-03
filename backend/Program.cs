// backend/Program.cs
using backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Adicionar a conexão com o banco de dados
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(connectionString));

// Adicionar serviços ao container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Adicionar uma política de CORS mais flexível para desenvolvimento
builder.Services.AddCors();

var app = builder.Build();

// Configurar o pipeline de requisições HTTP
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    // Em desenvolvimento, permitir qualquer origem, método e cabeçalho.
    // Isso simplifica a comunicação com o frontend.
    app.UseCors(policy => policy
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());
}

// app.UseHttpsRedirection(); // Desabilitado para simplificar o desenvolvimento local

app.UseAuthorization();

app.MapControllers();

app.Run();