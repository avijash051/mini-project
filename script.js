const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
function videoconAnimation()
{
    var videocon = document.querySelector
("#video-container")
var playbth = document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbth,{
        scale:1,
        opacity:1    
      })
})  
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbth,{
        scale:0,
        opacity:0 
    }) 
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbth,{
        left:dets.x-85,
        top:dets.y-60
    }) 
})
}
videoconAnimation()

function loadinganimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger:0.3
    })
    gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity: 0,
        delay: 0.8,
        duration: 0.5,
    })
}
loadinganimation()