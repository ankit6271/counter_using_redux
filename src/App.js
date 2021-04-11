import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
import { actionsAdd, actionsSub } from "./actions";
import {connect} from 'react-redux';
function App(props) {
  const addElement = () => {
    store.dispatch(actionsAdd);
  };
  const subtractElement = () => {
    store.dispatch(actionsSub);
  };
  return (
    <div className="App">
      <p id="Header">
        Counter Using Redux Which has a store which keeps track of entire App's
        State
      </p>
      <div className="mt-5 p-5">
          <p id="content">
          {
           props.number
          }
        </p>
        <button type="button" className="btn btn-primary" onClick={addElement}>
          +
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={subtractElement}
        >
          -
        </button>
      </div>
    </div>
  );
}
function map(state) {
 return {
   number:state.number
 }
}
export default connect(map)(App);
