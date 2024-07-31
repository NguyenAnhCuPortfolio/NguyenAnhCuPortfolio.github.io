gsap.registerPlugin(ScrollTrigger);

var text = Array.from("CONTACTME");
var appendTarget = document.getElementById("titleHolder");

text.forEach(function (c, index) {
    var element = document.createElement("p");
    element.textContent = c;
    element.setAttribute("class", `text ${index % 2 === 0 ? "zero" : "one"}`);
    appendTarget.appendChild(element);
});

let master = gsap.timeline({
    scrollTrigger: {
        trigger: ".contactMe",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: false,
    },
});
gsap.set(".text", {
    opacity: 0,
});
master
    .to(".text", { opacity: 1, duration: 0.5, stagger: 0.1 })
    .to(".HOME", { opacity: 0, duration: 0.5 }, "<")
    .from(
        ".zero",
        {
            y: "-100%",
            x: "-25%",
            scaleX: -1,
            stagger: 0.25,
            duration: 1,
            ease: "power1.inOut",
        },
        "-=0.5"
    )
    .from(
        ".one",
        {
            y: "100%",
            scaleY: -1,
            stagger: 0.25,
            duration: 1,
            ease: "power1.inOut",
        },
        "<"
    )
    .to(".text", { opacity: 0, duration: 0.5, stagger: 0.1 })
    .from(
        "#infoGrid",
        { opacity: 0, x: "50%", duration: 1, ease: "power3" },
        "-=0.5"
    )
    .from("#card", { opacity: 0, y: "100%", duration: 1, ease: "power3" }, "<");
