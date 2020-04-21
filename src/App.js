import React, {useRef} from 'react';
import Hello from './Hello'
import './App.css'
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
function App() {
  const users = [
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@naver.com',
    },
    {
        id: 2,
        username: 'veefefelopert',
        email: 'public.eefeefvelopert@naver.com',
    },
    {
        id: 3,
        username: 'velasgdawegvopert',
        email: 'public.efwsafefsdvvdvelopert@naver.com',
    }


];
const nextId = useRef(4);
const onCreate = () => {
  console.log(nextId.current); //4
  nextId.current +=1;
  // 다시 새로운 값을 가리키도록


}
// 값이 reredering 되더라도 값을 계속해서 기억하고 있을 수 있도록 하기 위해 사용.
  return (
    <UserList users={users}/>

  );
}

export default App;
