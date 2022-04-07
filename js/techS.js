//deal with hover effect
function techSkillEnterHover(skillType) {
    document.getElementById(skillType).style.backgroundColor = "rgba(194, 192, 192, 0.849)";
}
function techSkillLeaveHover(skillType) {
    document.getElementById(skillType).style.backgroundColor = "white";
}
//expanding techSkill
function expTechSkill(skillType,expBtmSkillType,minBtmSkillType) {
    document.getElementById(skillType).className = "techSkill-desc " + "expand";
    document.getElementById(skillType).style.backgroundColor = "white";
    document.getElementById(skillType).style.transition = "height 1s, transform 1s";
    document.getElementById(expBtmSkillType).style.display = "none";
    document.getElementById(minBtmSkillType).style.display = "inline";
}


//minimize techSkill
function minTechSkill(skillType,expBtmSkillType,minBtmSkillType){
    document.getElementById(skillType).className = "techSkill-desc " + skillType;
    document.getElementById(skillType).style.backgroundColor = "white";
    document.getElementById(expBtmSkillType).style.display = "inline";
    document.getElementById(minBtmSkillType).style.display = "none";
}
 

//techSkill Langueges
var expBtmLangueges = document.getElementById("expBtmLanguages");

expBtmLangueges.addEventListener('mouseenter',function(){techSkillEnterHover("languages")});
expBtmLangueges.addEventListener('mouseleave',function(){techSkillLeaveHover("languages")});
expBtmLangueges.addEventListener('click',function(){expTechSkill("languages","expBtmLanguages","minBtmLanguages")});

var minBtmLangueges = document.getElementById("minBtmLanguages");
minBtmLangueges.addEventListener('mouseenter',function(){techSkillEnterHover("languages")});
minBtmLangueges.addEventListener('mouseleave',function(){techSkillLeaveHover("languages")});
minBtmLangueges.addEventListener('click',function(){minTechSkill("languages","expBtmLanguages","minBtmLanguages")});

//techSkill Tools
var expBtmTools = document.getElementById("expBtmTools");

expBtmTools.addEventListener('mouseenter',function(){techSkillEnterHover("tools")});
expBtmTools.addEventListener('mouseleave',function(){techSkillLeaveHover("tools")});
expBtmTools.addEventListener('click',function(){expTechSkill("tools","expBtmTools","minBtmTools")});

var minBtmTools = document.getElementById("minBtmTools");
minBtmTools.addEventListener('mouseenter',function(){techSkillEnterHover("tools")});
minBtmTools.addEventListener('mouseleave',function(){techSkillLeaveHover("tools")});
minBtmTools.addEventListener('click',function(){minTechSkill("tools","expBtmTools","minBtmTools")});

//techSkill frameworks
var expBtmFrameworks = document.getElementById("expBtmFrameworks");

expBtmFrameworks.addEventListener('mouseenter',function(){techSkillEnterHover("frameworks")});
expBtmFrameworks.addEventListener('mouseleave',function(){techSkillLeaveHover("frameworks")});
expBtmFrameworks.addEventListener('click',function(){expTechSkill("frameworks","expBtmFrameworks","minBtmFrameworks")});

var minBtmFrameworks = document.getElementById("minBtmFrameworks");
minBtmFrameworks.addEventListener('mouseenter',function(){techSkillEnterHover("frameworks")});
minBtmFrameworks.addEventListener('mouseleave',function(){techSkillLeaveHover("frameworks")});
minBtmFrameworks.addEventListener('click',function(){minTechSkill("frameworks","expBtmFrameworks","minBtmFrameworks")});