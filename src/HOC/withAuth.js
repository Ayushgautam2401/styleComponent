import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getAuthState } from "Store/Selector";

const WithAuth = (ComposedComponent) => {
        const history= useHistory();
        const location = useLocation();
        const { isAuthenticated } = useSelector(getAuthState);

        useEffect(() => {
            // console.log("auth check", isAuthenticated, location);
            if(!isAuthenticated) {
                history.push("/login");
            }
        }, [isAuthenticated])

        return isAuthenticated ? ComposedComponent : null
}


export default WithAuth;