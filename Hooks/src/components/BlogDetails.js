import React, { Component } from 'react';  
import { Input } from 'reactstrap';  
import { Redirect,BrowserRouter as Router } from 'react-router-dom';  
  
class BlogDetails extends Component {  
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        const tokens = localStorage.getItem("tokens")
        const tokenr = localStorage.getItem("tokenr")
        const tokenl = localStorage.getItem("tokenl")
        const tokend = localStorage.getItem("tokend")
        const tokenss = localStorage.getItem("tokenss")
        const tokendd = localStorage.getItem("tokendd")
        let loggedIn = true
        let ul=false
        let ud=false
        let bl=false
        let bd=false
        let ss=false  
        let dd=false  
        if(token===null){
            loggedIn = true   
        }
        if(tokens===null){
            ul=false
        }
        if(tokenr===null){
            ud=false   
        }
        if(tokenl===null){
            bl=false
        }
        if(tokend===null){
            bd=false   
        }
        if(tokenss===null){
            ss=false   
        }
        if(tokendd===null){
            dd=false   
        }
        this.state={
            ul:false,
            bl:false,
            bd:false,
            ud:false,
            ss:false,
            dd:false,
            isLoggedIn:true
        }
        this.BL = this.BL.bind(this)
        this.BD = this.BD.bind(this)
        this.UD = this.UD.bind(this)
        this.UL = this.UL.bind(this)
        this.DD = this.DD.bind(this)
        this.SS = this.SS.bind(this)
        this.Register = this.Register.bind(this)
    }   
