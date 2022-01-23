import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home";

const MyRoutes=()=>{
    return useRoutes([
        {
            path:"/",
            element:<Home/>
        }
    ]);
}

export default MyRoutes;
