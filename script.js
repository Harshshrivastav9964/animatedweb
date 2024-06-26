$(".cntr-p" ).scramble(4000, 20, "alphabet", true);
$(".cntr-p2" ).scramble(4000, 20, "alphabet", true);

var tl = gsap.timeline();
  




tl.to(".text-1",{
    duration:0.07,
    opacity: 1,
})
.to(".text-2",{
     duration:0.07,
    opacity: 1,
}, 'a')
.to(".text-1",{
    duration:0.07,
    opacity: 0,
},'a')
.to(".text-3",{
    duration:0.07,
    opacity: 1,
}, 'b')
.to(".text-2",{
    duration:0.07,
    opacity: 0,
},'b')
.to(".text-4",{
    duration:0.07,
   opacity: 1,
}, 'c')
.to(".text-3",{
   duration:0.07,
   opacity: 0,
},'c')
.to(".text-5",{
   duration:0.07,
   opacity: 1,
}, 'd')
.to(".text-4",{
   duration:0.07,
   opacity: 0,
},'e')
.to(".text-6",{
    duration:0.07,
   opacity: 1,
}, 'e')
.to(".text-5",{
   duration:0.07,
   opacity: 0,
},'f')
.to(".text-7",{
   duration:0.07,
   opacity: 1,
}, 'f')
.to(".text-6",{
   duration:0.07,
   opacity: 0,
},'g')
.to(".text-8",{
   duration:0.07,
  opacity: 1,
}, 'g')
.to(".text-7",{
  duration:0.07,
  opacity: 0,
},'h')
.to(".text-9",{
  duration:0.07,
  opacity: 1,
}, 'h')
.to(".text-8",{
  duration:0.07,
  opacity: 0,
},'h')

.to(".text-10",{
    duration:0.07,
   opacity: 1,
}, 'i')
.to(".text-9",{
   duration:0.07,
   opacity: 0,
},'i')
.to(".text-25",{
   duration:0.07,
   opacity: 1,
}, 'j')
.to(".text-10",{
   duration:0.07,
   opacity: 0,
},'j')
.to(".text-65",{
   duration:0.07,
  opacity: 1,
}, 'k')
.to(".text-25",{
  duration:0.07,
  opacity: 0,
},'k')
.to(".text-97",{
  duration:0.07,
  opacity: 1,
}, 'l')
.to(".text-65",{
  duration:0.07,
  opacity: 0,
},'l')

.to(".text-100",{
    duration:0.07,
    opacity: 1,
  }, 'm')
  .to(".text-97",{
    duration:0.07,
    opacity: 0,
  },'m')
  .to(".loader",{
     display: "none",
  })



