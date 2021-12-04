import React, { useEffect, useState } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  useEffect(() => {
    console.log("[]無し");
  });

  useEffect(() => {
    console.log("[]");
  }, []);

  useEffect(() => {
    console.log("[state.name]");
  }, [state.name]);

  return (
    <div>
      <p>
        現在の{name}は{price}円です
      </p>
      {/* useEffectはレンダリングの後に実行される */}
      <button onClick={() => setState({ ...state, price: price + 1 })}>+1</button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={(e) => setState({ ...state, name: e.target.value })} />
    </div>
  );
};

App.defaultProps = {
  name: "サンプル",
  price: 1000,
};

export default App;
