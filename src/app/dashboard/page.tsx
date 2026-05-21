import { prisma } from "../../lib/prisma";

import StatsCards
from "../../components/dashboard/StatsCards";

import ScanButton
from "../../components/dashboard/ScanButton";

import RiskHero
from "../../components/dashboard/RiskHero";

import DriftChart
from "../../components/dashboard/DriftChart";

import RecentActivity
from "../../components/dashboard/RecentActivity";

import { calculateRisk }
from "../../lib/risk";

export default async function Dashboard(){

const assets=
await prisma.asset.count();

const organizations=
await prisma.organization.count();

const users=
await prisma.user.count();

const alerts=
await prisma.alert.count();

const driftAlerts=
await prisma.alert.count({
where:{
type:"DRIFT"
}
});

const org=
await prisma.organization.findFirst();

const riskScore=
calculateRisk(
alerts,
driftAlerts
);

const stats={

assets,
organizations,
users,
alerts,
driftAlerts,
riskScore

};

return(

<div className="space-y-8">

<RiskHero
score={riskScore}
/>

<StatsCards
stats={stats}
/>

{org && (

<ScanButton
organizationId={
org.id
}
/>

)}

<div
className="
grid
grid-cols-1
xl:grid-cols-2
gap-6
"
>

<RecentActivity/>

<DriftChart/>

</div>

</div>

)

}