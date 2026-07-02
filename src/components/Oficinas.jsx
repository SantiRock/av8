import "./Oficinas.css"

export const Oficinas = () => {


    return(
        <section>
            <h2>Oficinas</h2>
            <div className="of_c">
                <a className="o_l" href="https://oficina-shaders.vercel.app/" target="_blank"><span className="o_p">- Shaders ao Vivo, introdução para artistas visuais e VJs / </span>Link</a>
                <p>- Shaders: programação, escrevendo shaders</p>
                <p>- Resolume</p>
                <p>- openFrameworks</p>
            </div>
             <div className="of_c1">
                <p>Quer aprender mais sobre algum desses temas?</p>
                <p>Fique à vontade para entrar em contato.</p>
                <a href="https://www.instagram.com/av8visual/" target="_blank">@av8visual</a>
            </div>
            <div className="of_c1">
                <a className="med" href="/Santiago_Quintero_Mediador_Linguistico_Artes.pdf" target="_blank" rel="noopener noreferrer"><span className="med_s">Mediação Linguística e Comunicação Intercultural para Artes e Cultura / </span>Link</a>
            </div>

        </section>
    )
}