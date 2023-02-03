import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
const Layout = ({ children }) => {
    return ( 
        <div>
            <Topbar />
            {children}
            <Sidebar />
        </div>
     );
}
 
export default Layout ;