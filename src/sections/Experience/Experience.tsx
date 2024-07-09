import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "../../components";
import { Slide, Stack, Box, IconButton } from "@mui/material";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import './Experience.scss';

interface ProjectData {
    title: string;
    description: string;
    image: string;
    link: string;
}

interface ExperienceProps {
    projects: ProjectData[];
}


// Create a courusel for the projects
const Experience: React.FC<ExperienceProps> = ({ projects }) => {
    const { t } = useTranslation();
    const [cards, setCards] = React.useState<React.ReactElement[]>(
        projects.map((project, index) => (
            <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
            />
        ))
    );

    // If projects update, update the cards
    useEffect(() => {
        setCards(
            projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                />
            ))
        );
    }, [projects]);

    const [currentPage, setCurrentPage] = React.useState(0);
    const [slideDirection, setSlideDirection] = React.useState<"left" | "right" | undefined>("left");
    const cardsPerPage = () => {
        if (window.innerWidth < 600) {
            return 1;
        } else  {
            return 2;
        }
    };

    const handleNextPage = () => {
        setSlideDirection("left");
        setCurrentPage((prev) => 
            prev === Math.ceil(projects.length / cardsPerPage()) - 1 ? 0 : prev + 1
        );
    }

    const handlePreviousPage = () => {
        setSlideDirection("right");
        setCurrentPage((prev) =>
            prev === 0 ? Math.ceil(projects.length / cardsPerPage()) -1 : prev - 1
        );
    }

    return (
        <div className="experience">
            <h3>{t("experience.title")}</h3>
            <Box className="experience-cards">
                <IconButton
                    onClick={handlePreviousPage}
                    className="experience-cards-button"
                >
                    <NavigateBefore style={{"fill":"var(--colorfont)"}} />
                </IconButton>
                <Box className="experience-cards-stack">
                    {
                        cards.map((_, index) => (
                            <Box
                                key={`card-${index}`}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    display: currentPage === index ? "block" : "none",
                                  }}
                            >
                                <Slide direction={slideDirection} in={currentPage === index} timeout={660} mountOnEnter unmountOnExit>
                                    <Stack
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={2}
                                        sx={{
                                            height: "100%",
                                            width: "100%",
                                        }}
                                    >
                                        {
                                        cards.slice(index * cardsPerPage(), (index + 1) * cardsPerPage()).map((card) => (
                                            card
                                        ))
                                        }
                                    </Stack>
                                </Slide>
                            </Box>
                        ))
                    }
                </Box>
                <IconButton
                    onClick={handleNextPage}
                    className="experience-cards-button"
                >
                    <NavigateNext style={{"fill":"var(--colorfont)"}} />
                </IconButton>
            </Box>
        </div>
    );
}

export default Experience;
