// ETA Script for http://cityinc.se
// https://github.com/zedor/CityInc-ETA/
// Release version 3
// Script by selenagomez
// Game by kvadd
//
//
// INSTRUCTIONS:
//	1. Copy all of the code below,
//	2. Open the console in the browser tab where you have the game open.
//		For Chrome press ctrl+shift+j to open the console.
//      For FireFox press ctrl+shift+k to open the console.
//      For Internet Explorer press f12 then press ctrl+2 to open the console.
//	3. Paste in the entire contents of this script and press enter to
//	activate it. Press ctrl+enter if you are using Internet Explorer.

function convertNumber( input ) {
	try {
		if( Object.prototype.toString.call(input) != '[object String]' ) input = input[0];
		input = input.replace(',','');
		var str = input.split(' ').slice(1,2);
		var num = parseFloat(input.split(' ').slice(0,1));

		if( str=='Million' ) num = num * Math.pow(10,6);
		if( str=='Billion' ) num = num * Math.pow(10,9);
		if( str=='Trillion' ) num = num * Math.pow(10,12);
		if( str=='Quadrillion' ) num = num * Math.pow(10,15);
		if( str=='Quintillion' ) num = num * Math.pow(10,18);
		if( str=='Sextillion' ) num = num * Math.pow(10,21);
		if( str=='Septillion' ) num = num * Math.pow(10,24);
		if( str=='Octillion' ) num = num * Math.pow(10,27);
		if( str=='Nonillion' ) num = num * Math.pow(10,30);
		if( str=='Decillion' ) num = num * Math.pow(10,33);
		if( str=='Undecillion' ) num = num * Math.pow(10,36);
		if( str=='Duodecillion' ) num = num * Math.pow(10,39);
		if( str=='Tredecillion' ) num = num * Math.pow(10,42);
		if( str=='Quattuordecillion' ) num = num * Math.pow(10,45);
		if( str=='Quinquadecillion' ) num = num * Math.pow(10,48);
		if( str=='Sedecillion' ) num = num * Math.pow(10,51);
		if( str=='Septendecillion' ) num = num * Math.pow(10,54);
		if( str=='Octodecillion' ) num = num * Math.pow(10,57);
		if( str=='Novendecillion' ) num = num * Math.pow(10,60);
		if( str=='Vigintillion' ) num = num * Math.pow(10,63);
		if( str=='Unvigintillion' ) num = num * Math.pow(10,66);
		if( str=='Duovigintillion' ) num = num * Math.pow(10,69);
		if( str=='Tresvigintillion' ) num = num * Math.pow(10,72);
		if( str=='Quattuorvigintillion' ) num = num * Math.pow(10,75);
		if( str=='Quinquavigintillion' ) num = num * Math.pow(10,78);
		if( str=='Sesvigintillion' ) num = num * Math.pow(10,81);
		if( str=='Septemvigintillion' ) num = num * Math.pow(10,84);
		if( str=='Octovigintillion' ) num = num * Math.pow(10,87);
		if( str=='Novemvigintillion' ) num = num * Math.pow(10,90);
		if( str=='Trigintillion' ) num = num * Math.pow(10,93);
		if( str=='Untrigintillion' ) num = num * Math.pow(10,96);
		if( str=='Duotrigintillion' ) num = num * Math.pow(10,99);
		if( str=='Googol' ) num = num * Math.pow(10,100);
		if( str=='Trestrigintillion' ) num = num * Math.pow(10,102);
		if( str=='Quattuortrigintillion' ) num = num * Math.pow(10,105);
		if( str=='Quinquatrigintillion' ) num = num * Math.pow(10,108);
		if( str=='Sestrigintillion' ) num = num * Math.pow(10,111);
		if( str=='Septentrigintillion' ) num = num * Math.pow(10,114);
		if( str=='Octotrigintillion' ) num = num * Math.pow(10,117);
		if( str=='Noventrigintillion' ) num = num * Math.pow(10,120);
		if( str=='Quadragintillion' ) num = num * Math.pow(10,123);
		if( str=='Unquadragintillion' ) num = num * Math.pow(10,126);
		if( str=='Duoquadragintillion' ) num = num * Math.pow(10,129);
		if( str=='Trequadragintillion' ) num = num * Math.pow(10,132);
		if( str=='Quattuorquadragintillion' ) num = num * Math.pow(10,135);
		if( str=='Quinquadragintillion' ) num = num * Math.pow(10,138);
		if( str=='Sexquadragintillion' ) num = num * Math.pow(10,141);
		if( str=='Septquadragintillion' ) num = num * Math.pow(10,144);
		if( str=='Octoquadragintillion' ) num = num * Math.pow(10,147);
		if( str=='Novemquadragintillion' ) num = num * Math.pow(10,150);
		if( str=='Quinquagintillion' ) num = num * Math.pow(10,153);
		if( str=='Unquinquagintillion' ) num = num * Math.pow(10,156);
		if( str=='Duoquinquagintillion' ) num = num * Math.pow(10,159);
		if( str=='Trequinquagintillion' ) num = num * Math.pow(10,162);
		if( str=='Quattuorquinquagintillion' ) num = num * Math.pow(10,165);
		if( str=='Quinquinquagintillion' ) num = num * Math.pow(10,168);
		if( str=='Sexquinquagintillion' ) num = num * Math.pow(10,171);
		if( str=='Septquinquagintillion' ) num = num * Math.pow(10,174);
		if( str=='Octoquinquagintillion' ) num = num * Math.pow(10,177);
		if( str=='Novemquinquagintillion' ) num = num * Math.pow(10,180);
		if( str=='Sexagintillion' ) num = num * Math.pow(10,183);
		if( str=='Unsexagintillion' ) num = num * Math.pow(10,186);
		if( str=='Duosexagintillion' ) num = num * Math.pow(10,189);
		if( str=='Tresexagintillion' ) num = num * Math.pow(10,192);
		if( str=='Quattuorsexagintillion' ) num = num * Math.pow(10,195);
		if( str=='Quinsexagintillion' ) num = num * Math.pow(10,198);
		if( str=='Sexsexagintillion' ) num = num * Math.pow(10,201);
		if( str=='Septsexaginillion' ) num = num * Math.pow(10,204);
		if( str=='Octosexagintillion' ) num = num * Math.pow(10,207);
		if( str=='Novemsexagintillion' ) num = num * Math.pow(10,210);
		if( str=='Septuagintillion' ) num = num * Math.pow(10,213);
		if( str=='Unseptuagintillion' ) num = num * Math.pow(10,216);
		if( str=='Duoseptuagintillion' ) num = num * Math.pow(10,219);
		if( str=='Treseptuagintillion' ) num = num * Math.pow(10,222);
		if( str=='Quattuorseptuagintillion' ) num = num * Math.pow(10,225);
		if( str=='Quinseptuagintillion' ) num = num * Math.pow(10,228);
		if( str=='Sexseptuagintillion' ) num = num * Math.pow(10,231);
		if( str=='Septseptuagintillion' ) num = num * Math.pow(10,234);
		if( str=='Octoseptuagintillion' ) num = num * Math.pow(10,237);
		if( str=='Novemseptuagintillion' ) num = num * Math.pow(10,240);
		if( str=='Octogintillion' ) num = num * Math.pow(10,243);
		if( str=='Unoctogintillion' ) num = num * Math.pow(10,246);
		if( str=='Duooctogintillion' ) num = num * Math.pow(10,249);
		if( str=='Treoctogintillion' ) num = num * Math.pow(10,252);
		if( str=='Quattuoroctogintillion' ) num = num * Math.pow(10,255);
		if( str=='Quinoctogintillion' ) num = num * Math.pow(10,258);
		if( str=='Sexoctogintillion' ) num = num * Math.pow(10,261);
		if( str=='Septoctogintillion' ) num = num * Math.pow(10,264);
		if( str=='Octooctogintillion' ) num = num * Math.pow(10,267);
		if( str=='Novemoctogintillion' ) num = num * Math.pow(10,270);
		if( str=='Nonagintillion' ) num = num * Math.pow(10,273);
		if( str=='Unnonagintillion' ) num = num * Math.pow(10,276);
		if( str=='Duononagintillion' ) num = num * Math.pow(10,279);
		if( str=='Trenonagintillion' ) num = num * Math.pow(10,282);
		if( str=='Quattuornonagintillion' ) num = num * Math.pow(10,285);
		if( str=='Quinnonagintillion' ) num = num * Math.pow(10,288);
		if( str=='Sexnonagintillion' ) num = num * Math.pow(10,291);
		if( str=='Septnonagintillion' ) num = num * Math.pow(10,294);
		if( str=='Onctononagintillion' ) num = num * Math.pow(10,297);
		if( str=='Novemnonagintillion' ) num = num * Math.pow(10,300);
		if( str=='Centillion' ) num = num * Math.pow(10,303);

		return num;
	} catch (err) {
		return 0;
	}
}

