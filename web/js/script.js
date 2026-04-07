document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".vx-filter-title").forEach(title => {
    title.addEventListener("click", function () {
      const parent = this.parentElement;
      parent.classList.toggle("vx-active");
    });
  });

});


// Filter Script

function vxOpenFilter() {
  document.getElementById("vxSidebar").classList.add("vx-open");
  document.body.style.overflow = "hidden";
}

function vxCloseFilter() {
  document.getElementById("vxSidebar").classList.remove("vx-open");
  document.body.style.overflow = "auto";
}



// Cart Script

function vxOpenCart() {
  document.getElementById("vxCart").classList.add("vx-open");
  document.getElementById("vxCartOverlay").classList.add("vx-open");
  document.body.style.overflow = "hidden";
}

function vxCloseCart() {
  document.getElementById("vxCart").classList.remove("vx-open");
  document.getElementById("vxCartOverlay").classList.remove("vx-open");
  document.body.style.overflow = "auto";
}





// Search Baar Script ---------------------------------


function openSearch() {
    document.getElementById("vxSearch").style.display = "block";
    document.getElementById("vxOverlay").style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById("search-home").style.display = 'none';

  } 


function closeSearch() {
    document.getElementById("vxSearch").style.display = "none";
    document.getElementById("vxOverlay").style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById("search-home").style.display = 'block';
  }



// Password Show fuction
function togglePassword() {
  let pass = document.getElementById("password");
  let icon = document.getElementById("toggleIcon");

  if (pass.type === "password") {
    pass.type = "text";
    icon.classList.remove("bi-eye-slash");
    icon.classList.add("bi-eye");   // show icon (visible)
  } else {
    pass.type = "password";
    icon.classList.remove("bi-eye");
    icon.classList.add("bi-eye-slash"); // hide icon
  }
}




// header scroll fixed at top

window.addEventListener("scroll", function () {
    let header = document.querySelector(".main-header");
    let marquee = document.querySelector(".offer-bar");

    let marqueeHeight = marquee.offsetHeight;

    if (window.scrollY > marqueeHeight) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});



