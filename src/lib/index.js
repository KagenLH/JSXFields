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
    max: 99,
};

const globalStylesInput = {
    marginTop: "10px",
    padding: "3px",
};

const labelStyles = {
    marginBottom: "5px",
    fontSize: "18px",
    fontWeight: "600",
    letterSpacing: "0.7px",
};

const instructionStyles = {
    padding: "10px",
    color: "#666666",
    backgroundColor: "rgba(0, 0, 0, 0.05)"
};

export function createTextInput(stateSelector, setStateSelector, passedOptions = optionDefaults) {
    if (stateSelector === undefined) throw new Error("createTextInput must be given a state selector for React controlled inputs.")
    if (setStateSelector === undefined) throw new Error("createTextInput must be given a state selector setter for React controlled inputs.")
    const options = {
        ...optionDefaults,
        ...passedOptions
    };

    if (options.labelPlacement === "top") {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <input
                        type="text"
                        value={stateSelector}
                        onChange={(e) => setStateSelector(e.target.value)}
                        style={{ width: options.size === "m" ? "300px" : "450px", maxHeight: "25px", minHeight: "25px" }}
                        required={options.required}
                        placeholder={options.placeholder}
                        maxLength={options.maxLength}
                    />
                    {
                        options.instructions.length ? <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span> : null
                    }
                </div>
            </div>
        );
    } else {
        return (
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={ options.preStyled ? { ...labelStyles, marginRight: "10px", alignSelf: "start" } : {}}>{options.label}</label>
                    <input
                        type="text"
                        value={stateSelector}
                        onChange={(e) => setStateSelector(e.target.value)}
                        style={{ width: options.size === "m" ? "300px" : "450px", maxHeight: "17px", minHeight: "17px"  }}
                        required={options.required}
                        placeholder={options.placeholder}
                        maxLength={options.maxLength}
                    />
                   {
                        options.instructions.length ? <span style={options.preStyled ? { ...instructionStyles, marginLeft: "10px" } : {}}>{options.instructions}</span> : null
                    }
                </div>
            </div>
        );
    }
}

