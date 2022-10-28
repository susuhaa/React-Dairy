import './App.css';
import DairyEditor from './DairyEditor';
import DairyList from './DairyList';
import { useRef,useState } from "react";
import Lifecycle from './Lifecycle';




function App() {
  const[data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current

    }
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    // 어떤 아이템을 지우기를 원하는지 매개변수로 받겠다
    const newDairyList = data.filter((it) => it.id !== targetId);
    setData(newDairyList);
  };

  const onEdit = (targetId,newContent) => {
    setData(
      data.map((it) => 
      it.id === targetId ? { ...it, content: newContent } : it 
      )
    );
  };

  return (
    <div className="App"> 
    <Lifecycle/>
    <DairyEditor onCreate={onCreate}/>
    <DairyList onEdit = {onEdit} onRemove={onRemove} dairyList = {data} />
    </div>
  );
}

export default App;


// dairy editor 컴포넌트 만들기