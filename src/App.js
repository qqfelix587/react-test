import React, {useRef,useState, useMemo, useCallback} from 'react';
import Hello from './Hello'
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
};
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  
  });

  const {username, email} = inputs;


  const onChange = useCallback(e =>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);

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

const onCreate = useCallback(() => {
  const user = {
    id: nextId.current,
    username,
    email
  };
  // setUsers(users.push(user));
  setUsers(users => [...users, user]);
  // 이렇게 되면 항상 최신 users를 조회하게 되어 users가 업데이트 될때마다 rerendering이 되지않음
  // setUsers(users.concat(user)); 이렇게 concat을 사용해도됨. 
  // 하지만 push등을 사용하면 안됨.
  setInputs({
    username : '',
    email: '',
  });
  // console.log(nextId.current); //4
  nextId.current +=1;
  // 다시 새로운 값을 가리키도록
},[username, email]);
// 값이 reredering 되더라도 값을 계속해서 기억하고 있을 수 있도록 하기 위해 사용.


const onRemove = useCallback (id => {
  setUsers(users => users.filter(user => user.id !== id));
},[]);
 

const onToggle = useCallback(id => {
  setUsers(users => users.map(
    user => user.id === id
    ? {...user, active: !user.active}
    : user
  ));

}, []);
// const count = countActiveUsers(users);
// 이렇게 사용하면 rerendering이 될 때마다 실행됨. -> useMemo 사용함(특정 값이 바뀔 때만 동작)
const count = useMemo(() => countActiveUsers(users), [users]);
//  deps 배열 안에 넣는 값이 바뀔 때만 연산 진행됨. / 성능 최적화시키기 위해 적용하는 것.


  return (
    <>
    <CreateUser 
      username={username} 
      email={email} 
      onChange={onChange} 
      onCreate = {onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle = {onToggle}/>
      <div>활성 사용자 수 : {count}</div>
    </> 
  );
}


export default App;
