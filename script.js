// ETA Script for http://cityinc.se
// pre-release version
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

function traversePage( tab ) {
	window.location.hash = '#'+tab;
}

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
		if( input < 100000 ) return input;
		return input.toExponential(2);
	} catch(err) {
		return 0;
	}
}

function getCitizens() {
	traversePage('citizens');
	try {
		var grabCitizens1 = $('body > div.site-wrap > div.ng-scope > div > div:nth-child(1) > div:nth-child(6) > div > div > div.content-block > div.cardtext > h4:nth-child(2)').text();
		var grabCitizens2 = $('body > div.site-wrap > div.ng-scope > div > div:nth-child(1) > div:nth-child(6) > div > div > div.content-block > div.cardtext > h4:nth-child(4)').text();
		var grabCitizens3 = parseFloat($('p[id="slidertext2"]').slice(1,2).text().split(', ').slice(1,2)[0].split('%').slice(0, 1)[0]);

		return [convertNumber(grabCitizens1), convertNumber(grabCitizens2), grabCitizens3];
	} catch(err) {
		return [0, 0, 0];
	}
}

function getSessionMoney() {
	traversePage('stats');
	var x;
	try {
		x = $('body > div.site-wrap > div.ng-scope > div > div > div.card-wrapper > div > div > div > h4:nth-child(3)').text().split('$').slice(1,2);
	} catch(err) {
		x = '0';
	} finally {
		return convertNumber(x);
	}
}

function getIncome() {
	traversePage('');

	var x, y;

	try {
		x = $('body > div.site-wrap > div.ng-scope > div > div > div:nth-child(11) > h4.text-center.white.opensans.produceText.ng-binding.ng-scope').text().split('$').slice(1,2)[0].split(' per second').slice(0,1);
		y = $('#navbar > ul:nth-child(1) > li > strong').text().split('$').slice(1,2);
	} catch(err) {
		x = '0';
		y = '0';
	} finally {
		return [convertNumber(x), convertNumber(y)];
	}
}

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

var holdButtons = document.createElement('div');
holdButtons.setAttribute('class', 'cardbuttons');
holdButtons.setAttribute('id', 'holdButtons');
$('#wndSettings').append(holdButtons);

var holdButtons2 = document.createElement('div');
holdButtons2.setAttribute('class', 'btn-group btn-group-justified');
holdButtons2.setAttribute('role', 'group');
holdButtons2.setAttribute('aria-label', '...');
holdButtons2.setAttribute('id', 'holdButtons2');
$('#holdButtons').append(holdButtons2);

var btnGrabInfo = document.createElement('button');
btnGrabInfo.setAttribute('id', 'btnGrabInfo');
btnGrabInfo.setAttribute('type', 'button');
btnGrabInfo.setAttribute('class', 'btn btn-default luckiest');
btnGrabInfo.style.width = '50%';
btnGrabInfo.style.height = '34px';
btnGrabInfo.innerHTML = 'Grab Info';
$('#holdButtons2').append(btnGrabInfo)
$('#btnGrabInfo').click(function() {
	timerStop();
	var currentPage = document.URL.substr(document.URL.indexOf('#')+1);
	var sessionMoney = getSessionMoney();
	var grabMoney = getIncome();
	var grabCitizen = getCitizens();
	$('#txtIncome').text('Income: $' + convertToScientific(grabMoney[0]));
	$('#txtMoney').text('Money: $' + convertToScientific(grabMoney[1]));
	$('#txtSession').text('Session money: $' + convertToScientific(sessionMoney));
	$('#txtCitizens').text('Current citizens: ' + convertToScientific(grabCitizen[0]));
	$('#txtResetNow').text('Citizen gain: ' + convertToScientific(grabCitizen[1]));
	$('#txtResetNow').attr('per', grabCitizen[2]);
	showCityETA();
	showUpgradeETA();
	showGoalsETA();
	if( $('#inputETACitizen').val() == '' ) {
		$('#inputETACitizen').val('100');
		$('#holdETACitizenText').text('Target: ' + convertToScientific(calculateCitizenNum()));
		calculateCitizenETA(parseFloat($('#holdETACitizenText').attr('etaValue')));
	} else if( $('#inputETACitizen').val() == '100' &&  $('#holdETACitizenText').text() == 'Target: 0' ) {
		$('#holdETACitizenText').text('Target: ' + convertToScientific(calculateCitizenNum()));
		calculateCitizenETA(parseFloat($('#holdETACitizenText').attr('etaValue')));
	} else calculateCitizenETA(parseFloat($('#holdETACitizenText').attr('etaValue')));
	timerStart();
	traversePage(currentPage);
	$("#btnGrabInfo").blur();
});

