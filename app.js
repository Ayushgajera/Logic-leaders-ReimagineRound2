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
loco();

function openFunction() {
  document.getElementById("menu").style.width = "300px";
  document.getElementById("mainbox").style.marginLeft = "300px";
}
function closeFunction() {
  document.getElementById("menu").style.width = "0px";
  document.getElementById("mainbox").style.marginLeft = "0px";
}

document.addEventListener("DOMContentLoaded", function () {
  // Make the first page fixed
  gsap.to(".page1", {
    scrollTrigger: {
      trigger: ".page1",
      start: "top top",
      end: "bottom+=100% top",
      scrub: true,
      pin: true,
      pinSpacing: false,
    },
  });

  // Heading animation on hover
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
});
