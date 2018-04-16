function openSkill(evt, skillName) {
    var i, skill, tablinks;
    skill = document.getElementsByClassName("skill");
    for (i = 0; i < skill.length; i++) {
        skill[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(skillName).style.display = "block";
    evt.currentTarget.className += " active";
}


  // When the user scrolls the page, execute myFunction
  // window.onscroll = function() {myFunction()};
  //
  // // Get the header
  // var header = document.getElementById("header");
  //
  // // Get the offset position of the navbar
  // var sticky = header.offsetTop;
  //
  // // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // function myFunction() {
  //   if (window.pageYOffset >= sticky) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // }


  
