import Header from './Header'
import LieuCard from './LieuCard'
import './App.css'
import { useState } from 'react'



function App() {
  
  const [filtre, setFiltre] = useState("tous")
  const [recherche, setRecherche] = useState("")

  const lieux = [
  { id: 1, nom: "Parc National de Virunga", ville: "Goma, RDC", categorie: "tourisme", description: "Le plus ancien parc national d'Afrique, abritant des gorilles de montagne." },
  { id: 2, nom: "Chutes de Wagenia", ville: "Kisangani, RDC", categorie: "tourisme", description: "Des chutes impressionnantes situées sur le fleuve Lualaba." },
  { id: 3, nom: "Lac Kivu", ville: "Bukavu, RDC", categorie: "tourisme", description: "Un lac magnifique entouré de collines verdoyantes." },
  { id: 4, nom: "Restaurant Le Fleuve", ville: "Kinshasa, RDC", categorie: "restaurant", description: "Un restaurant offrant une cuisine locale et internationale." },
  { id: 5, nom: "Hotel Memling", ville: "Kinshasa, RDC", categorie: "hotel", description: "Un hôtel de luxe avec des services haut de gamme." },
]

const lieuxRecherche = lieux.filter(lieu => 
  lieu.nom.toLowerCase().includes(recherche.toLowerCase())
)

const lieuxFiltres = filtre === "tous"
  ? lieuxRecherche
  : lieuxRecherche.filter(lieu => lieu.categorie === filtre)



  return (
    <div>

      <Header  />
      <button onClick={() => setFiltre("tous")}>Tous</button>
<button onClick={() => setFiltre("tourisme")}>Tourisme</button>
<button onClick={() => setFiltre("restaurant")}>Restaurant</button>
<button onClick={() => setFiltre("hotel")}>Hôtel</button>

<input 
  type="text" 
  placeholder="Rechercher un lieu..."
  onChange={(e) => setRecherche(e.target.value)}
/>
      {lieuxFiltres.map(lieu => (
        <LieuCard key={lieu.id} nom={lieu.nom} ville={lieu.ville} description={lieu.description} />
      ))}
    </div>
  )
}

export default App
