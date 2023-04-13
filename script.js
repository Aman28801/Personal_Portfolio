// import {getDatabase,set,ref} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";


// header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//Typing effect

var typed = new Typed('.auto-input',{
    strings: ['a Student!','a FrontEnd Developer!','an AI Engineer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

// typing speed end

//active link state

let navlinks = document.querySelectorAll('nav ul li a')
let sections = document.querySelectorAll('section')
window.addEventListener('scroll',function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(section =>{
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navlinks.forEach(link =>{
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});
//firebase

// var nameV, subjectV ,emailV,msgV;
// var db = getDatabase();

// var nam = document.getElementById('name');
// var email = document.getElementById('email');
// var subject = document.getElementById('subject');
// var msg = document.getElementById('msg');

// function submitData(event){
//     event.preventDefault()
//     readFormData()
//     set(ref(db,"Responses/" + nameV ),{
//         name: nameV,
//         email: emailV,
//         subject: subjectV,
//         msg:msgV,
//     })
//     .then(()=>{
//         alert("Data Stored Succesfully");
//     })
//     .catch((error) => {
//         alert("Unsuccessful", error)
//     });
//     clearFormData();
// }

// //read data from form
// function readFormData(){
//     nameV = nam.value;
//     subjectV = subject.value;
//     emailV= email.value;
//     msgV=msg.value;
//     console.log(nameV, subjectV ,emailV,msgV);
// }

// function clearFormData(){
//     nam.value="";
//     subject.value="";
//     email.value="";
//     msg.value="";
// }

// document.querySelectorAll(".btn")[0].onclick = submitData;