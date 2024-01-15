gsap.from(".cont1 img, .icon1",{
    x:-500,
    duration:1.5,
    scrollTrigger:".cont1 img, .icon1",

})
gsap.from(".cont2 ",{
    opacity:0,
    y:100,
    duration:1.5,
})
gsap.from(".box1, .box2, .box3, .box4, .service",{
    opacity:0,
    duration:1.5,
    scrollTrigger:".box1",
})
gsap.from(".pillar ",{
    opacity:0,
    duration:2.5,
    scrollTrigger: ".pillar",
})

gsap.from(".main-box2 ",{
    opacity:0,
    duration:2.5,
    scrollTrigger: ".pillar",
})