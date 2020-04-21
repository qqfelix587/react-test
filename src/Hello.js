import React from 'react';

function Hello({color, name, isSpecial}) {
    return (<div style={{
        color
    }}>
        {isSpecial && <b>*</b>}
        {/* 추가적으로 react에서는 falsy한 값들은 {}에 넣어 사용시 결과값 없음 */}
        안녕하세요{name} 
        {/* props는 객체 형식 */}
    </div>)


}

Hello.defaultProps = {
    name: '이름없음'
}
export default Hello
