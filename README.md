# 🧑‍💼 Simple Employee CRUD App (C# .NET Web API + HTML/JS + Bootstrap)

This project is a simple **Employee Management System** demonstrating full CRUD operations using:

- 💻 **C# .NET Web API** with Entity Framework Core
- 🌐 **HTML, CSS, JavaScript** (UI powered by [Bootstrap](https://getbootstrap.com/))
- 🧪 **Swagger UI** for testing the API endpoints
- 🛢️ **MSSQL Database** with support for **Stored Procedure**
- 🔘 A button to add 5 employees at once via a stored procedure

---

## ✅ Features

- 🔍 View all employees
- ➕ Create a new employee
- 📝 Update employee details
- ❌ Delete an employee
- 🧩 Insert 5 predefined employees with one click (via stored procedure)
- 🖥️ Clean and responsive UI using **Bootstrap 5**
- ⚙️ API fully testable with Swagger

---

## 🧰 Prerequisites

Make sure you have the following installed:

- [.NET SDK 7.0+](https://dotnet.microsoft.com/en-us/download)
- [Visual Studio 2022+](https://visualstudio.microsoft.com/) or [VS Code](https://code.visualstudio.com/)
- [SQL Server Express or Full Edition](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [SQL Server Management Studio (SSMS)](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)

---

## 📁 Project Structure ``` EmployeeAPI/ ├── Controllers/ │ └── EmployeeController.cs ├── Models/ │ └── Employee.cs ├── Data/ │ └── ApplicationDbContext.cs ├── wwwroot/ │ └── ui/ │ ├── index.html │ ├── create.html │ ├── edit.html │ ├── delete.html │ ├── js/ │ └── css/ ├── Program.cs ├── appsettings.json ```

--- Create the Database and run this Query so that you have the stored procedure in place
## Create the Database & Table
(A) Install EF Core CLI if not yet installed:
dotnet tool install --global dotnet-ef
(B) Run Migrations to Create the Table:
dotnet ef migrations add InitialCreate
dotnet ef database update

--- Stored Procedure
CREATE PROCEDURE sp_InsertFiveEmployees
AS
BEGIN
    INSERT INTO Employees (employeeName, employeePosition) VALUES 
    ('John Doe', 'Developer'),
    ('Jane Smith', 'QA Analyst'),
    ('Michael Lee', 'Designer'),
    ('Emily Davis', 'HR Specialist'),
    ('Robert Brown', 'Project Manager');
END;

---
## How to Run the Solution
🔧 1. Clone the Project
git clone -- https://github.com/KarlChristianLaurea/EmployeeAPICRUD.git
cd EmployeeAPICRUD

🛠️ 2. Open the Project
If you're using Visual Studio:

Open the .sln file (if available)

Or open the folder using File > Open > Project/Solution

⚙️ 3. Set Your Connection String
In appsettings.json, update the database connection string:
🔒 For SQL Authentication:
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=EmployeeDB;User Id=yourUser;Password=yourPassword;"
}
🧾 For Windows Authentication:
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=EmployeeDB;Trusted_Connection=True;"
}

▶️ 4. Run the API
Option A: Using Visual Studio
Press F5 or click Start Debugging

Option B: Using Command Line
dotnet restore
dotnet build
dotnet run
The app should start at:
https://localhost:7225

🧪 5. Test the API
Open in browser:
https://localhost:7225/swagger/index.html

🌐 6. Use the HTML UI
https://localhost:7225/ui/index.html
From there, you can:
1. Create new Employee
2. Update current Employee
3. View current Employee
4. Remove current Employee
5. View all list of Employee

-- Add 5 employees (via stored procedure)

Sample API Endpoints

| Method | Endpoint                 | Description                |
| ------ | ------------------------ | -------------------------- |
| GET    | `/api/employee`          | Get all employees          |
| GET    | `/api/employee/{id}`     | Get employee by ID         |
| POST   | `/api/employee`          | Create a new employee      |
| PUT    | `/api/employee/{id}`     | Update employee info       |
| DELETE | `/api/employee/{id}`     | Delete employee            |
| POST   | `/api/employee/add-five` | Add 5 predefined employees |

Created by Karl Christian Laurea



