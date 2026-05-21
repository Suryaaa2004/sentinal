export async function generateSummary(
  newAssets:string[]
){

if(newAssets.length===0){

return
"No infrastructure drift detected."

}

let summary=`

${newAssets.length}
new infrastructure changes detected.

`

if(
newAssets.some(
x=>
x.includes("admin")
)
){

summary +=
`
Potential admin exposure discovered.
Review immediately.
`

}

if(
newAssets.some(
x=>
x.includes("dev")
)
){

summary +=
`
Development assets appeared publicly.
`

}

summary +=
`
Attack surface changed.
Review findings dashboard.
`

return summary

}