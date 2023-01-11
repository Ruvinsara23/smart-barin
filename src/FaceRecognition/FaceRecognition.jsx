import React from "react";
import './Box.css'


const FaceRecognition =({imageURL,box})=>{
    return(
   
        <div className="center pa3 mr2 br3 flex" style={{width:'500px'}} >
           <img  id="inputimage" src ={imageURL} alt=' 'width={'500px'} height={'auto'} className='br3 grow'  /> 
               <div className="bounding-box relative br3"  style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }} ></div>
        </div>
    )

}



export default FaceRecognition;

