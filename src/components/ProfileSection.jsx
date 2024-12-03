import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function ProfileSection() {

    const {data, currentLanguage} = useContext(UserContext);

    const actualLang = data?.[currentLanguage]?.profile;

  return (
    <div className="profile-container bg-secondary dark:bg-[#171043] text-white">
        <div className="profile-section">
            <h1 className="text-primary">{actualLang.title}</h1>
            <div className="profile2">
                <div className="profile-secondary">
                    <h2>{actualLang.info}</h2>
                    <div className="profile3">
                        <div className="profile-title text-primary">
                            <p>{actualLang.birthTitle}</p>
                            <p>{actualLang.livingTitle}</p>
                            <p>{actualLang.eduTitle}</p>
                            <p>{actualLang.roleTitle}</p>
                        </div>
                        <div className="non-title">
                            <p>{actualLang.birthDate}</p>
                            <p>{actualLang.livingPlace}</p>
                            <p>{actualLang.edu}</p>
                            <p>{actualLang.role}</p>
                        </div>
                    </div>
                </div>
                <div className="image-profile">
                <img src="https://s3-alpha-sig.figma.com/img/ec36/93fd/2fc15cffc612b2448fb1f38e4c8c72fd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SYSrxLdI1~bl4daQvgWUtYHELpqwWuTwa6V-2boQI9zjrsxuoosDkSMGUzCm7EUSOrsnd0O-8UmtjGrEyVCahioihPvh2RQZSVxLbABI0Xq5TTIk~zJZqSiZLlsFxArEJwYSOBA1PMGK3tXTRnGaefX~BYFKkJym-BmBjrksONASFwb2nQ3bLtfFL7IPDUsITLgDC0oQdY3lGf-KbdHKQJKgZYETs6slp-U-R4~kSKGx6ttpBRmjFNn~IliykJrBn-yS0lFWnQ7Kb-edx~JYAByGV2nahmDI0~pSWOt0eQhfqvVQRpISHCkfS9SWBSDScCruo-Kfk6lq1Uc5d-hs5Q__" alt="" />
                </div>
                <div>
                    <h2>{actualLang.about}</h2>
                    <div className="about-me">
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
