/* ===========================
   PRELOADER
=========================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1500);

});


/* ===========================
   STICKY NAVBAR
=========================== */

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(0,0,0,.9)";
        nav.style.padding = "15px 8%";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        nav.style.background = "rgba(0,0,0,.45)";
        nav.style.padding = "18px 8%";
        nav.style.boxShadow = "none";

    }

});


/* ===========================
   COUNTER ANIMATION
=========================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;

        const increment = target / 150;

        if (c < target) {

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 15);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


/* ===========================
   SCROLL TO TOP
=========================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "20px";
topButton.style.bottom = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#ffc107";
topButton.style.color = "#000";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};


/* ===========================
   GALLERY HOVER EFFECT
=========================== */

const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img => {

    img.addEventListener("mouseover", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseout", () => {

        img.style.transform = "scale(1)";

    });

});


/* ===========================
   BUTTON RIPPLE EFFECT
=========================== */

const buttons = document.querySelectorAll(".btn1,.btn2");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.boxShadow = "0 0 30px #ffc107";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.boxShadow = "none";

    });

});


/* ===========================
   HERO PARALLAX
=========================== */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    let value = window.scrollY;

    hero.style.backgroundPositionY = value * 0.4 + "px";

});


/* ===========================
   FLOATING ICON ANIMATION
=========================== */

const floating = document.querySelectorAll(".floating a");

floating.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform = "rotate(15deg) scale(1.2)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "rotate(0deg) scale(1)";

    });

});


/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const href = this.getAttribute("href");

        if(href.startsWith("#")){

            e.preventDefault();

            document.querySelector(href).scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ===========================
   HERO TEXT FADE
=========================== */

const heroContent = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

    heroContent.style.opacity = 1 - window.scrollY / 600;

});


/* ===========================
   CONSOLE MESSAGE
=========================== */

console.log("%cSarojini Hydraulics Website",
"color:#ffc107;font-size:25px;font-weight:bold");

console.log("%cDesigned with ❤️ by RAAVI",
"color:white;font-size:16px");