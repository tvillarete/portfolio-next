import { Project } from "@/app/sharedTypes";
import React from "react";
import styled, { css } from "styled-components";

interface ContainerProps {
  selected: boolean;
}

const LinkContainer = styled.a`
  display: none;
`;

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px 16px 16px;
  border-bottom: 1px solid lightgray;
  border-left: 3px solid transparent;
  cursor: pointer;
  transition: background 0.3s;

  ${(props) =>
    props.selected &&
    css`
      border-left: 3px solid #008eff;

      ${LinkContainer} {
        display: flex;
      }
    `};

  @media (prefers-color-scheme: dark) {
    border-bottom: 1px solid #404040;
    background: ${(props) => props.selected && "#ffffff1f"};

    :hover {
      background: ${(props) => !props.selected && "#ffffff0d"};
    }
  }
`;

const Label = styled.h3`
  margin: 0;
  font-weight: 500;
`;

const Link = styled.h3`
  margin: 0 4px;
  font-size: 16px;
  font-weight: 300;
  transition: all 0.3s;
  text-decoration: none;
  color: #008eff;
  cursor: pointer;

  @media (prefers-color-scheme: dark) {
    :hover {
      filter: brightness(1.3);
    }
  }
`;

const Icon = styled.img`
  max-width: 16px;
`;

interface Props {
  project: Project;
  onClick: () => void;
  selected: boolean;
}

export const ListItem = ({ project, selected, onClick }: Props) => {
  return (
    <Container selected={selected} onClick={onClick}>
      <Label>{project.name}</Label>
      <LinkContainer
        rel="noopener"
        style={{ textDecoration: "none" }}
        href={project.url}
        target="_blank"
      >
        <Link>Visit</Link>
        <Icon alt="external link" src="/external-link.svg" />
      </LinkContainer>
    </Container>
  );
};
