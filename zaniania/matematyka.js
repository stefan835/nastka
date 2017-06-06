var numbers = new Array(10);
numbers[0]=1;
numbers[1]=2;
numbers[2]=3;
numbers[3]=4;
numbers[4]=5;
numbers[5]=6;
numbers[6]=7;
numbers[7]=8;
numbers[8]=9;
numbers[9]=0;
//equations and ansers
var equation= new Array(101)
equation[0] ='6+_+11=22';
equation[1]= '2+9:3=_';
equation[2]= '_+11=15';
equation[3]= '12:3=_';
equation[4]= '3•_•4=24';
equation[5]= '1+2•2+3=_';
equation[6]= '1+_+2=8';
equation[7]= '9-6+_=4';
equation[8]= '_•2+4=14';
equation[9]= '2+3-4+2=_';
equation[10]= '_+2=4';
equation[11]= '3+_=12';
equation[12]= '22-14=_';
equation[13]= '_-3=4';
equation[14]= '_•2=18';
equation[15]= '16:_=8';
equation[16]= '9:3=_';
equation[17]= '6+5+_=13';
equation[18]= '66-58=_';
equation[19]= '99-95=_';
equation[20]= '63-23=_';
equation[21]= '50-30+_=26';
equation[22]= '80-20-_=53';
equation[23]= '_+5-2+6=17';
equation[24]= '82-72=_';
equation[25]= '96-36=_';
equation[26]= '4+_=6';
equation[27]= '9-5=_';
equation[28]= '12-7=_';
equation[29]= '15-5-2=_';
equation[30]= '4+_+9+2=17';
equation[31]= '10-_+9-1=17';
equation[32]= '1+_+3+4=12';
equation[33]= '60–35=_';
equation[34]= '62–31=_';
equation[35]= '_•31=62';
equation[36]= '3•_=18';
equation[37]= '11-5+_-21+16=7';
equation[38]= '42-23+31+2=_';
equation[39]= '2•2•_=8';
equation[40]= '2•6+2•5=_'
equation[41]= '2•2•2=_';
equation[42]= '3•3=_';
equation[43]= '3•_=9';
equation[44]= '3•3•_=27';
equation[45]= '19-2+3-_=11';
equation[46]= '97-31=_';
equation[47]= '100-99=_';
equation[48]= '58-56=_';
equation[49]= '73-69=';
equation[51]= '_•48=48';
equation[52]= '22:_=11';
equation[53]= '12:4=_';
equation[54]= '40:10=_';
equation[55]= '75-55=_';
equation[56]= '15:3=';
equation[57]= '_•3=15';
equation[58]= '15:_=5';
equation[59]= '10•_=40';
equation[60]= '2•7+3•7=_';
equation[61]= '3•2•4=_';
equation[62]= '42+55=_';
equation[63]= '_+32=66';
equation[64]= '102+_=156';
equation[65]= '22+41=_';
equation[66]= '52-_=15';
equation[67]= '6•4=_';
equation[68]= '92-71=_';
equation[69]= '99+_=109';
equation[70]= '42+12+42=_';
equation[71]= '98-21=_';
equation[72]= '_-52=47';
equation[73]= '12•3=_';
equation[74]= '62-51=_';
equation[75]= '92-59=_';
equation[76]= '_-59=33';
equation[77]= '51•_=102';
equation[78]= '72-21=_';
equation[79]= '42+12=_';
equation[80]= '18•2=_';
equation[81]= '72-42+_=94';
equation[82]= '32+52+2=_';
equation[83]= '92-91•1:1=_';
equation[84]= '72-21+4=_';
equation[85]= '52-_+52=85';
equation[86]= '88-_•2+1=1';
equation[87]= '88-44•2+1=_';
equation[88]= '14+65=_';
equation[89]= '55-17+32=_';
equation[90]= '66-99+44=_';
equation[91]= '4•2•2=_';
equation[92]= '92-55=_';
equation[93]= '999-998-_';
equation[94]= '200•_=600';
equation[95]= '12-5+8+2+1+5=_';
equation[96]= '23•2+12=_';
equation[97]= '23•_+12=58';
equation[98]= '99-22-24-12=_';
equation[99]= '2•22=_';
equation[100]='1000-998=_';
equation[101]=  '18-6+2•3=_';
equation[102]= ' _-6+2•3=18';
equation[103]= '3•4+6-2=_';
equation[104]=  '3•4+_-2=16';
equation[105]= '24-16=_';
equation[106]= '24-_=8';
equation[107]= '4•5+3=_';
equation[108]= '4•_+3=23';
equation[109]= '21:3+3=_';
equation[110]= '21:_+3=10';
equation[111]= '19-7+3•3=_';
equation[112]= '19-_+3•3=21';
equation[113]= '23+7-2=_';
equation[114]=  '23+_-2=28';
equation[115]= '40-20-1=_';
equation[116]= '_-20-1=19';
equation[117]= '2•7+6=_';
equation[118]= '2•_+6=20';
equation[119]= '7•3+4=_';
equation[120]= '7•3+_=25';
equation[121]= '9•3-7=_';
equation[122]= '_•3-7=20';
equation[123]= '18+6-24=_';
equation[124]= '18+6-_=48';
equation[125]= '3•3+18=_';
equation[126]= '3•3+_=27';
equation[127]= '25-10+25=_';
equation[128]= '25-10+_=10';
equation[129]= '4•4-4•1=_';
equation[130]= '4•4-4•_=12';
equation[131]= '24-12+4=_';
equation[132]= '24-_+4=16';
equation[133]= '30-3•5=_';
equation[134]=  '_-3•5=15';
equation[135]= '27:3=_';
equation[136]= '27:_=9';
equation[137]= '3•9+3=_';
equation[138]= '_•9+3=30';
equation[139]= '4•5-4=_';
equation[140]= '4•_-4=16';
equation[141]= '16-8=_';
equation[142]= '_-8=8';
equation[143]= '19+6-5=_';
equation[144]= '19+6-_=20';
equation[145]= '8•3+4=_';
equation[146]= '8•_+4=28';
equation[147]= '4•6-4=_';
equation[148]= '4•_-4=20';
equation[149]= '6+12+2•1=_';
equation[150]= '6+12+_•1=20';
equation[151]= '8•2-3:1=_';
equation[152]= '8•_-3:1=13';
equation[153]= '4•4-2•2=_';
equation[154]= '4•_-2•2=12';
equation[155]= '5•5-5=_';
equation[156]= '5•_-5=20';
equation[157]= '8:4+10=_';
equation[158]= '_:4+10=12';
equation[159]= '16:4+5=_';
equation[160]= '16:4+_=9';
equation[161]= '21:3+3=_';
equation[162]= '21:_+3=10';
equation[163]= '24:8+3=_';
equation[164]= '24:8+_=6';
equation[165]= '30-5+1•2=_';
equation[166]= '30-_+1•2=27';
equation[167]= '27-7+3=_';
equation[168]= '27-_+3=23';
equation[169]= '27:3+1=_';
equation[170]= '_:3+1=10';
equation[171]= '12:3+4=_';
equation[172]= '12:3+_=8';
equation[173]= '3•5-2•3=_';
equation[174]= '3•_-2•3=9';
equation[175]= '2•8-6:3=_';
equation[176]= '2•8-_:3=18';
equation[177]= '12+3-6=_';
equation[178]= '12+3-_=9';
equation[179]= '9:3+15:3=_';
equation[180]= '9:3+15:_=8';
equation[181]= '18:2-3•2=_';
equation[182]= '18:_-3•2=3';
equation[183]= '13+4+2•2=_';
equation[184]= '13+_+2•2=21';
equation[185]= '17-2•3+2=_';
equation[186]= '_-2•3+2=13';
equation[187]= '25-2•5=_';
equation[188]= '25-_•5=15';
equation[189]= '26-2•2+3=_';
equation[190]= '26-2•2+_=25';
equation[191]= '30-2•5-5=_';
equation[192]= '30-2•_-5=15';
equation[193]= ' 8-2+3•3=_';
equation[194]= ' _-2+3•3=15';
equation[195]= '4•6+4=_';
equation[196]= '4•_+4=28';
equation[197]= '3•7-2:2=_';
equation[198]= '3•7-2:_=20';
equation[199]= '13:1-3=_';
equation[200]= '_:1-3=10';
equation[201]= '4:1+3=_';
equation[202]= '4:1+_=7';
var answers = new Array(101)
answers[0] ='5';
answers[1]= '5';
answers[2]= '4';
answers[3]= '4';
answers[4]= '2';
answers[5]= '8';
answers[6]= '5';
answers[7]= '1';
answers[8]= '5';
answers[9]= '3';
answers[10]= '2';
answers[11]= '9';
answers[12]= '8';
answers[13]= '7';
answers[14]= '9';
answers[15]= '2';
answers[16]= '3';
answers[17]= '2';
answers[18]= '8';
answers[19]= '4';
answers[20]= '40';
answers[21]= '6';
answers[22]= '7';
answers[23]= '8';
answers[24]= '10';
answers[25]= '60';
answers[26]= '2';
answers[27]= '4';
answers[28]= '5';
answers[29]= '8';
answers[30]= '2';
answers[31]= '1';
answers[32]= '4';
answers[33]= '25';
answers[34]= '31';
answers[35]= '2';
answers[36]= '6';
answers[37]= '6';
answers[38]= '52';
answers[39]= '2';
answers[40]= '22';
answers[41]= '8';
answers[42]= '9';
answers[43]= '3';
answers[44]= '3';
answers[45]= '9';
answers[46]= '66';
answers[47]= '1';
answers[48]= '2';
answers[49]= '4';
answers[50]= '2';
answers[51]= '1';
answers[52]= '2';
answers[53]= '3';
answers[54]= '4';
answers[55]= '20';
answers[56]= '5';
answers[57]= '5';
answers[58]= '3';
answers[59]= '4';
answers[60]= '35';
answers[61]= '24';
answers[62]= '97';
answers[63]= '34';
answers[64]= '54';
answers[65]= '63';
answers[66]= '37';
answers[67]= '24';
answers[68]= '21';
answers[69]= '10';
answers[70]= '96';
answers[71]= '67';
answers[72]= '99';
answers[73]= '36';
answers[74]= '1';
answers[75]= '33';
answers[76]= '92';
answers[77]= '2';
answers[78]= '51';
answers[79]= '54';
answers[80]= '36';
answers[81]= '64';
answers[82]= '86';
answers[83]= '1';
answers[84]= '55';
answers[85]= '19';
answers[86]= '44';
answers[87]= '1';
answers[88]= '79';
answers[89]= '70';
answers[90]= '11';
answers[91]= '16';
answers[92]= '37';
answers[93]= '1';
answers[94]= '3';
answers[95]= '23';
answers[96]= '58';
answers[97]= '2';
answers[98]= '41';
answers[99]= '44';
answers[100]='2';
answers[101]=  '18';
answers[102]=  '18';
answers[103]=  '16';
answers[104]=  '6';
answers[105]=  '8';
answers[106]=  '16';
answers[107]=  '23';
answers[108]=  '5';
answers[109]=  '10';
answers[110]=  '3';
answers[111]=  '21';
answers[112]=  '7';
answers[113]=  '28';
answers[114]=  '7';
answers[115]=  '19';
answers[116]=  '40';
answers[117]=  '20';
answers[118]=  '7';
answers[119]=  '25';
answers[120]=  '4';
answers[121]=  '20';
answers[122]=  '9';
answers[123]=  '48';
answers[124]=  '24';
answers[125]=  '27';
answers[126]=  '18';
answers[127]=  '25';
answers[128]=  '25';
answers[129]=  '12';
answers[130]=  '1';
answers[131]=  '16';
answers[132]=  '12';
answers[133]=  '30';
answers[134]=  '15';
answers[135]=  '9';
answers[136]=  '3';
answers[137]=  '30';
answers[138]=  '3';
answers[139]=  '16';
answers[140]=  '5';
answers[141]=  '8';
answers[142]=  '16';
answers[143]=  '20';
answers[144]=  '5';
answers[145]=  '28';
answers[146]=  '3';
answers[147]=  '20';
answers[148]=  '6';
answers[149]=  '20';
answers[150]=  '2';
answers[151]=  '13';
answers[152]=  '2';
answers[153]=  '12';
answers[154]=  '4';
answers[155]=  '20';
answers[156]=  '5';
answers[157]=  '12';
answers[158]=  '8';
answers[159]=  '9';
answers[160]=  '5';
answers[161]=  '10';
answers[162]=  '3';
answers[163]=  '6';
answers[164]=  '3';
answers[165]=  '27';
answers[166]=  '5';
answers[167]=  '23';
answers[168]=  '7';
answers[169]=  '10';
answers[170]=  '27';
answers[171]=  '8';
answers[172]=  '4';
answers[173]=  '9';
answers[174]=  '5';
answers[175]=  '18';
answers[176]=  '6';
answers[177]=  '9';
answers[178]=  '6';
answers[179]=  '8';
answers[180]=  '3';
answers[181]=  '3';
answers[182]=  '2';
answers[183]=  '21';
answers[184]=  '4';
answers[185]=  '13';
answers[186]=  '17';
answers[187]=  '15';
answers[188]=  '2';
answers[189]=  '25';
answers[190]=  '3';
answers[191]=  '15';
answers[192]=  '5';
answers[193]=  '15';
answers[194]=  '8';
answers[195]=  '28';
answers[196]=  '6';
answers[197]=  '20';
answers[198]=  '2';
answers[199]=   '10';
answers[200]=  '13';
answers[201]=  '7';
answers[202]=  '3';



