/* ==========================================
   FACTS FUSION V4
   script.js
========================================== */

// ==============================
// Smooth Scrolling
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});

// ==============================
// Scroll Reveal Animation
// ==============================

const revealElements = document.querySelectorAll(
    ".hero, .explore, .youtube, .about, .journey, .planet-card, .journey-item"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(el=>{

    el.classList.add("reveal");

    observer.observe(el);

});

// ==============================
// Active Navigation Link
// ==============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ==============================
// Navbar Shadow
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 0 40px rgba(0,212,255,.18)";

    }

    else{

        navbar.style.boxShadow =
        "0 0 25px rgba(0,212,255,.08)";

    }

});

// ==============================
// Floating Cards Effect
// ==============================

document.querySelectorAll(".planet-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.transform =
        `perspective(1000px)
         rotateY(${(x-rect.width/2)/25}deg)
         rotateX(${-(y-rect.height/2)/25}deg)
         translateY(-10px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

// ==============================
// Console
// ==============================

console.log("🚀 Facts Fusion V4 Loaded Successfully!");
/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if(navMenu.classList.contains("active")){

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    }else{

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});
