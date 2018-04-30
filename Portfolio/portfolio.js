
//This is the javascript for the tabs on the index page
function openSkill(evt, skillName) {
    var i, skill, tablinks;
    //It retrieves the elements with the skill class and hides them
    skill = document.getElementsByClassName("skill");
    for (i = 0; i < skill.length; i++) {
        skill[i].style.display = "none";
    }
    //It retrieves the elements with the tablinks class and removes the active class
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    //It shows the current tab and sets sets the current tab that is clicked to active 
    document.getElementById(skillName).style.display = "block";
    evt.currentTarget.className += " active";
}
