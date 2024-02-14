function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },

        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

locomotive();

function loader(){
    var tl = gsap.timeline()
tl
.to("#l3",{
    delay : 2,
    height : 0,
    duration : 1,
    ease : Expo.easeInOut
})
.to("#l2",{
    height : 0,
    ease : Expo.easeInOut
},'-=.4')
.to("#l1",{
    height : 0,
    ease : Expo.easeInOut
},'-=.3')
.to("#loader img",{
    opacity : 0,
    duration : .2
},'-=.3')
.to("#loader",{
    height : 0
})
.from("#home .parent .child",{
    y : 180,
    duration : .8,
    ease : Power3.easeInOut,
})
.from("#home .line1",{
    width : '0%',
    duration : .7,
    ease : Power3.easeInOut,
},'-=.6')
gsap.to("#page3 #first .box .overlay",{
    top : "-100%",
    ease : Expo.easeInOut,
    duration : 1.2,
    scrollTrigger : {
        trigger : "#page3 #first",
        start : "top 70%",
        scroller : "#main"
    }
})
gsap.to("#page3 #second .overlay",{
    top : "-100%",
    ease : Expo.easeInOut,
    duration : 1.2,
    scrollTrigger : {
        trigger : "#page3 #second",
        start : "top 70%",
        scroller : "#main"

    }
})
gsap.to("#page3 #third .box .overlay",{
    top : "-100%",
    ease : Expo.easeInOut,
    duration : 1.2,
    scrollTrigger : {
        trigger : "#page3 #third",
        start : "top 70%",
        scroller : "#main"

    }
})
gsap.to("#page4 #img1 .overlay",{
    top : "-100%",
    ease : Expo.easeInOut,
    duration : 1.2,
    scrollTrigger : {
        trigger : "#page4 #img1",
        start : "top 85%",
        scroller : "#main"

    }
})
gsap.to("#page4 #img2 .overlay",{
    top : "-100%",
    ease : Expo.easeInOut,
    duration : 1.2,
    scrollTrigger : {
        trigger : "#page4 #img2",
        start : "top 95%",
        scroller : "#main"

    }
})
gsap.to("#page4 #black-box .overlay",{
    top : "-100%",
    ease : Expo.easeInOut,
    duration : 1.2,
    scrollTrigger : {
        trigger : "#page4 #black-box",
        start : "top 95%",
        scroller : "#main"

    }
})

var txt = gsap.timeline();
txt
.to("#uniq",{
    color : "#28F762",
    scrollTrigger : {
        trigger : "#page2 .p2-mid",
        start : "top 60%",
        scrub : true,
        scroller : "#main"

    }
})
.to("#uniq",{
    color : "#DF18BF",
    scrollTrigger : {
        trigger : "#page2 .p2-mid",
        start : "top 40%",
        scrub : true,
        scroller : "#main"

    }
})

gsap.to("#page4 #largeline",{
    rotate : '270',
    scrollTrigger : {
        trigger : '#page4>img',
        start : 'top 50%',
        // markers : true,
        scroller : "#main",
        scrub : .1,
    }
})

gsap.to("#main",{
    backgroundColor : "white",
    ease : Expo.easeInOut,
    duration : 2,
    scrollTrigger: {
        scrub: 1,
        trigger: "#page5",
        start: "top 250%",
        scroller: "#main"
    }
    
})

gsap.from("#p8-text .parent .child",{
    y : 180,
    duration : .8,
    stagger : .3,
    ease : Power3.easeInOut,
    scrollTrigger : {
        trigger : "#p8-text",
        start : "top 70%",
        scroller : "#main",
    }
})

gsap.to("#page7 #yellow",{
    display : "none",
    duration : .1,
    scrollTrigger:{
        trigger :"#page6",
        scroller : "#main",
        start : "top 135%",
        scrub : 1,
    }
})
gsap.to("#page7 #green",{
    display : "flex",
    duration : .1,
    scrollTrigger:{
        trigger :"#page6",
        scroller : "#main",
        start : "top -100%",
        scrub : 1,
    }
})
gsap.to("#page7 #green",{
    display : "none",
    duration : 1,
    scrollTrigger:{
        trigger :"#page6",
        scroller : "#main",
        start : "top -160%",
        scrub : 1,
    }
})
gsap.to("#page7 #pink",{
    display : "flex",
    duration : .1,
    scrollTrigger:{
        trigger :"#page6",
        scroller : "#main",
        start : "top -150%",
        scrub : 1,
    }
})

gsap.from("#questions-sec .ques h1",{
    x : -350,
    ease : Expo.easeInOut,
    duration : 1.5,
    stagger : .1,
    scrollTrigger : {
        trigger : "#questions-sec",
        scroller : "#main",
        start : "top 50%",
    }
})
gsap.from("#questions-sec .ques h2",{
    x : 100,
    ease : Expo.easeInOut,
    duration : 1.5,
    stagger : .1,
    scrollTrigger : {
        trigger : "#questions-sec",
        scroller : "#main",
        start : "top 50%",
    }
})
gsap.to("#page9 > .line",{
    width : "90%",
    duration : 1.5,
    ease : Expo.easeInOut,
    scrollTrigger : {
        trigger : "#page9",
        scroller : "#main",
        start : "top 90%",
    }
})

gsap.to("#page7 #yellow",{
    display : "none",
    duration : .1,
    scrollTrigger:{
        trigger :"#page6",
        scroller : "#main",
        start : "top 135%",
        scrub : 1,
    }
})
gsap.to("#page7 #green",{
    display : "flex",
    duration : .1,
    scrollTrigger:{
        trigger :"#page6",
        scroller : "#main",
        start : "top -100%",
        scrub : 1,
    }
})
gsap.to("#page7 #green",{
    display : "none",
    duration : 1,
    scrollTrigger:{
        trigger :"#page6",
        scroller : "#main",
        start : "top -160%",
        scrub : 1,
    }
})
gsap.to("#page7 #pink",{
    display : "flex",
    duration : .1,
    scrollTrigger:{
        trigger :"#page6",
        scroller : "#main",
        start : "top -150%",
        scrub : 1,
    }
})


}

