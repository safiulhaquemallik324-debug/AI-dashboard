// =======================
// INITIALIZATION
// =======================

document.addEventListener("DOMContentLoaded", () => {
    initializeApp();
});

function initializeApp() {
    initializeIcons();
    initializeMobileMenu();
}

// =======================
// LUCIDE ICONS
// =======================

function initializeIcons() {
    lucide.createIcons();
}


// =======================
// ANALYTICS CHART
// =======================

const chartCanvas = document.getElementById("analyticsChart");

if (chartCanvas) {

    new Chart(chartCanvas, {

        type: "bar",

        data: {

            labels: ["S", "M", "T", "W", "T", "F", "S"],

            datasets: [

                {
                    data: [78, 80, 74, 100, 76, 74, 90],

                    backgroundColor: [
                        "#cfe8ff",
                        "#6db8ff",
                        "#8fcaff",
                        "#3b9eff",
                        "#cfe8ff",
                        "#cfe8ff",
                        "#cfe8ff"
                    ],

                    borderRadius: 14,

                    borderSkipped: false,

                    barPercentage: 0.65,

                    categoryPercentage: 0.7
                }

            ]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                },

                tooltip: {
                    enabled: true
                }
            },

            scales: {

                x: {

                    grid: {
                        display: false
                    },

                    border: {
                        display: false
                    },

                    ticks: {
                        color: "#7b91b4"
                    }
                },

                y: {

                    beginAtZero: true,

                    max: 100,

                    ticks: {

                        stepSize: 25,

                        callback: (value) => value + "%",

                        color: "#7b91b4"
                    },

                    border: {
                        display: false
                    },

                    grid: {
                        color: "#edf5ff",
                        borderDash: [4, 4]
                    }
                }
            }
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {

    initializeIcons();
    initializeTheme();

});

function initializeIcons() {
    lucide.createIcons();
}

function initializeTheme() {

    const themeBtn =
        document.getElementById("themeToggle");

    const savedTheme =
        localStorage.getItem("theme");

    if(savedTheme === "dark"){
        document.body.classList.add("dark");
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if(
            document.body.classList.contains("dark")
        ){
            localStorage.setItem(
                "theme",
                "dark"
            );
        } else {
            localStorage.setItem(
                "theme",
                "light"
            );
        }

    });

}


function initializeMobileMenu() {

    const menuBtn =
        document.getElementById("mobileMenuBtn");

    const closeBtn =
        document.getElementById("sidebarCloseBtn");

    const sidebar =
        document.querySelector(".sidebar");

    const overlay =
        document.getElementById("sidebarOverlay");

    if (!menuBtn || !sidebar || !overlay) return;

    function closeSidebar() {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    }

    menuBtn.addEventListener("click", () => {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    });

    overlay.addEventListener("click", closeSidebar);

    if(closeBtn){
        closeBtn.addEventListener("click", closeSidebar);
    }
}