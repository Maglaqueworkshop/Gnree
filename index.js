var level = [280, 380, 480, 580, 680, 780, 880, 990, 1080, 1180, 1280, 1380, 1480, 1580, 1680, 1780, 1880]



var button1 = document.getElementById("currentButton1");
var currentLevel = document.getElementById("currentLevel");
var currentEXP = document.getElementById("currentEXP");
var EXPGathered = document.getElementById("EXPGathered");
var NormalWaveCount = document.getElementById("WaveCount");
var CannonWaveCount = document.getElementById("CannonWaveCount");
var CurrentClearedWaveCount = document.getElementById("ClearedWaveCount");
var NextCurrentWaveType = document.getElementById("NextWaveType");
var NextLevelRequired = document.getElementById("nextLevel");





//change current level
var lvl = 1
//change current exp
var exp = 0



var expG = 0
var normalWave = 276
var normalCannon = 371
var normalCount = 0
var CannonCount = 0
var waveSlayedCounter = 0

var minionRotation = 0 //if == 2 make it 0 | 0 means cannon


//change current levels
var lvlcount = 0;

var current_level = level[0]


function minionRotationNormal(){
    minionRotation += 1
}

function minionRotationCannon(){
    minionRotation = 0
}


function calculation(){   
    if (exp != level[lvlcount]){
        if (minionRotation != 2) {
            minionRotationNormal()
            exp += normalWave;
            normalCount += 1;
            console.log("Current level:", lvl);
            console.log("Current exp:", exp);
            console.log("Minion Rotation Count:", minionRotation);
            waveSlayedCounter += normalWave

        }
        else{
            minionRotationCannon()
            exp += normalCannon;
            CannonCount += 1;
            minionRotation = 0;

            console.log("Current level:", lvl);
            console.log("Current exp:", exp);
            console.log("Minion Rotation Count:", minionRotation);
            waveSlayedCounter += normalCannon
        }
        // if exp larger than level requirements
    } 
    
    if (exp >= level[lvlcount]){

        lvl += 1;
        currentLevel.innerText = "Current Level: " + lvl.toString(); 

        exp -= level[lvlcount]

        lvlcount += 1;


        console.log("Current level:", lvl);
        console.log("Current exp:", exp);

    }

    currentEXP.innerText = "Current EXP: " + exp.toString() + " / " + level[lvlcount];
    NextLevelRequired.innerText = "EXP LEVEL UP Required: " + level[lvlcount] + " XP"

}


button1.addEventListener('click', () => {
    calculation()

    EXPGathered.innerText = "EXP Gathered: " + waveSlayedCounter.toString(); 
    NormalWaveCount.innerText = "Normal Wave Count: " + normalCount.toString(); 
    CannonWaveCount.innerText = "Cannon Wave Count: "+ CannonCount.toString(); 


    if (minionRotation != 2){
        CurrentClearedWaveCount.innerText = "Current Cleared Wave Count: " + minionRotation.toString(); 
        NextCurrentWaveType.innerText = "Next Current Wave Type: Normal Wave"; 
    }
    else{
        CurrentClearedWaveCount.innerText = "Current Cleared Wave Count: " + minionRotation.toString(); 
        NextCurrentWaveType.innerText = "Next Current Wave Type: Cannon Wave"; 
    }

})     
















