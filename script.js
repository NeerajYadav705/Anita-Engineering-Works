gsap.to("#nav", {
  backgroundColor: "#33695d",
  Text:"#fff",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markerrs:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -25%",
    end: "top -80%",
    scrub: "2",
  },
});




// footer
document.getElementById("myForm").addEventListener("submit", function (event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill out all fields");
    event.preventDefault();
  }
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the link

    // Scroll to the 'about' section smoothly
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the link

    // Scroll to the 'about' section smoothly
    document.querySelector('#home').scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the link

    // Scroll to the 'about' section smoothly
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth'
    });
  });
});