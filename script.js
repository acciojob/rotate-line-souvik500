//your JS code here. If required.
//your JS code here. If required.

function rotateLine() {
  var line = document.getElementById("line");
  var rotation = 0;
  
  function animateRotation() {
    rotation += 1;
    line.style.transform = "rotate(" + rotation + "deg)";
    requestAnimationFrame(animateRotation);
  }
  
  animateRotation();
}

// Call the rotateLine function to rotate the line
rotateLine();