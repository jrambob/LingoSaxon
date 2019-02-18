var parseBttn = document.getElementById("beginParseBttn");
var wordButtons = [];
var sentence = document.getElementById("sentenceInput").value;

var tags =
  "<select>" +
  "<option id = 'tagItem' value =''>nsubj</option>" +
  "<option id = 'tagItem' value =''>nsubjpass</option>" +
  "<option id = 'tagItem' value =''>obj</option>" +
  "<option id = 'tagItem' value =''>iobj</option>" +
  "<option id = 'tagItem' value =''>csubj</option>" +
  "<option id = 'tagItem' value =''>csubjpass</option>" +
  "<option id = 'tagItem' value =''>ccomp</option>" +
  "<option id = 'tagItem' value =''>xcomp</option>" +
  "<option id = 'tagItem' value =''>nmod</option>" +
  "<option id = 'tagItem' value =''>nmod:npmod</option>" +
  "<option id = 'tagItem' value =''>nmod:tmod</option>" +
  "<option id = 'tagItem' value =''>nmod:poss</option>" +
  "<option id = 'tagItem' value =''>advcl</option>" +
  "<option id = 'tagItem' value =''>advmod</option>" +
  "<option id = 'tagItem' value =''>neg</option>" +
  "<option id = 'tagItem' value =''>nummod</option>" +
  "<option id = 'tagItem' value =''>appos</option>" +
  "<option id = 'tagItem' value =''>amod</option>" +
  "<option id = 'tagItem' value =''>acl</option>" +
  "<option id = 'tagItem' value =''>acl:relcl</option>" +
  "<option id = 'tagItem' value =''>det</option>" +
  "<option id = 'tagItem' value =''>det:predet</option>" +
  "<option id = 'tagItem' value =''>case</option>" +
  "<option id = 'tagItem' value =''>compound</option>" +
  "<option id = 'tagItem' value =''>compound:prt</option>" +
  "<option id = 'tagItem' value =''>flat</option>" +
  "<option id = 'tagItem' value =''>fixed</option>" +
  "<option id = 'tagItem' value =''>foreign</option>" +
  "<option id = 'tagItem' value =''>conj</option>" +
  "<option id = 'tagItem' value =''>cc</option>" +
  "<option id = 'tagItem' value =''>cc:preconj</option>" +
  "<option id = 'tagItem' value =''>punct</option>" +
  "<option id = 'tagItem' value =''>list</option>" +
  "<option id = 'tagItem' value =''>parataxis</option>" +
  "<option id = 'tagItem' value =''>orphan</option>" +
  "<option id = 'tagItem' value =''>dislocated</option>" +
  "<option id = 'tagItem' value =''>reparandum</option>" +
  "<option id = 'tagItem' value =''>vocative</option>" +
  "<option id = 'tagItem' value =''>discourse</option>" +
  "<option id = 'tagItem' value =''>expl</option>" +
  "<option id = 'tagItem' value =''>aux</option>" +
  "<option id = 'tagItem' value =''>auxpass</option>" +
  "<option id = 'tagItem' value =''>cop</option>" +
  "<option id = 'tagItem' value =''>mark</option>" +
  "</select>"

parseBttn.addEventListener("click", function () {
  var str = document.getElementById("sentenceInput").value;
  var words = str.split(" ");
  var x = document.getElementById("input-group mb-3")

  function populate(relation = " - root", dependency = " - none") {
    for (var i = 0; i < words.length; i++) {
      //document.getElementById("wordButtons").innerHTML += "<input type = button " + " value = " + words[i] + " onclick = 'depSelection();'/>";
      wordButtons.push(words[i])
      //document.getElementById("Spreadsheet").innerHTML += "<p>" + (i + 1) + ": " + words[i] + "<select id='tags'></select>" + "<select id=" + words[i] + "></select>" + " </p><br>"

      // words.forEach(element => {
      //   document.getElementById(words[i]).innerHTML += "+"<option" + buttons + "</option>""
      // });

      document.getElementById("Spreadsheet").innerHTML += "<p>   " + (i + 1) + ": " + words[i] + " - " + tags + " - <input type='text' name='dependency'>" + " </p><br>"

    };
    document.getElementById("saveBttn").innerHTML += "<input type='submit' value ='Save to Database'>"

  };

  populate();

  function hideElem() {
    document.getElementById("input-group mb-3").style = "visibility: hidden"; 
  };

  hideElem();
});