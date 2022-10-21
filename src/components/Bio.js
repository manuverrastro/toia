import Col from "react-bootstrap/Col";
import SEO from "./SEO";

const Bio = () => {
  return (
    <>
      <SEO
        title="TOIA - Bio"
        description="Beginner friendly page for learning React Helmet."
        name="Company name"
        type="article"
      />
      <Col className="bio">
        <p>Nací en 1992 en Corrientes, Argentina.</p>
        <p>
          Cursé 4 años de Arquitectura en la UNNE sin finalizarla, pero
          aportando enriquecedoras perspectivas a mi manera de ver y de
          transitar el arte a través del desarrollo de un pensamiento proyectual
          cargado de diseño.
        </p>
        <p>
          {" "}
          Mi acercamiento a las artes plásticas fue autodidacta, guiado e
          incentivado siempre por mi madre artista, Yasí Avalos.
        </p>
        <p>
          Asistí a talleres de maestros referentes locales como, José Mizdraji y
          Mabel Vilchez, e hice clínica de obra en el 2007 junto a Carolina
          Antoniadis y en el 2010 junto a Diana Aisenberg, detonantes para
          abordar nuevos caminos creativos y conceptuales.
        </p>
        <p>
          {" "}
          En el 2010 fui parte del equipo gestor e impulsor de “La Cárcova”
          galería de arte itinerante.<br></br> La cerámica llegó a mí como
          oportunidad de transformación en el año 2015, descubrí el oficio junto
          a María Inés Rossi y me aferré a él con el maestro Villafañe. Coordino
          desde el 2012 el espacio cultural- ecológico “La Pépinière”, y el
          “Taller de la Luna llena, Cerámica” donde buscamos recuperar técnicas
          tradicionales y desarrollar nuevas identidades a través del oficio.
        </p>
        <p>
          Creo bajo la búsqueda profunda de la responsabilidad que implica la
          transformación de las arcillas en objetos perdurables, acompañando la
          traducción exteriorizada de una constante simbiosis interna, y el
          constante intercambio y formación con compañerxs y Maestrxs del oficio
          cerámico.
        </p>
      </Col>
      <Col md={4}>
        <img
          src="assets/images/toia.jpg"
          className="img-fluid bio__image"
        ></img>
      </Col>
    </>
  );
};

export default Bio;
