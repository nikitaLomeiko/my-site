"use client";

import { About } from "@/components/sections/about/about";
import { Contacts } from "@/components/sections/contacts/contacts";
import { Experience } from "@/components/sections/experience/experience";
import { Profile } from "@/components/sections/profile/profile";
import { ProjectList } from "@/components/sections/projects/project.list";
import { Skills } from "@/components/sections/skills/skills";

import { resumeData } from "@/data/resume.data";

export const HomePage = () => {
  return (
    <div>
      <Profile
        githubUrl={resumeData.githubURL}
        resumeUrl={resumeData.resumeURL}
        email={resumeData.email}
        phone={resumeData.phone}
        fullname={resumeData.fullname}
        position={resumeData.position}
        location={resumeData.location}
        status={resumeData.status}
        avatarURL={resumeData.avatarURL}
        projectCount={`5+`}
        stack={resumeData.stack}
        yearExperience={resumeData.yearExperience}
      />
      <About
        characteristics={resumeData.characteristics}
        descriptions={resumeData.descriptions}
        hobbyList={resumeData.hobbyList}
      />
      <Skills sectionsSkills={resumeData.sectionSkills} />
      <Experience experiences={resumeData.experiences} />
      <ProjectList projects={resumeData.projects} />
      <Contacts
        email={resumeData.email}
        phone={resumeData.phone}
        telegram={resumeData.telegram}
        vk={resumeData.vk}
        businessTrips={resumeData.businessTrips}
        formatWork={resumeData.formatWork}
        typeEmployment={resumeData.typeEmployment}
      />
    </div>
  );
};
