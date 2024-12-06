import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function FooterSection() {

    const { data, currentLanguage } = useContext(UserContext);

    const footer = data?.[currentLanguage]?.footer;
    const icons = data?.[currentLanguage]?.footer?.icons;

    return (
        <div className="footer-container pt-[80px] pb-[80px] dark:bg-[#252128] dark:text-white">
            <div className="footer-contains flex my-0 mx-auto max-w-[1000px] flex-col items-center	 text-center gap-[20px]">
                <h1 className="text-secondary text-[48px] font-bold dark:text-[#8F88FF]">{footer.title}</h1>
                <h2 className="text-[24px] font-normal max-w-[440px] leading-[32px]">{footer.par}</h2>
                <p className="text-secondary text-[20px] font-medium underline dark:text-[#8F88FF]">{footer.mail}</p>
                <div className="footer-images flex gap-[20px]">
                {icons.map((icon, i) => (
                    <div>
                        <img className="footer-img w-[35px] h-[35px]" src={icon.icon} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default FooterSection;
