import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle
`
body {
    margin: 0;
    padding: 0;

    font-family: "Roboto", sans-serif;
    font-size: 16px;
    text-size-adjust: auto;

    
}

code{
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
`
export default Global;