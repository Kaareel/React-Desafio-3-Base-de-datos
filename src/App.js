import Header from "./componentes/Header";
import Informacion from "./componentes/Informacion";
import Button from "./componentes/Button";
import ListaColaboradores from "./componentes/Listado";
import base from "./base.json";
import { useState } from "react";

function App() {
  const [colaboradores, setColaboradores] = useState(base)
  const [nombre, setnombre] = useState("")
  const [correo, setcorreo] = useState("")
  const [filtro, setFiltro] = useState("")

  const Agregar = (e) => {
    e.preventDefault()
    const Nuevo = { id: colaboradores.length + 1, nombre: nombre, correo: correo }
    const Nuevalista = []
    for (let colaborador of colaboradores) {
      Nuevalista.push(colaborador)
    }
    Nuevalista.push(Nuevo)
    setColaboradores(Nuevalista)
    setnombre("")
    setcorreo("")
  }
  const filtrarColaborador = (text) => {
    const nuevoListado = colaboradores.filter(colaborador => colaborador.nombre !== text.nombre)
    console.log(nuevoListado)
    setColaboradores(nuevoListado)
  }


  return (
    <div className="App">
      <div>
        <Header title="Buscador de Colaboradores" onSearch={setFiltro} value={filtro} />
      </div>
      <form onSubmit={Agregar} className="user">
        <Informacion onChange={setnombre} subtitle="Nombre del colaborador" text="Ingresa el nombre del colaborador" value={nombre} />
        <Informacion onChange={setcorreo} subtitle="Correo del colaborador" text="Ingresa correo del colaborador" value={correo} />
        <Button text="Agregar colaborador" />
      </form>

      <div className="listado">
        <div>
          <h2>Listado de colaboradores</h2>
        </div>
        <ListaColaboradores colaboradores={colaboradores} filtro={filtro} />
      </div>
    </div>
  );
}

export default App;