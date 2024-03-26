// Define the citation function to retrieve and display the citation content
function citation() {
    // Retrieve the content of the element with id "citation"
    let citationContent = document.getElementById("citation").textContent.trim();

    // Display the content in the console
    console.log(citationContent);
}

// Add event listener to the button to trigger the citation function when clicked
document.getElementById("button").addEventListener("click", citation);