window.addEventListener("load", () => {
    const appsDrawer = document.querySelector(".appsDrawer");
    const openDrawerIcon = document.querySelector(".appsIcon");
    const closeDrawerIcon = document.querySelector(".closeDrawer");

    openDrawerIcon.addEventListener("click", () => {
        appsDrawer.classList.add("visible");
    });

    closeDrawerIcon.addEventListener("click", () => {
        appsDrawer.classList.remove("visible");
    });
});
