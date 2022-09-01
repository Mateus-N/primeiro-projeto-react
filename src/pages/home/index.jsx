// Import do react e dos hooks
import React, { useState, useEffect } from 'react'
// import do estilo
import './style.css'

// import do componente Card
import { Card } from '../../components/Card'

// Função que será exportada
function Home() {

  // Constantes para o uso de estado => [nome do estado, função que atribui valor a esse estado]
  const [studentName, setStudentName] = useState(``)
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({ name: ``, avatar: ``})

  // Função para adicionar novo cadastro no Array students que foi denifinido no estado acima
  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      // Função para adicionar a hora como um valor
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    // Função sendo ativada para adicionar o newStudent criado acima no Array students
    // prevState = Array no estado atual
    // ...prevState, newStudent = sintaxe para criar novo Array incluindo o novo valor e substituir o Array anterior
    setStudents( prevState => [...prevState, newStudent])

  }

  useEffect (() => {
    // Corpo, ações e tudo que será executado, executado assim que a interface é renderizada
    fetch (`https://api.github.com/users/Mateus-N`)
      .then ( response => response.json())
      .then ( data => {
        setUser ({
          // Atribuição dos valores da API github para o estado user
          name: data.name,
          avatar: data.avatar_url
        })
      })
      .catch ( error => console.error (error))
  }, [
    // Serve para colocar os estados que nosso useEffect depende, se estiver vazio será executado apenas uma vez
    // Caso tenha algum estado, sempre que esse estado for atualizado o useEffects será executado
  ])

  // Retorno que será enviado para a página main.jsx e renderizado
  return (
    // abertura de elemento único para ser enviado no retorno
    <div className="container">

      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Imagem de perfil" />
        </div>
      </header>

      <input 
        type="text"
        placeholder="Digite o nome"
        // A cada alteração no valor do input essa alteração será adicionada ao estado definido
        // target.value = valor digitado
        onChange={ e => setStudentName ( e.target.value)}
      />
      <button
        type="button"
        // ao clique será executada a função e será criado o novo Array contendo todos os elementos
        // como a função não tem nenhum parâmetro não é colocado nenhum parenteses
        onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        // Função que realiza uma iteração percorrendo todos os itens do Array e realizando o que for passado
        students.map ( student => (
        // Execução do componente que foi importado no inicio
        <Card
          key={student.time}
          name={student.name}
          time={student.time}/>
        ))
      }
    </div>
  )
}

// exportação da função
export default Home
