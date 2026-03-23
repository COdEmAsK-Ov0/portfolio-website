
//resume-dropdown
function toggleResumeMenu(event) {
    event.preventDefault();
    document.getElementById("resumeMenu").classList.toggle("show");
}

// Close when clicking outside
window.onclick = function(e) {
    if (!e.target.closest('.resume-dropdown')) {
        document.getElementById("resumeMenu").classList.remove("show");
    }
}
