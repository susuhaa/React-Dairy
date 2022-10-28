import './App.css';
import DairyEditor from './DairyEditor';
import DairyList from './DairyList';



function App() {

  const[data, setData] = useState([]);
  const onCreate = (author, content, emotion) => {
    const created_data = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : DOMMatrixReadOnly.current

    }
    DOMMatrixReadOnly.current +=1;
  };
  return (
    <div className="App"> 
    <DairyEditor on Crate={onCreate}/>
    <DairyList dairyList = {[]} />
    </div>
  );
}

export default App;


// dairy editor 컴포넌트 만들기