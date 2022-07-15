import "./styles.css";
export default function Squares({ value, changebox }) {
  return (
    <div className="board-column" onClick={changebox}>
      {value}
    </div>
  );
}
