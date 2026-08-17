import "./Oficinas.css"

export const Oficinas = () => {


    return(
        <section>
            <h2>Oficinas</h2>
            <div className="of_c">
                <a className="o_l" href="https://oficina-shaders.vercel.app/" target="_blank"><span className="o_p">- Shaders ao Vivo, introdução / </span>Link</a>
                <p>- Shaders: programação, escrevendo shaders</p>
                <p>- Resolume</p>
                <p>- openFrameworks</p>
            </div>
             <div className="of_c1">
                <p>Quer aprender mais sobre algum desses temas?</p>
                <p>Fique à vontade para entrar em contato.</p>
                <a href="https://www.instagram.com/av8visual/" target="_blank">@av8visual</a>
            </div>
        </section>
    )
}