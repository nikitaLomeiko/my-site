export interface IIconLabel {
  classIcon: string;
  label: string;
}

export interface ISectionSkills {
  name: string;
  iconClass: string;
  type: "accent" | "primary" | "secondary";
  skills: string[];
}

export interface IRecommendation {
  name: string;
  position: string;
  messsage: string;
}

export interface IProject {
  projectUrl?: string;
  title: string;
  subtitle: string;
  iconClass: string;
  descriptions: string[];
  languages: string[];
  label: string;
  labelList: IIconLabel[];
  repositoryUrl?: string;
  isCompanyProject: boolean;
  isTestProject: boolean;
  isStartupProject: boolean;
  isPetProject: boolean;
}

export interface IExperience {
  position: string;
  companyName: string;
  experienceWork: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
  achievements: string[];
  responsibility: IIconLabel[];
  recommendations: IRecommendation[];
}

export interface IResumeData {
  githubURL: string;
  resumeURL: string;
  stack: string;
  yearExperience: string;
  email: string;
  phone: string;
  telegram: string;
  vk: string;
  typeEmployment?: string;
  formatWork?: string;
  removal?: string;
  businessTrips?: string;
  travelTime?: string;
  fullname: string;
  position: string;
  location: string;
  status: string;
  avatarURL: string;
  hobbyList: IIconLabel[];
  characteristics: string[];
  descriptions: string[];
  sectionSkills: ISectionSkills[];
  experiences: IExperience[];
  projects: IProject[];
}