function convertToScientific( input ) {
	try {
		return input.toExponential(2);
	} catch(err) {
		return 0;
	}
}

var mainScope = angular.element($('body')).scope();
var buildingNames = ['Roads', 'Houses', 'Offices', 'Buses', 'Schools', 'Taxis', 'Docks', 'Medics', 'Shops', 'Banks', 'Each'];
var holdBuildings = mainScope.build;
var holdGoals = mainScope.goalsMeta;
var holdUpgrades = mainScope.upgradesMeta;
var holdCity = mainScope.tilesMeta;
var citizenETAcost;
var currentCitizens;
var resetCitizens;
var currentIncome;
var currentMoney;
var sessionMoney;
var upgradeLimit; // can show max 10 upgrades
var cityLimit; // can show max 10 city upgrades
var initialCityCalc = true;

var btnMenu = document.createElement('div');
btnMenu.setAttribute('class', 'luckiest');
btnMenu.setAttribute('id', 'btnMenu');
btnMenu.innerHTML = 'ETA Script';
$('body > nav').prepend(btnMenu);
$('#btnMenu').css({ 'position': 'absolute',
	'user-select': 'none',
	'margin-bottom': '10px',
	'bottom': '0',
	'cursor': 'pointer',
	'margin-left': '25px',
	'font-size': '16px',
	'font-weight': 'bold',
	'color': 'rgba(255,255,255,.85)',
	'border-bottom': '2px solid transparent',
	'transition': 'all 0.5s'});
