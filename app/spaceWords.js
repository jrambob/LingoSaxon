var wordMapBttn = document.getElementById("wordMapBttn");
var wordCoordinates = [];
var count = [];

wordMapBttn.addEventListener("click", function (bttn) {
  var str = document.getElementById("wordMapText").value;
  var words = str.split(" ");


  function please() {
    for (var i = 0; i < words.length; i++) {
      wordCoordinates.push(words[i])

    }
  }
  please();


  var counts = [];

  wordCoordinates.forEach(function (i) {
    counts[i] = (counts[i] || 0) + 1;
    count.push(counts)
    document.getElementById("wordMap").innerHTML += "<p>" + counts[i] + " </p><br>";
  });
  console.log(counts)

});