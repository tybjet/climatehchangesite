
function isBottomOfPage() {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
}


function displayWelcomeMessage() {
    alert("Welcome to our website! Thanks for scrolling to the end.");
}


window.addEventListener("scroll", function() {
    if (isBottomOfPage()) {
        displayWelcomeMessage();
    }
});
