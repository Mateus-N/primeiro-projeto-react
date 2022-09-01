// Importação do extilo
import './style.css'

// Criação e exportação da função
export function Card(props) {
  // props são as propriedades que são passadas ao componente no home
  return (
    // Componente que será renderizado e importado no home
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}