$('#btnMenu').mouseover(function() {
    if( $('#holdLinux').css('display') == 'none' ) $(this).css({'background-color': 'transparent', 'border-bottom-color': 'rgba(255,255,255,.25)'});
}).mouseout(function() {
    if( $('#holdLinux').css('display') == 'none' ) $(this).css({'background-color': 'transparent', 'border-bottom-color': 'transparent'});
});
$('#btnMenu').click(function() {
	if( $('#holdLinux').css('display') == 'block' ) {
		$('#holdLinux').css('display', 'none');
		$('#btnMenu').css('border-bottom-color', 'rgba(255,255,255,.25)')
	} else {
		$('#holdLinux').css('display', 'block');
		$('#btnMenu').css('border-bottom-color', '#fff')
	}
});

var holdLinux = document.createElement('div');
$(holdLinux).attr('id', 'holdLinux');
$(holdLinux).css({ 'top': '64px',
	'position': 'fixed',
	'display': 'none',
	'z-index': '1000' });
$('body > nav').after(holdLinux);

var wndSettings = document.createElement('div');
$(wndSettings).css({ 'user-select': 'none',
	'margin-bottom': '10px',
	'box-shadow': '0 3px 10px rgba(0,0,0,.5)',
	'padding-left': '5px',
	'padding-right': '5px',
	'padding-bottom': '5px',
	'width': '200px',
	'background-color': '#fff',
	'border-radius': '4px',});
