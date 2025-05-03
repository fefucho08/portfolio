let lastWidth = window.innerWidth;

window.addEventListener("resize", () => {
    const currentWidth = window.innerWidth;

    if (
        (lastWidth > 768 && currentWidth <= 768) ||
        (lastWidth < 768 && currentWidth >= 768)
    ) {
        window.location.reload();
    }

    lastWidth = currentWidth;
});

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
            document.querySelector(".background").style.pointerEvents = "auto";
        } else {
            translation++;
            appsDrawer.style.transform = `translateY(${translation}%)`;
        }
    };
    id = setInterval(frame, 0.3);
}

function toggleWindow(windowId) {
    const windowElem = document.getElementById(windowId);

    if (windowElem.classList.contains("visible")) {
        windowElem.classList.remove("visible");
        windowElem.classList.add("closing");

        setTimeout(() => {
            windowElem.classList.remove("closing");
            windowElem.style.display = "none";
        }, 300);
    } else {
        windowElem.style.display = "block";
        windowElem.classList.add("opening");

        setTimeout(() => {
            windowElem.classList.remove("opening");
            windowElem.classList.add("visible");
        }, 300);
    }
}

document.querySelectorAll(".app").forEach((item) => {
    item.addEventListener("click", () => {
        toggleWindow(item.getAttribute("target-window"));
    });
});

let windows = [];

if (screen.availWidth > 768) {
    windows = Draggable.create(".window", {
        bounds: "main",
        cursor: "default",
        activeCursor: "default",
        allowEventDefault: true,
    });
}

function fullScreen(windowId) {
    Draggable.get(`#${windowId}`).disable();
    windowElem = document.getElementById(windowId);

    windowElem.style.transition = "all 0.3s ease-in";
    windowElem.classList.add("fullScreen");
}

function minimize(windowId) {
    Draggable.get(`#${windowId}`).enable();
    windowElem = document.getElementById(windowId);

    windowElem.classList.remove("fullScreen");
    setTimeout(() => {
        windowElem.style.transition = "none";
    }, 300);
}

windowsContent = document.querySelectorAll(".window .content");

windowsContent.forEach((content) => {
    content.classList.add("animate__animated");
    content.classList.add("animate__zoomIn");
});
