import { useState } from "react"

export default function CounterComponents () {
const [counter, setCounter] = useState(1);
  
const handleClickMas = () => {
    setCounter(counter + 1);
}
const handleClickMenos = () => {
    setCounter(counter - 1);
}

    return (
    <>
        <section>
            <h4>Componente contenedor</h4>
            <p>{counter}</p>
            <button onClick={handleClickMas}>+</button>
            <button onClick={handleClickMenos}>-</button>
        </section>


    </>
    )
}