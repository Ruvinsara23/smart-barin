import React from "react";


const Navigation =({onRouteChange})=>{
    return(
        <div>
        <nav style={{display:'flex',justifyContent:'flex-end',padding:'30px'}} >
          <p className='f5 pa2 pointer grow black  br3 shadow-2 Tilt washed-blue' onClick={()=>onRouteChange('SignIn')}>Sing Out</p>
        </nav>
        </div>
    )

}

export default Navigation;

