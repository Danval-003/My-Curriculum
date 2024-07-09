import React, { useState } from 'react';
import { Modal } from '@mui/material';
import './ProjectModal.scss';
import { useTranslation } from "react-i18next";

interface ProjectModalProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ title, description, image, link }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
     {
        open ? (
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                className="project-modal"
            >
                
                <div className='modal'>
                    <div className='textCont'>
                        <div className='text-content'> 
                            <h1>
                                {title}
                            </h1>
                            <p>
                                {description}
                            </p>
                        </div>
                        <div className='image'>
                            <img src={image} alt={title} />
                        </div>
                    </div>
                    <a href={link} target="_blank" rel="noreferrer">
                            <button className='goto'>
                                {t("experience.view_project")}
                            </button>
                    </a>
                </div>
            </Modal>
            ) : (
                <button
                    className="project-modal-button"
                    onClick={() => setOpen(true)}
                >
                    {t("experience.view_more")}
                </button>
            )
     }
    </>
  );
};

export default ProjectModal;
