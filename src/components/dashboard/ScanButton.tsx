"use client";

import { useState } from "react";

import ScanProgress
from "./ScanProgress";

export default function ScanButton({

organizationId

}:{

organizationId:string

}){

const[
loading,
setLoading
]=useState(false);

const[
stage,
setStage
]=useState("");

async function scan(){

setLoading(true);

setStage(
"Subdomain Discovery"
);

await new Promise(
r=>setTimeout(
r,
1500
)
);

setStage(
"Nuclei Scanning"
);

await new Promise(
r=>setTimeout(
r,
1500
)
);

setStage(
"Drift Analysis"
);

await fetch(

"/api/scans/start",

{

method:"POST",

headers:{

"Content-Type":
"application/json"

},

body:JSON.stringify({

organizationId

})

}

);

setStage(
"Saving Results"
);

await new Promise(
r=>setTimeout(
r,
1000
)
);

setLoading(false);

location.reload();

}

return(

<>

<button

onClick={scan}

disabled={loading}

className="
bg-red-600
hover:bg-red-700
px-6
py-3
rounded-2xl
font-bold
mt-6
"

>

{loading
?"Scanning..."
:"Start Scan"}

</button>


<ScanProgress

open={loading}

stage={stage}

/>

</>

)

}