import React, { Component } from 'react'
import '../App.css';  
import '../App.js';  
import Reg from './Reg';  
import {Dashboard1} from "./Dashboard1"; 
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  export class Login extends Component  {  
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token===null){
            loggedIn = false
        }
        this.state={
            username:"",
            password:"",
            isLoggedIn:false
        }
        this.onChange = this.onChange.bind(this)
        this.Registerr = this.Registerr.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }    

    Registerr(e){
        e.preventDefault()
        const {username,password} = this.state
        if(username==="mannat" && password==="mannat"){
            localStorage.setItem("token","abc")
            this.setState({
                isLoggedIn:true
            })
        }
        else{
            alert("Invalid Details")
        }
    }


    render() {  
        if(this.state.isLoggedIn===true){
            return <Redirect to="/Dashboard1"/>
        }
                const ButtonSty={
                backgroundColoe: "black",
                height: "40px",
                fontSize: "larger",
                width: "49.5%",
                marginBottom:"40px"

                };
                const block11={
                width:"100%",
                overflow:"auto",
                display:"flex",
                marginBottom:"10px"
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
                width: "32%", textAlign: "right",   padding:"5px",  
                };

        return (  
            <div class="bg">
                <nav className="navbar navbar-expand-lg navheader" style={{ "backgroundColor": "rgb(174, 129, 233)"}} >    
                    <div className="collapse navbar-collapse" >    
                        <ul className="navbar-nav mr-auto" >        
                            <li className="nav-item" >    
                            <Link to={'/Reg'} className="nav-link"><button style={{ "text-shadow": "2px 2px 4px #000000"}} class="ButtonStyle1">Sign Up</button>    </Link> 
                            </li>    
                            <li className="nav-item">    
                            <button style={{ "text-shadow": "2px 2px 4px #000000"}}class="ButtonStyle1">Login</button>
                            </li>
                        </ul>    
                    </div>    
                </nav>   
            <div className="app flex-row align-items-center ">  
                <Container>  
                    <Row className="justify-content-center">  
                        <Col md="9" lg="7" xl="6">  
  
                            <CardGroup>  
                                <Card className="p-2">  
                                    <CardBody>  
                                        <Form>  
                                            <div class="row"  className="mb-2 pageheading">  
                                                <div class="col-sm-12 btn btn-primary">  
                                                  <center>           <h1 style={{ "text-shadow": "2px 2px 4px #000000"}}> Login  </h1> </center>
                                                 </div>  
                                            </div>  
                     <InputGroup > 
                    <div style={block11}>
                                        <div  style={YE}><b>Name  :</b></div>
                                        <div  style={Y}><Input name="username" value={this.state.username} onChange={this.onChange} type="text" placeholder="Enter Name" style={YES} required/></div>    
                    </div>                      
                    </InputGroup>   
                    <InputGroup > 
                    <div style={block11}>
                                        <div  style={YE}><b>Password  : </b></div>
                                        <div  style={Y}><Input name="password" value={this.state.password} onChange={this.onChange} type="password" placeholder="Enter Password"  style={YES} required/></div>    
                    </div>                      
                    </InputGroup>  
                                            <br></br>
                                           <center > <Button style={ButtonSty}  variant="primary" type="submit" onClick={this.Registerr}><b>Login</b></Button>  </center>
                                        </Form>  
                                    </CardBody>  
                                </Card>  
                            </CardGroup>  
                        </Col>  
                    </Row>  
                </Container>  
            </div>  
            <Switch>    
            <Route path='/Reg' component={Reg} />    
            </Switch>    
            <Switch>  
            <Route path="/Dashboard1" function={Dashboard1} ></Route>  
            </Switch> 
            </div>
        );  
    }  
}  
  
export default Login;  