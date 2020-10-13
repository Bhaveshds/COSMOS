gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    scrollTrigger: {
        trigger: ".box",
        // start: "top center",
        toggleActions: "restart reverse restart pause" ,
        // markers: true
    },
    opacity: 1,
    duration: 3,
 
});