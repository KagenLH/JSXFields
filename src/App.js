import { createTextInput, createMultiLineText, createSelectField, createMultipleChoice } from './lib';

function App() {
  return (
    <>
      <div style={{ width: "600px" }}>{createTextInput({ instructions: "Put in some text here...", placeholder: "Put in some text here..."})}
        {createMultiLineText({ instructions: "Put in some text here...", placeholder: "Put in some text here..." })}
        {createSelectField({choices: ['1', '2', '3']})}
        {createMultipleChoice({ labelPlacement: "top" })}
      </div>
    </>
  );
}

export default App;
