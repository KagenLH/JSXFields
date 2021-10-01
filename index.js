"use strict";
// This is the babel transpiled version of the React code. The original JSX should be hosted here.
// How to recover the original JSX?
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTextInput = createTextInput;
exports.createMultiLineText = createMultiLineText;
exports.createSelectField = createSelectField;
exports.createMultipleChoice = createMultipleChoice;
exports.createCheckboxField = createCheckboxField;
exports.createNumericInput = createNumericInput;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const optionDefaults = {
  label: "Untitled",
  maxLength: 255,
  required: false,
  size: "m",
  placeholder: "",
  instructions: "",
  labelPlacement: "top",
  preStyled: true,
  choices: ['First Choice', 'Second Choice', 'Third Choice'],
  name: "name",
  min: 0,
  max: 99
};
const globalStylesInput = {
  marginTop: "10px",
  padding: "5px"
};
const labelStyles = {
  marginBottom: "5px",
  fontSize: "18px",
  fontWeight: "600",
  letterSpacing: "0.7px"
};
const instructionStyles = {
  padding: "10px",
  color: "#666666",
  backgroundColor: "rgba(0, 0, 0, 0.05)"
};

function createTextInput(stateSelector, setStateSelector) {
  let passedOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : optionDefaults;
  if (stateSelector === undefined) throw new Error("createTextInput must be given a state selector for React controlled inputs.");
  if (setStateSelector === undefined) throw new Error("createTextInput must be given a state selector setter for React controlled inputs.");

  const options = _objectSpread(_objectSpread({}, optionDefaults), passedOptions);

  if (options.labelPlacement === "top") {
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, globalStylesInput), {}, {
        display: "flex",
        flexDirection: "column"
      })
    }, /*#__PURE__*/React.createElement("label", {
      style: options.preStyled ? labelStyles : {}
    }, options.label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: stateSelector,
      onChange: e => setStateSelector(e.target.value),
      style: {
        width: options.size === "m" ? "300px" : "450px",
        maxHeight: "25px",
        minHeight: "25px"
      },
      required: options.required,
      placeholder: options.placeholder,
      maxLength: options.maxLength
    }), options.instructions.length ? /*#__PURE__*/React.createElement("span", {
      style: options.preStyled ? instructionStyles : {}
    }, options.instructions) : null));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, globalStylesInput), {}, {
        display: "flex"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: options.preStyled ? _objectSpread(_objectSpread({}, labelStyles), {}, {
        marginRight: "10px",
        alignSelf: "start"
      }) : {}
    }, options.label), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: stateSelector,
      onChange: e => setStateSelector(e.target.value),
      style: {
        width: options.size === "m" ? "300px" : "450px",
        maxHeight: "17px",
        minHeight: "17px"
      },
      required: options.required,
      placeholder: options.placeholder,
      maxLength: options.maxLength
    }), options.instructions.length ? /*#__PURE__*/React.createElement("span", {
      style: options.preStyled ? _objectSpread(_objectSpread({}, instructionStyles), {}, {
        marginLeft: "10px"
      }) : {}
    }, options.instructions) : null));
  }
}

function createMultiLineText(stateSelector, setStateSelector) {
  let passedOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : optionDefaults;
  if (stateSelector === undefined) throw new Error("createMultiLineText must be given a state selector for React controlled inputs.");
  if (setStateSelector === undefined) throw new Error("createMultiLineText must be given a state selector setter for React controlled inputs.");

  const options = _objectSpread(_objectSpread({}, optionDefaults), passedOptions);

  if (options.labelPlacement === "top") {
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, globalStylesInput), {}, {
        display: "flex",
        flexDirection: "column"
      })
    }, /*#__PURE__*/React.createElement("label", {
      style: options.preStyled ? labelStyles : {}
    }, options.label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("textarea", {
      type: "text",
      style: {
        width: options.size === "m" ? "300px" : "450px",
        maxHeight: "75px",
        minHeight: "75px"
      },
      value: stateSelector,
      required: options.required,
      placeholder: options.placeholder,
      maxLength: options.maxLength,
      onChange: e => setStateSelector(e.target.value)
    }), options.instructions.length ? /*#__PURE__*/React.createElement("span", {
      style: options.preStyled ? instructionStyles : {}
    }, options.instructions) : null));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, globalStylesInput), {}, {
        display: "flex"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: options.preStyled ? _objectSpread(_objectSpread({}, labelStyles), {}, {
        marginRight: "10px",
        alignSelf: "start"
      }) : {}
    }, options.label), /*#__PURE__*/React.createElement("textarea", {
      type: "text",
      style: {
        width: options.size === "m" ? "300px" : "450px",
        maxHeight: "75px",
        minHeight: "75px"
      },
      required: options.required,
      placeholder: options.placeholder,
      maxLength: options.maxLength,
      value: stateSelector,
      onChange: e => setStateSelector(e.target.value)
    }), options.instructions.length ? /*#__PURE__*/React.createElement("span", {
      style: options.preStyled ? _objectSpread(_objectSpread({}, instructionStyles), {}, {
        marginLeft: "10px"
      }) : {}
    }, options.instructions) : null));
  }
}

