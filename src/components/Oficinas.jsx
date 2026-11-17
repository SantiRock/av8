import "./Oficinas.css";

export const items = [
  "shaders",
  "video_mapping",
  "vjing",
  "resolume",
  "web",
  "open_frameworks",
];

export const Oficinas = ({ lang, pedagogy }) => {
  return (
    <section id="pedagogy" className="section">
      <h2>{lang.pedagogia_title}</h2>
      <ul className="projects">
        {items.map((key) => (
          <li key={key}>
            <a
              href={pedagogy.workshops[key].link}
              target="_blank"
              className="projects__link"
            >
              <img
                src={`/imgs/edu/img_${key}.jpg`}
                alt={pedagogy.workshops[key].title}
                className="projects__img"
              />
              <span className="projects__name">
                {pedagogy.workshops[key].title}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="of_c1">
        <p className="p1">{lang.pedagogia_p1}</p>
        <p className="p1">
          {lang.pedagogia_p2}
          <a href="#contact" className="a">
            {lang.pedagogia_c}
          </a>
          .
        </p>
      </div>
      <div className="of_c1">
        <p className="pdf">PDFs</p>
        <ul className="ul">
          <li className="li">
            <a href="/Introducao_aos_Shaders_Pt.pdf" target="_blank">
              Introdução_aos_Shaders_Pt.pdf
            </a>
          </li>
          <li className="li">
            <a href="/Introduccion_a_los_shaders_Es.pdf" target="_blank">
              Introducción_a_los_Shaders_Es.pdf
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
