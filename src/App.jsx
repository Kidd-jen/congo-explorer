import { useState } from 'react'
import LieuCard from './LieuCard'

function App() {
  const [ville, setVille] = useState("Kinshasa")
  const lieux = [
  { id: 1, nom: "Parc National de Virunga", ville: "Goma, RDC" },
  { id: 2, nom: "Chutes de Wagenia", ville: "Kisangani, RDC" },
  { id: 3, nom: "Lac Kivu", ville: "Bukavu, RDC" },
]

  return (
    <div>
      <h1>Congo Explorer</h1>
      <p>Ville sélectionnée : {ville}</p>
      <button onClick={() => setVille("Brazzaville")}>
        Changer de ville
      </button>
      {lieux.map(lieu => (
        <LieuCard key={lieu.id} nom={lieu.nom} ville={lieu.ville} />
      ))}
    </div>
  )
}

export default App