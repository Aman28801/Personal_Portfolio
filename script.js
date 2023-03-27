// header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//Typing effect

var typed = new Typed('.auto-input',{
    strings: ['Student!','FrontEnd Developer!','AI Engineer!'],
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
