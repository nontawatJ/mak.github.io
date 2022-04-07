//deal with hover effect
function projEnterHover(projNum) {
    document.getElementById(projNum).style.backgroundColor = "rgba(194, 192, 192, 0.849)";
}
function projLeaveHover(projNum) {
    document.getElementById(projNum).style.backgroundColor = "white";
}
//expanding project
function expProj(projNum,expBtmNum,minBtmNum) {
    document.getElementById(projNum).className = "project-desc " + "expand";
    document.getElementById(projNum).style.backgroundColor = "white";
    document.getElementById(projNum).style.transition = "height 1s, transform 1s";
    document.getElementById(expBtmNum).style.display = "none";
    document.getElementById(minBtmNum).style.display = "inline";
}


//minimize project
function minProj(projNum,expBtmNum,minBtmNum){
    document.getElementById(projNum).className = "project-desc " + projNum;
    document.getElementById(projNum).style.backgroundColor = "white";
    document.getElementById(expBtmNum).style.display = "inline";
    document.getElementById(minBtmNum).style.display = "none";
}
 

//project one
var expBtmOne = document.getElementById("expBtmOne");

expBtmOne.addEventListener('mouseenter',function(){projEnterHover("projOne")});
expBtmOne.addEventListener('mouseleave',function(){projLeaveHover("projOne")});
expBtmOne.addEventListener('click',function(){expProj("projOne","expBtmOne","minBtmOne")});

var minBtmOne = document.getElementById("minBtmOne");
minBtmOne.addEventListener('mouseenter',function(){projEnterHover("projOne")});
minBtmOne.addEventListener('mouseleave',function(){projLeaveHover("projOne")});
minBtmOne.addEventListener('click',function(){minProj("projOne","expBtmOne","minBtmOne")});

//project two
var expBtmTwo = document.getElementById("expBtmTwo");

expBtmTwo.addEventListener('mouseenter',function(){projEnterHover("projTwo")});
expBtmTwo.addEventListener('mouseleave',function(){projLeaveHover("projTwo")});
expBtmTwo.addEventListener('click',function(){expProj("projTwo","expBtmTwo","minBtmTwo")});

var minBtmTwo = document.getElementById("minBtmTwo");
minBtmTwo.addEventListener('mouseenter',function(){projEnterHover("projTwo")});
minBtmTwo.addEventListener('mouseleave',function(){projLeaveHover("projTwo")});
minBtmTwo.addEventListener('click',function(){minProj("projTwo","expBtmTwo","minBtmTwo")});

//project three
var expBtmThree = document.getElementById("expBtmThree");

expBtmThree.addEventListener('mouseenter',function(){projEnterHover("projThree")});
expBtmThree.addEventListener('mouseleave',function(){projLeaveHover("projThree")});
expBtmThree.addEventListener('click',function(){expProj("projThree","expBtmThree","minBtmThree")});

var minBtmThree = document.getElementById("minBtmThree");
minBtmThree.addEventListener('mouseenter',function(){projEnterHover("projThree")});
minBtmThree.addEventListener('mouseleave',function(){projLeaveHover("projThree")});
minBtmThree.addEventListener('click',function(){minProj("projThree","expBtmThree","minBtmThree")});

//project Four
var expBtmFour = document.getElementById("expBtmFour");

expBtmFour.addEventListener('mouseenter',function(){projEnterHover("projFour")});
expBtmFour.addEventListener('mouseleave',function(){projLeaveHover("projFour")});
expBtmFour.addEventListener('click',function(){expProj("projFour","expBtmFour","minBtmFour")});

var minBtmFour = document.getElementById("minBtmFour");
minBtmFour.addEventListener('mouseenter',function(){projEnterHover("projFour")});
minBtmFour.addEventListener('mouseleave',function(){projLeaveHover("projFour")});
minBtmFour.addEventListener('click',function(){minProj("projFour","expBtmFour","minBtmFour")});