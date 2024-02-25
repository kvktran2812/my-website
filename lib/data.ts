import { LinkData, Education, Experience, Project, OpenSource, SkillSet } from "./definition";

export const links : Array<LinkData> = [
    {id: 0, name: "Home", href: "#home"},
    // {id: 1, name: "About", href: "#about"},
    {id: 6, name: "Education", href: "#education"},
    {id: 2, name: "Experience", href: "#experience"},
    {id: 7, name: "Open Source", href: "#open_source"},
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
        title: "Deep Learning",
        description: "A series of simple tutorials and practices using multiple deep learning technologies. \
        In this series, I implemented different models like simple neural network, convolutional network, autoencoder, etc. \
        These models represent best practices that can apply to solve practical problems",
        github: "A github link here",
        examples: [
            {
                id: 0,
                text: "0. Simple Neural Network",
                href: "/html/0_simple_neural_network.html",
                image: "/img/deeplearn.png",
                description: "Using simple neural network to study and predict the famous MNIST dataset. \
                The dataset is a collection of images of handwritten numbers from 0 to 9\
                The result is a model that can achieve accuracy rate of 97%",
            },
            {
                id: 1,
                text: "1. Convolutional Network",
                href: "/html/1_conv_nn.html",
                image: "/img/conv.png",
                description: "In this demonstration, I used convolutional network to study the CIFAR10 dataset. \
                Using convolutional layer to first filter and extract important information from the image, and then feed those features to a densely connected layer.\
                The dataset is a collection of images of 10 different classes of object. The result is a model that can achieve accuracy rate of 75%",
            },
            {
                id: 2,
                text: "2. LSTM",
                href: "",
                image: "/img/lstm.png",
                description: "Will be updated soon",
            },
            {
                id: 3,
                text: "3. Autoencoder",
                href: "",
                image: "/img/autoencoder.png",
                description: "Will be updated soon",
            },
        ],
    },
    {
        id: 1,
        title: "OpenGL",
        description: "Projects that use OpenGL to render graphics. To be updated soon",
        github: "github",
        examples: [],
    }
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

export const skillsets: Array<SkillSet> = [
    {
        id: 0,
        title: "Programming Language",
        skills: [
            {
                id: 0,
                name: "Python",
                description: "",
                experience: 4,
                icon: "/img/skills/python.jpg",
            },
            {
                id: 1,
                name: "C++",
                description: "",
                experience: 4,
                icon: "/img/skills/cpp.png",
            },
            {
                id: 2,
                name: "JavaScript",
                description: "",
                experience: 5,
                icon: "/img/skills/js.png",
            }
        ]
    },
    {
        id: 1,
        title: "Web Technologies",
        skills: [
            {
                id: 0,
                name: "HTML",
                description: "",
                experience: 4,
                icon: "/img/skills/html.png",
            },
            {
                id: 1,
                name: "CSS",
                description: "",
                experience: 4,
                icon: "/img/skills/css.png",
            },
            {
                id: 2,
                name: "NodeJS",
                description: "",
                experience: 5,
                icon: "/img/skills/nodejs.png",
            },
            {
                id: 3,
                name: "ReactJS",
                description: "",
                experience: 5,
                icon: "/img/skills/reactjs.png",
            },
            {
                id: 4,
                name: "FastAPI",
                description: "",
                experience: 5,
                icon: "/img/skills/fastapi.png",
            },
            {
                id: 5,
                name: "Django",
                description: "",
                experience: 5,
                icon: "/img/skills/django.png",
            },
            {
                id: 6,
                name: "PostgreSQL",
                description: "",
                experience: 5,
                icon: "/img/skills/postgresql.png",
            },
            {
                id: 6,
                name: "MySQL",
                description: "",
                experience: 5,
                icon: "/img/skills/mysql.png",
            },
            {
                id: 7,
                name: "MongoDB",
                description: "",
                experience: 5,
                icon: "/img/skills/mongodb.png",
            }
        ]
    },
    {
        id: 0,
        title: "Scientific Technologies",
        skills: [
            {
                id: 0,
                name: "NumPy",
                description: "",
                experience: 4,
                icon: "/img/skills/numpy.svg",
            },
            {
                id: 1,
                name: "Pandas",
                description: "",
                experience: 4,
                icon: "/img/skills/pandas.png",
            },
            {
                id: 2,
                name: "SciPy",
                description: "",
                experience: 5,
                icon: "/img/skills/scipy.svg",
            },
            {
                id: 3,
                name: "Tensorflow",
                description: "",
                experience: 5,
                icon: "/img/skills/tensorflow.png",
            },
            {
                id: 3,
                name: "PyTorch",
                description: "",
                experience: 5,
                icon: "/img/skills/pytorch.png",
            },
            {
                id: 4,
                name: "Matplotlib",
                description: "",
                experience: 5,
                icon: "/img/skills/matplotlib.png",
            }
        ]
    },
]