"use client";

export default function DeleteOrgButton({
id
}:{
id:string
}){

async function remove(){

const res=
await fetch(
`/api/organizations/${id}`,
{
method:"DELETE"
}
);

if(res.ok){

location.reload();

}else{

alert(
"Delete failed"
);

}

}

return(

<button

onClick={remove}

className="
bg-red-700
hover:bg-red-800

px-4
py-2

rounded-xl
transition
"

>

Delete

</button>

)

}