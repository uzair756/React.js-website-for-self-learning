// import logo from './logo.svg';
// import User from './User';






// function App() {
//   const [name,setName]=useState('unknown')
//   function call(){
//     setName('anil')


//   }
//   return (
//     <div className="App">
//       <h1>{name}</h1>
//       <button onClick={()=>call()}>CLICK</button>
//       {/* <User/> */}
//     </div>
//   );
// }

// export default App;  
// import { useState } from "react";
// import './App.css';

// function App(){
//     const [name,setName]=useState('')
//     function Fruit(){
//         setName('apple')
//     }
//     return(
//         <div className="App">
//             <h1>fruit ka naam {name} hai</h1>
//             <button onClick={()=>Fruit()}>change</button>
//         </div>
//     )
// }

// export default App;

// class App extends Component{
//     constructor(){
//         super();
//         this.state={
//             naam:' '

//         }
//     }
//     change(){
//         this.setState({naam:'apple')

//     }
//     render(){
//         return(
//             <div>
//                 <h1>fruit ka naam {this.state.naam} hai</h1>
//                 <button onClick={()=>this.change()}>change</button>
//             </div>
//         )
//     }

// }
// export default App;
// import User from './User'
// const { Component, useState } = require("react");

// class App extends Component{
//     constructor(){
//         super();
//         this.state={
//             naam:'ali'
//         }
//     }
//     change(){
//         this.setState({naam:'ahmed'})
//     }
//     render(){
//         return(
//             <div className='App'>
//                 <h1>the name of the user is {this.state.naam}</h1>
//                 <button onClick={()=>this.change()}>change</button>
//                 <User naam={this.state.naam} />
//             </div>
//         )
//     }
// }
// export default App;

// import React,{useState} from "react";
// // function (){
//     const [name,setName]=useState('ali')
//     function change(val){
//         setName('ahmed')
//     }
//     return(
//         <div>
//             <h1>the name of the user is {name}</h1>
//             <button onClick={()=>change()}>change</button>
//             <input type="text" onChange={change}/>
//         </div>
//     )
// }
// export default User;

// import React from 'react';
// import { useState } from 'react';
// import './App.css';
// function App(){
//     const [show,setShow]=React.useState(true)
//     const [name,setName]=useState('')
//     function getdata(val){
//         console.warn(val.target.value)
//         setName(val.target.value)

//     }
//     return(
//         <div className='App'>
//             <input type='text' onChange={getdata}/>
//             <button onClick={()=>setShow(!name)}>show kro</button>
//             {
//                 show?<h1>get input {name} box</h1>:null
//             }
//         </div>

//     )
// }
// export default App;
// import React, { useState } from "react";


// function App(){
//     const [show,setShow]=React.useState(false)
//     return(
//         <div className="App">
//         {
//             show?<h1>Hello World</h1>:null
//         }
//         <button onClick={()=>setShow(!show)}>Toggle</button>
//         </div>
//     )
// }
// export default App;
// const App=()=>{
//     const [name,setName]=useState('')
//     const getformdata=(e)=>{
//         e.preventDefault();
//     }
//     return(
//         <div className="App">
//             <h1>Handle form in react {name}</h1>
//             <form onSubmit={getformdata}>
//                 <input type="text" placeholder="enter your name:" value={name} onChange={(text)=>setName(text.target.value)}/> <br/><br/>
//                 <select>
//                     <option>Select option</option>
//                     <option>Marvel</option>
//                     <option>DC</option>
//                 </select><br/><br/>
//                 <input type="checkbox"/><span>Accept terms and condition</span><br/><br/>
//                 <button>Submit</button>
//             </form>
//         </div>

//     );
// };
// export default App;
// import { useState } from 'react';
// import './App.css';
// const App=()=>{
//     const [loggedin,setLoggedin]=useState(1)
//     return(
//         <div className='App'>
//             {
//                 loggedin==1?<h1>User 1</h1>:loggedin==2?<h1>User 2</h1>:<h1>Guest</h1>

//             }
//         </div>
//     );
// };

// export default App;
// import { useState } from 'react';
// import './App.css'
// const App=()=>{
//     const [name,setName]=useState('')
//     const show=(e)=>{
//         if (name.length<3){
//             alert('enter correct values')
//         }
//         else{
//             alert('all good')
//         }
//         // e.preventDefault();
//     }
//     return(
//         <div className="App">
//             <h1>Login {name}</h1><br/>
//             <input placeholder='Enter User id' onChange={(text)=>setName(text.target.value)} value={name} />
//             {
//                 name.length<=3?
//                  <span>user not valid</span>
//                 :null
//             }
//             <br/><br/>
//             <input placeholder='Enter User Password'/><br/><br/>
//             <button onClick={()=>show()}>Login</button>

