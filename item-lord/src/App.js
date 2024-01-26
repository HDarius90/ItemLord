import "./App.css";
import InfoPanel from "./components/InfoPanel";
import Stats from "./components/Stats";
import Market from "./components/Market";
import Pocket from "./components/Pocket";
import { useDispatch } from "react-redux";
import { stayDay } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  const handleStayDayClick = () => {
    dispatch(stayDay());
  }

  return (
    <div className="App">
      <div className="mainCont">
        <section>
          <InfoPanel />

          <div className="btnGroup">
            <button>Shipping</button>
            <button>Finances</button>
            <button>Shopping</button>
            <button onClick={handleStayDayClick}>Stay Here</button>
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
