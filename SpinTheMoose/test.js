//Prize variable holds the prize the user currently has
var prize = "";
// var winner = "";

function popup() {
  if(prize == "") {
    // Get the modal
    var modal = document.getElementById('modal');
  //
  //   // Get the button that opens the modal
    var btn = document.getElementById("spin");
  //
  //   // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

   // When the user clicks on the button, open the modal
    modal.style.display = "block";

   // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
  }
}

//this is the speech bubble function that turns the speechbubble visible if it is not already, otherwise it hides it again.
function speechBubble() {
  //retrieves the speech bubble by its id
  var speech = document.getElementById("speech");
  //retrieves the speech bubble text by its id
  var bubble = document.getElementById("bubble");

  //Sets the speech bubble to display as block if not already
      if (speech.style.display === "none") {
          speech.style.display = "block";
          //makes the speech bubble dissapear if it is already showing
      } else {
          speech.style.display = "none";
      }
      //Sets the bubble text to display as block if not already`
      if (bubble.style.display === "none") {
           bubble.style.display = "block";
           // bubble.style.display = "block";
           //makes the speech bubble text dissapear if it is already showing
       } else {
         bubble.style.display = "none";
       }
       //This inserts the string of the prize variable onto the speech bubble that tells the user what they have won.
       document.getElementById("prizes").innerHTML = prize;

  }

    // var angle = Math.floor(Math.random() * 361);


    //This is the spin function
    function spin() {
      //It retrieves the modal by its id
        var modal = document.getElementById('modal');
        //sets the style of the modal to 'none' so that it dissappears.
        modal.style.display = "none";

        //produces a random number up to 49.
        var weight = Math.floor(Math.random() * 49);

        //these are the weightings for the prizes
        //The all expenses paid trip prize is won when the random number is equal to 48.
        // This is beause the user can only win one of these prizes.
        if(weight == 48) {
          prize = "An all expenses paid trip!";
          document.getElementById("moose").style.transform = "rotate(742deg)";
          document.getElementById("moose").style.WebkitTransitionDuration="2s";
          // window.alert("You have won an all expenses paid trip!");
          //The free flight only has two prizes available so this prize is won if the random number is 46 and 47
        } else if((weight >= 46) && (weight => 47)) {
          prize = "A free flight!";
          document.getElementById("moose").style.transform = "rotate(1013deg)";
          document.getElementById("moose").style.WebkitTransitionDuration="2s";
          // window.alert("You have won a free flight!");
          //The £100 ppound off prize is won if the random number is between 41 and 45
        } else if((weight >= 41) && (weight => 45)) {
          prize = "	&pound;100 off!";
          document.getElementById("moose").style.transform = "rotate(833deg)";
          document.getElementById("moose").style.WebkitTransitionDuration="2s";
          // window.alert("You have won a £100 off!");
          //The £20 pound off prize is won if the random number is between 36 and 40
        } else if((weight >= 36) && (weight => 40)) {
          prize = "	&pound;20 off!";
          document.getElementById("moose").style.transform = "rotate(1058deg)";
          document.getElementById("moose").style.WebkitTransitionDuration="2s";
          // window.alert("You have won a £20 off!");
          //The £10 pound off prize is won if the random number is between 27 and 35
        } else if((weight >= 27) && (weight => 35)) {
          prize = "	&pound;10 off!";
          document.getElementById("moose").style.transform = "rotate(923deg)";
          document.getElementById("moose").style.WebkitTransitionDuration="2s";
          // window.alert("You have won a £10 off!");
          //Prize 1 is won if the random number is between 22 and 26
        } else if((weight >= 22) && (weight => 26)) {
          prize = "Prize 1!";
          document.getElementById("moose").style.transform = "rotate(878deg)";
          document.getElementById("moose").style.WebkitTransitionDuration="2s";
          // window.alert("You have won prize 1!");
          //Prize 2 is won if the random number is between 13 and 21
        } else if((weight >= 13) && (weight => 21)) {
          prize = "Prize 2!";
          document.getElementById("moose").style.transform = "rotate(968deg)";
          document.getElementById("moose").style.WebkitTransitionDuration="2s";
          // window.alert("You have won prize 2!");
          //Prize 3 is won if the random number is between 0 and 12
        } else if((weight >= 0) && (weight => 12)) {
          prize = "Prize 3!";
          document.getElementById("moose").style.transform = "rotate(878deg)";
          document.getElementById("moose").style.WebkitTransitionDuration="2s";
          // window.alert("You have won prize 3!");
        }
        // var winner = "won";
        var speech = document.getElementById("speech");
        var bubble = document.getElementById("bubble");

        //Sets the speech bubble to display as block if not already
        if (speech.style.display === "none") {
            speech.style.display = "block";
            // bubble.style.display = "block";
            //Sets the bubble text to display as block if not already
            if (bubble.style.display === "none") {
                 bubble.style.display = "block";
                 // bubble.style.display = "block";
             }
        }
        //This inserts the string of the prize variable onto the speech bubble that tells the user what they have won.
        document.getElementById("prizes").innerHTML = prize;



    }
