export type LinkData = {
    id: number,
    name: string,
    href: string,
}

export type Education = {
    id: number,
    degree: string,
    time: string,
    school: string,
    gpa: number,
}

export type Experience = {
    id: number,
    title: string,
    details: Array<string>,
    time: string,
    company: string,
}

export type Project = {
    id: number,
    title: string,
    description: string,
    examples: Array<ProjectLink>,
    github: string,
}

export type ProjectLink = {
    id: number,
    text: string,
    href: string,
    source: string,
    description: string,
}

export type OpenSource = {
    id: number,
    title: string,
    description: string,
    image: string,
    github: string,
    documentation: string,
}

export type SkillSet = {
    id: number,
    title: string,
    skills: Array<Skill>,
}

export type Skill = {
    id: number,
    name: string,
    description: string,
    experience: number,
    icon: string,
}