wndSettings.setAttribute('id', 'wndSettings');
$(holdLinux).append(wndSettings);

// text
var holdTexts = document.createElement('div');
holdTexts.setAttribute('id', 'holdTexts');
$('#wndSettings').append(holdTexts);

var txtIncome = document.createElement('span');
txtIncome.setAttribute('id', 'txtIncome');
txtIncome.setAttribute('class', 'smalltext');
$('#holdTexts').append(txtIncome).append('</br>');

var txtMoney = document.createElement('span');
txtMoney.setAttribute('id', 'txtMoney');
txtMoney.setAttribute('class', 'smalltext');
$('#holdTexts').append(txtMoney).append('</br>');

var txtSession = document.createElement('span');
txtSession.setAttribute('id', 'txtSession');
txtSession.setAttribute('class', 'smalltext');
$('#holdTexts').append(txtSession).append('</br>');

var txtCitizens = document.createElement('span');
txtCitizens.setAttribute('id', 'txtCitizens');
txtCitizens.setAttribute('class', 'smalltext');
$('#holdTexts').append(txtCitizens).append('</br>');

var txtResetNow = document.createElement('span');
txtResetNow.setAttribute('id', 'txtResetNow');
txtResetNow.setAttribute('class', 'smalltext');
$('#holdTexts').append(txtResetNow);
$('#txtResetNow').attr('per', '0');

var holdETAButtons = document.createElement('div');
holdETAButtons.setAttribute('class', 'cardbuttons');
holdETAButtons.setAttribute('id', 'holdETAButtons');
$('#wndSettings').append(holdETAButtons);

var holdETAButtons2 = document.createElement('div');
holdETAButtons2.setAttribute('class', 'btn-group btn-group-justified');
holdETAButtons2.setAttribute('role', 'group');
holdETAButtons2.setAttribute('aria-label', '...');
holdETAButtons2.setAttribute('id', 'holdETAButtons2');
$('#holdETAButtons').append(holdETAButtons2);

var btnToggleETA = document.createElement('button');
btnToggleETA.setAttribute('id', 'btnToggleETA');
btnToggleETA.setAttribute('type', 'button');
btnToggleETA.setAttribute('class', 'btn btn-default luckiest');
btnToggleETA.style.width = '50%';
btnToggleETA.style.height = '34px';
btnToggleETA.innerHTML = 'ETA';
$('#holdETAButtons2').append(btnToggleETA)
$('#btnToggleETA').attr('pressed', 'false');
$('#btnToggleETA').text('ETA');
$('#btnToggleETA').click(function() {
	if( $('#btnChangeETA').text() == 'Goal' ) {
		if( $('#wndETAGoal').css('display') == 'block' ) $('#wndETAGoal').css('display', 'none');
		else $('#wndETAGoal').css('display', 'block');
	} else if( $('#btnChangeETA').text() == 'Upgrades' ) {
		if( $('#wndETAUpgrade').css('display') == 'block' ) $('#wndETAUpgrade').css('display', 'none');
		else $('#wndETAUpgrade').css('display', 'block');
	} else if( $('#btnChangeETA').text() == 'City' ) {
		if( $('#wndETACity').css('display') == 'block' ) $('#wndETACity').css('display', 'none');
		else $('#wndETACity').css('display', 'block');
	} else if( $('#btnChangeETA').text() == 'Citizen' ) {
		if( $('#wndETACitizen').css('display') == 'block' ) $('#wndETACitizen').css('display', 'none');
		else $('#wndETACitizen').css('display', 'block');
	}
	if( $('#btnToggleETA').attr('pressed') == 'false' ) {
		$('#btnToggleETA').css('background-color', '#48a04c');
		$('#btnToggleETA').attr('pressed', 'true');
	} else {
		$('#btnToggleETA').css('background-color', '');
		$('#btnToggleETA').attr('pressed', 'false');
	}
	$("#btnToggleETA").blur(); 
});

