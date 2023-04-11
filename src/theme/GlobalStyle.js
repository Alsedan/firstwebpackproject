import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle
`
body {
    margin: 0;
    padding: 0;

    font-family: "Roboto", sans-serif;
    font-size: 15px;
    text-size-adjust: auto;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code{
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
`
export default Global;