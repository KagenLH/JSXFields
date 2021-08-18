import { createTextInput, createMultiLineText } from './lib';

function App() {
  return (
    <>
      <div style={{ width: "600px" }}>{createTextInput({ instructions: "Put in some text here...", placeholder: "Put in some text here..." })}
        {createMultiLineText({ instructions: "Put in some text here...", placeholder: "Put in some text here..." })}
      </div>
    </>
  );
}

export default App;
