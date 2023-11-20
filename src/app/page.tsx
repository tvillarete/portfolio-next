"use client";

import styled, { createGlobalStyle } from "styled-components";
import { projects } from "@/app/constants";
import { useState } from "react";
import { Header } from "@/app/components/Header";
import { Laptop } from "@/app/components/Laptop";
import { ProjectList } from "@/app/components/ProjectList/ProjectList";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;

    @media (prefers-color-scheme: dark) {
      background-color: black;

      h1,h2,h3,h4,h5,h6 {
        color: white;
      }

      a {
        color: dodgerblue;
      }
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 930px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

export default function Home() {
  const [curProject, setCurProject] = useState(0);

  return (
    <main>
      <GlobalStyles />
      <Header />
      <ContentContainer>
        <Laptop
          projects={projects}
          curProject={curProject}
          setCurProject={setCurProject}
        />
        <ProjectList
          projects={projects}
          curProject={curProject}
          setCurProject={setCurProject}
        />
      </ContentContainer>
    </main>
  );
}
