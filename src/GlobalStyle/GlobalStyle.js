import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .ant-modal-content {
    border-radius: 30px;
    /* border: 10px solid black; */
    border:2px solid #222a6e;
  }
  .ant-modal-header{
    border-radius: 30px 30px 0px 0px;
  }
  .ant-list-items{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  *{ font-family: "M PLUS Rounded 1c"; }
`

export default GlobalStyle;