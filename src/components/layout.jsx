// import Home from "../pages/home";
import Footer from "./footer";
import Header from "./header";
import SideMenu from "./sideMenu";
import { Outlet } from "react-router-dom";

function Layout(){

    return(      
        <div className="d-flex flex-column vh-100 vw-100">           
            <Header/>          
            <div className="d-flex flex-grow-1">
                <aside className="p-2">
                    <SideMenu/>
                </aside>
                <main className="p-2 flex-grow-1">
                    <div className="container">
                        <Outlet/>
                    </div>                    
                </main>
            </div>  
            
            <Footer/>
            
        </div>
    )

}
   


export default Layout;