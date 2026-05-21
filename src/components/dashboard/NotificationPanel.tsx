"use client";

import { motion } from "framer-motion";
import {
Bell,
ShieldAlert,
Globe,
Activity
}
from "lucide-react";

const notifications=[

{
title:"New subdomain discovered",
icon:Globe,
time:"1m ago"
},

{
title:"Security drift detected",
icon:Activity,
time:"4m ago"
},

{
title:"High severity alert",
icon:ShieldAlert,
time:"8m ago"
}

];

export default function NotificationPanel(){

return(

<motion.div

initial={{
x:100,
opacity:0
}}

animate={{
x:0,
opacity:1
}}

className="

fixed
right-6
bottom-6

w-[350px]

bg-zinc-900/90
backdrop-blur-xl

border
border-white/10

rounded-3xl

shadow-2xl

p-6

z-50

"

>

<div
className="
flex
items-center
gap-3
mb-5
"
>

<Bell
size={20}
/>

<h2
className="
font-bold
text-lg
"
>

Live Security Feed

</h2>

</div>

<div
className="
space-y-4
"
>

{notifications.map(
(item,i)=>{

const Icon=
item.icon;

return(

<motion.div

key={i}

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:i*.2
}}

className="

flex
items-center
gap-4

bg-black/20

p-4

rounded-2xl

"

>

<div
className="
bg-red-950
p-2
rounded-xl
"
>

<Icon
size={18}
/>

</div>

<div>

<div
className="
font-medium
"
>

{item.title}

</div>

<div
className="
text-xs
text-zinc-500
mt-1
"
>

{item.time}

</div>

</div>

</motion.div>

)

})}

</div>

</motion.div>

)

}