import "./Oficinas.css";

export const Oficinas = ({lang}) => {
  return (
    <section id="pedagogy" className="section">
      <h2>{lang.pedagogia_title}</h2>
      <div className="of_c">
        <p>Shaders</p>
        <p>Video-Mapping</p>
        <p>VJing</p>
        <p>Resolume</p>
        <p>Web Development</p>
      </div>
      <div className="of_c1">
        <p>{lang.pedagogia_p1}</p>
        <p>{lang.pedagogia_p2}<a href="#contact">{lang.pedagogia_c}</a>.</p>
      </div>
      <div className="of_c1">
        <p>PDFs</p>
        <ul>
          <li>
            <a href="/Introducao_aos_Shaders_Pt.pdf" target="_blank">
              Introdução_aos_Shaders_Pt.pdf
            </a>
          </li>
          <li>
            <a href="/Introduccion_a_los_shaders_Es.pdf" target="_blank">
              Introducción_a_los_Shaders_Es.pdf
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
