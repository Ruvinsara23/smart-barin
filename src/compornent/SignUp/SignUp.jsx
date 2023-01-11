
import React from "react";



class SignUp extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      singUpName:'',
      signUpEmail:'',
      signUpPassword:'',
      signUpConfrmPass:'',
    }
  }

onconfrmPassword =(event)=>{
    this.setState({signUpConfrmPass:event.target.value})
    
  }  

onNameChange =(event)=>{
    this.setState({singUpName:event.target.value})
    console.log( this.setState({signUpEmail:event.target.value}));
  }  

onEmailChange=(event)=>{
  this.setState({signUpEmail:event.target.value})
}

onPasswordChange =(event)=>{
  this.setState({signUpPassword:event.target.value})
  console.log( this.setState({signUpPassword:event.target.value}));

}

onSubmitSignUp=()=>{
    fetch('http://localhost:3000/signup',{
     method :'post',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify({
       name:this.state.singUpName,
       email:this.state.signUpEmail,
       password:this.state.signUpPassword,  
     })
    })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      }
    })
  }
  render(){
    return(
      <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_In" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Sign Up</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
              <input
                className="pa2 br3 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="Name"
                id="Name"
                onChange={this.onNameChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input
                className="pa2 br3 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={this.onEmailChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input
                className="b pa2 input-reset br3 ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={this.onPasswordChange}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={this.onSubmitSignUp}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3"
              type="submit"
              value="Sign up"
            />
          </div>
          <div className="lh-copy mt3">
          </div>
        </div>
      </main>
    </article>
  );




  //     <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
  //     <main className="pa4 black-80">
  //     <form className="measure">
  //       <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
  //         <legend className="f2 fw6 ph0 mh0">Sign Up</legend>
  //         <div className="mt3">
  //         <label className="db fw6 lh-copy f6">Name</label>
  //           <input className="pa2 br3 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="text"  id="Name"  onChange={this.onNameChange}/>
  //           <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
  //           <input
  //                 className="pa2 br3 input-reset ba bg-transparent hover-bg-black hover-white w-100"
  //                 type="text"
  //                 name="email-address"
  //                 id="email"
  //                 onChange={this.onEmailChange}
  //               />
  //         </div>
  //         <div className="mv3">
  //           <label className="db fw6 lh-copy f6" for="password">Password</label>
  //           <input className="b pa2 br3 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"  onChange={this.onPasswordChange} />
  //           <label className="db fw6 lh-copy f6" for="password">Confrm Password</label>
  //           <input className="b pa2 br3 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="Conpassword"  id="Conpassword"  onChange={this.onPasswordChange}/>
  //         </div>
  //         <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
  //       </fieldset>
  //       <div className="">   
  //         <input className="b  br3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up"  onClick={this.onSubmitSignUp}/>
  //       </div>
  //       <div className="lh-copy mt3">
  //         <a href="#0"  className="f6 link dim black db">Forgot your password?</a>
  //       </div>
  //     </form>
  //   </main> 
  // </article>
 
  //   )
  }
 
}
 
export default SignUp ;

