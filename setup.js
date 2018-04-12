const heightInput = $("#heightInput");
const brick = $("#brick");
const container = $("#container");

function buildPyramid()
{
  container.empty();
  $("#heightOutput").text(heightInput.val());
  printPyramid(container, heightInput.val(), brick.val()); 
}

heightInput.change(buildPyramid);
brick.change(buildPyramid);
$(document).ready(buildPyramid);