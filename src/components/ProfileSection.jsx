import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function ProfileSection() {

    const {data, currentLanguage} = useContext(LanguageContext);

    const actualLang = data?.[currentLanguage]?.profile;

  return (
    <div className="profile-container pt-[80px] pb-[80px] bg-secondary dark:bg-[#171043] text-white">
        <div className="profile-section flex my-0 mx-auto max-w-[1000px] flex-col justify-between">
            <h1 className="text-primary text-[48px] font-bold">{actualLang.title}</h1>
            <div className="profile2 flex gap-[20px] justify-between mt-[25px]">
                <div className="profile-secondary">
                    <h2 className="text-[30px] font-medium leading-[24px]">{actualLang.info}</h2>
                    <div className="profile3 flex w-[280px] gap-[10px]">
                        <div className="profile-title text-primary text-[16px] font-semibold mt-[25px] flex flex-col gap-[20px] w-[150px] leading-[24px]">
                            <p>{actualLang.birthTitle}</p>
                            <p>{actualLang.livingTitle}</p>
                            <p>{actualLang.eduTitle}</p>
                            <p>{actualLang.roleTitle}</p>
                        </div>
                        <div className="non-title text-[16px] font-normal mt-[25px] flex flex-col gap-[20px] leading-[24px]">
                            <p>{actualLang.birthDate}</p>
                            <p>{actualLang.livingPlace}</p>
                            <p>{actualLang.edu}</p>
                            <p>{actualLang.role}</p>
                        </div>
                    </div>
                </div>
                <div className="image-profile">
                <img className="w-[300px] h-[290px] rounded-[10px] object-cover" src="images/profile-section.png" />
                </div>
                <div className="for-about">
                    <h2 className="text-[30px] font-medium leading-[24px]">{actualLang.about}</h2>
                    <div className="about-me w-[300px] text-[18px] font-normal flex flex-col mt-[25px] gap-[20px] leading-[27px]">
                        <p>{actualLang.aboutme1}</p>
                        <p>{actualLang.aboutme2}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileSection;
