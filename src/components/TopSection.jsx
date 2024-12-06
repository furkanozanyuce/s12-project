import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import DarkModeButton from "../button/ToggleButton";


function TopSection() {

    const {data, currentLanguage, toggleLanguage} = useContext(LanguageContext);
    

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
                <img className="main-image rounded-[18px] object-cover w-[400px] h-[425px] overflow-hidden" src="images/top-section.png" />
            </div>
        </div>
    </div>
  )
}

export default TopSection;
