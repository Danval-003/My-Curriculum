import React from 'react'
import { AboutMe, Experience } from '../../sections'
import { useTranslation } from "react-i18next";
import { SocialNetwork, EverythingStarsWithWater, SLR, Danvaland } from '../../assets';
import './ToShow.scss'

interface ProjectData {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ToShow: React.FC = () => {
  const { t } = useTranslation();
  const projects: ProjectData[] = [
    {
      title: t("projects.EverythingStarsWithWater.title"),
      description: t("projects.EverythingStarsWithWater.description"),
      image: EverythingStarsWithWater,
      link: "https://github.com/Danval-003/EverythingStartsWithWater"
    },
    {
      title: t("projects.FastApiSocialNetwork.title"),
      description: t("projects.FastApiSocialNetwork.description"),
      image: SocialNetwork,
      link: "https://github.com/Danval-003/FastApi-SocialNetwork"
    },
    {
      title: t("projects.SLR.title"),
      description: t("projects.SLR.description"),
      image: SLR,
      link: "https://github.com/Danval-003/LexicalAnalyzer-LL1-SRL-Scanner"
    },
    {
      title: t("projects.danvaland.title"),
      description: t("projects.danvaland.description"),
      image: Danvaland,
      link: "https://github.com/Danval-003/LexicalAnalyzer-LL1-SRL-Scanner"
    },
  ]
  return (
    <div className="to-show">
      <AboutMe />
      <Experience projects={projects} />
    </div>
  )
}

export default ToShow