function textAnimation() {
    document.querySelectorAll(".textanim").forEach(function (elem) {
        var parent = document.createElement("span");
        var child = document.createElement("span");

        parent.classList.add("parent");
        child.classList.add("child");

        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);

        elem.innerHTML = "";
        elem.appendChild(parent);
    })

    var video = document.querySelectorAll('.my-video').forEach(function (elem) {
        elem.addEventListener('mouseover', () => {
            if (elem.paused) {
              elem.play();
            }
        })
        elem.addEventListener('mouseout', () => {
            if (!elem.paused) {
              elem.pause();
            }
            })
    });

var ques = document.querySelector("#questions-sec #ques1");
var el = document.querySelector("#questions-sec #el1");
var flag10 = 0;
 
ques.addEventListener("click",function () {
    if (flag10===0) {
        el.style.display = "flex";
        ques.style.padding = "0 25px 0 25px"
        ques.style.color = "white"
        ques.style.backgroundColor = "#1A1A1A"
        flag10 = 1;
    } else {
        el.style.display = "none";
        ques.style.padding = "0 0px 0 0px"
        ques.style.color = "black"
        ques.style.backgroundColor = "transparent"
        flag10 = 0;
    }
})

var ques2 = document.querySelector("#questions-sec #ques2");
var el2 = document.querySelector("#questions-sec #el2");
var flag20 = 0;
 
ques2.addEventListener("click",function () {
    if (flag20===0) {
        el2.style.display = "flex";
        ques2.style.padding = "0 25px 0 25px"
        ques2.style.color = "white"
        ques2.style.backgroundColor = "#1A1A1A"
        flag20 = 1;
    } else {
        el2.style.display = "none";
        ques2.style.padding = "0 0px 0 0px"
        ques2.style.color = "black"
        ques2.style.backgroundColor = "transparent"
        flag20 = 0;
    }
})

var ques3 = document.querySelector("#questions-sec #ques3");
var el3 = document.querySelector("#questions-sec #el3");
var flag30 = 0;
 
ques3.addEventListener("click",function () {
    if (flag30===0) {
        el3.style.display = "flex";
        ques3.style.padding = "0 25px 0 25px"
        ques3.style.color = "white"
        ques3.style.backgroundColor = "#1A1A1A"
        flag30 = 1;
    } else {
        el3.style.display = "none";
        ques3.style.padding = "0 0px 0 0px"
        ques3.style.color = "black"
        ques3.style.backgroundColor = "transparent"
        flag30 = 0;
    }
})

var ques4 = document.querySelector("#questions-sec #ques4");
var el4 = document.querySelector("#questions-sec #el4");
var flag40 = 0;
 