//         </div>

//     );
// };
// export default App;
// import './App.css'
// import User from './User';
// const App=()=>{
//     const show=()=>{
//         return(
//          alert('suna bache')
//         )
//     }
    
//     return(
//         <div className='App'>
//             <User show={show}/>

//         </div>

//     );
// };
// export default App;
// import User from './User';
// import './App.css'
// const { Component } = require("react");
// class App extends Component{
//     constructor(){
//         super();
//         this.state={
//             name:'Ali'
//         }
//     }
//     render(){
//         return(
//             <div className="App">
//                 <h1>Name: {this.state.name}</h1>
//                 <button onClick={()=>this.setState({name:"Ahmed"})}>update</button>
//                 <User name={this.state.name}/>
//             </div>
//         )
//     }
// }
// export default App;
// import User from "./User";
// import './App.css'
// const App=()=>{
//     const [name,setName]=useState('Ali')
//     return(
//         <div className="App">
//             <h1>sunao {name} g</h1>
//             <User name={name}/>

//         </div>

//     );
// };
// export default App;
// import "./App.css"
// import "./change.css"
// const App=()=>{
//     return(
//         <div className="App">
//             <h1 style={{color:'blue',backgroundColor:'yellow'}}>style in react.js</h1>
//             <h1 className="primary">Style in react</h1>
//         </div>

//     );
// };
// export default App;
// import "./App.css"
// import { Button } from 'react-bootstrap';
// const App=()=>{
//     return(
//         <div className="App">
//             <h1>button check</h1>
//                     <Button>button</Button>
//                     <Button variant="primary">Primary</Button>{' '}
//                     <Button variant="secondary">Secondary</Button>{' '}
//                     <Button variant="success">Success</Button>{' '}
//                     <Button variant="warning">Warning</Button>{' '}
//                     <Button variant="danger">Danger</Button>{' '}
//                     <Button variant="info">Info</Button>{' '}
//                     <Button variant="light">Light</Button>{' '}
//                     <Button variant="dark">Dark</Button>
//                     <Button variant="link">Link</Button>
//         </div>
//     )
// }
// export default App;
// import { Table } from 'react-bootstrap';
// import "./App.css"

// const App=()=>{
//     const student=[
//         {
//             name:"anil",
//             email:"anil@gmail.com",
//             age:'12'
//         },
//         {
//             name:"ali",
//             email:"li@gmail.com",
//             age:'13'
//         },
//         {
//             name:"ahmed",
//             email:"ahmed@gmail.com",
//             age:'14'
//         },
//         {
//             name:"bilal",
//             email:"bilal@gmail.com",
//             age:'15'
//         }
        
//     ]



//     return(
//         <div className="App">
//             <h1>handle array</h1>
//             <Table striped variant="black">
//                 <tbody>
//                 <tr>
//                     <td>Name</td>
//                     <td>Email</td>
//                     <td>Age</td>
//                 </tr>

//             {
//                 student.map((item)=>
//                 item.age==='14'?
//                     <tr key={item.age}>
//                         <td>{item.name}</td>
//                         <td>{item.email}</td>
//                         <td>{item.age}</td>
//                     </tr>:null
//                 )
//             }
//             </tbody>
//             </Table>

//         </div>
//   );
// };
// export default App;
// import { Table } from 'react-bootstrap';
// import "./App.css"
// const App=()=>{
//     const student=[
//                 {
//                     name:"anil",
//                     email:"anil@gmail.com",
//                     Address:[{Hn:'13',city:'rawat',country:'India'},{Hn:'13',city:'rawat',country:'India'},{Hn:'13',city:'rawat',country:'India'},{Hn:'13',city:'rawat',country:'India'}]