export function createMultiLineText(stateSelector, setStateSelector, passedOptions = optionDefaults) {
    if (stateSelector === undefined) throw new Error("createMultiLineText must be given a state selector for React controlled inputs.")
    if (setStateSelector === undefined) throw new Error("createMultiLineText must be given a state selector setter for React controlled inputs.")

    const options = {
        ...optionDefaults,
        ...passedOptions
    };

    if (options.labelPlacement === "top") {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <textarea
                        type="text"
                        style={{ width: options.size === "m" ? "300px" : "450px", maxHeight: "75px", minHeight: "75px" }}
                        value={stateSelector}
                        required={options.required}
                        placeholder={options.placeholder}
                        maxLength={options.maxLength}
                        onChange={(e) => setStateSelector(e.target.value)}
                    ></textarea>
                   {
                        options.instructions.length ? <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span> : null
                    }
                </div>
            </div>
        );
    }
    else {
        return (
            <div style={{ display: "flex", marginTop: "9px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <label style={options.preStyled ? { ...labelStyles, marginRight: "10px", alignSelf: "start" } : {}}>{options.label}</label>
                    <textarea
                        type="text"
                        style={{ width: options.size === "m" ? "300px" : "450px", maxHeight: "75px", minHeight: "75px" }}
                        required={options.required}
                        placeholder={options.placeholder}
                        maxLength={options.maxLength}
                        value={stateSelector}
                        onChange={(e) => setStateSelector(e.target.value)}
                    ></textarea>
                   {
                        options.instructions.length ? <span style={options.preStyled ? { ...instructionStyles, marginLeft: "10px" } : {}}>{options.instructions}</span> : null
                    }
                </div>
            </div>
        )
    }
}

export function createSelectField(stateSelector, setStateSelector, passedOptions = optionDefaults) {
    const options = {
        ...optionDefaults,
        ...passedOptions
    };

    if (stateSelector === undefined) throw new Error("createSelectField must be given a state selector for React controlled inputs.")
    if (setStateSelector === undefined) throw new Error("createSelectField must be given a state selector setter for React controlled inputs.")

    if (options.labelPlacement === "top") {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <select value={stateSelector} onChange={(e) => setStateSelector(e.target.value)} required={options.required}>
                        {options.choices.map(choice => (
                            <option key={choice} value={choice}>{choice}</option>
                        ))}
                    </select>
                   {
                        options.instructions.length ? <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span> : null
                    }
                </div>
            </div>
        );
    }
    else {
        return (
            <div style={{ display: "flex", flexDirection: "row", marginTop: "9px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <label style={options.preStyled ? { ...labelStyles, marginRight: "10px", alignSelf: "start"  } : {}}>{options.label}</label>
                    <select value={stateSelector} onChange={(e) => setStateSelector(e.target.value)} required={options.required}>
                        {options.choices.map(choice => (
                            <option key={choice} value={choice}>{choice}</option>
                        ))}
                    </select>
                   {
                        options.instructions.length ? <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span> : null
                    }
                </div>
            </div>
        );
    }
}

export function createMultipleChoice(stateSelector, setStateSelector, passedOptions = optionDefaults) {
    if (stateSelector === undefined) throw new Error("createMultipleChoice must be given a state selector for React controlled inputs.")
    if (setStateSelector === undefined) throw new Error("createMultipleChoice must be given a state selector setter for React controlled inputs.")

    const options = {
        ...optionDefaults,
        ...passedOptions,
    };


    if (options.labelPlacement === "top") {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        {options.choices.map(choice => (
                            <div key={choice}>
                                <input
                                    type="radio"
                                    value={choice}
                                    name={options.name}
                                    checked={stateSelector === choice}
                                    onChange={(e) => setStateSelector(e.target.value)}
                                />
                                <label style={{ marginLeft: "5px" }}>{choice}</label>
                            </div>
                        ))}
                    </div>
                   {
                        options.instructions.length ? <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span> : null
                    }
                </div>
            </div>
        );
    }
    else {
        return (
            <div style={{ display: "flex", flexDirection: "row", marginTop: "9px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <label style={options.preStyled ? { ...labelStyles, marginRight: "10px", alignSelf: "start" } : {}}>{options.label}</label>
                    <div style={{  } }>
                        {options.choices.map(choice => (
                            <div key={choice}>
                                <input
                                    type="radio"
                                    value={choice}
                                    name={options.name}
                                    checked={stateSelector === choice}
                                    onChange={(e) => setStateSelector(e.target.value)}
                                />
                                <label style={{ marginLeft: "5px" }}>{choice}</label>
                            </div>
                        ))}
                    </div>
                    {
                        options.instructions.length ? <span style={options.preStyled ? { ...instructionStyles, marginLeft: "10px" } : {}}>{options.instructions}</span> : null
                    }
                </div>
            </div>
        );
    }
}

export function createCheckboxField(stateSelector, setStateSelector, passedOptions = optionDefaults) {
    if (stateSelector === undefined) throw new Error("createCheckboxField must be given a state selector for React controlled inputs.")
    if (setStateSelector === undefined) throw new Error("createCheckboxField must be given a state selector setter for React controlled inputs.")

    const options = {
        ...optionDefaults,
        ...passedOptions,
    };


    if (options.labelPlacement === "top") {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        {options.choices.map(choice => (
                            <div key={choice}>
                                <input
                                    type="checkbox"
                                    // value={choice} this causes a controlled input error in console
                                    name={options.name}
                                    onChange={(e) => setStateSelector(e.target.value)}
                                />
                                <label style={{ marginLeft: "5px" }}>{choice}</label>
                            </div>
                        ))}
                    </div>
                    {
                        options.instructions.length ? <span style={options.preStyled ? instructionStyles : {}}>{options.instructions}</span> : null
                    }
                </div>
            </div>
        );
    }
    else {
        return (
            <div style={{ display: "flex", flexDirection: "row", marginTop: "9px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <label style={options.preStyled ? { ...labelStyles, marginRight: "10px", alignSelf: "start" } : {}}>{options.label}</label>
                    <div style={{ }}>
                        {options.choices.map(choice => (
                            <div key={choice}>
                                <input
                                    type="checkbox"
                                    // value={choice} 
                                    name={options.name}
                                    onChange={(e) => setStateSelector(e.target.value)}
                                />
                                <label style={{ marginLeft: "5px" }}>{choice}</label>
                            </div>
                        ))}
                    </div>
                    {
                        options.instructions.length ? <span style={options.preStyled ? { ...instructionStyles, marginLeft: "10px" } : {}}>{options.instructions}</span> : null
                    }
                </div>
            </div>
        );
    }
}

export function createNumericInput(stateSelector, setStateSelector, passedOptions = optionDefaults) {
    if (stateSelector === undefined) throw new Error("createNumericInput must be given a state selector for React controlled inputs.")
    if (setStateSelector === undefined) throw new Error("createNumericInput must be given a state selector setter for React controlled inputs.")

    const options = {
        ...optionDefaults,
        ...passedOptions
    };

    if (options.labelPlacement === "top") {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={options.preStyled ? labelStyles : {}}>{options.label}</label>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <input
                        type="number"
                        style={{ width: options.size === "m" ? "100px" : "150px" }}
                        required={options.required}
                        placeholder={options.placeholder}
                        value={stateSelector}
                        onChange={(e) => setStateSelector(e.target.value)}
                    />
                    {
                        options.instructions.length ? <span style={options.preStyled ? { ...instructionStyles, marginLeft: "10px" } : {}}>{options.instructions}</span> : null
                    }
                </div>
            </div>
        );
    } else {
        return (
            <div style={{ display: "flex", marginTop: "9px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <label style={options.preStyled ? { ...labelStyles, marginRight: "10px", alignSelf: "start" } : {}}>{options.label}</label>
                    <input
                        type="number"
                        style={{ width: options.size === "m" ? "100px" : "150px" }}
                        required={options.required}
                        placeholder={options.placeholder}
                        value={stateSelector}
                        onChange={(e) => setStateSelector(e.target.value)}
                    />
                    {
                        options.instructions.length ? <span style={options.preStyled ? { ...instructionStyles, marginLeft: "10px" } : {}}>{options.instructions}</span> : null
                    }
                </div>
            </div>
        );
    } 
}