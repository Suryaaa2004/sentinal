"use client";

import {
CircularProgressbar,
buildStyles
}
from
"react-circular-progressbar";

import
"react-circular-progressbar/dist/styles.css";

export default function RiskHero({

score

}:{

score:number

}){

const risk=

score>70
?"LOW"

:score>40
?"MEDIUM"

:"HIGH";


return(

<div
className="
bg-zinc-900
border
border-zinc-800
rounded-3xl
p-8
flex
items-center
justify-between
"
>

<div>

<h1
className="
text-4xl
font-bold
"
>

Security Risk

</h1>

<p
className="
text-zinc-400
mt-2
"
>

Real-time attack surface score

</p>

<div
className="
mt-6
text-2xl
font-bold
"
>

Risk:
{risk}

</div>

</div>

<div
className="
w-40
h-40
"
>

<CircularProgressbar

value={score}

text={`${score}`}

styles={buildStyles({

pathColor:
score>70
?"#22c55e"
:score>40
?"#f59e0b"
:"#ef4444",

trailColor:
"#27272a",

textColor:
"white"

})}

/>

</div>

</div>

)

}