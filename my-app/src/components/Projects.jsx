import { ProjectContainer,Title, PortfolioImg, LinkStyle, RemakingImg, FlexProjects, MiniTitle } from "./style/ProjectStyle";


export default function Projects({getProjects}) {
  return (
    <ProjectContainer id="projects" >
      <Title ref={getProjects}>Projects</Title>
      <FlexProjects>
        <LinkStyle to="https://masashi381.github.io/mid-term-webdev1-masashi381/" target="_blank"><PortfolioImg src="../src/images/portfolio.png" alt="portfolio" /><MiniTitle>Portfolio by HTML & CSS</MiniTitle></LinkStyle>
        <LinkStyle to="https://masashi381.github.io/Remaking-HomePages/" target="_blank"><RemakingImg src="../src/images/remakingHomepages.png" alt="Remaking HomePages" /><MiniTitle>Remaking HomePages</MiniTitle></LinkStyle>
      </FlexProjects>
    </ProjectContainer>
  )
};