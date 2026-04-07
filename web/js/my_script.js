let my_header = document.querySelector(".secondary-header");
let my_btn = document.querySelector("#menu-toggle-btn");
let search_btn = document.querySelector(".container-search-box");

my_btn.addEventListener("click", ()=>{
    if(my_header.style.display != "none"){
        my_header.style.display = "none";
        search_btn.style.display = "none";
    }
    else{
        my_header.style.display = "block";
        search_btn.style.display = "block";
    }

});




// Sticky Secondary Header Logic
let lastScrollTop = 0;
const secondaryHeader = document.getElementById('secondaryHeader');
const sidebaar = document.getElementById("brxSidebar")

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Optional: Add a subtle shadow to main header on scroll
    const mainHeader = document.querySelector('.navbar');
    if (scrollTop > 4) {
        mainHeader.classList.add('shadow');
        // sidebaar.style.top = "62px";
        // sidebaar.style.height = "calc(100vh - 62px)";
    } else {
        mainHeader.classList.remove('shadow');
        // sidebaar.style.top = "121px";
        // sidebaar.style.height = "calc(100vh - 121px)";
    }

    // Logic for Secondary Header
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling Down AND scrolled past 100px - Hide Secondary Header
        secondaryHeader.classList.add('nav-hidden');
    } else {
        // Scrolling Up - Show Secondary Header
        secondaryHeader.classList.remove('nav-hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});




// Prduct Filter Section

let filterBtn = document.querySelector(".show-filter-sec");
let filterBaar = document.querySelector(".filter-section-t");

filterBtn.addEventListener("click",()=>{
    if (filterBaar.style.display != "block"){
        filterBaar.style.display = "block"
    }
    else{
        filterBaar.style.display = "none"
    }
})


            






