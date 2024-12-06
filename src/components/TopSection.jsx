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
                        <button className="actual-button hover:bg-primary dark:hover:bg-secondary flex p-2.5 rounded-[5px] items-center gap-[5px] text-[18px] font-medium bg-white text-secondary border-solid border-2 border-white dark:bg-[#252128] dark:text-white"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Github</button>
                        <button className="actual-button hover:bg-primary dark:hover:bg-secondary flex p-2.5 rounded-[5px] items-center gap-[5px] text-[18px] font-medium bg-white text-secondary border-solid border-2 border-white dark:bg-[#252128] dark:text-white"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> Linkedin</button>
                    </div>
                </div>
                <img className="main-image rounded-[18px] object-cover w-[400px] h-[425px] overflow-hidden" src="images/top-section.png" />
            </div>
        </div>
    </div>
  )
}

export default TopSection;
