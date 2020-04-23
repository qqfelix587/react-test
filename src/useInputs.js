import { useReducer ,useCallback} from 'react';
// custom Hook

function reducer(state, action){
    switch(action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                [action.name] : action.value
            };
        case 'RESET_INPUT':
            return Object.keys(state).reduce((acc,current) => {
                    acc[current] = '';
                    return acc;
                },{});
            
                // 여기 return 다음에 다음줄에 Object하니까 error 나온다 항상 주의하자.
                // {}안에 넣으면 객체로 인식하기 때문에 error나오는 거다...휴
        default: 
            return state;
    }
}


function useInputs(initialForm){
    const [form, dispatch] = useReducer(reducer, initialForm);
    const onChange = useCallback(e => {
        const {name, value} = e.target;
        dispatch({type: 'CHANGE_INPUT',name,value});
    },[]);
    const reset = useCallback (() => dispatch({type: 'RESET_INPUT'}) ,[]);
    return [form, onChange,reset];
}


// function useInputs(initialForm) {
//     const [form, setForm] = useState(initialForm);
//     const onChange = useCallback(e=> {
//         const {name, value} = e.target;
//         setForm(form => ({...form, [name] : value}));

//     }, []);
//     const reset =useCallback(() => 
//     setForm(initialForm), [initialForm]);
//     return [form, onChange, reset];
    
// };
export default useInputs;
