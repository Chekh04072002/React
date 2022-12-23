const App = ({ initialButtonText, initialClassesList }) => {
  let [buttonText, setButtonText] = React.useState(initialButtonText);
  let [classesList, setClassesList] = React.useState(initialClassesList);

  const onButtonClick = () => {
    setButtonText('Hello from React');
    setClassesList('green-btn');
  };

  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.querySelector('#app');
const root = ReactDOM.createRoot(container);

root.render(<App initialButtonText="click me" initialClassesList="" />);
