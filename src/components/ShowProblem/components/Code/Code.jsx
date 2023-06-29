import React, { useState } from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
import './Code.css';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/theme-github";
import 'ace-builds/src-noconflict/theme-monokai'; 
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";



export default function Code(props){
    const [language, setLanguage] = useState("python");
    console.log(props.problem);

    function onChange(newValue){
        // let problem = props.problemSet[props.category][props.problemName];
        let problem = props.problem;
        problem.code[language] = newValue;
        localStorage.setItem('problemSet', JSON.stringify(props.problemSet));
        console.log(props.problemSet)
    }

    function selectLanguage(e){
        setLanguage(e.target.value);
    }

    return(
        <div className='code-editor'>
            <div className='code-container'>

                <AceEditor
                    mode={language}
                    theme="monokai"
                    onChange={onChange}
                    // readOnly={true}
                    name="code"
                    // editorProps={{ $blockScrolling: true }}
                    value={props.problem.code[language]}
                    width="100%"
                    height="100%"
                    fontSize={"1.1em"}
                    showPrintMargin={false}
                />

                <select value={language} className="language-select" onChange={selectLanguage}>
                    <option value="python">python</option>
                    <option value="javascript">javascript</option>
                </select>

            </div>
        </div>
    );
}


