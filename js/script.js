// konktakt 
$(document).ready(function () {
 $('.send').click(function (event) {
 
console.log("clicked button")

  const email = $('.email').val()
  const subject = $('.subject').val()
  const name = $('.name').val()
  const message = $('.message').val()
  const status = $('.status')
  status.empty()

  if(email.length > 4 && email.includes('@') && email.includes ('.')) {
    console.log('Email jest poprawny')
    
  } else {
    event.preventDefault()
    status.append('<div>Email jest niepoprawny</div>')
  }

  if(subject.length > 1) {
    console.log('subject jest poprawny')
     
  } else {
    event.preventDefault()
    status.append('<div>Nie wpisałeś tematu!</div>')
  }

  if(name.length > 1) {
    console.log('name jest poprawny')
     
  } else {
    event.preventDefault()
    status.append('<div>Nie wpisałeś imienia!</div>')
  }
  if(message.length > 3) {
    
    console.log('message jest poprawny')
     
  } else {
    event.preventDefault()
    status.append('<div>Nie wpisałeś treści wiadomości!</div>')
  }

 })
})
// kontakt end

const cvBtn = document.querySelector("#dupa1");

cvBtn.addEventListener("click", () => {
  console.log("cv buton");

  cvBtn.classList.add("active");
  console.log("cvbtn working");
  cvBtn.innerText = "";
  active = true;

  setTimeout(() => {
    cvBtn.classList.add("success");
    cvBtn.innerHTML = '<i class = "fas fa-check"></i>';
    window.location.href = "http://mgrs.me/assets/PDF.pdf";
  }, 3000);

  setTimeout(() => {
    cvBtn.classList.remove("active");
    cvBtn.classList.remove("success");
    cvBtn.innerText = "SCIĄGNIJ CV.PDF";
  }, 6000);
});

const displayNavButton = document.querySelector(".navbar-toggler");
const navDiv = document.querySelector(".navbar-collapse");

displayNavButton.addEventListener("click", () => {
  navDiv.classList.toggle("showNav");
});

navDiv.addEventListener("click", () => {
  navDiv.classList.remove("showNav");
})
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
const dasz = document.querySelector(".dasz");
dasz.addEventListener('click', () => {

console.log("daszs");

if (window.location.protocol == "https:") {
  
  window.location = document.URL.replace("https://", "http://");
  window.open("http://mgrs.me/daszbord/dashboard.html", '_blank')
   
} else 
 
})
 
 
// const btn = document.querySelector("#dupa");

// btn.addEventListener("click", () => {
//   btn.classList.add("active");
//   console.log("CHUJ");
//   btn.innerText = "";
//   active = true;

//   setTimeout(() => {
//     btn.classList.add("success");
//     btn.innerHTML = '<i class = "fas fa-check"></i>';
//   }, 3000);

//   setTimeout(() => {
//     btn.classList.remove("active");
//     btn.classList.remove("success");
//     btn.innerText = "WYŚLIJ";
//   }, 6000);
// });

// btn.innerText =''
// active = true;

// setTimeout (() => {
//   btn.classList.add('success')
//   btn.innerHTML = <i class ="fas-fa-check"></i>
// },2000)

// setTimeout (() => {
//   btn.classList.remove('active')
//   btn.classList.remove('success')
//   btn.innerText = 'WYŚLIJ'
//   btn.innerHTML = <i class ="fas-fa-check"></i>
// },3000)
// })
