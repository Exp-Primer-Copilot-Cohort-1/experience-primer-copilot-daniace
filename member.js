function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    if (skillsMember.style.display === "none") {
        skillsMember.style.display = "block";
        skills.style.display = "none";
    } else {
        skillsMember.style.display = "none";
        skills.style.display = "block";
    }
}