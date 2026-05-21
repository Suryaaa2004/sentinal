"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar(){

return(

<header
className="

h-20

border-b
border-zinc-800

bg-zinc-950/70
backdrop-blur-xl

sticky
top-0
z-50

px-8

flex
items-center
justify-between

"

>

<div>

<h1
className="
text-2xl
font-bold
"
>

Security Command Center

</h1>

<p
className="
text-zinc-500
text-sm
"
>

Monitor attack surface & infrastructure drift

</p>

</div>

<div
className="
flex
items-center
gap-4
"
>

<div
className="
relative
"
>

<Search
size={18}
className="
absolute
left-3
top-3
text-zinc-500
"
/>

<input
placeholder="Search..."

className="
w-72
bg-zinc-900

border
border-zinc-800

rounded-2xl

pl-10
pr-4
py-3

outline-none

focus:border-red-700
"
/>

</div>

<button
className="
bg-zinc-900
p-3
rounded-2xl
border
border-zinc-800
"
>

<Bell size={18}/>

</button>

<div
className="
w-11
h-11

rounded-full

bg-gradient-to-br
from-red-500
to-orange-500
"
/>

</div>

</header>

)
}