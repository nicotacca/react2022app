

function Noticia() {

    const noticia = {
      titulo: "Curso de react 2022",
      descripcion: "Esto es una desestructuracion de objetos."
    }
  
    // Ejemplo de desestructuracion.
    const {titulo, descripcion } = noticia
  
    return (
      <div className = "mi-clase">
        <h1 className='mi-titulo'>Mi titulo: {titulo}</h1>
        {/* <h1 className='mi-descripcion'>Descripcion: {descripcion}</h1> */}
      </div>
    )
  }

  export default Noticia