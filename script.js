window.addEventListener('load', function () {
    screen1();
});
function screen1() {
    let tl = gsap.timeline({ defaults: { duration: 3, ease: "power4.out" } });
    tl.to(".spinner", { opacity: 0 })
    tl.to("#preloader", {
        y: () => (window.innerWidth)
    })
}
