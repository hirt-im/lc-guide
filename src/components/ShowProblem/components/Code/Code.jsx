import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
import './Code.css';

import "ace-builds/src-noconflict/mode-java";
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



export default function Code(props){
    console.log(props.problem);

    function onChange(newValue){
        // let problem = props.problemSet[props.category][props.problemName];
        let problem = props.problem;
        problem.code.python = newValue;
        localStorage.setItem('problemSet', JSON.stringify(props.problemSet));
        console.log(props.problemSet)
    }

    return(
        <AceEditor
            mode="python"
            theme="monokai"
            onChange={onChange}
            // readOnly={true}
            name="code"
            // editorProps={{ $blockScrolling: true }}
            value={props.problem.code.python}
            width="75%"
            height="50%"
            fontSize={"1.1em"}
            showPrintMargin={false}
        />
    );
}


// have selection menu for language
// on select, it changes "mode" and "value"
    // props.problem.code.{language}