Register(e){

    e.preventDefault()
   
   {
        localStorage.setItem("token","abc")
        this.setState({
            isLoggedIn:false
        })
    }
   
}
UL(e){
    e.preventDefault()
   {
        localStorage.setItem("tokens","abc")
        this.setState({
            ul:true
        })
    } 
}
UD(e){
    e.preventDefault()
   {
        localStorage.setItem("tokenr","abc")
        this.setState({
            ud:true
        })
    } 
}
BL(e){
    e.preventDefault()
   {
        localStorage.setItem("tokenl","abc")
        this.setState({
            bl:true
        })
    } 
}
BD(e){
    e.preventDefault()
   {
        localStorage.setItem("tokend","abc")
        this.setState({
            bd:true
        })
    } 
}
SS(e){
    e.preventDefault()
   {
        localStorage.setItem("tokenss","abc")
        this.setState({
            ss:true
        })
    } 
}
DD(e){
    e.preventDefault()
   {
        localStorage.setItem("tokenss","abc")
        this.setState({
            dd:true
        })
    } 
}
render() {  
    if(this.state.isLoggedIn===false){
        return <Redirect to="/Login"/>
    }
    if(this.state.ul===true){
         return <Redirect to="UserList"/>
    }
    if(this.state.ud===true){
        return <Redirect to="UserDetails"/>
   }
   if(this.state.bl===true){
    return <Redirect to="BlogList"/>
    }
    if(this.state.bd===true){
        return <Redirect to="BlogDetails"/>
   }
   if(this.state.ss===true){
    return <Redirect to="Settings"/>
    }
    if(this.state.dd===true){
        return <Redirect to="Dashboard1"/>
        }
    const   mystyle3={
        listStyleType: "none",
        margin: "none",
        padding:  "5px"
    };
    const   mystyle4={
    borderTop:"2px solid white",
  
    margin: "0 auto",
    padding: "2%"
    };
    const   mystyle5={
        margin: "0 auto",
        padding: "2%"
        };
  
          const mystyle2 = {
            display: "inline-block",
           border: "1px solid black",
           overflow: "hidden",
           width: "84.65%",
  
          height:"600px",
           verticallyAlign: "top"
               };
               const mystyle1 = {
                display: "inline-block",
               border: "1px solid black",
               overflow: "hidden",
               width: "100%",
               minHeight:"100%",
               padding: "none",
               
               background:" linear-gradient(to bottom, black 20%, blue 50%, black 80%)"
        
                   };
               
  
                   const divstylei = {
                    backgroundColor: "transparent",
                    marginLeft: "14px",
                    marginTop: "14px",
                    width: "30%",
                    height: "250px",
                    border:"1px solid black",
                    display: "inline-block"
                };
                const divstyle1j = {
                    backgroundColor: "transparent",
                    marginTop: "14px",
                    marginLeft: "14px",
                    width: "45.5%",
                    height: "250px",
                    border:"1px solid black",
                    display: "inline-block"
                };
           const ss={
               border:"1px solid black",
               background:" radial-gradient(circle, pink,lightblue, black)"
           };
  
        
      
  
    const divstyle = {
     
        marginLeft: "40px",
        marginTop: "40px",
        width: "28%",
        height: "270px",
        border:"1px solid black",
        display: "inline-block",
        backgroundColor:"pink",
        opacity:"0.9",
        color: "lightblue",
        textAlign:"center",
        textDecoration:"underline",
        textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
    }



  
    return (    
        <div className="full-container" style={ss}>
            <Router>
                <div className="sidebar">
                    <div  style={mystyle1}>
                             <ol style={mystyle3} >        
                                    <li style={mystyle5} >    
                                    <button onClick={this.DD} class="ButtonStyle2"><i  style={{"margin-right":"7px"}} class="fa fa-fw fa-home"></i>Dashboard</button>   
                                        </li>    
                                        <li  style={mystyle4} >    
                                        <button  onClick={this.UL} class="ButtonStyle2"><i style={{"margin-right":"10px"}} class="fa fa-address-book-o"></i>User List</button>   
                                        </li>
                                        <li style={mystyle4} >    
                                        <button onClick={this.UD} class="ButtonStyle2"><i style={{"margin-right":"10px"}} class="fa fa-address-card-o"></i>User Details</button> 
                                        </li>
                                        <li style={mystyle4} >    
                                        <button onClick={this.BL} class="ButtonStyle2"><i style={{"margin-right":"10px"}} class="fa fa-th-list"></i>Blog List</button>  
                                        </li>
                                        <li style={mystyle4} >    
                                        <button class="ButtonStyle2"><i style={{"margin-right":"10px"}} class="fa fa-th-large"></i>Blog Details</button> 
                                        </li>
                                        <li style={mystyle4}>    
                                        <button onClick={this.SS} class="ButtonStyle2"><i style={{"margin-right":"10px"}} class="fa fa-cog fa-spin"></i>Settings</button> 
                                        </li >
                                        <li  style={mystyle4}>    
                                        <button onClick={this.Register}  class="ButtonStyle2"><i style={{"margin-right":"10px"}}  class="fa fa-street-view"></i>Logout</button> 
                                        </li>
                               </ol> 
                        </div>
                    </div>         
                
                    <div style={{ "width": "80%" , "margin":"none"}}>
                    <center><h1 style={{ "text-shadow": "2px 2px 4px #000000"}}> Blog Details</h1></center>
                        <div  style={{ "margin-left":"40px"}}>
                            <b>Blog Name :</b>
                            <Input style={{ "margin-left":"10px"}} type="text" placeholder="Enter Name"  />
                        </div>
                            <div style={divstyle}>
                            <h4> Content </h4>
                            </div> 
                            <div style={divstyle}>
                            <h4> Photos</h4> 
                            </div> 
                            <div style={divstyle}>
                            <h4> Views Per Day</h4>
                            </div> 
                            <div style={divstyle}>
                            <h4> Topics Covered </h4>
                            </div> 
                            <div style={divstyle}>
                            <h4> Total Visits </h4>
                            </div>
                            <div style={divstyle}>
                            <h4> Profit Made </h4>
                            </div> 
                            <div style={divstyle}>
                            <h4> Views Per Day</h4>
                            </div> 
                            <div style={divstyle}>
                            <h4> Topics Covered </h4>
                            </div> 
                            <div style={divstyle}>
                            <h4> Total Visits </h4>
                            </div>
                            <div style={divstyle}>
                            <h4> Profit Made </h4>
                         </div> 
                     </div> 
               </Router>
        </div>
    );  
  }  
}  
  
export default BlogDetails; 