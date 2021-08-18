import { createTextInput, createMultiLineText, createSelectField, createMultipleChoice, createCheckboxField, createNumericInput } from './lib';
import { useState } from 'react';

function App() {
  const [textValue, setTextValue] = useState("");

  return (
    <>
      <div style={{ width: "600px" }}>
        {createTextInput(textValue, setTextValue)}
        {createMultiLineText({ instructions: "Put in some text here...", placeholder: "Put in some text here..." })}
        {createSelectField({choices: ['1', '2', '3']})}
        {createMultipleChoice({ labelPlacement: "top" })}
        {createCheckboxField()}
        {createNumericInput()}
      </div>
    </>
  );
}

export default App;
