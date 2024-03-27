let tl = gsap
  .timeline({
    defaults: {
      duration: 1,
    },
  })
  .to("h1", {
    y: -100,
    color: "white",
  })
  .to(
    ".box1",
    {
      x: -100,
      backgroundColor: "pink",
    }
    // Controlling positions of timeline tween
    // "+=1"
    // "+=2"
    // "-=1"
    // "-=2"
  )
  .to(".box2", {
    y: 100,
    backgroundColor: "purple",
  })
  .to(".box3", {
    x: 100,
    backgroundColor: "crimson",
  });