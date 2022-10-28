import { useRef,useState } from "react";

const DairyEditor = () => {

    const authorInput = useRef();
    const contentInput = useRef();
    // mutablerefobject -> html dom요소 접근 기능
  
    // const[state, setState] = useState({
    //         author: "",
    //         content: "",
    //         emotion: 1,
    // });


    // 핸들러 합치기 
    const handleChangeState = (e) => {

        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };


    // 글자 경고창
    const handleSubmit = () => {
        if(state.author.length <1){
            alert("작성자는 최소 1글자 이상 입력해주세요");
            //focus
        authorInput.current.focus();
        
            return;
        }
// 현재 가르키는 개체를 current를 가져와 사용할수 있다.
        if(state.content.length<5){
            alert("일기 본문은 최소 5글자 이상 입력해주세요");
            // foucus
            contentInput.current.focus();
            return;
        }
   

        onCreate(state.author,state.content, state.emotion);
        alert("저장 성공");
        setState({
            
            author: "",
            content: "",
            emotion: 1,
              
       
        });
    };
    return( 

    <div className = "DairyEditor">
    <h2>오늘의 일기</h2>
        <div>
            <input
            ref ={authorInput}
                name = "author"
                value ={state.author}
                onChange = {handleChangeState}
                />
         </div>

        <div>
             <textarea 
             ref ={contentInput}
                name = "content"
                value = {state.content} 
                onChange = {handleChangeState}
                />
         </div>

<div>
  
        <select 
        name = "emotion"
        value={state.emotion}
        onChange = {handleChangeState}
        >
            
        <option value = {1}>1</option>
        <option value = {2}>2</option>
        <option value = {3}>3</option>
        <option value = {4}>4</option>
        <option value = {5}>5</option>


     </select>

     <div>
        <button onClick = {handleSubmit}> 일기 저장하기 </button>
     </div>
</div>
 </div>
    );
};

export default DairyEditor;

//input에 사용된 값을 다이어리 에디터가 핸들링 할수 있도록 해야한다.
// 작성자 저장 autor, setAuthor
//useState 기능 이용
//컴포넌트의 이름과 클래스의 이름을 통일하여 css를 사용할때 더 직관적으로 사용한다.

