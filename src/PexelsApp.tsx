import { mockImages } from "./mock-data/images.mock.ts";

export const PexelsApp = () => {
  return (
  <>
  {/**Header */}
  <div className="content-center">
    <h1>Buscador de imagenes</h1>
    <p>Busca tu imagen perfecta</p>
  </div>

  {/**Search */}
  <div className="search-container">
    <input type="text" placeholder="Buscar imagen" />
    <button>Buscar</button>
  </div>

  {/**Busquedas previas */}
  <div className="previous-searches">
    <h2>Busquedas previas</h2>
    <ul className="previous-searches-list">
      <li>Paisajes</li>
      <li>Luna</li>
      <li>Montañas</li>
    </ul>
  </div>

  {/**Imagenes */}
  <div className="images-container">
    {mockImages.map((image) => (
      <div key={image.id} className="image-card">
        <img src={image.url} alt={image.title} />
        <h3>{image.title}</h3>
        <p>
          {image.width}x{image.height} (1.5mb)
        </p>
      </div>
    )

    )}
  </div>

  </>
  )
}