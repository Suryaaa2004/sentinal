import Link from "next/link";
import {
Shield,
Radar,
Activity,
ArrowRight
} from "lucide-react";

export default function Home() {

const features=[

{
title:"Attack Surface Discovery",
desc:"Discover domains, assets and infrastructure automatically.",
icon:Radar
},

{
title:"Security Drift Detection",
desc:"Instantly detect unexpected attack surface changes.",
icon:Activity
},

{
title:"Continuous Monitoring",
desc:"Monitor infrastructure 24/7 with alerts.",
icon:Shield
}

];

return(

<div
className="
min-h-screen
bg-zinc-950
text-white
overflow-hidden
"
>

<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_top,rgba(239,68,68,.15),transparent_40%)]
"
></div>

<nav
className="
relative
z-10
max-w-7xl
mx-auto
px-8
py-8
flex
justify-between
items-center
"
>

<div>

<h1
className="
text-3xl
font-black
bg-gradient-to-r
from-red-500
to-orange-500
bg-clip-text
text-transparent
"
>

SentinelASM

</h1>

<p
className="
text-zinc-500
text-sm
mt-1
"
>

Security Drift Monitor

</p>

</div>

<div
className="
flex
gap-4
"
>

<Link
href="/dashboard"
className="
bg-red-600
hover:bg-red-700
px-6
py-3
rounded-2xl
font-medium
transition
"
>

Open Dashboard

</Link>

</div>

</nav>


<section
className="
relative
z-10
max-w-7xl
mx-auto
px-8
pt-20
pb-32
grid
lg:grid-cols-2
gap-16
items-center
"
>

<div>

<div
className="
inline-flex
bg-red-950
text-red-400
rounded-full
px-4
py-2
mb-8
"
>

Continuous Security Monitoring

</div>

<h1
className="
text-6xl
font-black
leading-tight
"
>

See

<span
className="
bg-gradient-to-r
from-red-500
to-orange-500
bg-clip-text
text-transparent
"
>

 Infrastructure Drift

</span>

Before Attackers Do

</h1>

<p
className="
mt-8
text-zinc-400
text-xl
leading-relaxed
"
>

Monitor infrastructure changes,
track exposed assets and discover new attack surfaces in real time.

</p>

<div
className="
mt-10
flex
gap-4
"
>

<Link
href="/dashboard"
className="
bg-red-600
hover:bg-red-700
rounded-2xl
px-7
py-4
font-bold
flex
items-center
gap-2
"
>

Launch Dashboard

<ArrowRight
size={18}
/>

</Link>

</div>

</div>



<div
className="
bg-zinc-900/80
backdrop-blur-xl
border
border-zinc-800
rounded-3xl
p-8
shadow-2xl
"
>

<div
className="
flex
justify-between
mb-8
"
>

<div>

<div
className="
text-zinc-500
"
>

Security Score

</div>

<div
className="
text-5xl
font-black
mt-2
"
>

73

</div>

</div>

<div
className="
bg-red-950
text-red-400
rounded-2xl
px-4
py-3
h-fit
"
>

HIGH

</div>

</div>


<div
className="
space-y-4
"
>

<div
className="
bg-black/30
rounded-2xl
p-4
"
>

+ api.company.com discovered

</div>

<div
className="
bg-black/30
rounded-2xl
p-4
"
>

TLS Certificate changed

</div>

<div
className="
bg-black/30
rounded-2xl
p-4
"
>

New security drift detected

</div>

</div>

</div>

</section>


<section
className="
max-w-7xl
mx-auto
px-8
pb-24
grid
md:grid-cols-3
gap-8
"
>

{features.map((item)=>{

const Icon=item.icon;

return(

<div

key={item.title}

className="
bg-zinc-900
border
border-zinc-800
rounded-3xl
p-8
hover:border-red-700
transition
"

>

<div
className="
bg-red-950
w-fit
p-4
rounded-2xl
mb-6
"
>

<Icon/>

</div>

<h2
className="
font-bold
text-xl
mb-4
"
>

{item.title}

</h2>

<p
className="
text-zinc-500
"
>

{item.desc}

</p>

</div>

)

})}

</section>

</div>

)

}