"use client";

import { useState, useEffect } from "react";
import { Bell, Globe, Activity, Shield, X } from "lucide-react";

const feed = [
{
icon: Globe,
title:"New subdomain discovered",
time:"1m ago"
},
{
icon: Activity,
title:"Security drift detected",
time:"4m ago"
},
{
icon: Shield,
title:"High severity alert",
time:"8m ago"
}
];

export default function SecurityFeed(){

const [open,setOpen]=useState(false);

useEffect(()=>{
setOpen(false);
},[]);

return(
<>

<button
onClick={()=>setOpen(true)}
className="
fixed
right-0
top-1/2
-translate-y-1/2
z-[100]

bg-red-700
hover:bg-red-800

rounded-l-2xl
px-3
py-8
"
>
<Bell size={20}/>
</button>

{open ? (

<div
className="
fixed
right-6
top-1/2
-translate-y-1/2

w-[420px]

bg-zinc-900
border
border-zinc-800

rounded-3xl
p-6

z-[99]
shadow-2xl
"
>

<div className="flex justify-between items-center mb-6">

<div className="flex gap-3 items-center">
<Bell/>
<h2 className="text-3xl font-bold">
Live Security Feed
</h2>
</div>

<button
onClick={()=>setOpen(false)}
className="p-2"
>
<X/>
</button>

</div>

<div className="space-y-4">

{feed.map((item)=>{

const Icon=item.icon;

return(

<div
key={item.title}
className="
bg-black/40
rounded-2xl
p-5
flex
gap-4
items-center
"
>

<div className="
bg-red-950
p-4
rounded-xl
">

<Icon/>

</div>

<div>

<div className="font-bold">
{item.title}
</div>

<div className="text-zinc-500">
{item.time}
</div>

</div>

</div>

)

})}

</div>

</div>

):null}

</>

)

}