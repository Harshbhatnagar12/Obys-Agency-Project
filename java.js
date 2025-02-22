

function loadingAnimation(){
    var t1 = gsap.timeline()
t1.from(".line h1",{
    y:150,
    stagger:0.3,
    duration:0.6,
    delay:0.5
    
})
t1.from("#line1-part1 ",{
    opacity:0,
    onStart:function(){
        var h5timer = document.querySelector("#line1-part1 h5")
var grow =  0
setInterval(function(){
    if(grow<100){
        h5timer.innerHTML = grow++
    }
    else{
        h5timer.innerHTML = grow
    }
},25)
    }

})
t1.to(".line h2",{
    animationName:"anime",
    opacity:1

})
t1.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:3.6
})
t1.from("#page1",{
     y:1600,
     delay:0.2,
     opacity:0,
     duration:0.5,
     ease:Power4

})
t1.from("#nav",{
    opacity:0
})
t1.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
    y:120,
    stagger:0.2
})
}
loadingAnimation()

function moneyMagnetEffect() {
    document.addEventListener("mousemove", function (event) {
        document.querySelectorAll("#nav-part2 h4").forEach((navItem) => {
            let rect = navItem.getBoundingClientRect();
            let itemX = rect.left + rect.width / 2;
            let itemY = rect.top + rect.height / 2;

            let deltaX = event.clientX - itemX;
            let deltaY = event.clientY - itemY;
            let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            let force = Math.min(2 / distance, 0.2); // Attraction strength

            let moveX = deltaX * force;
            let moveY = deltaY * force;

            gsap.to(navItem, {
                x: moveX,
                y: moveY,
                duration: 0.1,
                ease: "power2.out"
            });
        });
    });
}
moneyMagnetEffect();

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
   
        gsap.to("#crsr",{
          left:dets.x,
          top:dets.y
        })
      })
    //   Shery.makeMagnet("#nav-part2 h4");
}

cursorAnimation();

