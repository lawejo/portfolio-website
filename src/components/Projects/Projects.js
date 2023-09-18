import { gsap, } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#box",
        start: "top center",
        end: '140px center',
        scrub: true,
        markers: true
    }
})

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#box',
        start: "top center",
        end: '210px center',
        scrub: true,
        markers: true
    }
})

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '#box',
        start: "top center",
        end: '230px center',
        scrub: true,
        markers: true
    }
})

tl.from('#project_1', {
    y: 800

})
tl2.from('#project_2', {
    y: 800

})
tl3.from('#project_3', {
    y: 800
})

const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