var btnChangeETA = document.createElement('button');
btnChangeETA.setAttribute('id', 'btnChangeETA');
btnChangeETA.setAttribute('type', 'button');
btnChangeETA.setAttribute('class', 'btn btn-default luckiest');
btnChangeETA.style.width = '50%';
btnChangeETA.style.height = '34px';
btnChangeETA.innerHTML = 'Goal';
$('#holdETAButtons2').append(btnChangeETA);
$('#btnChangeETA').click(function() {
	if( $('#btnChangeETA').text() == 'Goal' ) {
		$('#btnChangeETA').text('Upgrades');
		if( $('#wndETAGoal').css('display') == 'none' && $('#wndETAUpgrade').css('display') == 'none' && $('#wndETACity').css('display') == 'none' && $('#wndETACitizen').css('display') == 'none' ) return;
		$('#wndETAGoal').css('display', 'none');
		$('#wndETAUpgrade').css('display', 'block');
	} else if( $('#btnChangeETA').text() == 'Upgrades' ) {
		$('#btnChangeETA').text('City');
		if( $('#wndETAGoal').css('display') == 'none' && $('#wndETAUpgrade').css('display') == 'none' && $('#wndETACity').css('display') == 'none' && $('#wndETACitizen').css('display') == 'none'  ) return;
		$('#wndETAUpgrade').css('display', 'none');
		$('#wndETACity').css('display', 'block');
	} else if( $('#btnChangeETA').text() == 'City' ) {
		$('#btnChangeETA').text('Citizen');
		if( $('#wndETAGoal').css('display') == 'none' && $('#wndETAUpgrade').css('display') == 'none' && $('#wndETACity').css('display') == 'none' && $('#wndETACitizen').css('display') == 'none'  ) return;
		$('#wndETACity').css('display', 'none');
		$('#wndETACitizen').css('display', 'block');
	} else if( $('#btnChangeETA').text() == 'Citizen' ) {
		$('#btnChangeETA').text('Goal');
		if( $('#wndETAGoal').css('display') == 'none' && $('#wndETAUpgrade').css('display') == 'none' && $('#wndETACity').css('display') == 'none' && $('#wndETACitizen').css('display') == 'none'  ) return;
		$('#wndETACitizen').css('display', 'none');
		$('#wndETAGoal').css('display', 'block');
	}
	$("#btnChangeETA").blur(); 
});

// goal window
var wndETAGoal = document.createElement('div');
$(wndETAGoal).attr('id', 'wndETAGoal');
$(wndETAGoal).css({ 'user-select': 'none',
	'margin-bottom': '20px',
	'box-shadow': '0 3px 10px rgba(0,0,0,.5)',
	'padding-left': '10px',
	'padding-right': '5px',
	'padding-bottom': '5px',
	'background-color': '#fff',
	'display': 'none',
	'border-radius': '4px',});
$(holdLinux).append(wndETAGoal);

// texts
var holdETATexts = [];

for( var i = 0; i<11; i++ ) {
	holdETATexts[i] = document.createElement('span');
	holdETATexts[i].setAttribute('id', 'holdETATexts'+i);
	holdETATexts[i].setAttribute('class', 'smalltext');
	$(holdETATexts[i]).text(buildingNames[i]+':');
	$('#wndETAGoal').append(holdETATexts[i]).append('</br>');
}

// upgrade window
var wndETAUpgrade = document.createElement('div');
$(wndETAUpgrade).attr('id', 'wndETAUpgrade');
$(wndETAUpgrade).css({ 'user-select': 'none',
	'margin-bottom': '20px',
	'box-shadow': '0 3px 10px rgba(0,0,0,.5)',
	'padding-left': '10px',
	'padding-right': '5px',
	'padding-bottom': '5px',
	'background-color': '#fff',
	'display': 'none',
	'border-radius': '4px',
	'min-height': '50px'});
