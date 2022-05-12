export interface HeaderProps {
  name: string,
  email: string,
  resume: string,
  linkedIn: string,
  github: string,
}

export interface IntroProps {
  photo: string,
  bio: string[],
  caseStudy: string
}

export interface SentinelProps {
  header: string,
  photo: string,
  description: string[],
  caseStudy: string,
  presentation: string,
}

export interface ProjectProps {
  id: number,
  title: string,
  photo: string,
  description: string,
}

export interface OtherProjectsProps {
  projects: ProjectProps[]
}

export interface FooterProps {
  name: string,
  email: string,
  resume: string,
  linkedIn: string,
  github: string,
}