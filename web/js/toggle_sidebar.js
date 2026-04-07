  const toggleBtn = document.getElementById("brxSidebarToggle");
    const sidebar = document.getElementById("brxSidebar");
    const overlay = document.getElementById("brxSidebarOverlay");

    toggleBtn.onclick = function () {
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");

      if (sidebar.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    overlay.onclick = function () {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");

      document.body.style.overflow = "auto";
    };



// Product Detail Page

  function pdChangeImg(el) {
  const main = document.getElementById("pdMainImg");
  main.style.opacity = "0.5";

  setTimeout(() => {
    main.src = el.src;
    main.style.opacity = "1";
  }, 150);
}

function pdSelectSize(el) {
  document.querySelectorAll(".pd-sizes button")
    .forEach(btn => btn.classList.remove("active"));

  el.classList.add("active");
}

    