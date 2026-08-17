import "./Oficinas.css"


export const Didatico = () => {

    return (
        <section>
            <h2>Material Didático</h2>
            <p>PDFs</p>
            <ul>
                <li><a href="/Introducao_aos_Shaders_Pt.pdf" target="_blank">Introdução_aos_Shaders_Pt.pdf</a></li>
                <li><a href="/Introduccion_a_los_shaders_Es.pdf" target="_blank">Introducción_a_los_Shaders_Es.pdf</a></li>
            </ul>
            <p>Webs</p>
            <ul>
                <li><a href="https://santirockk.github.io/fsexample1/" target="_blank">Fragment Shader Example 1</a></li>
                <li><a href="https://santirockk.github.io/fspoints/" target="_blank">Fragment Shader Example 2</a></li>
                <li><a href="https://santirockk.github.io/webgl_drawing_modes/" target="_blank">WebGL Drawing Modes</a></li>
                <li><a href="https://santirockk.github.io/test-skull/" target="_blank">Skull 3D</a></li>
            </ul>
            <div className="of_c1">
                <a className="med" href="/Santiago_Quintero_Mediador_Linguistico_Artes.pdf" target="_blank" rel="noopener noreferrer"><span className="med_s">Mediação Linguística e Comunicação Intercultural para Artes e Cultura / </span>Link</a>
            </div>
        </section>
    )
}