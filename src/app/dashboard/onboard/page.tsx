"use client";

import { useState } from "react";

export default function Onboard() {

const [name,setName]=useState("");
const [domain,setDomain]=useState("");

async function submit(){

await fetch("/api/organizations",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
domain
})

})

alert("Organization added")

}

return(

<div>

<h1 className="text-4xl font-bold">
Add Startup
</h1>

<div className="mt-8 space-y-4 max-w-lg">

<input
placeholder="Startup name"
className="w-full p-3 rounded bg-zinc-900"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="example.com"
className="w-full p-3 rounded bg-zinc-900"
value={domain}
onChange={(e)=>setDomain(e.target.value)}
/>

<button
onClick={submit}
className="bg-white text-black px-6 py-3 rounded"
>

Start Monitoring

</button>

</div>

</div>

)

}