//                 },
//                 {
//                     name:"ali",
//                     email:"li@gmail.com",
//                     Address:[{Hn:'13',city:'rawat',country:'India'},{Hn:'13',city:'rawat',country:'India'},{Hn:'13',city:'rawat',country:'India'},{Hn:'13',city:'rawat',country:'India'}]
//                 },
//                 {
//                     name:"ahmed",
//                     email:"ahmed@gmail.com",
//                     Address:[{Hn:'13',city:'rawat',country:'India'},{Hn:'13',city:'rawat',country:'India'},{Hn:'13',city:'rawat',country:'India'},{Hn:'13',city:'rawat',country:'India'}]
//                 },
//                 {
//                     name:"bilal",
//                     email:"bilal@gmail.com",
//                     Address:[{Hn:'13',city:'rawat',country:'India'},{Hn:'13',city:'rawat',country:'India'},{Hn:'13',city:'rawat',country:'India'},{Hn:'13',city:'rawat',country:'India'}]
//                 }
                
//             ]
    
//     return(
//         <div className="App">
//             <Table variant="dark">
//                 <tbody>
//                     <tr>
//                         <td>Name</td>
//                         <td>Email</td>
//                         <td>Address</td>
//                     </tr>
//                 </tbody>
//             </Table>
//                 <Table striped variant="dark">
//                     <tbody>
//                         {
//                             student.map((item,i)=>
//                               <tr value={i}>
//                                 <td>{item.name}</td>
//                                 <td>{item.email}</td>
//                                 <td>
//                                     <Table striped variant="dark">
//                                         <tbody>
//                                             {
//                                                 item.Address.map((item)=>
//                                                   <tr>
//                                                     <td>{item.Hn}</td>
//                                                     <td>{item.country}</td>
//                                                     <td>{item.city}</td>
//                                                   </tr>
//                                                 )
//                                             }
//                                         </tbody>
//                                     </Table>
//                                 </td>
//                               </tr>
//                             )
//                         }
                        
//                     </tbody>
//                 </Table>
            

//         </div>

//     );
// };
// export default App;
// import './App.css'
// import User from "./User";

// const App=()=>{
//     const student=[
//                 {
//                     name:"anil",
//                     email:"anil@gmail.com",
//                     age:'12'
//                 },
//                 {
//                     name:"ali",
//                     email:"li@gmail.com",
//                     age:'13'
//                 },
//                 {
//                     name:"ahmed",
//                     email:"ahmed@gmail.com",
//                     age:'14'
//                 },
//                 {
//                     name:"bilal",
//                     email:"bilal@gmail.com",
//                     age:'15'
//                 }
                
//             ]

//     return(
//         <div className="App">
//             <h1>handle</h1>
//             {
//                 student.map((item)=><User item={item}/>)
//             }

//         </div>

//     )
// }
// export default App;
// import { Button } from "react-bootstrap";
// const App=()=>{
//     return(
//         <div className="App">
//             <h1>suna</h1>
//         </div>
//     )
// }
// export default App`;`
// const App=()=>{
//     const Api=async()=>{
//         const url='http'
//         const result=await fetch(url)
//         let data=await result.json()
//         if (data){
//             alert('aagya')
//         }
//     }
//     return(
//         <div>
//             <h1>hah</h1>
//         </div>

//     );
// };
// export default App;

// import { useMemo, useState } from "react";
// import './App.css'
// const App=()=>{
//     const [item,setItem]=useState(1)
//     const [count,setCount]=useState(0)
//     const add=useMemo(function adding(){
//         return count*5

//     })
//     return(
//         <div className="App">
//             <h1>usememo hook in react</h1>
//             <h2>Count: {count}</h2>
//             <h2>item:{item}</h2>
//             <h2>{add}</h2>
//             <button onClick={()=>setCount(count+1)}>update count</button><br/><br/>
//             <button onClick={()=>setItem(item*10)}>update item</button>

//         </div>
//     )
// }
// export default App;
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import './App.css'
// import Home from './Home';
// import About from './About';
// import NavBar from './NavBar';
// import User from './User';

// const App = () => {
//     return (
//         <div className='App'>
//             <BrowserRouter>
//                 <NavBar/>
//                 <Routes >
//                     <Route path='/' element={<Home />} />
//                     <Route path='about' element={<About />} />
//                     <Route path='/user/:name' element={<User/>}/>
//                 </Routes>
//             </BrowserRouter>
//         </div>

