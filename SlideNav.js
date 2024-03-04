function toggleNav() {
    var sideNav = document.getElementById("mySidenav");
    var content = document.querySelector(".content");
    if (sideNav.style.width === "200px") {
        sideNav.style.width = "0";
        content.style.marginLeft = "0";
    } else {
        sideNav.style.width = "200px";
        content.style.marginLeft = "200px";
    }
}
