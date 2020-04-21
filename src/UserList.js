import React from 'react';

function User({user}){
    return (
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    );
}

 function UserList() {
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
                user => (<User user={user} key={user.id}/>)
                // 만약 키로 쓸 마땅한 요소가 없다면 (user,index) => (<User user={user} key={index}/>)를 쓰기
            )
        } 
    </div>
    );



 }

 export default UserList;