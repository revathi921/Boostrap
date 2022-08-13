import React,{useState} from 'react'

const App = () => {
const [data,setData]=useState({
  username:'',
  email:'',
  password:'',
  confrimPassword:''
})
  const {username,email,password,confrimPassword}=data;
  const changeHandler=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler=e=>{
    e.preventDefault();
    if(password==confrimPassword){
      alert("password and confrim password should be same")
    }
    else{
      console.log("password and confrimPassword should be same")
    }
  }

  return (
    <div>
      
        <form onSubmit={submitHandler}>
        Username:<input type="text" name="username" value={username} onChange={changeHandler}/><br></br>
        Email:<input type="email" name="email" value={email} onChange={changeHandler}/><br></br>
        Password:<input type="password" name="password" value={password} onChange={changeHandler}/><br></br>
        Confrim Password:<input type="password" name="confrimPassword" value={confrimPassword} onChange={changeHandler}/><br></br>
          <input type="submit" name="submit"/>
        </form>
      
    </div>
  )
}

export default App