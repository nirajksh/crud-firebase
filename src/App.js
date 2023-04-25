import { useEffect, useState } from 'react';
import './App.css';
import {app,db} from "./firebaseConfig"
import { addDoc,collection, deleteDoc, getDocs, updateDoc,doc } from 'firebase/firestore';


function App() {
  //debugger;
 const [newName, setNewName] = useState()
 const[increaseAge,setIncreaseAge]=useState()
 const[users,setUsers] = useState()

 const userCollectionRef=collection(db,"user")

 const createUser=async()=>{


  
  await addDoc(userCollectionRef,{name:newName, age:Number(increaseAge)})
 }

 const updateUser= async(id,age)=>{
  const userdoc= doc(db,"user",id)
  debugger;
  const increaseAge={age:Number(age)+1}
  await updateDoc(userdoc,increaseAge)

 }

 const deleteUser = async(id)=>{


  const userdoc= doc(db,"user",id)
  await deleteDoc(userdoc,increaseAge)
 }

 
 useEffect(()=>{
  const getUser=async()=>{
    const data = await getDocs(userCollectionRef)
    setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
   // console.log(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
  }
  getUser();

 },[])

  return (
    <div className="App">
      <div className='container'>
        <input className="input" type='text' placeholder='Enter your name ' onChange={(e)=>setNewName(e.target.value)}/>
        <input className="input" type='number' placeholder='enter you age' onChange={(e)=>setIncreaseAge(e.target.value)}/>
        <button onClick={createUser}>Create User</button>

      </div>
      {
        users?.map((user)=>(
          <div key={user.id} className='items'>
           <div>
           <h2>Name:{user.name}</h2>
            <h3>age:{user.age}</h3>
            <button onClick={()=>{updateUser(user.id,user.age)}}>Increase Age</button>
            <button onClick={()=>{deleteUser(user.id)}}>Delete User</button>
  
            </div>
          </div>
        ))
     
      }
     

      
    </div>
  );
}

export default App;
