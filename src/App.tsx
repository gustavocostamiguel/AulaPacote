import { useState } from 'react'
import './App.css'
import Pacote, { type PacoteType } from'./Pacote.tsx'

const data:Array<PacoteType> = {
    id: '7454212',
    largura: 20,
    profundidade: 54,
    altura:14,
    peso: 55,
}

function App() {
  const [pacotes, setPacote] = useState(data);
  function excluiPacote(id: string){
  setPacote(pacotes.filter(pacote => pacote.id!==id));
  }

  return (
   <dl>
      {pacotes.map(pacote =>
      <Pacote
        key={pacote.id}
        pacote={pacote}
        onExcluir={() => {excluiPacote(pacotes.id)}}
      />  
      )}
   </dl>
  )
}

export default App
