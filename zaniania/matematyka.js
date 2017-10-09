var numbers = new Array(10);
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;
numbers[3] = 4;
numbers[4] = 5;
numbers[5] = 6;
numbers[6] = 7;
numbers[7] = 8;
numbers[8] = 9;
numbers[9] = 0;

fetch('/nastka/zaniania/data.json').then(
  response => response.json()
).then(
  data => {
   const exercises  = data
console.log(data)

const randomNumber = Math.floor(Math.random() * 202);
localStorage.setItem('random', exercises[randomNumber].equation);
var main_equation = exercises[randomNumber].equation;
console.log(main_equation)

function draw_equation() {
  document.getElementById("board").innerHTML = main_equation;
  document.getElementById("board").innerHTML = main_equation.replace('_', '<input id="gap" type="text">');
}

var el_gap = document.getElementById("gap");
var wyswietl = "";

function wyczysc() {
  przyciski.reset();
  wyswietl = "";
}

function przycisk(i) {
  if (i == 10) {
    wyswietl += 0;
  }
  else {
    wyswietl += i;
  }
  document.getElementById("gap").value = wyswietl;
}

window.onload = start;

function start() {
  moneybox_display1 = localStorage.getItem('moneybox_display'); // wyciąganie moneybox z pamięci
  moneybox_display = parseFloat(moneybox_display1);		// formatowanie ze stringa na float
  if (isNaN(moneybox_display.toFixed(2))) {
    document.getElementById("moneybox").innerHTML = "0.00zł";
  }
  else {
    document.getElementById("moneybox").innerHTML = moneybox_display.toFixed(2) + zl;
  }// wyświetlanie kasy przy starcie
  var content = "";
  for (var i = 0; i <= 9; i++) {
    var element = "nr" + i;
    content += '<div class ="number" id="' + element + '" onclick="przycisk(' + [i + 1] + ')">' + numbers[i] + '</div>';
    if ((i + 1) % 3 == 0) content = content + '<div style=clear:both;"></div>';
  }
  content += '<div class ="number" id="wyczysc" onclick="wyczysc()">Wyczyść</div>';
  document.getElementById("keyboard").innerHTML = content;
  draw_equation();
}

var zl = "zł";
var moneybox_display;

function sprawdz() {
  moneybox_display1 = localStorage.getItem('moneybox_display'); // wyciąganie moneybox z pamięci
  moneybox_display = parseFloat(moneybox_display1);		// formatowanie ze stringa na float
  var pole = document.getElementById("gap");
  var odpowiedz = document.getElementById("keyboard");
  var klawiatua_zamien = "keyboard";
  var el_button = document.getElementById("button").value;
  if (pole.value == answers[randomNumber]) {
    odpowiedz.innerHTML = " </br></br> <span class='good'>POPRAWNA ODPOWIEDŹ! </span> </br></br> Dostajesz 10 groszy!";
    document.getElementById("submit").innerHTML = '<input id="button2" type="submit" value="Jeszcze raz?" onclick=location.reload()>';
    if (isNaN(moneybox_display) == true) {
      moneybox_display = 0;
      moneybox_display = moneybox_display + 0.1;
    }
    else {
      moneybox_display = moneybox_display + 0.1;
    }
  }
  else if (pole.value == 0) {
    odpowiedz.innerHTML = "</br><br/></br>Nie została podana żadna odpowiedź";
    document.getElementById("submit").innerHTML = '<input id="button2" type="submit" value="Jeszcze raz?" onclick=location.reload()>';
  }
  else {
    document.getElementById("gap").value = answers[randomNumber];
    document.getElementById("gap").style.color = "red";
    odpowiedz.innerHTML = "</br></br><span class='wrong' >Niestety źle.</br></span> </br> Tracisz 5 groszy.";
    document.getElementById("submit").innerHTML = '<input id="button2" type="submit" value="Jeszcze raz?" onclick=location.reload()>';
    if (typeof(moneybox_display) == undefined) {
      moneybox_display = 0;
      moneybox_display = moneybox_display - 0.05;
    }
    else {
      moneybox_display = moneybox_display - 0.05;
    }
    if (moneybox_display <= 0 || isNaN(moneybox_display)) moneybox_display = 0;
  }

  localStorage.setItem('moneybox_display', moneybox_display); // ustawianie w localstorage
  document.getElementById("moneybox").innerHTML = moneybox_display.toFixed(2) + zl; //  wyświetlanie kasy w skarbonce po naciśnięciu
}


  }).catch(err => {
  console.log(err);
  document.querySelector('body').innerHTML = '<h1 style="text-align: center;">Przepraszamy, wystąpił błąd. Spróbuj jeszcze raz</h1>'
});


