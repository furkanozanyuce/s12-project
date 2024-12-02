import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";


function TopSection() {

    const {data, currentLanguage, toggleLanguage} = useContext(UserContext);
    

    const actualLang = data?.[currentLanguage]?.top;


  return (
    <div className=" top-main text-white bg-gradient-to-r from-secondary from-65% to-primary to-35%">
        <div className="top-main2">
            <div className="dm-container">
                <p className="name text-primary">{actualLang.name}</p>
                <div className="dm-button">
                    <button className="text-primary font-medium" onClick={toggleLanguage}>{actualLang.langButton}</button>
                    <button className="text-secondary font-medium">{actualLang.modeButton}</button>
                </div>
            </div>
            <div className="main-container">
                <div className="main-container2">
                    <h1 className="text-primary">{actualLang.title}</h1>
                    <h2>{actualLang.about}</h2>
                    <div className="button-container">
                        <button className="actual-button bg-white text-secondary"> <img src="./public/github.svg"/> Github</button>
                        <button className="actual-button bg-white text-secondary"> <img src="./public/linkedin.svg"/> Linkedin</button>
                    </div>
                </div>
                <img className="main-image" src="https://s3-alpha-sig.figma.com/img/76b0/6993/b04fd1fa29a883e2f4b8b8577a5c82eb?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G~AogFFfiA3Yl2GccYd4A267KmgCGncPIJRrpixm4xV9Zn6hfXm1UUvyHvJ6lkKrW3u0FE2ECSHssuPYhB1taepp57vJXsCIRjNdnaA7g1VkWv3wXOKdGAdqAZlpZsYSQ6wj3d0F-qquGprCPpuv3FaxJzRS7uVUM1j4StUlmC-7eJxJD2K7Rzps6jomuZ83XJ7JZ1vzuXr~DWckF~m76VYctm8-47B1zPjyApgUZDxRbrSAML6CCWrpmkXXRZy9kfodrWvrUj-2Vta8VbC7xmksoszY6EJtoPVnEqwEeNkpKbavM-DoLsFwxsE7ROzW3uozCRlv70pClFdrrvQYgg__" />
            </div>
        </div>
    </div>
  )
}

export default TopSection;
