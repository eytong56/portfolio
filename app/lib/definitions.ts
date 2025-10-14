export type Project = {
  title: string;
  description: string;
  tags: string[];
  image_url?: string;
  link_url?: string;
};

export type Experience = {
  company: string;
  description: string[];
  date: string;
};
