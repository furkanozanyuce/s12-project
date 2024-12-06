import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function ProfileSection() {

    const {data, currentLanguage} = useContext(UserContext);

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
                <img className="w-[300px] h-[290px] rounded-[10px] object-cover" src="https://s3-alpha-sig.figma.com/img/ec36/93fd/2fc15cffc612b2448fb1f38e4c8c72fd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SYSrxLdI1~bl4daQvgWUtYHELpqwWuTwa6V-2boQI9zjrsxuoosDkSMGUzCm7EUSOrsnd0O-8UmtjGrEyVCahioihPvh2RQZSVxLbABI0Xq5TTIk~zJZqSiZLlsFxArEJwYSOBA1PMGK3tXTRnGaefX~BYFKkJym-BmBjrksONASFwb2nQ3bLtfFL7IPDUsITLgDC0oQdY3lGf-KbdHKQJKgZYETs6slp-U-R4~kSKGx6ttpBRmjFNn~IliykJrBn-yS0lFWnQ7Kb-edx~JYAByGV2nahmDI0~pSWOt0eQhfqvVQRpISHCkfS9SWBSDScCruo-Kfk6lq1Uc5d-hs5Q__" alt="" />
                </div>
                <div>
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
