import React, {createContext, useContext, useState} from 'react';



// function Child() {
//     const text = useContext(MyContext);
//     // useContext는 Context에 있는 값을 읽어와서 사용할 수 있게 해주는 react 내장된 hook
// return <div>안녕하세요?? {text}</div>
// }

// function Parent ({text}){
//     return <Child text = {text}/>
// }

// function GrandParent ({text}){
//     return <Parent text = {text}/>
// }
// function ContextSample ({text}){
//     return <GrandParent text = "Good"/>
// }
// 원래 이렇게 값을 단계적으로 넘겨줘야 했던 것을 한 번에 넘기기위해 아래 내용과 같이 코드 작성.


const MyContext = createContext('defaultValue');
                                // 기본값: provider comp... 가 사용되지 않았을 때의 기본값. 

function Child() {
    const text = useContext(MyContext);
    // useContext는 Context에 있는 값을 읽어와서 사용할 수 있게 해주는 react 내장된 hook
return <div>안녕하세요?? {text}</div>
}

function Parent (){
    return <Child />
}

function GrandParent (){
    return <Parent />
}
function ContextSample (){
    const [value, setValue]  = useState(true)
    return (
    <MyContext.Provider value={value? "Good": "Bad"}>
        {/* value값이 context의 값./ value값(true, false)에 따라 context의 값을 바꿈. */}
        <GrandParent/>
        <button onClick={() => setValue(!value)}> CLICK ME </button>
        {/* 클릭시에 value(true, false)값 변경 */}
    </MyContext.Provider>
    )
}
// 어디서든지 Context를 불러와 값을 변경하면 모든 값에 한 번에 적용됨.


export default ContextSample