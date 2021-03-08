
import senyores from "./apuntan";
function App() {

  return (
    <>
      <div className="contenedor">
        <header className="cabecera">
          <h1>Señores que te apuntan con el dedo</h1>
          <p className="totales"><span className="nmarcados">0</span> señores que te apuntan con el dedo marcados</p>
          <a className="accion-marcar" href="marcar-todos">Marcar todos</a>
        </header>
        <main>
          {
            senyores.map(senyor =>
              <article key={senyor.id} className="senyor">
                <div className="avatar">
                  <img src={`img/${senyor.foto}`} alt={`${senyor.nombre} señalándote con el dedo`} />
                  <span className="inicial">F</span>
                </div>
                <div className="info">
                  <h2>{senyor.nombre}</h2>
                  <ul>
                    <li><span className="etiqueta">Profesión:</span> {senyor.profesion}</li>
                    <li><span className="etiqueta">Estado:</span> {senyor.estado}</li>
                    <li><span className="etiqueta">Twitter:</span> {senyor.twitter}</li>
                  </ul>
                </div>
                <i className="icono fas fa-check"></i>
              </article>

            )
          }
        </main>
      </div>
    </>
  );
}

export default App;
