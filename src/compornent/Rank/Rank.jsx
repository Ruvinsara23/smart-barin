import React from "react";

const Rank = ({name,entries})=>{
    return(
        <div>
        <div className='white f3 pa2 '> 
        {`${name},Your current Entry count  is...`}   
        </div>
         <div className='white f1'>
            {`${entries}`}
         </div>
        </div>
        
    )

}


export default Rank;