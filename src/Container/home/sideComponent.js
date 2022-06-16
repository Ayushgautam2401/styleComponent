import { Sidebar,SidebarOption, StyledNavLink } from "./HomeStyling";

import { NavLink } from "react-router-dom";
import { NonceProvider } from "react-select";
const SideComponent = () => {

    return(
        <Sidebar>
          
            <StyledNavLink
             activeClassName="active"
           
             to ="/client"
            // activeStyle={{
            //   fontWeight: "bold",
            //   backgroundColor: "grey",
            //   textDecoration:"none",
            // }
          // }
            
          >
            Client
          </StyledNavLink>
          <StyledNavLink
          activeClassName="active"
           
            to="/invoice"
            // activeStyle={{
            //     fontWeight: "bold",
            //     backgroundColor: "grey",
            //     textDecoration:"none",
            //   }}
            >
            Invoice
          </StyledNavLink>
        
        </Sidebar>
    )
}
export default SideComponent