//     );
// };
// export default App;
// import { useState } from "react";
// import { Table } from "react-bootstrap";
  /* <h1 style={{ fontSize: 100, fontWeight: 'bold', color: 'white', textAlign: 'left', marginTop: '50px' }}>Welcome to Home page</h1>
            <p1 style={{fontSize:30,fontWeight:'bold',color:'white',textAlign:'left'}}>
Welcome to our digital sanctuary, a haven where creativity, innovation, and community thrive. Step into a captivating realm where every pixel tells a story, and imagination knows no bounds. Our homepage beckons you with open arms, inviting you to embark on a journey of discovery and endless possibilities.</p1><br/><br/>
            <button onClick={()=>chalo()}>go to about page</button> */


// const App=()=>{
//     const [data,setData]=useState([])
//     const apiget=async()=>{
//     const url='http://192.168.10.14:3001/users';
//     let result = await fetch(url);
//     let data = await result.json();
//     setData(data)
//     if (data){
//         alert('aagya data')
//     }
//     }


//     return(
//         <div className="App">
//             <h1>Api checking</h1>
//             <button onClick={()=>apiget()}>data check</button>
//             <Table striped variant="dark">
//                 <tbody>
//                     <tr>
//                         <td>
//                         {
//                 data.map((item)=><h1>{item.name}</h1>)
//             }
//                         </td>
//                     </tr>
//                 </tbody>
//             </Table>
//         </div>
//     )
// }
// export default App
// import { renderIntoDocument } from 'react-dom/test-utils';
// import './App.css'
// import { BrowserRouter,Link,Route,Routes, useParams ,NavLink, Navigate, useNavigate, Outlet} from 'react-router-dom';
// import { Button, Nav, Navbar } from 'react-bootstrap';
// import { Modal } from 'react-bootstrap';
// import { Alert } from 'react-bootstrap';
// import { useState } from 'react';
// import React from 'react';
// import aimage from './assets/images.png'
// import bimage from './assets/download.png'

// const App=()=>{
//     return(
//         <BrowserRouter>
//         {/* <ul style={{textAlign:'left'}}><li>Training</li></ul> */}
//           <ul className='bar'>
//             <img src={bimage} style={{width:70,height:70,borderRadius:45}}/>
//             <span style={{ color:'white',fontWeight:'bold',textAlign:'left',marginRight:600}}>Practice Project</span>
//             <li className='barli'><NavLink className='navbarlink' to='/signin'>Signup</NavLink></li>
//             <li className='barli'><NavLink className='navbarlink' to='/login'>Login</NavLink></li>
//             <li className='barli'><NavLink className='navbarlink' to='/'>Home</NavLink></li>
//             <li className='barli'><NavLink className='navbarlink' to='/about'>About Us</NavLink></li>
//             <li className='barli'><NavLink className='navbarlink' to='/contact'>Contact</NavLink></li>
//             {/* <li className='barli'><NavLink className='navbarlink' to='/user/anil'>Anil</NavLink></li>
//             <li className='barli'><NavLink className='navbarlink' to='/user/peter'>Peter</NavLink></li> */}

//           </ul>
//           <Routes>
//             <Route path='/' element={<Home/>}/>
//             <Route path='/login' element={<Login/>} />
//             <Route path='Signin' element={<Signin/>}/>
//             <Route path='/about' element={<About/>} />
//             <Route path='/*' element={<Error/>} />
//             <Route path='/user/:name' element={<User/>} />
//             <Route path='/contact/' element={<Contact/>} >
//                <Route path='company' element={<Company/>}/>
//                <Route path='employee' element={<Employee/>}/>
//             </Route>
//           </Routes>
//         </BrowserRouter>


//     );
// };
// export default App;

