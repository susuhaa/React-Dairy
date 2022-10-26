const DairyItem = ({author, content, created_date, emotion, id}) => {
    return (
    
    <div className = "DairyItem">
        <div className="info">

<span>
     작성자 : {author} | 감정점수 : {emotion} 
     </span>
     <br />
     <span className = "date"> {new Date(created_date).toLocaleString()}</span>
        </div>
        <div className = "content">{content}</div>
        </div>
        );
};

export default DairyItem;