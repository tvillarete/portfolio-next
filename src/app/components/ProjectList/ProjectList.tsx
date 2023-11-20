import React from "react";
import styled from "styled-components";
import { ListItem } from "./ListItem";
import { Project } from "@/app/sharedTypes";

const RootContainer = styled.div`
  flex: 0 0 25%;
  margin: 10vh 0;

  @media screen and (max-width: 930px) {
    margin: 0 0 10vh 0;
    flex: 1;
    width: 90vw;
    max-width: 540px;
  }
`;

interface Props {
  projects: Project[];
  curProject: number;
  setCurProject: (project: number) => void;
}

export const ProjectList = ({ projects, curProject, setCurProject }: Props) => {
  return (
    <RootContainer>
      {projects.map((project, index) => (
        <ListItem
          key={`project-${index}`}
          onClick={() => setCurProject(index)}
          project={project}
          selected={index === curProject}
        />
      ))}
    </RootContainer>
  );
};
