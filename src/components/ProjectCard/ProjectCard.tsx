import React from 'react';
import ProjectModal from '../ProjectModal';
import { Spotlight, SpotlightCard } from '../spotlight-card/spotlight-card';
import './ProjectCard.scss';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
  return (
    <SpotlightCard className="project-card">
      <Spotlight>
        <img src={image} alt={title} width="100%" />
        <h3>{title}</h3>
        <ProjectModal title={title} description={description} image={image} link={link} />
      </Spotlight>
    </SpotlightCard>
  );
};

export default ProjectCard;