ques4.addEventListener("click",function () {
    if (flag40===0) {
        el4.style.display = "flex";
        ques4.style.padding = "0 25px 0 25px"
        ques4.style.color = "white"
        ques4.style.backgroundColor = "#1A1A1A"
        flag40 = 1;
    } else {
        el4.style.display = "none";
        ques4.style.padding = "0 0px 0 0px"
        ques4.style.color = "black"
        ques4.style.backgroundColor = "transparent"
        flag40 = 0;
    }
})
}

function textup() {
    
    var box1 = document.querySelector("#box1")
    var box2 = document.querySelector("#box2")
    var box3 = document.querySelector("#box3")
    var box4 = document.querySelector("#box4")
    var box5 = document.querySelector("#page3 #second")
    
    document.querySelectorAll('#box1>.textup .a').forEach(function (tx) {
        box1.addEventListener('mouseenter',function () {
            tx.style.top = '0%'
        })
        box1.addEventListener('mouseleave',function () {
            tx.style.top = '100%'
        })
    })
    document.querySelectorAll('#box2>.textup .a').forEach(function (tx) {
        box2.addEventListener('mouseenter',function () {
            tx.style.top = '0%'
        })
        box2.addEventListener('mouseleave',function () {
            tx.style.top = '100%'
        })
    })
    document.querySelectorAll('#second>.textup .a').forEach(function (tx) {
        box5.addEventListener('mouseenter',function () {
            tx.style.top = '0%'
        })
        box5.addEventListener('mouseleave',function () {
            tx.style.top = '100%'
        })
    })
    document.querySelectorAll('#box3 .textup .a').forEach(function (tx) {
        box3.addEventListener('mouseenter',function () {
            tx.style.top = '0%'
            })
        box3.addEventListener('mouseleave',function () {
            tx.style.top = '100%'
        })
    })
    document.querySelectorAll('#box4 .textup .a').forEach(function (tx) {
        box4.addEventListener('mouseenter',function () {
            tx.style.top = '0%'
            })
        box4.addEventListener('mouseleave',function () {
            tx.style.top = '100%'
        })
    })
    
}

function blinking() {
    var bl = gsap.timeline({
        repeat : -1,
    })

    bl.to("#black-box>#green",{
        display : "none",
        duration : .2
    })
    .to("#black-box>#pink",{
        display : "initial",
        duration : .2
    })
    .to("#black-box>#pink",{
        display : "none",
        duration : .2
    })
    .to("#black-box>#yellow",{
        display : "initial",
        duration : .2
    })
    .to("#black-box>#yellow",{
        display : "none",
        duration : .2
    })
    .to("#black-box>#green",{
        display : "initial",
        duration : .2
    },'-=.5')  
}

function navup() {
    gsap.to("#popup-nav .tags a",{
        top : "0%",
        duration : .4,
        ease : Expo.easeInOut
    })
}

function navdown() {
    gsap.to("#popup-nav .tags a",{
        top : "100%",
        duration : .1,
        ease : Expo.easeInOut
    })
}


var popupnav = document.querySelector("#popup-nav")

var menuicon = document.querySelector(".icon")
var line1 = document.querySelector(".icon #line1")
var line2 = document.querySelector(".icon #line2")
var flag50 = 0;

menuicon.addEventListener('click',function () {
    if (flag50===0) {
        popupnav.style.top = "0%";
        line1.style.transform ="translate(-1px, 1.2px) rotate(45deg)"
        line2.style.transform ="translate(-1px, -4px) rotate(-45deg)"
        navup();
        flag50 = 1
    } else {
        // delay = 1
        line1.style.transform ="translate(0,0) rotate(0deg)"
        line2.style.transform ="translate(0,0) rotate(0deg)"
        navdown();
    
        popupnav.style.top = "-100%";   
        flag50 = 0  
    }
})





var line = document.querySelector("#p8-text .line1")
var p8 = document.querySelector("#p8-text")
p8.addEventListener("mousemove",function () {
    var ll = gsap.timeline({
        repeat : -1,
    })
    ll.to("#p8-text .line1",{
        backgroundColor : "#28F762"
    })
    .to("#p8-text .line1",{
        backgroundColor : "#DF18BF"
    })
    .to("#p8-text .line1",{
        backgroundColor : "#DFFF1C"
    })
})

p8.addEventListener('mouseleave',function () {
    line.style.backgroundColor = "white";
})


textAnimation();
loader();
textup();
blinking();

