import DairyItem from './DairyItem.js';

const DairyList = ({onEdit,onRemove,dairyList}) =>{
    return (
        <div className = "DairyList">
        <h2>일기 리스트</h2>
        <h4>{dairyList.length}개의 일기가 있습니다.</h4>
    <div>
        {dairyList.map((it) => (
            <DairyItem key = {it.id} {...it} onEdit = {onEdit} onRemove = {onRemove}/>
          
            ))}
    </div>
    </div>
    );
};

DairyList.defaultProps = {
    dairyList: [],
};
export default DairyList;