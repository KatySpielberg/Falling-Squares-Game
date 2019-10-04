var enemy;
var catcher;
const leftArrow = 37;
const rightArrow = 39;
var x = 75;
var y = 0;
var xEnemy;
var interval = 100;
var timer;
var winCount = 0;
var looseCount = 0;

var divWinCount;
var divMissCount;

function onLoad() 
{
    enemy = document.getElementById('enemy');
    //  this.enemy = document.getElementById ('enemy');  
    catcher = document.getElementById('catcher');

    divWinCount = document.getElementById('winCount');
    divMissCount = document.getElementById('missCount');


    document.onkeydown = onKeyPress;

    catcher.setAttribute('style', 'left: ' + x + 'px');

    xEnemy = 0;
    timer = setInterval(fall, interval);

}

function onKeyPress(ev) 
{
    if (ev.keyCode === rightArrow) {
        if (x < window.innerWidth - 75) {
            x += 15;
            catcher.setAttribute('style', 'left: ' + x + 'px')
        }
    }
    else if (ev.keyCode === leftArrow) 
    {
        if (x > 0) {
            x -= 15;
            catcher.setAttribute('style', 'left: ' + x + 'px')
        }

    }
}

function fall()  // failing squares
{
  
if (y < window.innerHeight - 40)
    {
    y += 20;
enemy.setAttribute('style', 'top: ' + y + 'px; left: ' + xEnemy + 'px')
    }
else 
{
    checkTouch();
    y = 0;
    xEnemy = getRandomInt(); 
    enemy.setAttribute('style','top: ' + y + 'px; left: ' + xEnemy + 'px')
}      
}

function getRandomInt()   //  RANDOM failing squares
{
    return Math.floor(Math.random() * Math.floor(window.innerWidth - 20));
}

function checkTouch()
{
const enemyRight = enemy.offsetLeft + enemy.clientWidth;
const catcherRight = catcher.offsetLeft + catcher.clientWidth;

if((enemy.offsetLeft < catcherRight && enemy.offsetLeft > catcher.offsetLeft)
 || (enemyRight < catcherRight && enemyRight > catcher.offsetLeft))
{
    winCount++;  
    divWinCount.innerText =  winCount;    //TODO : show count
}
else
{
    looseCount++;
    divMissCount.innerText =  looseCount;   //TODO : show count

    if (looseCount === 3)
{
    clearInterval(timer);
}

}

}


debugger;