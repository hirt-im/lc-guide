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


let testProblem =  {
    "id": 49,
    "difficulty": "Medium",
    "favorited": false,
    "checked": false,
    "url": "https://leetcode.com/problems/Group-Anagrams",
    "code": {
        "python": 
        `def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
    ans = collections.defaultdict(list)

    for s in strs:
        count = [0] * 26
        for c in s:
            count[ord(c) - ord("a")] += 1
        ans[tuple(count)].append(s)
    return ans.values()`
    }
}

function LanguageSelector(){
    return(
        <select value={selectedLanguage} onChange={onChange}>
        {languages.map(language => (
            <option key={language.value} value={language.value}>
            {language.label}
            </option>
        ))}
        </select>
    );
}



export default function Code(props){
    const [language, setLanguage] = useState("python");
    console.log(props.problem);

    function onChange(newValue){
        // let problem = props.problemSet[props.category][props.problemName];
        let problem = props.problem;
        problem.code.python = newValue;
        localStorage.setItem('problemSet', JSON.stringify(props.problemSet));
        console.log(props.problemSet)
    }

    function selectLanguage(e){
        console.log(e);
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
                        value={props.problem.code.python}
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


// have selection menu for language
// on select, it changes "mode" and "value"
    // props.problem.code.{language}