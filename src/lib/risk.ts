export function calculateRisk(

alerts:number,

driftAlerts:number

){

let score=100;

score -= alerts*5;

score -= driftAlerts*10;

if(score<0){

score=0;

}

return score;

}