import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
function myApp(){
    return(
        <div>
            <h1>custom app!</h1>
        </div>
    )
}
// const rectElement = {
    // type: 'a',
    // props: {
        // href: 'https://google.com',
        // target: '_blank'
    // },
    // children: 'click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>visit google</a>
)
const anotheruser = "chai or code"
const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'click me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    anotherElement

)
