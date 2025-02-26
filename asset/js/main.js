// HUMBURGER
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU HANDPHONE
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SKILL
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

// KEUNGGULAN MODAL
const modalButtons = document.querySelectorAll('.keunggulan_button')
const modalCloses = document.querySelectorAll('.keunggulan_modal-close')

let activeModal = null

function openModal(modalId) {
    const modal = document.getElementById(modalId)
    if (modal) {
        modal.classList.add('active-modal')
        activeModal = modal
    }
}

function closeModal() {
    if (activeModal) {
        activeModal.classList.remove('active-modal')
        activeModal = null
    }
}

modalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault() // Prevent default behavior
        openModal(button.getAttribute('data-target'))
    })
})

modalCloses.forEach(close => {
    close.addEventListener('click', (e) => {
        e.preventDefault() // Prevent default behavior
        closeModal()
    })
})

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('keunggulan_modal')) {
        e.preventDefault() // Prevent default behavior
        closeModal()
    }
})

// PORTOFOLIO SWIPER
let swiperPortofolio = new Swiper(".portofolio_container", {
    cssMode: true,
    loop: true,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let swiperTest = new Swiper(".test_container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2
        }
    }
});

function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

