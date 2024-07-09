import React from "react";
import { Card } from "@mui/material";
import ProjectModal from "../ProjectModal";
import './ProjectCard.scss';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}


const ProjectCard: React.FC<ProjectCardProps> = ({title, description, image, link}) => {
  return (
    <Card className="project-card" sx={{'backgroundColor': 'rgb(31, 2, 31)'}}>
      <img src={image} alt={title} width="100%" />
      <h3>{title}</h3>
      <ProjectModal title={title} description={description} image={image} link={link} />
    </Card>
  );
};

export default ProjectCard;
