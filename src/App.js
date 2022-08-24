import React, { useEffect, useState } from "react";
import Produto from "./Produto";

function App() {
  const [produto, setProduto] = useState(null)
  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto')
    if(produtoLocal !== null){
      setProduto(produtoLocal)
    } 
  }, [])

  useEffect(() => {
    if(produto !== null){
      window.localStorage.setItem('produto', produto)
    }
    
  }, [produto])

  const handClick = ({ target }) => {
    setProduto(target.innerText)
  }
  return (
    <div>
       <div>
        <h1>Preferência: {produto}</h1>
        <button onClick={handClick}  style={{ marginRight: '1rem' }}>Notebook</button>
        <button onClick={handClick}> Smartphone</button>
        <Produto produto={produto} />
    </div>
    </div>
  );
}

export default App;
