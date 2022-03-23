//Status attributes
var hungry = 100;
var hygiene = 100;
var sleep = 100;
var fun = 100;
var social = 100;

//This function will update the information every so often
function Loop(time = 2) {
    var total = hungry + hygiene + sleep + fun + social;

    if(hungry <= 0 || hygiene <= 0 || sleep <= 0 || fun <= 0 || social <= 0) {
        document.getElementById("pet").src="img/c97db3f36d210be.png";
        document.getElementById('.message').innerHTML = 'Você deixou o Dino morrer, atualize a página';
    }
    else if(total > 400){
        document.getElementById("pet").src="img/c825be1e26d369e77c8ac4f1d84dfe9c.gif";
     }
     else if(total > 300){
        document.getElementById("pet").src="img/c825be1e26d369e77c8ac4f1d84dfe9c.gif";
     }
     else if(total > 200){
        document.getElementById("pet").src="img/c825be1e26d369e77c8ac4f1d84dfe9c.gif";
     }
     else if(total > 100){
        document.getElementById("pet").src="img/c825be1e26d369e77c8ac4f1d84dfe9c.gif";
     }
     else if(total > 50){
        document.getElementById("pet").src="img/c825be1e26d369e77c8ac4f1d84dfe9c.gif";
     }

    hungry = hungry - parseInt(time);
    hygiene = hygiene - parseInt(time);
    sleep = sleep - parseInt(time);
    fun = fun - parseInt(time);
    social = social - parseInt(time);

    //In this part we control the pet's status bar
    document.getElementById('hungry').style.width = hungry + 'px';
    document.getElementById('hygiene').style.width = hygiene + 'px';
    document.getElementById('sleep').style.width = sleep + 'px';
    document.getElementById('fun').style.width = fun + 'px';
    document.getElementById('social').style.width = social + 'px';

    //In this part we control the percentage of the pet's status
    document.getElementById('hungry').innerHTML = hungry + '%';
    document.getElementById('hygiene').innerHTML = hygiene + '%';
    document.getElementById('sleep').innerHTML = sleep + '%';
    document.getElementById('fun').innerHTML = fun + '%';
    document.getElementById('social').innerHTML = social + '%';
}

//This function is responsible for starting and calling the LOOP function timer
function start() {
    var timer = setInterval(Loop, 3000);
}

//This function is to recover hunger

function eat() {
    hungry = 100;
    document.getElementById('hungry').innerHTML = hungry + '%';
    document.getElementById('hungry').style.width = hungry + 'px';
}

function shower() {
    hygiene = 100;
    document.getElementById('hygiene').innerHTML = hygiene + '%';
    document.getElementById('hygiene').style.width = hygiene + 'px';
}

function sleeping() {
    sleep = 100;
    document.getElementById('sleep').innerHTML = sleep + '%';
    document.getElementById('sleep').style.width = sleep + 'px';
}

function play() {
    fun = 100;
    document.getElementById('fun').innerHTML = fun + '%';
    document.getElementById('fun').style.width = fun + 'px';
}

function talk() {
    social = 100;
    document.getElementById('social').innerHTML = social + '%';
    document.getElementById('social').style.width = social + 'px';
}

start();