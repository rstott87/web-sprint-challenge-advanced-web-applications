import React from "react";
import { Route } from "react-router-dom";

// function PrivateRoute() {
//   return (<Route/>);
// }

// export default PrivateRoute;



const PrivateRoute = (props) => { {/* SPRINT-REVIEW */}
    const {component:Component, ...rest} = props;
    
    return <Route {...rest} render={()=> {
        if(localStorage.getItem('token')) {
            return <Component/>
        } else {
            return <Redirect to="/"/>
        }       
    }}/>
}

export default PrivateRoute;
//Task List:
//1. Complete PrivateRoute