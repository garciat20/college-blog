function dropdownToggle() {
    let navLinks = document.getElementById("navbar-id");
    // if not showing show, vice versa
    if (navLinks.style.display === "flex") { // child is a block element so thats why i have block
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
  }

