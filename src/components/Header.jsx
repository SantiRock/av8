import "./Header.css";

export const Header = ({lang}) => {
  return (
    <header>
      <div >
        <h1>AV8 </h1>
        <p className="st">Real-Time Imagery</p>
        <a className="insta" href="https://www.instagram.com/av8visual/" target="_blank">@av8visual</a>
      </div>
      <div>
        <p className="about">{lang.about}</p>
      </div>
    </header>
  );
};
