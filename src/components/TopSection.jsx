import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import DarkModeButton from "../button/DarkModeButton";


function TopSection() {

    const {data, currentLanguage, toggleLanguage} = useContext(UserContext);
    

    const actualLang = data?.[currentLanguage]?.top;


  return (
    <div className=" top-main text-2xl text-white bg-gradient-to-r from-secondary from-65% to-primary to-35% dark:bg-gradient-to-r dark:from-[#171043] dark:from-65% dark:to-[#1A210B] dark:to-35%">
        <div className="top-main2 flex my-0 mx-auto max-w-[1000px] flex-col relative">
            <div className="dm-container flex relative justify-between mt-[15px]">
                <p className="name text-primary text-[32px] font-bold absolute mt-[40px]">{actualLang.name}</p>
                <div className="dm-button flex gap-[80px] mt-[15px] text-[15px] ml-[640px] relative">
                    <button className="text-primary dark:text-[#777777] font-medium" onClick={toggleLanguage}>{actualLang.langButton}</button>
                    <div className="toggle-dm flex items-center gap-2.5">
                      <DarkModeButton />
                    </div>
                </div>
            </div>
            <div className="main-container flex mt-[80px] mb-[120px] justify-between">
                <div className="main-container2 flex flex-col self-end max-w-[530px] max-h-[375px] gap-[45px]">
                    <h1 className="text-primary text-[54px] font-bold leading-[59px]">{actualLang.title}</h1>
                    <h2 className="leading-[29px]">{actualLang.about}</h2>
                    <div className="button-container flex gap-[20px]">
                        <button className="actual-button flex p-2.5 rounded-[5px] items-center gap-[5px] text-[18px] font-medium bg-white text-secondary border-solid border-2 border-white dark:bg-[#252128] dark:text-white"> <img src="/github.svg"/> Github</button>
                        <button className="actual-button flex p-2.5 rounded-[5px] items-center gap-[5px] text-[18px] font-medium bg-white text-secondary border-solid border-2 border-white dark:bg-[#252128] dark:text-white"> <img src="/linkedin.svg"/> Linkedin</button>
                    </div>
                </div>
                <img className="main-image rounded-[18px] object-cover w-[400px] h-[425px] overflow-hidden" src="https://s3-alpha-sig.figma.com/img/76b0/6993/b04fd1fa29a883e2f4b8b8577a5c82eb?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G~AogFFfiA3Yl2GccYd4A267KmgCGncPIJRrpixm4xV9Zn6hfXm1UUvyHvJ6lkKrW3u0FE2ECSHssuPYhB1taepp57vJXsCIRjNdnaA7g1VkWv3wXOKdGAdqAZlpZsYSQ6wj3d0F-qquGprCPpuv3FaxJzRS7uVUM1j4StUlmC-7eJxJD2K7Rzps6jomuZ83XJ7JZ1vzuXr~DWckF~m76VYctm8-47B1zPjyApgUZDxRbrSAML6CCWrpmkXXRZy9kfodrWvrUj-2Vta8VbC7xmksoszY6EJtoPVnEqwEeNkpKbavM-DoLsFwxsE7ROzW3uozCRlv70pClFdrrvQYgg__" />
            </div>
        </div>
    </div>
  )
}

export default TopSection;
