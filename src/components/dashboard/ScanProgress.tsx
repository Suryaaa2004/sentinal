"use client";

import { motion } from "framer-motion";

type Props={

open:boolean;

stage:string;

}

export default function ScanProgress({

open,

stage

}:Props){

if(!open){

return null;

}

return(

<div

className="
fixed
inset-0
z-[100]
bg-black/70
backdrop-blur-xl

flex
items-center
justify-center
"

>

<motion.div

initial={{
scale:.8,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

className="

w-[520px]

bg-zinc-900/80

backdrop-blur-xl

border
border-white/10

rounded-3xl

p-8

"

>

<div
className="
flex
items-center
gap-4
mb-6
"
>

<div

className="
w-5
h-5
bg-red-500
rounded-full
animate-pulse
"

></div>

<h2
className="
text-2xl
font-bold
"
>

Security Scan Running

</h2>

</div>

<div
className="
text-zinc-400
mb-4
"
>

{stage}

</div>

<div
className="
w-full
bg-zinc-800
rounded-full
overflow-hidden
h-4
"
>

<motion.div

animate={{
width:"100%"
}}

transition={{
duration:2
}}

className="
bg-red-500
h-4
"

>

</motion.div>

</div>

</motion.div>

</div>

)

}