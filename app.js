gsap.registerPlugin(ScrollTrigger);
function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
// loco();

function openFunction() {
  document.getElementById("menu").style.width = "300px";
  document.getElementById("mainbox").style.marginLeft = "300px";
}
function closeFunction() {
  document.getElementById("menu").style.width = "0px";
  document.getElementById("mainbox").style.marginLeft = "0px";
}


function homePageMouseHover() {
  let heading = document.querySelector(".content");

  heading.addEventListener("mouseenter", function () {
    let homeTl = gsap.timeline();
    homeTl.to(
      ".upperLine",
      {
        duration: 1,
        ease: "power1.out",
        scale: 1,
      },
      "main-ani"
    );
    homeTl.to(
      ".lowwerLine",
      {
        duration: 1,
        ease: "power1.out",
        scale: 1,
      },
      "main-ani"
    );
  });

  heading.addEventListener("mouseleave", function () {
    let homeTl = gsap.timeline();
    homeTl.to(
      ".upperLine",
      {
        scale: 0,
        duration: 1,
      },
      "main-ani-remove"
    );
    homeTl.to(
      ".lowwerLine",
      {
        scale: 0,
        duration: 1,
      },
      "main-ani-remove"
    );
  });
}
homePageMouseHover();

function scrollAnimation() {
  let textTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3",
      // markers: true,
      start: "top top",
      end: "100% 50%",
      scrub: 2,
      pin: true,
    },
  });

  textTL
    .to(
      ".center",
      {
        height: "100vh",
      },
      "a"
    )
    .to(
      ".top",
      {
        top: "-50%",
      },
      "a"
    )
    .to(
      ".bottom",
      {
        bottom: "-50%",
      },
      "a"
    )
    .to(
      ".top > h1",
      {
        top: "80%",
      },
      "a"
    )
    .to(
      ".bottom > h1",
      {
        bottom: "80%",
      },
      "a"
    )
    .to(".page3-content", {
      delay: -0.2,
      paddingTop: "0%",
    });
}

scrollAnimation();

function marqueeAnimation() {
  window.addEventListener("wheel", (dets) => {
    if (dets.deltaY > 0) {
      gsap.to(".marque", {
        transform: "translateX(-200%)",
        repeat: -1,
        duration: 4,
        ease: "none",
      });

      gsap.to(".marque  img", {
        rotate: 0,
      });
    } else {
      gsap.to(".marque", {
        transform: "translateX(0%)",
        repeat: -1,
        duration: 4,
        ease: "none",
      });

      gsap.to(".marque  img", {
        rotate: 180,
      });
    }
  });
}
marqueeAnimation();




function canvas(){
  const canvas = document.querySelector("#page3>canvas");
  const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
})

