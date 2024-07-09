import React from "react";
import { useTranslation } from "react-i18next";
import './AboutMe.scss';

const AboutMe: React.FC = () => {
    const { t } = useTranslation();
    const description = t("aboutMe.description").split('\n').map((line, index) => (
        <p key={index}>{line}</p>
    ));

    return (
        <div className="aboutMe">
            <h4>{t('aboutMe.title')}</h4>
            <div>{description}</div>
        </div>
    );
}

export default AboutMe;
