// backend/Controllers/ClientsController.cs
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class ClientsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ClientsController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/clients
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Client>>> GetClients()
    {
        return await _context.Clients.ToListAsync();
    }

    // POST: api/clients
    [HttpPost]
    public async Task<ActionResult<Client>> PostClient(Client client)
    {
        client.Id = Guid.NewGuid();
        client.CreatedAt = DateTime.UtcNow;

        _context.Clients.Add(client);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetClients), new { id = client.Id }, client);
    }
}