export type SocialLinks = {
  linkedin: string;
  github: string;
  twitter: string;
};

export type ContactInfo = {
  email: string;
  socials: SocialLinks;
};

export type Accomplishment = {
  title: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  imageId: string;
  imageUrl?: string;
  imageHint?: string;
};

export type Value = {
  title: string;
  description:string;
};

export type PortfolioData = {
  name: string;
  tagline: string;
  location: string;
  introduction: string;
  skills: string[];
  accomplishments: Accomplishment[];
  projects: Omit<Project, 'imageUrl' | 'imageHint'>[];
  values: Value[];
  contact: ContactInfo;
};
