import "./App.css";
import InfoPanel from "./components/InfoPanel";
import Stats from "./components/Stats";
import Market from "./components/Market";
import Pocket from "./components/Pocket";
function App() {
  return (
    <div className="App">
      <div className="mainCont">
        <section>
          <InfoPanel />

          <div className="btnGroup">
            <button>Shipping</button>
            <button>Finances</button>
            <button>Shopping</button>
            <button>Stay Here</button>
            <button>Fly Away</button>
          </div>

          <Stats />
        </section>
        <section>
          <Market />
        </section>
      </div>
    </div>
  );
}

export default App;