var random= Math.floor(Math.random()*202);
localStorage.setItem('random', equation[random]);
var main_equation = equation[random];

function draw_equation(){
	document.getElementById("board").innerHTML= main_equation;
	document.getElementById("board").innerHTML= main_equation.replace('_', '<input id="gap" type="text">');}
	
var el_gap = document.getElementById("gap");
var wyswietl="";

function wyczysc(){
	przyciski.reset();
	wyswietl="";}
	
function przycisk(i){
	if (i==10){
		wyswietl += 0;}
	else{
	wyswietl += i;}
	document.getElementById("gap").value = wyswietl;}
	
window.onload = start;
function start(){
		moneybox_display1 = localStorage.getItem('moneybox_display'); // wyciąganie moneybox z pamięci
		moneybox_display= parseFloat(moneybox_display1);		// formatowanie ze stringa na float
			if(isNaN(moneybox_display.toFixed(2))){
				document.getElementById("moneybox").innerHTML= "0.00zł";}
			else{
			document.getElementById("moneybox").innerHTML=  moneybox_display.toFixed(2)+zl; }// wyświetlanie kasy przy starcie	
		var content="";
		for(var i=0; i<=9;i++){
			var element ="nr" + i;
			content+= '<div class ="number" id="'+element+'" onclick="przycisk('+[i+1]+')">'+numbers[i]+'</div>';
			if ((i+1) % 3 == 0) content = content + '<div style=clear:both;"></div>';}		
		content+='<div class ="number" id="wyczysc" onclick="wyczysc()">Wyczyść</div>';
		document.getElementById("keyboard").innerHTML = content;
		draw_equation();
}

