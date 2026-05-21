import {

Globe,
Building2,
Users,
ShieldAlert,
Activity,
TrendingUp

}

from "lucide-react";

type Props={

stats:{

assets:number;

organizations:number;

users:number;

alerts:number;

driftAlerts:number;

riskScore:number;

}

}

export default function StatsCards({

stats

}:Props){

const cards=[

{

title:"Assets",

value:stats.assets,

icon:Globe

},

{

title:"Organizations",

value:stats.organizations,

icon:Building2

},

{

title:"Users",

value:stats.users,

icon:Users

},

{

title:"Alerts",

value:stats.alerts,

icon:ShieldAlert

},

{

title:"Drift Events",

value:stats.driftAlerts,

icon:Activity

},

{

title:"Risk Score",

value:stats.riskScore,

icon:TrendingUp

}

];

return(

<div
className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-6
"
>

{cards.map((card)=>{

const Icon=
card.icon;

return(

<div

key={card.title}

className="

bg-zinc-900
border
border-zinc-800
rounded-3xl
p-6

hover:border-red-700
hover:scale-[1.02]
transition-all
duration-300

group

"

>

<div
className="
flex
justify-between
items-start
"
>

<div>

<div
className="
text-zinc-500
text-sm
"
>

{card.title}

</div>

<div
className="
text-4xl
font-bold
mt-3
"
>

{card.value}

</div>

<div
className="
mt-4
text-green-400
text-sm
flex
items-center
gap-1
"
>

↑ Active

</div>

</div>

<div

className="
p-3
rounded-2xl
bg-red-950
text-red-400
group-hover:scale-110
transition
"

>

<Icon
size={24}
/>

</div>

</div>

</div>

)

})}

</div>

)

}