// const Login=()=>{
//     const navigate=useNavigate();
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const check=async()=>{
//         const url = "http://192.168.10.11:3001/users"
//         const result = await fetch(url, {method:'Get',headers:{"Content-Type":"application/json"}})
//         const data= await result.json();
//         const existinguser = data.find((user)=>user.email === email && user.password === password && email.length>0 && password.length>0);
//         if (existinguser){
//             navigate('/')
//             alert('logged in')
//         }
//         else 
//         {
//             alert('invalid credentials')
//         }
//     }
//     return(
//         <div className='App'>
//             <img src={aimage} alt='' style={{width:200,height:200,borderRadius:200}}/>
//             <h1 style={{color:'white'}}>Login</h1><br/>
//             <input style={{width:300,height:40,borderWidth:5,borderRadius:35,borderColor:'darkgoldenrod'}} placeholder='Enter your email' value={email} onChange={(text)=>setEmail(text.target.value)} /><br/><br/>
//             <input style={{width:300,height:40,borderWidth:5,borderRadius:35,borderColor:'darkgoldenrod'}} placeholder='Enter your password' value={password} onChange={(text)=>setPassword(text.target.value)} /><br/><br/>
//             <Button variant='primary' style={{color:'brown',backgroundColor:'white'}} onClick={()=>check()}>Login</Button><br/><br/>
//             <span style={{color:'white'}}>Dont have an account?</span>
//             <Link style={{color:'white', fontSize:16}} to='/signin'>Signin</Link>

//         </div>
//     )
// }

// const Signin=()=>{
//     const navigate = useNavigate();
//     const [name,setName]=useState('')
//     const [age,setAge]=useState('')
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const check=async()=>{
//         const url = "http://192.168.10.11:3001/users"
//         const result = await fetch(url ,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,age,email,password})})
//         let data = await result.json();
//         if (result){
//             alert('Account created')
//             navigate('/Login')
//         }

//     }
//     return(
//         <div className='App'>
//              <img src={aimage} alt='' style={{width:200,height:200,borderRadius:200}}/>
//         <h1 style={{color:'white'}}>Signup</h1><br/><br/>
//         {/* <li><a href='/'>Go to home page</a></li> */}
//         <input style={{width:300,height:40,borderWidth:5,borderRadius:35,borderColor:'darkgoldenrod'}} placeholder='Enter your name' value={name} onChange={(text)=>setName(text.target.value)} /><br/><br/>
//         <input style={{width:300,height:40,borderWidth:5,borderRadius:35,borderColor:'darkgoldenrod'}} placeholder='Enter your age' value={age} onChange={(text)=>setAge(text.targetvalue)}/><br/><br/>
//         <input style={{width:300,height:40,borderWidth:5,borderRadius:35,borderColor:'darkgoldenrod'}} placeholder='Enter your email' value={email} onChange={(text)=>setEmail(text.target.value)}/><br/><br/>
//         <input style={{width:300,height:40,borderWidth:5,borderRadius:35,borderColor:'darkgoldenrod'}} placeholder='Enter a strong password' value={password} onChange={(text)=>setPassword(text.target.value)}/><br/><br/>
//         <Button style={{color:'brown',backgroundColor:'white'}} variant='primary' onClick={()=>check()}>Signin</Button><br/><br/>
//         <span style={{color:'white'}}>Already have an account?</span>
//         <Link style={{color:'white',fontSize:16}} to='/login'>Login</Link>
//     </div>
//     );
// };


// const Home=()=>{
//     const navigate = useNavigate();
//     const [show,setShow]=useState(false)
//     return(
//         <div className='App'>
//             <h1 style={{color:'white',fontSize:50,marginTop:150,fontWeight:'bold'}}>Practice makes a man perfect</h1>
//             <h2 style={{color:'white',marginTop:20,fontWeight:'bold'}}>No pain, No gain</h2>
//             <Button onClick={()=>navigate('/about')} style={{marginRight:20,margin:20,color:'darkgoldenrod',backgroundColor:'white',width:150,height:50,borderRadius:90}} variant='secondary'>About Us</Button>
//             <Button onClick={()=>navigate('/contact')} style={{marginRight:20,margin:20,color:'darkgoldenrod',backgroundColor:'white',width:150,height:50,borderRadius:90}} variant='secondary'>Contact Us</Button>
//             <Button onClick={()=>setShow(true)} style={{marginRight:20,margin:20,color:'darkgoldenrod',backgroundColor:'white',width:150,height:50,borderRadius:90}} variant='secondary'>Powered by</Button>
//             {
//                 show? <div
//                 className="modal show"
//                 style={{ display: 'block', position:'static' }}
//               >
//                 <Modal.Dialog >
//                   <Modal.Header closeButton onClick={()=>setShow(false)}>
//                     <Modal.Title>Powered by</Modal.Title>
//                   </Modal.Header>
          
//                   <Modal.Body>
//                     <p>Powered by react developers</p>
//                   </Modal.Body>
          
//                   <Modal.Footer>
//                     <Button onClick={()=>setShow(false)} variant="secondary">OK</Button>
//                     {/* <Button variant="primary">Save changes</Button> */}
//                   </Modal.Footer>
//                 </Modal.Dialog>
//               </div>
                  
                
                
                
                
                
                
//                 :null
//             }
//         </div>
        
//     )
// }



// const About=()=>{
//     return(
//         <div className='App'>
//             <h1 style={{marginTop:50,color:'white'}}>About Us</h1>
//             <h3 style={{color:'white',marginTop:50}}>Welcome to our practice project! At [Your Project Name], we are passionate about learning and improving our web development skills. Our goal is to create a platform where developers, beginners, and enthusiasts can come together to explore, experiment, and collaborate on various web technologies.

// Our team is comprised of dedicated developers who are eager to expand their knowledge and stay up-to-date with the latest trends in web development. Through this project, we aim to build a community that fosters creativity, innovation, and continuous learning.

// As we embark on this journey, we are excited to share our progress, challenges, and achievements with you. Whether you're a seasoned developer or just starting, we encourage you to join us in this adventure. Together, we can grow as developers and make meaningful contributions to the ever-evolving world of web development.

// Thank you for being a part of [Your Project Name]. Let's code, learn, and create amazing web experiences together!
// </h3>
//         </div>
       
        
//     );
// };

// const Contact=()=>{
//     return(
//         <div className='App'>
//             <h1 style={{marginTop:50,color:'white'}}>Contact Us</h1>
//             <h3 style={{color:'white',marginTop:50}}>If you have any questions, suggestions, or inquiries, feel free to get in touch with us! We value your feedback and are always eager to hear from you. Whether you want to learn more about our products, services, or simply want to say hello, our team is here to assist you. Reach out to us via email at contact@example.com or give us a call at +1 (123) 456-7890. We'll be delighted to connect with you and provide any assistance you may need. Thank you for considering us, and we look forward to hearing from you!
// </h3>

//         </div>
//             );
//           }

// const Error=()=>{
//     return(
//         <div className='App'>
//             <h1>Error404</h1>

//         </div>

//     )
// }
// const User=()=>{
//     const {name}=useParams();
//     return(
//         <div className='App'>
//             <h1>Welcome to {name}'s page</h1>
//         </div>
//     );
// };

// const Company=()=>{
//     return(
//         <div>
//             <h1>welcome to company page</h1>
//         </div>
//     )
// }
// const Employee=()=>{
//     return(
//         <div>
//             <h1>welcome to employee page</h1>
//         </div>
//     )
// }
// import { useParams } from "react-router-dom";

// const User=()=>{
//     const {name} = useParams();
//     console.warn(name)
//     return(
//         <div className="App">
//             <h1>this is {name} page</h1>

//         </div>
//     )
// }
// export default User;
// import { Link } from "react-router-dom";
// const About=()=>{
//     return(
//         <div className="App">
//             <h1>About Us </h1>
//             <li><Link to='/user/anil'>anil</Link></li>
//             <li><Link to='/user/peter'>peter</Link></li>
//         </div>
//     )
// }
// export default About;
// const User=(props)=>{
//     return(
//         <div>
//             <h1>User Component</h1>
//             <button onClick={()=>props.show()}>Call data function</button>
//         </div>
//     )
// }
// export default User;

// import { Component } from "react";


// // const User=(props)=>{
// //     return(
// //         <div className="User">
// //             <h1>{props.name}</h1>
// //         </div>

// //     )
// // }
// // export default User;
// class User extends Component{
//     render(){
//         return(
//             <div className="User">
//                 <h1>ye lo {this.props.name} g</h1>

//             </div>
//         )
//     }
// }
// export default User;

// const User=(props)=>{
//     return(
//         <div style={{color:'darkblue',backgroundColor:'saddlebrown',margin:10,fontSize:40,borderRadius:20,padding:30}}>
//             <span>{props.item.name}</span>
//             <span>{props.item.email}</span>
//         </div>

//     );
// };
// export default User;
// const Home=()=>{
//     return(
//         <div className="App">
//             <h1>Home page </h1>
//             <ul>
//                 <li><a href='/about'>go to about page</a></li>
//             </ul>
//         </div>
//     )
// }
// export default Home;
// import './App.css'
// import { Link ,NavLink} from "react-router-dom";
// const NavBar=()=>{
//     return(
//         <div>
//             <ul style={{textAlign:'right'}}>
//             <li style={{color:'red',backgroundColor:'blue'}}><NavLink to='/'>Home</NavLink></li>
//             <li><NavLink to='/about'>About</NavLink></li>
//             </ul>
//         </div>

//     );
// };
// export default NavBar;
import './App.css'
import Homecontainer from "./containers/Homecontainer";
const App=()=>{
  return(
    <div className="App">
      <Homecontainer/>
    </div>
  )
}
export default App;