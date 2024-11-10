import "./index.css";
import mediaAdress from "../../utils/mediaAdresses";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="top">
        <div className="leftSide">
          <h1>LOGO</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <a href="#">@Lorem</a>
        </div>
        <div className="aboutUs">
          <h3>About us</h3>
          <ul>
            <li>Portfolio</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="contcatUs">
          <h3>Contact us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <a href="">{"+" + mediaAdress.number}</a>
          <div className="socials">
            {Object.entries(mediaAdress).map(([key, value]) => {
              // Yalnız sosial media linklərini göstərmək üçün HTTP ilə başlayan URL-ləri filtr edin
              if (typeof value === "string" && value.startsWith("http")) {
                return (
                  <a
                    key={key}
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </a>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
      <div className="signature">
        <p>Copyright ® 2024 Lorem All rights Rcerved</p>
      </div>
    </div>
  );
};

export default Footer;
