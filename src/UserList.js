import React from 'react';

function User({user, onRemove, onToggle}){
    const {username, email, id, active} = user;
    return (
        <div>
            <b style = {{
                color: active ? 'green': 'black',
                cursor: 'pointer',

            }}
            onClick={()=>onToggle(id)}
            >{username}</b>
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
}

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

 export default UserList;