gsap.from('.animationOne', {
  y: -100,
  duration: 2,
})

gsap.from('.animationTwo', {
  opacity: 0,
  x: -500,
  duration: 2,
  scrollTrigger: {
    trigger: "#about",
  }
})

gsap.from('.animationThree', {
  opacity: 0,
  x: 500,
  duration: 2,
  scrollTrigger: {
    trigger: "#about",
  }
})

gsap.from('.animationFour', {
  opacity: 0,
  x: 500,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: "#about",
  }
})

gsap.from('.animationFive', {
  opacity: 0,
  x: -500,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: "#about",
  }
})




const order = document.querySelectorAll(".btnOrder");

order.forEach(function(item) {
  item.addEventListener("click", clicked)
})

function clicked (){
    Swal.fire({
        title: 'Thank you for your order.',
        text: 'Soon the manager will contact you and discuss the details of your order.',
        confirmButtonText: 'Ok'
      })
}

