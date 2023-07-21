const header=document.querySelector(".header");
const menulist=document.querySelector(".menu-list");
const closebtn=document.querySelector(".close-btn");
const menubtn=document.querySelector(".menu-btn");
menubtn.onclick =()=>{
    menulist.classList.add("active");
    menubtn.classList.add("hide");
    closebtn.classList.remove("hide");
}
closebtn.onclick =()=>{
    menulist.classList.remove("active");
    menubtn.classList.remove("hide");
    closebtn.classList.add("hide");
}
window.onscroll =()=>{
    this.scrollY>20 ? header.classList.add("stickey"): header.classList.remove("stickey");
}