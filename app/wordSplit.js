var parseBttn = document.getElementById("beginParseBttn");
var wordButtons = [];
var sentence = document.getElementById("sentenceInput").value;
var words1 = [];

var tags =
  " - <select id= 'tag'>" +
  "<option id = 'tagItem'>root</option>" +
  "<option id = 'tagItem'>nsubj</option>" +
  "<option id = 'tagItem'>nsubjpass</option>" +
  "<option id = 'tagItem'>obj</option>" +
  "<option id = 'tagItem'>iobj</option>" +
  "<option id = 'tagItem'>csubj</option>" +
  "<option id = 'tagItem'>csubjpass</option>" +
  "<option id = 'tagItem'>ccomp</option>" +
  "<option id = 'tagItem'>xcomp</option>" +
  "<option id = 'tagItem'>nmod</option>" +
  "<option id = 'tagItem'>nmod:npmod</option>" +
  "<option id = 'tagItem'>nmod:tmod</option>" +
  "<option id = 'tagItem'>nmod:poss</option>" +
  "<option id = 'tagItem'>advcl</option>" +
  "<option id = 'tagItem'>advmod</option>" +
  "<option id = 'tagItem'>neg</option>" +
  "<option id = 'tagItem'>nummod</option>" +
  "<option id = 'tagItem'>appos</option>" +
  "<option id = 'tagItem'>amod</option>" +
  "<option id = 'tagItem'>acl</option>" +
  "<option id = 'tagItem'>acl:relcl</option>" +
  "<option id = 'tagItem'>det</option>" +
  "<option id = 'tagItem'>det:predet</option>" +
  "<option id = 'tagItem'>case</option>" +
  "<option id = 'tagItem'>compound</option>" +
  "<option id = 'tagItem'>compound:prt</option>" +
  "<option id = 'tagItem'>flat</option>" +
  "<option id = 'tagItem'>fixed</option>" +
  "<option id = 'tagItem'>foreign</option>" +
  "<option id = 'tagItem'>conj</option>" +
  "<option id = 'tagItem'>cc</option>" +
  "<option id = 'tagItem'>cc:preconj</option>" +
  "<option id = 'tagItem'>punct</option>" +
  "<option id = 'tagItem'>list</option>" +
  "<option id = 'tagItem'>parataxis</option>" +
  "<option id = 'tagItem'>orphan</option>" +
  "<option id = 'tagItem'>dislocated</option>" +
  "<option id = 'tagItem'>reparandum</option>" +
  "<option id = 'tagItem'>vocative</option>" +
  "<option id = 'tagItem'>discourse</option>" +
  "<option id = 'tagItem'>expl</option>" +
  "<option id = 'tagItem'>aux</option>" +
  "<option id = 'tagItem'>auxpass</option>" +
  "<option id = 'tagItem'>cop</option>" +
  "<option id = 'tagItem'>mark</option>" +
  "</select>"


function stepOne(callback) {
  parseBttn.addEventListener("click", function () {
    var str = document.getElementById("sentenceInput").value;
    var words = str.split(" ");
    var x = document.getElementById("input-group mb-3")

    function populate() {
      for (var i = 0; i < words.length; i++) {
        var base = " - <input id='base" + i + "' class='baseForm' type='text' name='base' placeholder='base form'>"
        var dependency = " - <input id='dependency" + i + "' class='dependencyWord' type='text' name='dependency' placeholder='dependency'>"

        document.getElementById("Spreadsheet").innerHTML += "<p id=" + i + ">   " + (i + 1) + ": " + words[i] + base + tags + dependency + " </p><br>"

      };
      document.getElementById("saveBttn").innerHTML += "<input id = 'saveBttn1' class = 'btn btn-secondary btn-lg' type='submit' value ='Save to Database'>"

    };
    console.log(words);
    wordButtons.push(words.length);
    words1.push(words)
    populate();

    function hideElem() {
      document.getElementById("container1").style = "visibility: hidden";
    };

    hideElem();

    callback();
  })
};



stepOne(function () {
  var saveBttn1 = document.getElementById("saveBttn1");
  var tags = [];
  var baseForms = [];
  var dependencyWords = [];

  saveBttn1.addEventListener("click", function () {

    function gather() {
      for (var i = 0; i < wordButtons; i++) {
        var row = document.getElementById(i);
        var dependencyWord1 = document.getElementById("dependency" + i).value;
        var baseForm = document.getElementById("base" + i).value;
        var tag = document.getElementById("tagItem").value;
        console.log(tag);
        console.log(row);
        console.log(dependencyWord1);
        console.log(baseForm);

      }
    };
    gather();

    alert("Saved to Database!");

    window.location.reload(true);
  })
});