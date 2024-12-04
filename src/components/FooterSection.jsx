import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function FooterSection() {

    const { data, currentLanguage } = useContext(UserContext);

    const footer = data?.[currentLanguage]?.footer;
    const icons = data?.[currentLanguage]?.footer?.icons;

    return (
        <div className="footer-container">
            <div className="footer-contains">
                <h1 className="text-secondary">{footer.title}</h1>
                <h2>{footer.par}</h2>
                <p className="text-secondary">{footer.mail}</p>
                <div className="footer-images">
                {icons.map((icon, i) => (
                    <div>
                        <img className="footer-img" src={icon.icon} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default FooterSection;
