document.getElementById("createForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;

    const employee = {
        employeeName: name,
        employeePosition: position
    };

    try {
        const response = await fetch("https://localhost:7225/api/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        });

        if (response.ok) {
            alert("Employee created successfully!");
            window.location.href = "index.html";
        } else {
            alert("Failed to create employee.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error creating employee.");
    }
});
