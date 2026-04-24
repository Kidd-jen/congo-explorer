import Header from './Header'
import LieuCard from './LieuCard'
import './App.css'
import { useState } from 'react'



function App() {
  
  const [filtre, setFiltre] = useState("tous")

  const lieux = [
  { id: 1, nom: "Parc National de Virunga", ville: "Goma, RDC", categorie: "tourisme" },
  { id: 2, nom: "Chutes de Wagenia", ville: "Kisangani, RDC", categorie: "tourisme" },
  { id: 3, nom: "Lac Kivu", ville: "Bukavu, RDC", categorie: "tourisme" },
  { id: 4, nom: "Restaurant Le Fleuve", ville: "Kinshasa, RDC", categorie: "restaurant" },
  { id: 5, nom: "Hotel Memling", ville: "Kinshasa, RDC", categorie: "hotel" },
]

const lieuxFiltres = filtre === "tous" 
  ? lieux 
  : lieux.filter(lieu => lieu.categorie === filtre)


  return (
    <div>

      <Header  />
      <button onClick={() => setFiltre("tous")}>Tous</button>
<button onClick={() => setFiltre("tourisme")}>Tourisme</button>
<button onClick={() => setFiltre("restaurant")}>Restaurant</button>
<button onClick={() => setFiltre("hotel")}>Hôtel</button>
      {lieuxFiltres.map(lieu => (
        <LieuCard key={lieu.id} nom={lieu.nom} ville={lieu.ville} />
      ))}
    </div>
  )
}

export default App
