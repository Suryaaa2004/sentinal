import { prisma } from "../../../lib/prisma";

type AssetType = {
  id:string;
  domain:string;
  organization?:{
    name:string;
  } | null;
};

export default async function Assets(){

const assets =
await prisma.asset.findMany({

select:{
id:true,
domain:true
},

orderBy:{
createdAt:"desc"
}

});

return(

<div>

<h1
className="
text-4xl
font-bold
mb-8
"
>
Assets
</h1>

<div
className="
space-y-4
"
>

{assets.length===0 && (

<div
className="
text-zinc-500
"
>
No assets discovered
</div>

)}

{assets.map((asset:AssetType)=>(

<div

key={asset.id}

className="
bg-zinc-900
border
border-zinc-800
rounded-2xl
p-5
"

>

<div
className="
font-semibold
"
>

{asset.domain}

</div>

</div>

))}

</div>

</div>

)

}