
function showNav(id) {
    console.log(navItem2);
    console.log(hidden1);
    container = document.getElementById("hiddenNav1");
    console.log(container);
    container.style.display = "block";
}


function  hideNav(id) {
    container = document.getElementById("hiddenNav-" + id);
    container.style.display = "none";
}

function MovetoIndex() {
    window.location = "index.html";
}

