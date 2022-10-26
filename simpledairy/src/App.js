import './App.css';
import DairyEditor from './DairyEditor';
import DairyList from './DairyList';

const dummyList = [
  {
    id:1,
    author: "수",
    content: "하이",
    emotion: 5,
    create_date: new Date().getTime() // 시간 객체 // 현재 시간을 기준
  },
  {
    id:2,
    author: "루",
    content: "하이",
    emotion: 1,
    create_date: new Date().getTime() // 시간 객체 // 현재 시간을 기준
  },

]

function App() {
  return (
    <div className="App"> 
    <DairyEditor/>
    <DairyList dairyList = {dummyList} />
    </div>
  );
}

export default App;


// dairy editor 컴포넌트 만들기