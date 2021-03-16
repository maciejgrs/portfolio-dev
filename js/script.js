// konktakt 
$(document).ready(function(){
  $('#formcontact').trigger(':reset');
});

$(document).ready(function () {
 $('.send').click(function (event) {
 


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
  if(email.length > 4 && email.includes('@') && email.includes ('.') && message.length > 3 && name.length > 1 && subject.length > 1) {
   console.log("wszystko")
   setTimeout(() => {
    $('#formcontact')[0].reset();
  }, 3000);
  
 
  } 
 })
})
// kontakt end

const nameInput = document.querySelector(".name") 
  nameInput.value = ''
  const subjectInput = document.querySelector(".subject") 
  subjectInput.value = ''
  const messageInput = document.querySelector(".message") 
  messageInput.value = ''
  const emailInput = document.querySelector(".email") 
  emailInput.value = ''



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
    window.location.href = "http://mgrs.me/assets/CV_Maciej_Grys.pdf";
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

function myFunction() {
  if (window.location.protocol == "https:") {
   
    var newLine = "\r\n";
    var msg =
      "Darmowe API wykorzystywane przy projekcie działa niestety korzystając tylko z protokołu HTTP.";
    msg += newLine;
    msg +=
      "Zostanie otwarta nowa zakładka z adresem strony HTTP i przeglądarka może Cię o tym ostrzec.";
    msg += newLine;
    msg += "Strona jest jednak całkowicie bezpieczna";
    msg += newLine;
    msg += "Dokładny adres:  http://mgrs.me/daszbord/dashboard.html";

    if (confirm(msg)) {
      window.open("http://mgrs.me/daszbord/dashboard.html", "_blank", "noopener noreferrer");
    }
  } else {
    window.open("http://mgrs.me/daszbord/dashboard.html", "_blank", "noopener noreferrer");
  }
}
 