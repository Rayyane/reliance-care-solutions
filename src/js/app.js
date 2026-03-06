document.addEventListener("DOMContentLoaded", () => {
    // 1. GSAP ScrollTrigger for Navbar Background
    gsap.registerPlugin(ScrollTrigger);

    const header = document.querySelector("header");

    // Add scroll effect: become white with shadow after 50px scroll
    ScrollTrigger.create({
        start: "100px top",
        end: "max",
        toggleClass: {
            targets: header,
            className: "bg-white/95"
        },
        duration: 0.5
    });

    ScrollTrigger.create({
        start: "100px top",
        end: "max",
        toggleClass: {
            targets: header,
            className: "shadow-lg"
        },
        duration: 0.5
    });

    // We remove the bg-transparent class when scrolling down
    ScrollTrigger.create({
        start: "100px top",
        end: "max",
        onEnter: () => header.classList.remove("bg-transparent"),
        onLeaveBack: () => header.classList.add("bg-transparent"),
    });

    // 2. Mobile Menu Logic with GSAP animations
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    let isMenuOpen = false;

    // Create GSAP timeline for mobile menu
    const menuTl = gsap.timeline({ paused: true, defaults: { ease: "power3.inOut" } });

    menuTl.to(mobileMenu, {
        x: 0,
        duration: 0.5,
    })
        .fromTo(mobileNavLinks, {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.4
        }, "-=0.2");

    // Toggle menu
    mobileBtn.addEventListener("click", () => {
        isMenuOpen = !isMenuOpen;
        mobileBtn.classList.toggle("active"); // Animates the hamburger into an X (via Tailwind in HTML)

        if (isMenuOpen) {
            menuTl.play();
            // Prevent body scrolling
            document.body.style.overflow = "hidden";
        } else {
            menuTl.reverse();
            // Re-enable body scrolling
            document.body.style.overflow = "auto";
        }
    });

    // Close menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (isMenuOpen) {
                isMenuOpen = false;
                mobileBtn.classList.remove("active");
                menuTl.reverse();
                document.body.style.overflow = "auto";
            }
        });
    });

    gsap.fromTo(".hero-title",
        {
            opacity: 0,
            x: -100
        }, // From state
        { // To state
            opacity: 1,
            x: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: ".hero-title", // The element that triggers the animation
                start: "top 80%", // Start when the top of the element hits the 50% of the viewport
                toggleActions: "restart none restart none", // Play on enter, reverse on leave back
                markers: false // Optional: adds visual markers for debugging
            }
        });

    gsap.fromTo(".hero-subtitle",
        {
            opacity: 0,
            y: 100
        }, // From state
        { // To state
            opacity: 1,
            y: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: ".hero-subtitle", // The element that triggers the animation
                start: "top 100%", // Start when the top of the element hits the 80% of the viewport
                toggleActions: "restart none restart none", // Play on enter, reverse on leave back
            }
        });

    gsap.utils.toArray("#community .grid > div").forEach((card, i) => {
        gsap.fromTo(card,
            {
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play reverse play reverse"
                }
            });
    });

    gsap.fromTo("#support ul > li",
        {
            opacity: 0,
            x: -50
        },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#support ul",
                start: "top 90%",
                toggleActions: "play reverse play reverse"
            }
        });

    gsap.fromTo("#support .font-heading", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: "#support .font-heading",
            start: "top 90%",
            toggleActions: "play reverse play reverse"
        }
    });

    // Growth & Development (Youth) Alternating Row Animations
    gsap.utils.toArray("#youth .group").forEach((row) => {
        const leftSide = row.querySelector(".lg\\:order-1");
        const rightSide = row.querySelector(".lg\\:order-2");

        if (leftSide) {
            gsap.fromTo(leftSide,
                { opacity: 0, x: -50 },
                {
                    opacity: 1, x: 0, duration: 1.2,
                    scrollTrigger: {
                        trigger: row,
                        start: "top 85%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        }

        if (rightSide) {
            gsap.fromTo(rightSide,
                { opacity: 0, x: 50 },
                {
                    opacity: 1, x: 0, duration: 1.2,
                    scrollTrigger: {
                        trigger: row,
                        start: "top 85%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        }
    });

});
