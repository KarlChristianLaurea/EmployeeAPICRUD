document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) {
        alert("No employee ID provided.");
        window.location.href = "index.html";
        return;
    }

    const infoDiv = document.getElementById("employeeInfo");

    try {
        const response = await fetch(`https://localhost:7225/api/employees/${id}`);
        if (!response.ok) throw new Error("Employee not found");

        const employee = await response.json();
        infoDiv.innerText = `ID: ${employee.employeeId} | Name: ${employee.employeeName} | Position: ${employee.employeePosition}`;
    } catch (err) {
        console.error(err);
        alert("Error loading employee info.");
        window.location.href = "index.html";
    }

    document.getElementById("confirmDelete").addEventListener("click", async () => {
        try {
            const response = await fetch(`https://localhost:7225/api/employees/${id}`, {
                method: "DELETE"
            });

            if (response.ok) {
                alert("Employee deleted successfully!");
                window.location.href = "index.html";
            } else {
                alert("Failed to delete employee.");
            }
        } catch (error) {
            console.error(error);
            alert("Error deleting employee.");
        }
    });
});

