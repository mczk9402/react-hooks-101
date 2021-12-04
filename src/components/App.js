import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import reducer from "../reduceer";
import EventForm from "./EventForm";
import Events from "./Events";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <h4>イベント一覧</h4>
      <Events state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
