function formatJSON() {
    const jsonString = '{"name": "Alice", "age": 30, "city": "Wonderland"}'; // Example JSON
    try {
        const jsonObject = JSON.parse(jsonString);
        const formattedJSON = JSON.stringify(jsonObject, null, 4);
        document.getElementById("jsonOutput").textContent = formattedJSON;
    } catch (error) {
        document.getElementById("jsonOutput").textContent = "Invalid JSON!";
    }
}
