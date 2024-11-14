import { useState } from "react";

function App() {
let [count, setCount] = useState(0);

function updateClick (){
    setCount (count + 1)
};

return (
    <>
        <button
            className='button'
            onClick={updateClick}>
            Click me to add count {count} 
        </button>
    </>
    )
}

export default App
