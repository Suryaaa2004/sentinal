"use client";

import {

ResponsiveContainer,
AreaChart,
Area,
XAxis,
YAxis,
Tooltip

}
from "recharts";

import {
motion
}
from "framer-motion";

const data=[

{
day:"Mon",
drift:2
},

{
day:"Tue",
drift:4
},

{
day:"Wed",
drift:1
},

{
day:"Thu",
drift:8
},

{
day:"Fri",
drift:6
},

{
day:"Sat",
drift:10
},

{
day:"Sun",
drift:7
}

];

export default function DriftChart(){

return(

<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

className="

backdrop-blur-xl

bg-white/5

border
border-white/10

rounded-3xl

p-6

shadow-2xl

"

>

<h2
className="
text-xl
font-bold
mb-6
"
>

Attack Surface Drift

</h2>

<div
className="
h-[300px]
"
>

<ResponsiveContainer
width="100%"
height="100%"
>

<AreaChart
data={data}
>

<XAxis
dataKey="day"
/>

<YAxis/>

<Tooltip/>

<Area

type="monotone"

dataKey="drift"

stroke="#ef4444"

fill="#7f1d1d"

/>

</AreaChart>

</ResponsiveContainer>

</div>

</motion.div>

)

}