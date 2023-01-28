const root = document.querySelector("#root");

const Container = () => (
  <button
    style={{
      background: "tomato",
    }}
  >
    button
  </button>
);

ReactDOM.render(Container, root);