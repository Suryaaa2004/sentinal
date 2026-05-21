import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import SecurityFeed from "../../components/dashboard/SecurityFeed";

export default function DashboardLayout({
children,
}:{
children:React.ReactNode
}){

return(

<div className="flex min-h-screen bg-black">

<Sidebar/>

<div className="flex-1">

<Topbar/>

<main className="p-8">

<SecurityFeed/>

{children}

</main>

</div>

</div>

)

}