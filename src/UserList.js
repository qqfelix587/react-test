import React, {useEffect}from 'react';

const User = React.memo(function User({user, onRemove, onToggle}){
    const {username, email, id, active} = user;

    // useEffect(()=> {
    //     console.log('컴포넌트가 화면에 나타남');
    //     // mount 될 때 주로 하는 작업
    //     // props로 받은 값을 컴포넌트의 state로 설정하는 것.
    //     // 외부 API 요청할 때
    //     // D3 Video.js
    //     // setInterval, setTimeout

    //     return () =>{
    //         // unmount 될 때 주로 하는 작업
    //         // clearInterval, clearTimeout
    //         // 라이브러리 인스턴스 제거.
    //         console.log('컴포넌트가 화면에서 사라짐!!');
    //     }
    // }, []);

    // useEffect(()=>{
    //     console.log('user 값이 설정됨');
    //     console.log(user);
    //     // 특정값이 update되고 난 직후에 실행됨.
        
    //     return () =>{
    //         console.log('user 값이 바뀌기 전')
    //         console.log(user);
    //     }

    //     },[user]
    //     // []에 어떤 값을 넣으면 해당값이 바뀔 때 마다 호출/ 처음 나타날 때도 호출됨.
    //     // useEffect 내에서 사용하고 있는 값이 배열에 들어가 있지 않으면, 에러 출력됨.
    //     );

    // useEffect (( )=>{
    //     console.log(user);

    // })
    // 모든 값이 변화가 있을 때마다 실행됨.




    // deps 라는 배열은 의존되는 값들을 넣어주는 것, 
    // 이 값이 비어있으면, component가 처음 화면에 나타날 때만 실행됨
    return (
        <div>
            <b style = {{
                color: active ? 'green': 'black',
                cursor: 'pointer',

            }}
            onClick={()=>onToggle(id)}
            >{username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
            {/* onClick={onRemove(id)}라고 쓰게 될 경우 
                rendering시 함수를 호출해버려 아무것도 뜨지 않게 됨.
                따라서, 함수를 호출해주는 것이 아니라 함수를 만들어 주기 위해
                () => onremove ... 의 형태로 사용해야함.
            */}
        </div>
    );
});

 function UserList({users, onRemove, onToggle}) {
   
    return(
    <div>
        {/* <div>
            <b>{users[0].username}</b><span>({users[0].email})</span>
        </div>
        <div>
            <b>{users[1].username}</b><span>({users[1].email})</span>
        </div>
        <div>
            <b>{users[2].username}</b><span>({users[2].email})</span>
        </div> */}


        {/* <User user= {users[0]}/>
        <User user= {users[1]}/>
        <User user= {users[2]}/>
        */}

        {/* 객체로 있는 배열을 component로 바꾸기 위해 map함수 사용   */}
        {
            users.map(
                //user => (<User user={user} />) 이렇게 쓰면 에러가 나오는데 객체 내 key에 해당하는 요소가 필요하다는 error임.
                user => (
                <User 
                user={user} 
                key={user.id} 
                onRemove={onRemove}
                onToggle={onToggle}
                />)
                // 만약 키로 쓸 마땅한 요소가 없다면 (user,index) => (<User user={user} key={index}/>)를 쓰기
            )
        } 
    </div>
    );



 }

 export default React.memo(
     UserList,
     (prevProps, nextProps) => nextProps.users ===prevProps.users
     );