import React from 'react'
import { AboutMe, Experience } from '../../sections'
import { useTranslation } from "react-i18next";
import { 
  SocialNetwork, 
  EverythingStarsWithWater, 
  SLR, 
  Danvaland, 
  Raycasting, 
  ChatTCP,
  Raycaster,
  Bline,
} from '../../assets';
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
      link: "https://danvaland.danval.lat/"
    },
    {
      title: t("projects.TCP_chat.title"),
      description: t("projects.TCP_chat.description"),
      image: ChatTCP,
      link: "https://github.com/Danval-003/TCP_chat_server"
    },
    {
      title: t("projects.Doom_raycasting.title"),
      description: t("projects.Doom_raycasting.description"),
      image: Raycasting,
      link: "https://github.com/Danval-003/DoomProyectXP"
    },
    {
      title: t("projects.Raycaster.title"),
      description: t("projects.Raycaster.description"),
      image: Raycaster,
      link: "https://github.com/Danval-003/Minecraft_for_raycaster"
    },
    {
      title: t("projects.B-line.title"),
      description: t("projects.B-Line.description"),
      image: Bline,
      link: "https://github.com/Dahernandezsilve/Project_B-Line"
    },
  ]
  return (
    <div className="to-show">
      <AboutMe />
      <Experience projects={projects} />
      <div className="space" ></div>
    </div>
  )
}

export default ToShow

