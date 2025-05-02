window.addEventListener("load", () => {
    const appsDrawer = document.querySelector(".appsDrawer");
    const openDrawerIcon = document.querySelector(".drawerIcon");
    const closeDrawerIcon = document.querySelector(".closeDrawer");

    openDrawerIcon.addEventListener("click", () => {
        openDrawer();
    });

    closeDrawerIcon.addEventListener("click", () => {
        closeDrawer();
    });

    function openDrawer() {
        let id = null;
        let translation = 100;
        clearInterval(id);
        appsDrawer.style.display = "block";
        document.querySelector(".background").style.pointerEvents = "none";
        const frame = () => {
            if (translation == 0) {
                clearInterval(id);
            } else {
                translation--;
                appsDrawer.style.transform = `translateY(${translation}%)`;
            }
        };
        id = setInterval(frame, 0.3);
    }

    function closeDrawer() {
        let id = null;
        let translation = 0;
        clearInterval(id);
        const frame = () => {
            if (translation == 100) {
                clearInterval(id);
                appsDrawer.style.display = "none";
                document.querySelector(".background").style.pointerEvents =
                    "auto";
            } else {
                translation++;
                appsDrawer.style.transform = `translateY(${translation}%)`;
            }
        };
        id = setInterval(frame, 0.3);
    }
});

function teste() {
    alert("Teste");
}
