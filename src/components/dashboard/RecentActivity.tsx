"use client";

import {
motion
}
from "framer-motion";

const activity=[

{
title:
"New subdomain discovered",

time:
"2m ago",

severity:
"HIGH"

},

{
title:
"TLS certificate changed",

time:
"15m ago",

severity:
"MEDIUM"

},

{
title:
"New attack surface detected",

time:
"1h ago",

severity:
"HIGH"

}

];

export default function RecentActivity(){

return(

<motion.div

initial={{
opacity:0,
x:-20
}}

animate={{
opacity:1,
x:0
}}

className="

backdrop-blur-xl

bg-white/5

border
border-white/10

rounded-3xl

p-6

"

>

<h2
className="
font-bold
text-xl
mb-6
"
>

Live Activity

</h2>

<div
className="
space-y-4
"
>

{activity.map(
(item,i)=>(

<div

key={i}

className="

bg-zinc-900/60
rounded-2xl
p-4

"

>

<div
className="
flex
justify-between
"
>

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
text-zinc-500
text-sm
mt-1
"
>

{item.time}

</div>

</div>

<div

className="

px-3
h-fit

rounded-full

bg-red-900
text-red-300

text-xs

"

>

{item.severity}

</div>

</div>

</div>

)

)}

</div>

</motion.div>

)
}