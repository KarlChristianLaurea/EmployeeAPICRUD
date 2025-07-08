using Microsoft.EntityFrameworkCore; // to call entity framework
using EmployeeAPI.Models; // to call the employee model
namespace EmployeeAPI.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        // include employee model
        public DbSet<Employee> Employees { get; set; }

        // Stored Procedure for GET ALL
        public async Task<List<Employee>> GetAllEmployeesSP()
        {
            return await Employees.FromSqlRaw("EXEC GetAllEmployees").ToListAsync();
        }
    }
}
