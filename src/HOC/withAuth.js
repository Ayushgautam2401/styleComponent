import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAuthState } from "Store/Selector";

const WithAuth = ({children}) => {
        const history= useHistory();
        const { isAuthenticated } = useSelector(getAuthState);

        useEffect(() => {
            if(!isAuthenticated) {
                history.push()
            }
        }, [isAuthenticated])

        return (
        <div>
            {isAuthenticated && children}
        </div>
        )
}


export default WithAuth;