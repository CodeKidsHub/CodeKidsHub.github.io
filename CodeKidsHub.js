//Menu:
document.addEventListener('DOMContentLoaded', function () {
    let menuIcon = document.getElementById('menu-icon');
    let headerNav = document.querySelector('header.HTMLHeader nav');

    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('bx-x');
        headerNav.classList.toggle('open');
    });

    document.addEventListener('click', function (event) {
        if (!headerNav.contains(event.target) && !menuIcon.contains(event.target) && headerNav.classList.contains('open')) {
            menuIcon.classList.remove('bx-x');
            headerNav.classList.remove('open');
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 1090) {
            headerNav.classList.remove('open');
            menuIcon.classList.add('hidden');
        } else {
            menuIcon.classList.remove('hidden');
        }
    });

    if (window.innerWidth > 1090) {
        headerNav.classList.remove('open');
        menuIcon.classList.add('hidden');
    }
});


//DarkMode, LightMode:
function toggleMode(isDarkMode) {
    const element = document.body;

    if (isDarkMode) {
        element.className = "dark-mode";
    } else {
        element.className = "light-mode";
    }
}

function switchMode(isDarkMode) {
    localStorage.setItem("darkMode", isDarkMode);
    toggleMode(isDarkMode);
}

function onload() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    toggleMode(isDarkMode);
}

document.addEventListener("DOMContentLoaded", onload);