$(holdLinux).append(wndETAUpgrade);
// texts
var holdETAUpgTexts = [];
for( var i = 0; i<10; i++ ) {
	holdETAUpgTexts[i] = document.createElement('span');
	holdETAUpgTexts[i].setAttribute('id', 'holdETAUpgTexts'+i);
	holdETAUpgTexts[i].setAttribute('class', 'smalltext');
	$('#wndETAUpgrade').append(holdETAUpgTexts[i]);
}

// city window
var wndETACity = document.createElement('div');
$(wndETACity).attr('id', 'wndETACity');
$(wndETACity).css({ 'user-select': 'none',
	'margin-bottom': '20px',
	'box-shadow': '0 3px 10px rgba(0,0,0,.5)',
	'padding-left': '10px',
	'padding-right': '5px',
	'padding-bottom': '5px',
	'background-color': '#fff',
	'display': 'none',
	'border-radius': '4px',
	'min-height': '50px'});
$(holdLinux).append(wndETACity);
// texts
var holdETACityTexts = [];
for( var i = 0; i<10; i++ ) {
	holdETACityTexts[i] = document.createElement('span');
	holdETACityTexts[i].setAttribute('id', 'holdETACityTexts'+i);
	holdETACityTexts[i].setAttribute('class', 'smalltext');
	$('#wndETACity').append(holdETACityTexts[i]);
}

// citizen window
var wndETACitizen = document.createElement('div');
$(wndETACitizen).attr('id', 'wndETACitizen');
$(wndETACitizen).css({ 'user-select': 'none',
	'margin-bottom': '20px',
	'box-shadow': '0 3px 10px rgba(0,0,0,.5)',
	'padding-left': '10px',
	'padding-right': '5px',
	'padding-bottom': '5px',
	'background-color': '#fff',
	'display': 'none',
	'border-radius': '4px',
	'min-height': '50px'});
$(holdLinux).append(wndETACitizen);
// info text
holdETACitizenInfo = document.createElement('span');
holdETACitizenInfo.setAttribute('id', 'holdETACitizenInfo');
holdETACitizenInfo.setAttribute('class', 'smalltext');
$('#wndETACitizen').append(holdETACitizenInfo).after('</br>');
$(holdETACitizenInfo).html('For # type in scientific notation</br>(e.g. "1.23e+45") or words</br>(e.g. "43.21 Quintillion")');
// input
inputETACitizen = document.createElement('input');
inputETACitizen.setAttribute('id', 'inputETACitizen');
inputETACitizen.setAttribute('type', 'text');
inputETACitizen.setAttribute('class', 'smalltext');
$(inputETACitizen).css({ 'width': '60%',
	'margin-right': '5px',
	'margin-top': '10px'});
// buttons
var holdETACitizenButtons = document.createElement('div');
holdETACitizenButtons.setAttribute('class', 'cardbuttons');
holdETACitizenButtons.setAttribute('id', 'holdETACitizenButtons');
$('#wndETACitizen').append(holdETACitizenButtons).after('</br>');
$('#holdETACitizenButtons').append(inputETACitizen);
var btnETACitizenNum = document.createElement('button');
btnETACitizenNum.setAttribute('id', 'btnETACitizenNum');
btnETACitizenNum.setAttribute('type', 'button');
btnETACitizenNum.setAttribute('class', 'btn btn-default luckiest');
$(btnETACitizenNum).css({ 'width': '18%',
	'height': '34px',
	'padding': '6px 3px 6px 3px' })
$(btnETACitizenNum).text('%');
$('#holdETACitizenButtons').append(btnETACitizenNum);
$('#btnETACitizenNum').click(function() {
	$('#holdETACitizenText').text('Target: ' + calculateCitizenPer() + '%');
	calculateCitizenETA(citizenETAcost);
});
var btnETACitizenPer = document.createElement('button');
btnETACitizenPer.setAttribute('id', 'btnETACitizenPer');
btnETACitizenPer.setAttribute('type', 'button');
btnETACitizenPer.setAttribute('class', 'btn btn-default luckiest');
$(btnETACitizenPer).css({ 'width': '18%',
	'height': '34px',
	'padding': '6px 3px 6px 3px' })
