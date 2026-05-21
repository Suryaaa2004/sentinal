"use client";

import { useState } from "react";

export default function AddOrganization(){

const [name,setName]=
useState("");

const [domain,setDomain]=
useState("");

async function submit(){

if(
!name.trim() ||
!domain.trim()
){

alert(
"Fill all fields"
);

return;

}

const res=
await fetch(
"/api/organizations",
{

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:JSON.stringify({

name,
domain

})

}

);

if(
res.ok
){

setName("");
setDomain("");

location.reload();

}else{

alert(
"Failed to create organization"
);

}

}

return(

<div
className="
bg-zinc-900
border
border-zinc-800
rounded-3xl
p-6
mb-10
"
>

<h2
className="
text-2xl
font-bold
mb-5
"
>

Add Organization

</h2>

<input

value={name}

onChange={(e)=>
setName(
e.target.value
)
}

placeholder="Company name"

className="
w-full
mb-4
p-4

bg-black
border
border-zinc-800

rounded-xl
"
/>

<input

value={domain}

onChange={(e)=>
setDomain(
e.target.value
)
}

placeholder="example.com"

className="
w-full
mb-4
p-4

bg-black
border
border-zinc-800

rounded-xl
"
/>

<button

onClick={submit}

className="
bg-red-600
hover:bg-red-700

px-6
py-3

rounded-xl
"

>

Add Organization

</button>

</div>

)

}