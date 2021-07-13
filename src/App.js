import "./App.css";

function App() {
  return (
    <main>
      <div id="div_one" onClick={() => alert("Div 1 ")}>
        <div id="div_two" onClick={() => alert("Div 2 ")}>
          <div id="div_three" onClick={() => alert("Div 3 ")}></div>
        </div>
      </div>
    </main>
  );
}

export default App;