function createSelectField(stateSelector, setStateSelector) {
  let passedOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : optionDefaults;

  const options = _objectSpread(_objectSpread({}, optionDefaults), passedOptions);

  if (stateSelector === undefined) throw new Error("createSelectField must be given a state selector for React controlled inputs.");
  if (setStateSelector === undefined) throw new Error("createSelectField must be given a state selector setter for React controlled inputs.");

  if (options.labelPlacement === "top") {
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, globalStylesInput), {}, {
        display: "flex",
        flexDirection: "column"
      })
    }, /*#__PURE__*/React.createElement("label", {
      style: options.preStyled ? labelStyles : {}
    }, options.label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("select", {
      value: stateSelector,
      onChange: e => setStateSelector(e.target.value),
      required: options.required
    }, options.choices.map(choice => /*#__PURE__*/React.createElement("option", {
      key: choice,
      value: choice
    }, choice))), options.instructions.length ? /*#__PURE__*/React.createElement("span", {
      style: options.preStyled ? instructionStyles : {}
    }, options.instructions) : null));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, globalStylesInput), {}, {
        display: "flex",
        flexDirection: "row"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: options.preStyled ? _objectSpread(_objectSpread({}, labelStyles), {}, {
        marginRight: "10px",
        alignSelf: "start"
      }) : {}
    }, options.label), /*#__PURE__*/React.createElement("select", {
      value: stateSelector,
      onChange: e => setStateSelector(e.target.value),
      required: options.required
    }, options.choices.map(choice => /*#__PURE__*/React.createElement("option", {
      key: choice,
      value: choice
    }, choice))), options.instructions.length ? /*#__PURE__*/React.createElement("span", {
      style: options.preStyled ? instructionStyles : {}
    }, options.instructions) : null));
  }
}

function createMultipleChoice(stateSelector, setStateSelector) {
  let passedOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : optionDefaults;
  if (stateSelector === undefined) throw new Error("createMultipleChoice must be given a state selector for React controlled inputs.");
  if (setStateSelector === undefined) throw new Error("createMultipleChoice must be given a state selector setter for React controlled inputs.");

  const options = _objectSpread(_objectSpread({}, optionDefaults), passedOptions);

  if (options.labelPlacement === "top") {
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, globalStylesInput), {}, {
        display: "flex",
        flexDirection: "column"
      })
    }, /*#__PURE__*/React.createElement("label", {
      style: options.preStyled ? labelStyles : {}
    }, options.label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, options.choices.map(choice => /*#__PURE__*/React.createElement("div", {
      key: choice
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      value: choice,
      name: options.name,
      checked: stateSelector === choice,
      onChange: e => setStateSelector(e.target.value)
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        marginLeft: "5px"
      }
    }, choice)))), options.instructions.length ? /*#__PURE__*/React.createElement("span", {
      style: options.preStyled ? instructionStyles : {}
    }, options.instructions) : null));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, globalStylesInput), {}, {
        display: "flex",
        flexDirection: "row"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: options.preStyled ? _objectSpread(_objectSpread({}, labelStyles), {}, {
        marginRight: "10px",
        alignSelf: "start"
      }) : {}
    }, options.label), /*#__PURE__*/React.createElement("div", {
      style: {}
    }, options.choices.map(choice => /*#__PURE__*/React.createElement("div", {
      key: choice
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      value: choice,
      name: options.name,
      checked: stateSelector === choice,
      onChange: e => setStateSelector(e.target.value)
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        marginLeft: "5px"
      }
    }, choice)))), options.instructions.length ? /*#__PURE__*/React.createElement("span", {
      style: options.preStyled ? _objectSpread(_objectSpread({}, instructionStyles), {}, {
        marginLeft: "10px"
      }) : {}
    }, options.instructions) : null));
  }
}

