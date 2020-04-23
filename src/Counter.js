// import React, {useState} from 'react';
import React, {useReducer} from 'react';
// 기존의 useState로 동적 상태 변화를 제어하는 코드를 useReducer로 해보려 함.

function reducer(state, action){
    // state의 type은 어떤 것이든 상관없음
    switch (action.type){
        case 'INCREMENT':
            return state + 1;

        case 'DECREMENT':
            return state - 1;
        default: 
            throw new Error('Unhandled action');
            // return state로 해도 됨. -> 준비하지 않은 action이 올 경우 아무 변화도 없게 할 때,
    }
}


function Counter(){

    const [number, dispatch] = useReducer(reducer, 0);
    //   현재의 상태, action을 발생시키는 함수

    const onIncrease = () => {
        // setNumber(prevNumber => prevNumber + 1);
        dispatch({
            type: 'INCREMENT'
        });

    }
    const onDecrease = () => {
        // setNumber(number-1);
        dispatch({
            type: 'DECREMENT'
        });
    }

    return <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>
            +1
        </button>
        <button onClick={onDecrease}>
            -1
        </button>
    </div>
}
export default Counter