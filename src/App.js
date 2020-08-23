import React,{ useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Alamgir', 'Salman','Bappi']
  const products = [
    {name:'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]
  const productNames = products.map(product => product.name)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Counter></Counter>
        <Users></Users>
        <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        
        </ul>
        <ul>
          {
            products.map(product => <li> Name: {product.name} Price: {product.price}</li>)
          }
        </ul>
        
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person Nayok={nayoks[0]} Naika="Sabana" ></Person>
        <Person Nayok={nayoks[1]} Naika="Popi"></Person>
      </header>
    </div>
  );
}
function Users() {
  const [users,setUsers] = useState([])
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data));
}, [])
  return(
    <div style={{border: '1px solid red', borderRadius:'10px', boxShadow:'5px 5px 20px gray'}} >
      <h3>Dynamic users:{users.length}</h3>
        <ol>
          {
            users.map(user => <li> {user.name}</li>)
          }
        </ol>
        <h3>Dynamic users user name:</h3>
        <ul>
        {
          users.map(user => <li>{user.username}</li>)
        }
        </ul>
        <h3>Dynamic users E-mail</h3>
        <ul>
          {
            users.map(user => <li>E-mail: {user.email}</li>)
          }
        </ul>
        <ul>
          {
            users.map(user => <li>Phone Number:{user.phone}</li>)
          }
        </ul>
    </div>
  )
  
}

function Counter() {
  const [count,setCount] = useState(0);
  return(
    <div>
      <h1>Count: {count} </h1>
      <p><button onClick ={() =>setCount(count + 1)} >Increase</button></p>
      <p><button onClick = {() => setCount(count - 1)} >Decrease</button></p>
      <p><button onClick={() => setCount( count*2 )} >Double</button></p>
    </div>
  )
  
}
// function Counter(){
//   const [count, setCount] = useState(0);
//   const handleIncrease = () =>{
//     const newCount = count + 1;
//     setCount(newCount);
//   }
//   return( 
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick = {handleIncrease} >Increase</button>
//     </div>
//   )
// }


//Product Site
function Product(props){
  const productStyle={
    border: '1px solid grey',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name,price} = props.product;
  // console.log(name,price);
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  )
}


//Person Site
function Person(props){
  const PersonStyle = {
    border:'2px solid red',
    margin: '5px',
    padding: '5px'

  }
  return (
    <div style = {PersonStyle}>
      <h3>Nayok: {props.Nayok} Naika:{props.Naika}</h3>
      <p>Hero of {props.Naika}</p>
    </div>
  )
}

export default App;
