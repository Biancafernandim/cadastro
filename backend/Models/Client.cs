// backend/Models/Client.cs
using System.ComponentModel.DataAnnotations;

namespace backend.Models;

public class Client
{
    public Guid Id { get; set; } // Chave primária

    [Required]
    [MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [MaxLength(18)]
    public string Cnpj { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; }
}