var btnTest = document.createElement('button');
btnTest.setAttribute('id', 'btnTest');
btnTest.setAttribute('type', 'button');
btnTest.setAttribute('class', 'btn btn-default luckiest');
btnTest.style.width = '50%';
btnTest.style.height = '34px';
$('#holdButtons2').append(btnTest);
$('#btnTest').text('Test');
$('#btnTest').attr('pressed', 'false');
$('#btnTest').click(function() {
	if( $('#btnTest').attr('pressed') == 'false' ) {
		$('#btnTest').css('background-color', '#48a04c');
		$('#btnTest').attr('pressed', 'true');
	} else {
		$('#btnTest').css('background-color', '');
		$('#btnTest').attr('pressed', 'false');
	}
	$("#btnTest").blur(); 
});

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

// --------
// ETA PART
// --------

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
var holdETAGoals = ['Roads', 'Houses', 'Offices', 'Buses', 'Schools', 'Taxis', 'Docks', 'Medics', 'Shops', 'Banks'];
var holdETATexts = [];

for( var i = 0; i<10; i++ ) {
	holdETATexts[i] = document.createElement('span');
	holdETATexts[i].setAttribute('id', 'holdETATexts'+i);
	holdETATexts[i].setAttribute('class', 'smalltext');
	$(holdETATexts[i]).text(holdETAGoals[i]+':');
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
$(holdETACitizenInfo).html('For # type in scientific notation</br>(e.g. 1.23e+45)');
// input
inputETACitizen = document.createElement('input');
inputETACitizen.setAttribute('id', 'inputETACitizen');
inputETACitizen.setAttribute('type', 'text');
inputETACitizen.setAttribute('class', 'smalltext');
//$('#holdETAInput').append(inputETACitizen);
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
	//$('#holdETACitizenETA').text($('#holdETACitizenText').attr('etaValue'));
	calculateCitizenETA(parseFloat($('#holdETACitizenText').attr('etaValue')));
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
	//$('#holdETACitizenETA').text($('#holdETACitizenText').attr('etaValue'));
	calculateCitizenETA(parseFloat($('#holdETACitizenText').attr('etaValue')));
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
	var x = parseFloat($('#txtMoney').text().split('$').slice(1,2));
	var y = parseFloat($('#txtIncome').text().split('$').slice(1,2));

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

function updateETA( obj, l ) {
	var buff = 0;
	for( var i = 0; i<l; i++ ) {
		buff = parseFloat($(obj[i]).attr('etaValue'));
		if( buff > 0 )	{
			$(obj[i]).attr('etaValue', buff - parseFloat($('#txtIncome').text().split('$').slice(1,2)) );
			$(obj[i]).find('span').remove();
			$(obj[i]).append('<span>'+calculateETA(parseFloat($(obj[i]).attr('etaValue')))+'</span>');
		}
	}
}

function refreshETA () {
	updateETA( holdETATexts, 10 );
	updateETA( holdETAUpgTexts, $('#wndETAUpgrade').attr('num') );
	updateETA( holdETACityTexts, $('#wndETACity').attr('num') );

	var y = parseFloat($('#txtIncome').text().split('$').slice(1,2));
	var x = parseFloat($('#holdETACitizenText').attr('sessionValue'));
	$('#holdETACitizenText').attr('sessionValue', x+y);
	calculateCitizenETA(parseFloat($('#holdETACitizenText').attr('etaValue')), x+y);
}

function calculateCitizenPer() {
	var cur = parseFloat($('#txtCitizens').text().split(': ').slice(1,2));
	var target = parseFloat($('#inputETACitizen').val()); // value from input in NUM
	var per = parseFloat($('#txtResetNow').attr('per')); // citizen gain percent
	per = (100+per) / 100;

	$('#holdETACitizenText').attr('etaValue', Math.floor( Math.pow(target/per,2) * Math.pow(10,15) / Math.pow(150, 2) ) );

	return Math.round(target/cur*100);
}

function calculateCitizenNum() {
	var cur = parseFloat($('#txtCitizens').text().split(': ').slice(1,2));
	var target = parseFloat($('#inputETACitizen').val()); // value from input in %
	var per = parseFloat($('#txtResetNow').attr('per')); // citizen gain percent
	per = (100+per) / 100;

	$('#holdETACitizenText').attr('etaValue', Math.floor( Math.pow(cur*target/100/per,2) * Math.pow(10,15) / Math.pow(150, 2) ) );

	return Math.round(cur*target/100);
}

function calculateCitizenETA( target, progress ) {
	var x = parseFloat($('#txtSession').text().split('$').slice(1,2));
	var y = parseFloat($('#txtIncome').text().split('$').slice(1,2));

	if (typeof progress === 'undefined') {
		progress = x;
	}

	$('#holdETACitizenText').attr('sessionValue', progress);

	if( target-progress <= 0 ) {
		$('#holdETACitizenETA').text('ETA: Ready!');
		return;
	}

	var eta = (target-progress)/y;

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
	clearInterval(timerID)
	timerID = null
}


function showGoalsETA() {
	traversePage('');
	var buff = '';
	try {
		for( var i = 0; i<10; i++ ) {
			buff = $('body > div.site-wrap > div.ng-scope > div > div > div:nth-child('+(i+1)+') > div > div > div.content-block > div.cardtext > span > span.smalltext.ng-binding.ng-scope > span > strong').text();
			if( buff == '' ) buff = $('body > div.site-wrap > div.ng-scope > div > div > div:nth-child(3) > div > div > div.content-block > div.cardtext > span > span.smalltext.goaltooltips.ng-binding.ng-scope > strong').text();
			$(holdETATexts[i]).text(buff+' '+holdETAGoals[i]+': ');
			if( $('body > div.site-wrap > div.ng-scope > div > div > div:nth-child('+(i+1)+') > div > div > div.content-block > div.cardtext > span > span.smalltext.ng-binding.ng-scope > span > span').text() != '' )
				buff = $('body > div.site-wrap > div.ng-scope > div > div > div:nth-child('+(i+1)+') > div > div > div.content-block > div.cardtext > span > span.smalltext.ng-binding.ng-scope > span > span').text().split('$').slice(1,2)[0].split('\n');
			else buff = $('body > div.site-wrap > div.ng-scope > div > div > div:nth-child('+(i+1)+') > div > div > div.content-block > div.cardtext > span > span.smalltext.goaltooltips.ng-binding.ng-scope > span').text().split('$').slice(1,2)[0].split('\n');
			$(holdETATexts[i]).attr('etaValue', convertNumber(buff));
			$(holdETATexts[i]).append('<span>'+calculateETA(convertNumber(buff))+'</span>');
		}
	} catch(e) {}
}

function showUpgradeETA() {
	traversePage('upgrade');
	var buff = '';
	$('br', '#wndETAUpgrade').remove();
	$('span', '#wndETAUpgrade').empty();
	for( var i = 0; i<10; i++ ) {
		$('#wndETAUpgrade').attr('num', i);
		buff = $('body > div.site-wrap > div.ng-scope > div > div:nth-child('+(i+2)+') > div > div > div.content-block > div.cardtext.ng-binding > h3').text();
		if( buff == '' ) break; else if ( buff.length > 10 ) buff = buff.slice(0,10) + '..';
		buff += ': ';
		$(holdETAUpgTexts[i]).text(buff);
		buff = $('body > div.site-wrap > div.ng-scope > div > div:nth-child('+(i+2)+') > div > div > div.content-block > div.cardtext.ng-binding > h4').text().split('$').slice(1,2);
		$(holdETAUpgTexts[i]).attr('etaValue', convertNumber(buff));
		$(holdETAUpgTexts[i]).append('<span>'+calculateETA(convertNumber(buff))+'</span>').after('</br>');
		$('#wndETAUpgrade').attr('num', i+1);
	}
}

function showCityETA() {
	traversePage('city');
	var buff = '';
	$('br', '#wndETACity').remove();
	$('span', '#wndETACity').empty();
	for( var i = 0; i<10; i++ ) {
		$('#wndETACity').attr('num', i);
		buff = $('body > div.site-wrap > div.ng-scope > div > div > div > div:nth-child(18) > div:nth-child(' + (i+2) + ') > div > div > div.content-block > div.cardtext.ng-binding > h2').text();
		if( buff == '' ) break; else if ( buff.length > 10 ) buff = buff.slice(0,10) + '..';
		buff += ': ';
		$(holdETACityTexts[i]).text(buff);
		buff = $('body > div.site-wrap > div.ng-scope > div > div > div > div:nth-child(18) > div:nth-child(' + (i+2) + ') > div > div > div.content-block > div.cardtext.ng-binding > h4').text().split('$').slice(1,2);
		$(holdETACityTexts[i]).attr('etaValue', convertNumber(buff));
		$(holdETACityTexts[i]).append('<span>'+calculateETA(convertNumber(buff))+'</span>').after('</br>');
		$('#wndETACity').attr('num', i+1);
	}
}