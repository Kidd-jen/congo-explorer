import Header from './Header'
import LieuCard from './LieuCard'
import './App.css'

function App() {
  const lieux = [
    { id: 1, nom: "Parc National de Virunga", ville: "Goma, RDC" },
    { id: 2, nom: "Chutes de Wagenia", ville: "Kisangani, RDC" },
    { id: 3, nom: "Lac Kivu", ville: "Bukavu, RDC" },
  ]

  return (
    <div>
      <Header />
      {lieux.map(lieu => (
        <LieuCard key={lieu.id} nom={lieu.nom} ville={lieu.ville} />
      ))}
    </div>
  )
}

export default App
