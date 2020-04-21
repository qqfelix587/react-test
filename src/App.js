import React, {useRef,useState} from 'react';
import Hello from './Hello'
import './App.css'
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreatUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  
  });
  const {username, email} = inputs;
  const onChange = e =>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    

    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@naver.com',
        active: true,
    },
    {
        id: 2,
        username: 'veefefelopert',
        email: 'public.eefeefvelopert@naver.com',
        active: false,

    },
    {
        id: 3,
        username: 'velasgdawegvopert',
        email: 'public.efwsafefsdvvdvelopert@naver.com',
        active: false,

    }


]);


const nextId = useRef(4);
const onCreate = () => {
  const user = {
    id: nextId.current,
    username,
    email
  };
  // setUsers(users.push(user));
  setUsers([...users, user]);
  // setUsers(users.concat(user)); 이렇게 concat을 사용해도됨. 
  // 하지만 push등을 사용하면 안됨.
  setInputs({
    username : '',
    email: '',
  });



  
  console.log(nextId.current); //4
  nextId.current +=1;
  // 다시 새로운 값을 가리키도록


}
// 값이 reredering 되더라도 값을 계속해서 기억하고 있을 수 있도록 하기 위해 사용.

const onRemove = id => {
  setUsers(users.filter(user => user.id !== id));
};
const onToggle = id => {
  setUsers(users.map(
    user => user.id === id
    ? {...user, active: !user.active}
    : user
  ));

};

  return (
    <>
    <CreateUser 
      username={username} 
      email={email} 
      onChange={onChange} 
      onCreate = {onCreate}/>
     <UserList users={users} onRemove={onRemove} onToggle = {onToggle}/>
    </>
  );



}


export default App;
