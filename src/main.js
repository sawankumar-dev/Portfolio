// ========================================
// GSAP SETUP
// ========================================

gsap.registerPlugin(ScrollTrigger);


// ========================================
// HERO ANIMATION
// ========================================

const heroTimeline = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});


heroTimeline
    .from(".navbar", {
        y: -40,
        opacity: 0,
        duration: 0.8
    })

    .from(".hero-intro", {
        y: 30,
        opacity: 0,
        duration: 0.6
    })

    .from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1
    }, "-=0.3")

    .from(".hero-role", {
        y: 50,
        opacity: 0,
        duration: 0.7
    }, "-=0.5")

    .from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 0.6
    }, "-=0.4")

    .from(".hero-actions .btn", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15
    }, "-=0.3");


// ========================================
// NAVIGATION HOVER
// ========================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    link.addEventListener("mouseenter", () => {

        gsap.to(link, {
            y: -3,
            duration: 0.2,
            ease: "power2.out"
        });

    });


    link.addEventListener("mouseleave", () => {

        gsap.to(link, {
            y: 0,
            duration: 0.2,
            ease: "power2.out"
        });

    });

});


// ========================================
// BUTTON HOVER
// ========================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        gsap.to(button, {
            scale: 1.05,
            duration: 0.25,
            ease: "power2.out"
        });

    });


    button.addEventListener("mouseleave", () => {

        gsap.to(button, {
            scale: 1,
            duration: 0.25,
            ease: "power2.out"
        });

    });

});


// ========================================
// SECTION REVEAL
// ========================================

gsap.utils.toArray(".section").forEach((section) => {

    gsap.from(section.querySelector("h2"), {

        y: 80,
        opacity: 0,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }

    });

});