import React, { Component } from 'react';  
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup,  Row } from 'reactstrap';   
import '../App.css';  
import '../App.js';  
import Login from './Login';  
import {Dashboard1} from './Dashboard1';  
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom'; 
class Reg extends Component {  
  alerts(e){
    e.preventDefault()
    alert("Regestration Successful") 
  }
 
  render() {  
    const block11={
      width:"100%",
      overflow:"auto",
      display:"flex",
      marginBottom:"10px"
      };
      const ButtonSty={
      backgroundColoe: "black",
      height: "40px",
      fontSize: "larger",
      width: "49.5%",    
      };
      const Y={     
        width: "48%",
        display:"inline",
        marginLeft:"10px"
      };
     const YES={
        width: "80%",
        padding:"5px",
        border:"2px solid black",
        borderRadius: "12px",
        display:"inline",
      };
     const YE={
      width: "32%",
      textAlign: "right",   
      padding:"5px",  
     };

    return (  

      <div class="bg">
            <nav className="navbar navbar-expand-lg navheader" style={{ "backgroundColor": "rgb(174, 129, 233)"}}>   
              <div className="collapse navbar-collapse" >    
                <ul className="navbar-nav mr-auto" >        
                  <li className="nav-item" >    
                  <button style={{ "text-shadow": "2px 2px 4px #000000"}} class="ButtonStyle1">Sign Up</button>   
                  </li>    
                  <li className="nav-item">    
                  <Link to={'/Login'} className="nav-link"> <button style={{ "text-shadow": "2px 2px 4px #000000"}}class="ButtonStyle1">Login</button> </Link>
                  </li>
                </ul>    
              </div>   
           </nav>
        <div className="app flex-row align-items-center">  
          <Container>  
            <Row className="justify-content-center">  
              <Col md="9" lg="7" xl="6">  
                <Card className="mx-4">  
                  <CardBody className="p-4">  
                    <Form>  
                      <div class="row" className="mb-2 pageheading">  
                        <div class="col-sm-12 btn btn-primary">  
                        <center>           <h2 style={{ "text-shadow": "2px 2px 4px #000000"}}>  Sign Up </h2></center> 
                        </div>  
                      </div>  
                      <InputGroup > 
                      <div style={block11}>
                                          <div  style={YE}><b>Name  :</b></div>
                                          <div  style={Y}><Input type="text" placeholder="Enter Name" style={YES} required/></div>    
                      </div>                      
                      </InputGroup>  
                      <InputGroup > 
                      <div style={block11}>
                                          <div  style={YE}><b>Email ID  : </b></div>
                                          <div  style={Y}><Input type="text" placeholder="Enter Email" style={YES} required/></div>    
                      </div>                      
                      </InputGroup> 
                      <InputGroup > 
                      <div style={block11}>
                                          <div  style={YE}><b>Password  : </b></div>
                                          <div  style={Y}><Input type="text" placeholder="Enter Password"  style={YES} required/></div>    
                      </div>                      
                      </InputGroup> 
                      <InputGroup > 
                      <div style={block11}>
                                          <div  style={YE}><b>City  : </b></div>
                                          <div  style={Y}><Input type="text" placeholder="Enter City"  style={YES} required/></div>    
                      </div>                      
                      </InputGroup>  
                      <InputGroup > 
                      <div style={block11}>
                                          <div  style={YE}><b> Mobile No.  : </b></div>
                                          <div  style={Y}><Input type="text"  placeholder="Enter Mobile Number"  style={YES} required/></div>    
                      </div>                      
                      </InputGroup>

                      <br></br>
                      <center><Button style={ButtonSty}  id="subnewtopic"  type="submit" lock onClick={this.alerts} ><b>Create Account</b></Button>  </center>
                    </Form>  
                  </CardBody>  
                </Card>  
              </Col>  
            </Row>  
          </Container>  
        </div> 
      
        <Switch>    
        <Route exact path='/Login' component={Login} />    
        </Switch>    
        <Switch>  
        <Route path='/Dashboard1' component={Dashboard1} />    
        </Switch> 
      </div> 
    );  
  }  
}  
  
export default Reg; 


// function check() { // Define a function that we can call our event listeners with
//   // Get our inputs and textareas
//   var inputs = document.getElementsByTagName("input");
//   var filled = true; // We'll assume that all of the fields are full unless proven otherwise
//   var oneChecked = false; // We can use this to keep track of the radio buttons (by assuming at first that none are checked)

//   for (var i = 0; i < inputs.length; i++) { // Loop through all of the inputs first
//       if (inputs[i].type === "text" && !inputs[i].value) { // If the input is a text field, check whether it is empty; if so, set filled to false
//           filled = false;
//       }

//       if (inputs[i].type === "radio" && inputs[i].checked) { // If the input is a radio button, see if it is filled in; because we only need one radio button to be filled in, that's all we need to know
//           oneChecked = true;
//       }

//   }

 

//   if (filled) { // Check whether any of the fields are empty (or, in the radio button's case, if one is selected, and enable/disable the button accordingly
//       document.getElementById("subnewtopic").disabled = false;
//   } else {
//       document.getElementById("subnewtopic").disabled = true;
//   }
// }

// // Add event listeners to check for keypresses and clicks
// window.addEventListener("keyup", check);
// window.addEventListener("click", check);