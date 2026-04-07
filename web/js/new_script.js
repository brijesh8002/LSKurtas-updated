
    
        // Product card specifications
            const mainImage = document.getElementById("mainImage");
            const thumbnails = document.querySelectorAll(".thumb-img");
            const colorButtons = document.querySelectorAll(".color-btn");
            const imageContainer = document.getElementById("imageContainer");

            let currentColor = "black";

            // Thumbnail Click
            thumbnails.forEach(img => {
                img.addEventListener("click", function () {
                    mainImage.src = this.src;

                    thumbnails.forEach(i => i.classList.remove("active-thumb"));
                    this.classList.add("active-thumb");
                });
            });

            // Color Change
            colorButtons.forEach(button => {
                button.addEventListener("click", function () {

                    currentColor = this.dataset.color;

                    colorButtons.forEach(btn => btn.classList.remove("active-color"));
                    this.classList.add("active-color");

                    thumbnails.forEach(img => {
                        if (img.dataset.color === currentColor) {
                            img.classList.remove("d-none");
                        } else {
                            img.classList.add("d-none");
                        }
                    });

                    // Set first visible image as main
                    const firstImage = document.querySelector(
                        `.thumb-img[data-color="${currentColor}"]`
                    );

                    mainImage.src = firstImage.src;

                    thumbnails.forEach(i => i.classList.remove("active-thumb"));
                    firstImage.classList.add("active-thumb");
                });
            });

// DESKTOP ZOOM
imageContainer.addEventListener("mousemove", function (e) {

    const rect = imageContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    mainImage.style.transformOrigin = xPercent + "% " + yPercent + "%";
    mainImage.style.transform = "scale(2)";
});

imageContainer.addEventListener("mouseleave", function () {
    mainImage.style.transform = "scale(1)";
});


// MOBILE TOUCH ZOOM
imageContainer.addEventListener("touchmove", function (e) {

    const rect = imageContainer.getBoundingClientRect();
    const touch = e.touches[0];

    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    mainImage.style.transformOrigin = xPercent + "% " + yPercent + "%";
    mainImage.style.transform = "scale(2)";
});

imageContainer.addEventListener("touchend", function () {
    mainImage.style.transform = "scale(1)";
});
    


// ========================== Address change modal=======================

function openAddressModal() {
    document.getElementById("editAddressModal").classList.add("active");
}

    function closeAddressModal() {
        document.getElementById("editAddressModal").classList.remove("active");
    }
    
    

// ========================== Password change modal=======================

function openPasswordModal(){
  document.getElementById("passwordModal").classList.add("active");
}

function closePasswordModal(){
  document.getElementById("passwordModal").classList.remove("active");
}

function togglePassword(inputId, icon){

  const input = document.getElementById(inputId);

  if(input.type === "password"){
    input.type = "text";
    icon.classList.remove("bi-eye");
    icon.classList.add("bi-eye-slash");
  }else{
    input.type = "password";
    icon.classList.remove("bi-eye-slash");
    icon.classList.add("bi-eye");
  }

}




