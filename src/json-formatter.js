// Function to format JSON input
function formatJSON() {
    // Get the JSON string from the input field
    const jsonString = document.getElementById("jsonInput").value;

    try {
        // Parse and format the JSON string
        const jsonObject = JSON.parse(jsonString);
        const formattedJSON = JSON.stringify(jsonObject, null, 4);
        
        // Display formatted JSON
        document.getElementById("jsonOutput").textContent = formattedJSON;
    } catch (error) {
        // Show error message if JSON is invalid
        document.getElementById("jsonOutput").textContent = "Invalid JSON!";
    }
}

// Attach event listener to the button
document.getElementById("formatButton").addEventListener("click", formatJSON);