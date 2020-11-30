// Set date automatcially structure
const date = (document.getElementById('date').innerHTML = new Date().getFullYear())

// Navbar javascript
const navBtn = document.getElementById('nav-toggle')
const links = document.getElementById('nav-shortcuts')
navBtn.addEventListener("click",()=>{
    links.classList.toggle("show-shortcuts");
});

// links adjustment

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(link => {
    link.addEventListener("click", e => {  
        links.classList.remove("show-shortcuts");
    });
  });