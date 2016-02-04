function readText(){
  //read the enter key
  if (event.keyCode == 13){
    var text = document.getElementById('text').value;
    console.log("Text:", text);
  }
}

function readRange(){
  var slider = document.getElementById('range').value;
  console.log("Slider:", slider);
}

function readNumber(){
  var number = document.getElementById('number').value;
  console.log("Number:", number);
}

function clickButton(){
  console.log("Button clicked!");
}

function mouseoverImage(){
  console.log("Mouse over the button!");
}

function readSelect(){
  var select = document.getElementById('select').value;
  console.log("Select:", select);
}

function readCheckbox(){
  var checkbox = document.getElementById('checkbox').checked;
  console.log("Checkbox:", checkbox);
}

function readRadio(){
  var radio = document.getElementById('radio').checked;
  console.log("Radio:", radio);
}
