document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) {
        alert("Invalid employee ID.");
        window.location.href = "index.html";
        return;
    }

    document.getElementById("employeeId").value = id;

    try {
        const response = await fetch(`https://localhost:7225/api/employees/${id}`);
        if (!response.ok) throw new Error("Failed to fetch employee.");

        const employee = await response.json();
        document.getElementById("name").value = employee.employeeName;
        document.getElementById("position").value = employee.employeePosition;
    } catch (error) {
        console.error(error);
        alert("Error loading employee data.");
    }
});

document.getElementById("editForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const id = document.getElementById("employeeId").value;
    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;

    const updatedEmployee = {
        employeeId: parseInt(id),
        employeeName: name,
        employeePosition: position
    };

    try {
        const response = await fetch(`https://localhost:7225/api/employees/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedEmployee)
        });

        if (response.ok) {
            alert("Employee updated successfully!");
            window.location.href = "index.html";
        } else {
            alert("Failed to update employee.");
        }
    } catch (error) {
        console.error(error);
        alert("Error updating employee.");
    }
});
