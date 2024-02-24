import { LinkData, Education, Experience, Project, OpenSource } from "./definition";

export const links : Array<LinkData> = [
    {id: 0, name: "Home", href: "#home"},
    // {id: 1, name: "About", href: "#about"},
    {id: 6, name: "Education", href: "#education"},
    {id: 2, name: "Experience", href: "#experience"},
    {id: 3, name: "Projects", href: "#projects"},
    {id: 4, name: "Skills", href: "#skills"},
]

export const educations: Array<Education> = [
    {
        id: 0, 
        degree: "Bachelor of Science - Computer Science", 
        time: "Fall 2021 - Present", school: "University of Ontario Institute of Technology - School of Science & Engineering Technology", 
        gpa: 3.5
    },
    {
        id: 0, 
        degree: "Ontario College Advance Diploma - Computer Programming", 
        time: "2018 – 2021", 
        school: "Seneca College of Applied Arts and Technology - School of Software Design & Data Science ", 
        gpa: 3.7
    },
]

export const experience: Array<Experience> = [
    {
        id: 0,
        title: "SOFTWARE DEVELOPER ASSISTANT - Intern",
        details: [
            "Collaborated closely with quantum physicists to develop Python packages that help in simulation, \
            inverse design, and optimization of noisy quantum circuits.",
            "Optimized program efficiency by analyzing, refactoring, and rewriting Python code.",
            "Built and wrote unit tests for quality assurance using Pytest.",
            "Developed pipeline that generates, collects, and stores quantum information data.",
            "Developed visualization module for the project that helped in visualizing quantum circuits with user \
            interactions.",
        ],
        time: "September 2022 – April 2023",
        company: "Ki3 Photonics Inc",
    },
    {
        id: 1,
        title: "CANDEV 2022 HACKATHON - Statistics Canada",
        details: [
            "Worked in a team of 3 to build a system that collects vessel data and notifies commodores about whale \
            habitats using Python.",
            "Used Pandas and NumPy to generate analytical reports of vessel data",
            "Processed and cleaned geospatial data using Rasterio and Shapely",
        ],
        time: "February 2022",
        company: "Statistic Canada"
    },
    {
        id: 2,
        title: "CAPSTONE PROJECT",
        details: [
            "Collaborated in a team of 4 to design an operational system that gathers data from solar power plants",
            "Developed a website that displayed data with user-friendly interface using Flask and React",
            "Developed an alarm system that can send email to technician about solar plant malfunctions",
        ],
        time: "September 2020 - April 2021",
        company: "Seneca College"
    },
]

export const projects: Array<Project> = [
    {
        id: 0,
        status: "ongoing",
        title: "Machine Learning / Deep Learning",
        description: "Some description 1",
        href: "Some link here",
        github: "A github link here",
    },
]

export const skills: Array<string> = [
    "Python", "C++", "JavaScript", "NumPy", "Pandas", "Matplotlib", "Tensorflow", "HTML", "CSS", "Web Scraping",
    "Git", "GitHub", "SQL", "NoSQL", "ReactJS/NextJS", "Node.js", "Flask", "FastAPI"
]

export const open_source_data: Array<OpenSource> = [
    {
        id: 0,
        title: "GraphiQ",
        description: "GraphiQ is an open-source framework for designing photonic graph state generation schemes. Photonic graph states are an important resource for many quantum information processing tasks including quantum computing and quantum communication.",
        image: "/img/graphiq.png",
        github: "https://github.com/graphiq-dev/graphiq",
        documentation: "https://graphiq.readthedocs.io/en/latest/",
    }
]