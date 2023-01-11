
import './App.css';
import Navigation from './compornent/Navigation/Navigation';
import React, { Component } from 'react';
import Logo from './compornent/logo/Logo';
import ImageLinkForm from './compornent/ImageLinkForm/ImageLinkFrom';
import Rank from './compornent/Rank/Rank';
import Tsparticles from './compornent/Particales/particales';
import FaceRecognition from './FaceRecognition/FaceRecognition';
import SignIn from './compornent/Sign In/sign in';
import SignUp from './compornent/SignUp/SignUp';
import Navigation2 from './compornent/Navigation/Navigation2';


class  App extends Component {
    constructor(){
      super()
      this.state={
        input:'',
        imageURL:'',
        prediction:{},
        box:{},
        route:'SignIn',
        user:{
          id:'',
          name:'',
          email:'',
          entries:0,
          joined:''
        }
        
      }
    }

  loadUser =(data)=>{
    this.setState({user:{
      id:data.id,
      name:data.name,
      email:data.email,
      entries:data.entries,
      joined:data.joined


    }})
  }
    

    CalFaceLoction=(data)=>{
      const clarifaiFace= data.outputs[0].data.regions[0].region_info.bounding_box ;
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const  height = Number(image.height);
      console.log('Calface',clarifaiFace)


    return{
      // leftCol:clarifaiFace.left_col*width,
      // topRow:clarifaiFace.top_row*height,
      // rightCol:width - (clarifaiFace.right_col*width),
      // bottomRow:height - (clarifaiFace.bottom_row*height) ,

      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    

     }
    }

onRouteChange = (route) =>{
  this.setState({route:route});
} 
   
displayFacebox=(box)=>{
  console.log('box',box)
  this.setState({box:box})
} 
    
onInputChange = (event)=>{
  this.setState({input:event.target.value});
}
onButtonSubmit = () => {
    this.setState({imageURL:this.state.input});
    
  const USER_ID = 'flxo1lphl301';
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = '49bca5e0b5cc45e8845978ce029020df';
  const APP_ID = '81e85f108a18481c9fb0a2849b3820e6';
  const MODEL_ID = 'face-detection';
  const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5'; //45fb9a671625463fa646c3523a3087d5
  // Change this to whatever image URL you want to process
  const IMAGE_URL = this.state.input;





  const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};

fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
.then(response => response.text())
.then(result => {
  const resultObj = JSON.parse(result)
  if (resultObj) {
    fetch('http://localhost:3000/image', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id:this.state.user.id
      })
    })
 
    .then(response=>response.json())
    .then(count => {
      this.setState(Object.assign(this.state.user,{entries:count}))
      console.log((this.state.user,{entries:count}))

    })
  }
  const data =this.displayFacebox(this.CalFaceLoction(resultObj))
  
  console.log((data))
  console.log(resultObj.outputs[0].data.regions[0].region_info.bounding_box )
})

.catch(error => console.log('error', error));

//this.displayFacebox(this.CalFaceLoction.//



} 

 render(){


  return ( 
    <div className="App" >
      
      <Tsparticles  />
      {this.state.route==='home'? 
       <div >
         <Navigation onRouteChange={this.onRouteChange}/> 
         <Logo />
         <Rank name={this.state.user.name} entries={this.state.user.entries}  />
         <ImageLinkForm 
         onInputChange={this.onInputChange}
         onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition box={this.state.box} imageURL={this.state.input} />
      </div>      
           :( this.state.route==='SignIn'? 
           <div>
            <Navigation2 onRouteChange={this.onRouteChange}/> 
            <SignIn onRouteChange={this.onRouteChange}  loadUser={this.loadUser} />
           </div>
           
            
           :
            <div>
            <Navigation onRouteChange={this.onRouteChange}/> 
            <SignUp  onRouteChange={this.onRouteChange}  loadUser={this.loadUser}  />
            </div>
            )
      //loadUser={this.loadUser}
     
    } 
    </div>
  );

 }
 
  }
  
  



 


export default App;
