import "./Projects.css";

const items = ["zhizhwa", "vj", "points", "skull", "shader_model"];

export const Projects = ({ lang, experiences }) => {

    return (
    <section id="experiences" className="section">
      <h2>{lang.experiences_title}</h2>
      <ul className="projects">
        {items.map((key) => (
          <li key={key}>
            <a href={experiences[key].link} target="_blank" className="projects__link">
              <img
                src={`/imgs/exps/img_${key}.jpg`}
                alt={experiences[key].title}
                className="projects__img"
              />
              <span className="projects__name">{experiences[key].title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
