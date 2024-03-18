import logo from './logo.svg';
import './App.css';
import User from './User'     /* Class Component */
import User1 from './User1'   /* Function Component */
import User2 from './User2'   /* JSX with React */
/*alert(Hello); */



function App() {
  let data= "Akash";
  function apple()
  {
    alert("Function called");
  }
  return (
    <div className='App'> 
      <h1>{data}</h1>
      <button onClick={apple}>Click me</button> 
      <User/>
      <User1/>
      <User2/>
    </div>
    

  );
}

export default App;
