// Load Header
fetch('web/include/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    // AFTER loading, attach menu logic
    const menu = document.querySelector("#header-bottom-menu");

    window.openMenu = function () {
      menu.classList.add("open");
      document.body.style.overflow = "hidden";
    };

    window.closeMenu = function () {
      menu.classList.remove("open");
      document.body.style.overflow = "auto";
    };

        //     let menu = document.querySelector(".header-bottom-menu");
        // function openMenu() {
        //     menu.classList.add("open")
        //     document.body.style.overflow = "hidden";
        // }
        // function closeMenu() {
        //     menu.classList.remove("open")
        //     document.body.style.overflow = "auto";
        // }
  });



// Load Footer
fetch('web/include/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footerId').innerHTML = data;
  });



   
       