document.addEventListener("DOMContentLoaded", async () => {
    await loadEmployees();

    document.getElementById("addFiveBtn").addEventListener("click", async () => {
        const confirmAdd = confirm("Are you sure you want to add 5 predefined employees?");
        if (!confirmAdd) return;

        try {
            const response = await fetch("https://localhost:7225/api/employees/add-five", {
                method: "POST"
            });

            if (response.ok) {
                alert("5 Employees added successfully!");
                await loadEmployees(); // refresh the table
            } else {
                alert("Failed to add employees.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while adding employees.");
        }
    });
});

async function loadEmployees() {
    try {
        const response = await fetch("https://localhost:7225/api/employees/sp");
        const employees = await response.json();

        const table = document.getElementById("employeeTable");
        table.innerHTML = "";

        employees.forEach(emp => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${emp.employeeId}</td>
                <td>${emp.employeeName}</td>
                <td>${emp.employeePosition}</td>
                <td>
                    <a href="edit.html?id=${emp.employeeId}" class="btn btn-sm btn-warning">Edit</a>
                    <a href="delete.html?id=${emp.employeeId}" class="btn btn-sm btn-danger ms-2">Delete</a>
                </td>
            `;
            table.appendChild(row);
        });
    } catch (error) {
        console.error("Error loading employees:", error);
    }
}
