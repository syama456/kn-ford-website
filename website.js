 let navLinks = document.getElementById("navLinks");

    function showMenu() {
      navLinks.style.right = "0";
    }
    function hideMenu() {
      navLinks.style.right = "-200px";

    }



    let buttons = document.querySelectorAll(".tab-btn");

    let contents = document.querySelectorAll(".tab-content");

    buttons.forEach(function (button) {

      button.addEventListener("click", function () {

        
        buttons.forEach(function (btn) {
          btn.classList.remove("active");
        });

        contents.forEach(function (content) {
          content.classList.remove("active-tab");
        });

        button.classList.add("active");

    
        let tabName = button.getAttribute("data-tab");

        document.querySelector("." + tabName)
          .classList.add("active-tab");

      });

    });
