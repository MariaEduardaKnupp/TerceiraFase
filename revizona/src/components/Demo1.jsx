import { useState } from 'react';
import './Demo.css'

function Demo1() {
    const [estado, setEstado] = useState(0)

    function incrementaestado(){
        setEstado(estado + 1)
    }

    function decrementa(){
        setEstado(estado - 1)
    }

    let cornometro = 9;
    function incrementacornometro(){
        cornometro++
        console.log(cornometro);
    }
    function alertarUsuario(){
      alert("Corra para as montanhas")
    }
  return (
    <div className='container-demo1'>
      <h2>Demo1</h2>
      <button onClick={alertarUsuario}>Clica em mim</button>
      <button onClick={() => {alert("Executei uma arrow function")}}>Ex Arrow Function</button>

    <div>
        Cornometro: {cornometro}
        <button onClick={incrementacornometro}>+</button>
    </div>
    <div>
        estado: {estado}
        <button onClick={incrementaestado}>+</button>
        <button onClick={decrementa}>-</button>
    </div>
    </div>
  )
}

export default Demo1