var zl = "zł";
var moneybox_display;

function sprawdz(){
		moneybox_display1 = localStorage.getItem('moneybox_display'); // wyciąganie moneybox z pamięci
		moneybox_display= parseFloat(moneybox_display1);		// formatowanie ze stringa na float
	 var pole = document.getElementById("gap");
     var odpowiedz = document.getElementById("keyboard");
	 var klawiatua_zamien= "keyboard";
	 var  el_button = document.getElementById("button").value;
	 if (pole.value==answers[random]) {
		odpowiedz.innerHTML = " </br></br> <span class='good'>POPRAWNA ODPOWIEDŹ! </span> </br></br> Dostajesz 10 groszy!"  ;
		document.getElementById("submit").innerHTML='<input id="button2" type="submit" value="Jeszcze raz?" onclick=location.reload()>';
			if (isNaN(moneybox_display)==true){
				moneybox_display = 0;
				moneybox_display = moneybox_display +0.1;}
			else {
				moneybox_display = moneybox_display +0.1;} 
	 }
	  else if (pole.value==0) {
		  odpowiedz.innerHTML = "</br><br/></br>Nie została podana żadna odpowiedź";
		  document.getElementById("submit").innerHTML='<input id="button2" type="submit" value="Jeszcze raz?" onclick=location.reload()>';}
	  else {
		  document.getElementById("gap").value=answers[random];
		  document.getElementById("gap").style.color = "red";
		  odpowiedz.innerHTML = "</br></br><span class='wrong' >Niestety źle.</br></span> </br> Tracisz 5 groszy." ;
		  document.getElementById("submit").innerHTML='<input id="button2" type="submit" value="Jeszcze raz?" onclick=location.reload()>';
		  if (typeof(moneybox_display)==undefined){
				moneybox_display = 0;
				moneybox_display = moneybox_display -0.05;}
			else {
				moneybox_display = moneybox_display -0.05;}
		  if (moneybox_display  <= 0 || isNaN(moneybox_display)) moneybox_display  = 0; }
	
		localStorage.setItem('moneybox_display', moneybox_display); // ustawianie w localstorage
		document.getElementById("moneybox").innerHTML= moneybox_display.toFixed(2)+zl; //  wyświetlanie kasy w skarbonce po naciśnięciu	  
} 
