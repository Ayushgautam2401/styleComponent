import { Sidebar,SidebarOption } from "./HomeStyling";
import { NavLink } from "Components/Inputs/link";
function SideComponent (){
    return(
        <Sidebar>
            <NavLink
            //  activeClassName="active"
            to="/client"
            // activeStyle={{
            //   fontWeight: "bold",
            //   backgroundColor: "red"
            // }}
          >
            <SidebarOption>Client</SidebarOption>
          </NavLink>
          <NavLink
          activeClassName="active"
            to="/invoice"
            // activeStyle={{
            //     fontWeight: "bold",
            //     backgroundColor: "red",
            //   }}
          >
            <SidebarOption>Invoice</SidebarOption>
          </NavLink>
        </Sidebar>
    )
}
export default SideComponent