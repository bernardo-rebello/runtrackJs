// Function to hide or show the article
function showhide() {
    let article = document.getElementById("article");
    
    if (article.style.display === "none") {
        article.style.display = "block";
    } 
    else {
        article.style.display = "none";
    }
}

// Add event listener to the button to toggle the article when clicked
document.getElementById("button").addEventListener("click", showhide);