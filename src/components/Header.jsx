import "./Header.css"

export const Header = () => {

    return(
        <header>
            <h1>AV8 </h1>
            <p className="st">Real-Time Imagery</p>
            <a className="insta" href="https://www.instagram.com/av8visual/" target="_blank">@av8visual</a>          
            <p className="about">AV8 é um projeto que investiga a imagem em tempo real por meio da programação gráfica. Busca desenvolver experiências estéticas a partir do código, explorando seu potencial expressivo como linguagem visual. </p>
        </header>
    )
}