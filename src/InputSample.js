import React, {useState, useRef} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',

    })
    const nameInput = useRef()

    const {name, nickname}= inputs;
    const onChange = (e) => {
        const {name, value} = e.target;  
    //    값을 바꾸려면 기존값을 받아와 덮어씌어 줘여햠.

        


        setInputs({         // **
            ...inputs,
            // 객체를 update할 때는 spread문법을 사용해서 update하고 특정 값을 덮어씌어주어야 한다.(불변성)
            [name] : value,
        });


        //  아래 내용은 위의 코드(**)로 짧게 대체 될 수 있음.
       
        // const nextInputs = {
        //     ...inputs,
        //     [name]: value,
            // spread문법을 사용하면 ...inputs에 기존값(name,nickname)이 들어가고
            //이 중 input으로 부터 받은 값만 [name] : value를 통해 덮어 씌어지게 됨.
        // };
        // setInputs(nextInputs);
        // 이후 input으로부터 받은 값을 업데이트 해줌. 
        
    };
    const onReset = () => {
       setInputs({
        name: '',
        nickname: ''
       });
      nameInput.current.focus();
    };
    return (
        <div>
            <input name="name"
            placeholder="이름" 
            onChange={onChange} 
            value={name} 
            ref={nameInput}/>


            <input name= "nickname"
            placeholder= "닉네임" 
            onChange={onChange} 
            value={nickname} />
            <button onClick = {onReset}>
                초기화
            </button>
            <div>
                <b>값: </b>
                    {name}({nickname})
            </div>
        </div>

    );

}
export default InputSample;