function files(index) {
  var data = ` ezgif-frame-001.jpg
ezgif-frame-002.jpg
ezgif-frame-003.jpg
ezgif-frame-004.jpg
ezgif-frame-005.jpg
ezgif-frame-006.jpg
ezgif-frame-007.jpg
ezgif-frame-008.jpg
ezgif-frame-009.jpg
ezgif-frame-010.jpg
ezgif-frame-011.jpg
ezgif-frame-012.jpg
ezgif-frame-013.jpg
ezgif-frame-014.jpg
ezgif-frame-015.jpg
ezgif-frame-016.jpg
ezgif-frame-017.jpg
ezgif-frame-018.jpg
ezgif-frame-019.jpg
ezgif-frame-020.jpg
ezgif-frame-021.jpg
ezgif-frame-022.jpg
ezgif-frame-023.jpg
ezgif-frame-024.jpg
ezgif-frame-025.jpg
ezgif-frame-026.jpg
ezgif-frame-027.jpg
ezgif-frame-028.jpg
ezgif-frame-029.jpg
ezgif-frame-030.jpg
ezgif-frame-031.jpg
ezgif-frame-032.jpg
ezgif-frame-033.jpg
ezgif-frame-034.jpg
ezgif-frame-035.jpg
ezgif-frame-036.jpg
ezgif-frame-037.jpg
ezgif-frame-038.jpg
ezgif-frame-039.jpg
ezgif-frame-040.jpg
ezgif-frame-041.jpg
ezgif-frame-042.jpg
ezgif-frame-043.jpg
ezgif-frame-044.jpg
ezgif-frame-045.jpg
ezgif-frame-046.jpg
ezgif-frame-047.jpg
ezgif-frame-048.jpg
ezgif-frame-049.jpg
ezgif-frame-050.jpg
ezgif-frame-051.jpg
ezgif-frame-052.jpg
ezgif-frame-053.jpg
ezgif-frame-054.jpg
ezgif-frame-055.jpg
ezgif-frame-056.jpg
ezgif-frame-057.jpg
ezgif-frame-058.jpg
ezgif-frame-059.jpg
ezgif-frame-060.jpg
ezgif-frame-061.jpg
ezgif-frame-062.jpg
ezgif-frame-063.jpg
ezgif-frame-064.jpg
ezgif-frame-065.jpg
ezgif-frame-066.jpg
ezgif-frame-067.jpg
ezgif-frame-068.jpg
ezgif-frame-069.jpg
ezgif-frame-070.jpg
ezgif-frame-071.jpg
ezgif-frame-072.jpg
ezgif-frame-073.jpg
ezgif-frame-074.jpg
ezgif-frame-075.jpg
ezgif-frame-076.jpg
ezgif-frame-077.jpg
ezgif-frame-078.jpg
ezgif-frame-079.jpg
ezgif-frame-080.jpg
ezgif-frame-081.jpg
ezgif-frame-082.jpg
ezgif-frame-083.jpg
ezgif-frame-084.jpg
ezgif-frame-085.jpg
ezgif-frame-086.jpg
ezgif-frame-087.jpg
ezgif-frame-088.jpg
ezgif-frame-089.jpg
ezgif-frame-090.jpg
ezgif-frame-091.jpg
ezgif-frame-092.jpg
ezgif-frame-093.jpg
ezgif-frame-094.jpg
ezgif-frame-095.jpg
ezgif-frame-096.jpg
ezgif-frame-097.jpg
ezgif-frame-098.jpg
ezgif-frame-099.jpg
ezgif-frame-100.jpg
ezgif-frame-101.jpg
ezgif-frame-102.jpg
ezgif-frame-103.jpg
ezgif-frame-104.jpg
ezgif-frame-105.jpg
ezgif-frame-106.jpg
ezgif-frame-107.jpg
ezgif-frame-108.jpg
ezgif-frame-109.jpg
ezgif-frame-110.jpg
ezgif-frame-111.jpg
ezgif-frame-112.jpg
ezgif-frame-113.jpg
ezgif-frame-114.jpg
ezgif-frame-115.jpg
ezgif-frame-116.jpg
ezgif-frame-117.jpg
ezgif-frame-118.jpg
ezgif-frame-119.jpg
ezgif-frame-120.jpg
ezgif-frame-121.jpg
ezgif-frame-122.jpg
ezgif-frame-123.jpg
ezgif-frame-124.jpg
ezgif-frame-125.jpg
ezgif-frame-126.jpg
ezgif-frame-127.jpg
ezgif-frame-128.jpg
ezgif-frame-129.jpg
ezgif-frame-130.jpg
ezgif-frame-131.jpg
ezgif-frame-132.jpg
ezgif-frame-133.jpg
ezgif-frame-134.jpg
ezgif-frame-135.jpg
ezgif-frame-136.jpg
ezgif-frame-137.jpg
ezgif-frame-138.jpg
ezgif-frame-139.jpg
ezgif-frame-140.jpg
ezgif-frame-141.jpg
ezgif-frame-142.jpg
ezgif-frame-143.jpg
ezgif-frame-144.jpg
ezgif-frame-145.jpg
ezgif-frame-146.jpg
ezgif-frame-147.jpg
ezgif-frame-148.jpg
ezgif-frame-149.jpg
ezgif-frame-150.jpg
ezgif-frame-151.jpg
ezgif-frame-152.jpg
ezgif-frame-153.jpg
ezgif-frame-154.jpg
ezgif-frame-155.jpg
ezgif-frame-156.jpg
ezgif-frame-157.jpg
ezgif-frame-158.jpg
ezgif-frame-159.jpg
ezgif-frame-160.jpg
ezgif-frame-161.jpg
ezgif-frame-162.jpg
ezgif-frame-163.jpg
ezgif-frame-164.jpg
ezgif-frame-165.jpg
ezgif-frame-166.jpg
ezgif-frame-167.jpg
ezgif-frame-168.jpg
ezgif-frame-169.jpg
ezgif-frame-170.jpg
ezgif-frame-171.jpg
ezgif-frame-172.jpg
ezgif-frame-173.jpg
ezgif-frame-174.jpg
ezgif-frame-175.jpg
ezgif-frame-176.jpg
ezgif-frame-177.jpg
ezgif-frame-178.jpg
ezgif-frame-179.jpg
ezgif-frame-180.jpg
ezgif-frame-181.jpg
ezgif-frame-182.jpg
ezgif-frame-183.jpg
ezgif-frame-184.jpg
ezgif-frame-185.jpg
ezgif-frame-186.jpg
ezgif-frame-187.jpg
ezgif-frame-188.jpg
ezgif-frame-189.jpg
ezgif-frame-190.jpg
ezgif-frame-191.jpg
ezgif-frame-192.jpg
ezgif-frame-193.jpg
ezgif-frame-194.jpg
ezgif-frame-195.jpg
ezgif-frame-196.jpg
ezgif-frame-197.jpg
ezgif-frame-198.jpg
ezgif-frame-199.jpg
ezgif-frame-200.jpg

  `;
  return data.split("\n")[index];
}


