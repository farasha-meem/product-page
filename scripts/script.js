function showSection(section) {
    let el = document.getElementById(section);
    let sections = document.getElementById("sections").children;
    for (let i=0; i < sections.length; i++) {
        if (sections[i].id != section) {
            sections[i].style.display = "none";
        }
        else {
            sections[i].style.display = "flex";
        }
    }
}