$(btnETACitizenPer).text('123');
$('#holdETACitizenButtons').append(btnETACitizenPer);
$('#btnETACitizenPer').click(function() {
	$('#holdETACitizenText').text('Target: ' + convertToScientific(calculateCitizenNum()));
	calculateCitizenETA(citizenETAcost);
});
// text
var holdETACitizenText = document.createElement('span');
holdETACitizenText.setAttribute('id', 'holdETACitizenText');
holdETACitizenText.setAttribute('class', 'smalltext');
$('#wndETACitizen').append(holdETACitizenText);
$(holdETACitizenText).after('</br>');
var holdETACitizenETA = document.createElement('span');
holdETACitizenETA.setAttribute('id', 'holdETACitizenETA');
holdETACitizenETA.setAttribute('class', 'smalltext');
$('#wndETACitizen').append(holdETACitizenETA);

function calculateETA( target ) {
	var x = currentMoney;
	var y = currentIncome;

	if( target <= x ) return 'Ready!';
	var eta = (target-x)/y;
	var z = Math.floor(eta/31536000);
	if( z > 0 ) return '>1y';
	var d = Math.floor(eta / 86400);
	var h = Math.floor((eta % 86400) /3600);
	var m = Math.floor((eta % 3600) / 60);
	var s = Math.floor(eta % 60);


	var buff = '~';
	if( d > 0 ) buff += d + 'd ';
	if( h > 0 ) buff += h + 'h ';
	if( m > 0 ) buff += m + 'm ';
	buff += s + 's';

	return buff;
}

function refreshETA () {
	currentIncome = mainScope.totalMoneyPerSecond();
	currentMoney = mainScope.curMoney;
	sessionMoney = mainScope.sessionMoney;
	currentCitizens = mainScope.curCitizens;
	resetCitizens = mainScope.availableCitizens;
	updateMainTexts();
	showGoalsETA();
	showUpgradeETA();
	showCityETA();

	if( initialCityCalc ) {
		$('#inputETACitizen').val('100');
		$('#btnETACitizenPer').click();
		initialCityCalc = false;
	}

	calculateCitizenETA(citizenETAcost);
}

function calculateDenizens( cost ) {
	return Math.floor((150*Math.sqrt(cost/1e+15) * ((mainScope.politicsIdeology.value * -1) + 1)) * mainScope.citizenExtraHelp.extraCitizenGainRate);
}

function calculateCitizenCost( c ) {
	var h = mainScope.citizenExtraHelp.extraCitizenGainRate;
	var y = mainScope.politicsIdeology.value;
	return (3456971699377777672192*Math.pow(c,2)) / (Math.pow(h,2)*(77781863236*Math.pow(y,2)-155563726472*y+77781863236));
}

function calculateCitizenPer() {
	var cur = currentCitizens;
	var target = convertNumber($('#inputETACitizen').val()); // value from input in NUM
	citizenETAcost = calculateCitizenCost(target);
	return Math.round(target/cur*100);
}

function calculateCitizenNum() {
	var cur = currentCitizens;
	var target = parseFloat($('#inputETACitizen').val()); // value from input in %
	citizenETAcost = calculateCitizenCost(cur*target/100);
	return Math.round(cur*target/100);
}

function calculateCitizenETA( target ) {
	var x = sessionMoney;
	var y = currentIncome;

	if( target-x <= 0 ) {
		$('#holdETACitizenETA').text('ETA: Ready!');
		return;
	}

	var eta = (target-x)/y;

	var z = Math.floor(eta/31536000);
	if( z > 0 ) {
		$('#holdETACitizenETA').text('ETA: >1y');
		return;
	}
	var d = Math.floor(eta / 86400);
	var h = Math.floor((eta % 86400) /3600);
	var m = Math.floor((eta % 3600) / 60);
	var s = Math.floor(eta % 60);

	var buff = '~';
	if( d > 0 ) buff += d + 'd ';
	if( h > 0 ) buff += h + 'h ';
	if( m > 0 ) buff += m + 'm ';
	buff += s + 's';


	$('#holdETACitizenETA').text('ETA: ' + buff);
}

