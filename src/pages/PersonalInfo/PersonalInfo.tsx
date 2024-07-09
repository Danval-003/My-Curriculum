import React from "react";
import { Navbar, Contact } from "../../components";
import { useTranslation } from "react-i18next";
import "./PersonalInfo.scss";

interface PersonalInfoProps {
  selection: number;
  setSelection: (selection: number) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({selection, setSelection}) => {
  const { t } = useTranslation();
  const selections = {
    [t("nav.aboutMe")]: 1,
    [t("nav.experience")]: 2,
  };
  return (
    <div className="cont">
      <div className="info">
        <div className="my-name">
        <h1>{t("title")}</h1>
        </div>
        <h2>{t("personalJob")}</h2>
        <p>{t("personalPhrase")}</p>
      </div>
      <Navbar
        select={selection}
        selections={Object.keys(selections)}
        setSelection={setSelection}
      />
      <Contact />
    </div>
  );
};

export default PersonalInfo;