function createCheckboxField(stateSelector, setStateSelector) {
  let passedOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : optionDefaults;
  if (stateSelector === undefined) throw new Error("createCheckboxField must be given a state selector for React controlled inputs.");
  if (setStateSelector === undefined) throw new Error("createCheckboxField must be given a state selector setter for React controlled inputs.");

  const options = _objectSpread(_objectSpread({}, optionDefaults), passedOptions);

  if (options.labelPlacement === "top") {
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, globalStylesInput), {}, {
        display: "flex",
        flexDirection: "column"
      })
    }, /*#__PURE__*/React.createElement("label", {
      style: options.preStyled ? labelStyles : {}
    }, options.label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, options.choices.map(choice => /*#__PURE__*/React.createElement("div", {
      key: choice
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox" // value={choice} this causes a controlled input error in console
      ,
      name: options.name,
      onChange: e => setStateSelector(e.target.value)
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        marginLeft: "5px"
      }
    }, choice)))), options.instructions.length ? /*#__PURE__*/React.createElement("span", {
      style: options.preStyled ? instructionStyles : {}
    }, options.instructions) : null));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, globalStylesInput), {}, {
        display: "flex",
        flexDirection: "row"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: options.preStyled ? _objectSpread(_objectSpread({}, labelStyles), {}, {
        marginRight: "10px",
        alignSelf: "start"
      }) : {}
    }, options.label), /*#__PURE__*/React.createElement("div", {
      style: {}
    }, options.choices.map(choice => /*#__PURE__*/React.createElement("div", {
      key: choice
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox" // value={choice} 
      ,
      name: options.name,
      onChange: e => setStateSelector(e.target.value)
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        marginLeft: "5px"
      }
    }, choice)))), options.instructions.length ? /*#__PURE__*/React.createElement("span", {
      style: options.preStyled ? _objectSpread(_objectSpread({}, instructionStyles), {}, {
        marginLeft: "10px"
      }) : {}
    }, options.instructions) : null));
  }
}

function createNumericInput(stateSelector, setStateSelector) {
  let passedOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : optionDefaults;
  if (stateSelector === undefined) throw new Error("createNumericInput must be given a state selector for React controlled inputs.");
  if (setStateSelector === undefined) throw new Error("createNumericInput must be given a state selector setter for React controlled inputs.");

  const options = _objectSpread(_objectSpread({}, optionDefaults), passedOptions);

  if (options.labelPlacement === "top") {
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, globalStylesInput), {}, {
        display: "flex",
        flexDirection: "column"
      })
    }, /*#__PURE__*/React.createElement("label", {
      style: options.preStyled ? labelStyles : {}
    }, options.label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      style: {
        width: options.size === "m" ? "100px" : "150px"
      },
      required: options.required,
      placeholder: options.placeholder,
      value: stateSelector,
      onChange: e => setStateSelector(e.target.value)
    }), options.instructions.length ? /*#__PURE__*/React.createElement("span", {
      style: options.preStyled ? _objectSpread(_objectSpread({}, instructionStyles), {}, {
        marginLeft: "10px"
      }) : {}
    }, options.instructions) : null));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, globalStylesInput), {}, {
        display: "flex"
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: options.preStyled ? _objectSpread(_objectSpread({}, labelStyles), {}, {
        marginRight: "10px",
        alignSelf: "start"
      }) : {}
    }, options.label), /*#__PURE__*/React.createElement("input", {
      type: "number",
      style: {
        width: options.size === "m" ? "100px" : "150px"
      },
      required: options.required,
      placeholder: options.placeholder,
      value: stateSelector,
      onChange: e => setStateSelector(e.target.value)
    }), options.instructions.length ? /*#__PURE__*/React.createElement("span", {
      style: options.preStyled ? _objectSpread(_objectSpread({}, instructionStyles), {}, {
        marginLeft: "10px"
      }) : {}
    }, options.instructions) : null));
  }
}