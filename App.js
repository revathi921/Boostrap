import React,{useState} from 'react'

const App = () => {
  const[data,setData]=useState({
    username:'',
    password:''
  })
  const {username,password}=data;
  const changeHandler=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler=e=>{
    e.preventDefault()
    console.log(data);
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          Username:<input type="text" name="username" placeholder='username or email address' value={username} onChange={changeHandler}/><br></br>
          Password:<input type="password" name="password" placeholder='password' value={password} onChange={changeHandler}/><br></br>
          <input type="submit" name="submit"/>
       
        </form>
      </center>
    </div>
  )
}

export default App