// eta timer
var timerID;

function timerStart() {
	if( timerID ) return;
	timerID = setInterval(refreshETA, 1000);
}

function timerStop() {
	clearInterval(timerID);
	timerID = null;
}


function calculateEachGoal( target ) {
	var cost = 0;
	for( var i = 0; i<10; i++ ){
		if( target-holdBuildings[i].num>0 )
		cost += mainScope.calculateBuildingCost(holdBuildings[i],i,target-holdBuildings[i].num);

	}
	return cost;
}

function showGoalsETA() {
	for( var i = 0; i<10; i++ ){
		if( holdBuildings[i].nextGoal == -1 ) $(holdETATexts[i]).text(buildingNames[i]+' completed!');
		else $(holdETATexts[i]).text(holdGoals[holdBuildings[i].nextGoal].goal+' '+buildingNames[i]+': '+calculateETA(mainScope.calculateBuildingCost(holdBuildings[i],i,holdGoals[holdBuildings[i].nextGoal].goal-holdBuildings[i].num)));
	}
	var buff = mainScope.settings.goalsAll;
	if( buff!=-1 ) $(holdETATexts[10]).text(holdGoals[buff].goal+' '+buildingNames[10]+': '+calculateETA(calculateEachGoal(holdGoals[buff].goal)));
	else $(holdETATexts[10]).text('"All buildings" completed!');
}

function shortenName( str ) {
	if( str.length>12 ) str = str.slice(0,10)+'..';
	return str;
}

function showUpgradeETA() {
	var num = 0;
	upgradeLimit = false;
	var tempArray = [];
	$('br', '#wndETAUpgrade').remove();
	for (const value of holdUpgrades) {
		if( num == 10 ) {
			break;
			upgradeLimit = true;
		}
		if( !mainScope.isInArray(mainScope.upgrades, value.id) ){
			tempArray[num] = value;
			num++;
		}
	}
	tempArray = tempArray.sort(function(a, b){return a.cost-b.cost});
	for(var i = 0; i<10; i++ ) $(holdETAUpgTexts[i]).text( shortenName(tempArray[i].name) + ': ' + calculateETA(tempArray[i].cost) ).after('</br>');
	if( upgradeLimit ) for( var i = num; i<10; i++ ) $(holdETAUpgTexts[i]).text('');
}

function showCityETA() {
	var num = 0;
	cityLimit = false;
	var tempArray = [];
	$('br', '#wndETACity').remove();
	for (const value of holdCity) {
		if( num == 10 ) {
			break;
			cityLimit = true;
		}
		if( !mainScope.isInArray(mainScope.tiles, value.id) ){
			tempArray[num] = value;
			num++;
		}
	}
	tempArray = tempArray.sort(function(a, b){return a.cost-b.cost});
	for(var i = 0; i<10; i++ ) $(holdETACityTexts[i]).text( shortenName(tempArray[i].name) + ': ' + calculateETA(tempArray[i].cost) ).after('</br>');
	if( cityLimit ) for( var i = num; i<10; i++ ) $(holdETACityTexts[i]).text('');
}

function updateMainTexts() {
	$('#txtIncome').text('Income: $' + convertToScientific(currentIncome));
	$('#txtMoney').text('Money: $' + convertToScientific(currentMoney));
	$('#txtSession').text('Session money: $' + convertToScientific(sessionMoney));
	$('#txtCitizens').text('Current citizens: ' + convertToScientific(currentCitizens));
	$('#txtResetNow').text('Citizen gain: '+ convertToScientific(resetCitizens));
}

timerStart();