const frameCount = 200;

const images = [];
const imageSeq = {
    frame: 0
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: 5,
        pin: true,
        trigger: "#page3",
    },
    onUpdate: render
});

images[0].onload = render;

function render() {
    // Adding a delay to simulate slow rendering
    setTimeout(() => {
        scaleImage(images[imageSeq.frame], context);
    }, 100); // 100ms delay to simulate slow speed
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("#home canvas", {
    scale: 0.8,
    scrollTrigger: {
        scrub: 2,
        trigger: "#home",
        start: "bottom 100%",
    },
});

ScrollTrigger.create({
    trigger: "#home",
    pin: true,
    start: "bottom 100%",
});
}

canvas();




const nav = document.getElementsByClassName("page5")[0]; // Get the first element with class "page5"

window.onmousemove = (e) => {
  const percent = e.clientX / window.innerWidth; // Correct capitalization of window

  nav.animate(
    {
      transform: `translateX(${percent * nav.offsetWidth * -1}px)`, // Access offsetWidth of the element
    },
    {
      fill: "forwards",
      duration: 4000,
    }
  );
};


ScrollTrigger.create({
	trigger:".gallery",
  // markers: true,
	start:"top 0%",
	end:"bottom 80%",
	pin:".right"
})


let initialVal  =`M 10 100 Q 500 100 990 100`
let finalVal = `M 10 100 Q 500 100 990 100`

let mouseAni = document.querySelector('.mouseAni')

mouseAni.addEventListener('mousemove',(dets) => {
    initialVal = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path",{
        attr : {d : initialVal},
        ease : 'power3.out',
        duration : 2.5
    })
})

mouseAni.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr: {d:finalVal},
        ease : "elastic.out(1,0.2)",
        duration: 2.5
    })
})