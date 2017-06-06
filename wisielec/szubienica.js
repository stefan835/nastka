// Pomysł oraz grafiki są własnością Mirosława Zelenta => http://miroslawzelent.pl/  //

haslo = prompt ('Poproś kogoś o wpisanie tekstu zgadywanki. Jeśli nie wpiszesz nic, albo naciśniesz "Anuluj" hasłem będzie losowe przysłowie :) NIE PODGLĄDAJ ANASTAZJA!');
if (haslo == null || haslo==0){
var zagadki = new Array (45);

zagadki[0] =   'Apetyt rośnie w miarę jedzenia';
zagadki[1] =   'Bez pracy nie ma kołaczy';
zagadki[2] =   'Biednemu zawsze wiatr w oczy';
zagadki[3] =   'Być pracowitym jak pszczoła';
zagadki[4] =   'Cel uświęca środki';
zagadki[5] =   'Być kulą u nogi';
zagadki[6] =   'Co za dużo to niezdrowo';
zagadki[7] =   'Gdzie kucharek sześć tam nie ma co jeść';
zagadki[8] =   'Kłamstwo ma krótkie nogi';
zagadki[9] =   'Jak sobie pościelesz tak się wyśpisz';
zagadki[10] = 'Jak się nie ma co się lubi to się lubi co się ma';
zagadki[11] = 'Kto rano wstaje temu Pan Bóg daje';
zagadki[12] = 'Kuj żelazo póki gorące';
zagadki[13] = 'Łatwo przyszło łatwo poszło';
zagadki[14] = 'Mowa jest srebrem a milczenie złotem';
zagadki[15] = 'Nie bądź w gorącej wodzie kąpany';
zagadki[16] = 'Nadzieja matką głupich';
zagadki[17] = 'Nie mów drugiemu co tobie nie miłe';
zagadki[18] = 'Nieszczęścia chodzą parami';
zagadki[19] = 'Paluszek i główka to szkolna wymówka';
zagadki[20] = 'Od przybytku głowa nie boli';
zagadki[21] = 'Pierwsze koty za płoty';
zagadki[22] = 'Raz na wozie raz pod wozem';
zagadki[23] = 'Stara miłość nie rdzewieje';
zagadki[24] = 'Strach ma wielkie oczy';
zagadki[25] = 'Szukać igły w stogu siana';
zagadki[26] = 'Trafiła kosa na kamień';
zagadki[27] = 'Trafić z deszczu pod rynnę';
zagadki[28] = 'W marcu jak w garncu';
zagadki[29] = 'Wyszło szydło z worka';
zagadki[30] = 'Z pustego i Salomon nie naleje';
zagadki[31] = 'Żeby kózka nie skakała to by nóżki nie złamał';
zagadki[32] = 'Zgoda buduje niezgoda rujnuje';
zagadki[33] = 'Pieniądze szczęścia nie dają';
zagadki[34] = 'Prawda w oczy kole';
zagadki[35] = 'Nie wchodzi się dwa razy do tej samej rzeki';
zagadki[36] = 'Nie wszystko złoto co się świeci';
zagadki[37] = 'Nie kupuj kota w worku';
zagadki[38] = 'Nie ma dymu bez ognia';
zagadki[39] = 'Głupi ma zawsze szczęście';
zagadki[40] = 'Czuć się jak ryba w wodzie';
zagadki[41] = 'Dla chcącego nic trudnego';
zagadki[42] = 'Do wesela się zagoi';
zagadki[43] = 'Gdy kota nie ma myszy harcują';
zagadki[44] = 'Gdy się człowiek spieszy to się diabeł cieszy';
zagadki[45] = 'Co cię nie zabije to cię wzmocni';

function losowanie()
{
var wylosowana_liczba = Math.floor(Math.random() * 45);
wylosowane_haslo = zagadki[wylosowana_liczba];
}

losowanie();

 var haslo = wylosowane_haslo;
}

haslo = haslo.toUpperCase();

var dlugosc=haslo.length;
var ile_skuch=0;

var yes = new Audio("yes.mp3");
var no = new Audio("no.mp3");

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start()
{
	var tresc_diva = "";
	
	for (i=0; i<=34; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class = "litera" onclick="sprawdz('+i+')" id="'+element+'">' + litery[i] + '</div>';
		if  ((i+1) % 7 == 0) tresc_diva =tresc_diva + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	wypisz_haslo();
}
String.prototype.ustawZnak = function (miejsce, znak)
{
	if (miejsce >this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
}

function sprawdz(nr)
{
	
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr])
		{
			haslo1= haslo1.ustawZnak(i, litery[nr]);
			trafiona = true;
		}
	}
	
	if (trafiona == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00c000";
		document.getElementById(element).style.border = "3px solid #00c000";
		document.getElementById(element).style.cursor = "default";
	}
	else
	{	
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#c00000";
		document.getElementById(element).style.border = "3px solid #c00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute( "onclick", ";");
		
		//skucha
		ile_skuch++;
		var obraz = "img/s" + ile_skuch + ".jpg";
		document.getElementById("szubienica").style.backgroundImage = "url('"+obraz+"')";
	}
	//wygrana
	if (haslo == haslo1)
	{
	
		document.getElementById("alfabet").innerHTML = " Tak jest! Podano prawidłowe hasło: " + haslo + '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
		
	}
	
	//przegrana
	if(ile_skuch>=9)
			document.getElementById("alfabet").innerHTML = "Przegrana! Prawidłowe hasło: " + haslo + '<br/><br/><span class="reset1" onclick="location.reload()">JESZCZE RAZ?</span>';
	wypisz_haslo();
}