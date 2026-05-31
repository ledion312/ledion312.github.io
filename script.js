function showMessage() {
    alert("Thank you for visiting Discover Albania!");
}

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Your message has been sent successfully!");
});
