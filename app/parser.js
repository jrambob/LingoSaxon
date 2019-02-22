var tags = document.getElementById("tagLink");


tags.addEventListener("click", function () {
  
  var display = document.getElementById("displayList");
  var picture = document.getElementById("description").className;
  var tagLink = document.getElementById("tagLink").value;

  console.log(picture);
  console.log(tagLink);

  if (tagLink === picture) {
    function show() {
      document.getElementById("decription").style = "visibility: visible";
    };
    show();
  } else {

  }
});