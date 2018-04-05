var heightInput = document.getElementById("heightInput");
var brick = document.getElementById("brick");

function buildPyramid()
{
  var heightOutput = document.getElementById("heightOutput");
  heightOutput.innerHTML = heightInput.value; 

  var pyramid = document.getElementById("container");
  while (pyramid.firstChild)
    pyramid.removeChild(pyramid.firstChild);

  printPyramid("div#container", heightInput.value, brick.value); 
}

heightInput.addEventListener("mousemove", buildPyramid);
document.addEventListener("mouseup", buildPyramid);
window.addEventListener("load", buildPyramid);