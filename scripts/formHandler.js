document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submitBtn");

    if (submitButton) {
        submitButton.addEventListener("click", async (event) => {
            event.preventDefault(); // Prevent the default form submission behavior

            // Get form data
            const name = document.getElementById("name").value;
            const email = document.getElementById("mail").value;
            const mobile = document.getElementById("mobile").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;

            // Validate inputs
            if (!name || !email || !mobile || !subject || !message) {
                alert("Please fill all fields before submitting!");
                return;
            }

            // Send data to the backend
            try {
                const response = await fetch("http://localhost:3000/save-to-excel", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, mobile, subject, message }),
                });

                if (response.ok) {
                    alert("Form submitted successfully!");
                } else {
                    alert("Failed to submit the form. Please try again.");
                }
            } catch (error) {
                console.error("Error submitting the form:", error);
                alert("An error occurred. Please check your internet connection or contact support.");
            }
        });
    }
});
