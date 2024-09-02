import { ProjectContainer, LinkStyle } from "./ProjectStyle";
import portfolio from "../../../images/portfolio.png";
import redBeef from "../../../images/remakingHomepages.png";
import fridgeFy from "../../../images/fridgefy.png";
import eventllege from "../../../images/eventllege.png";
import restaurantReview from "../../../images/restaurant_review.png";
import PropTypes from "prop-types";

export default function Projects({ getProjects }) {
  return (
    <ProjectContainer id="projects">
      <h3 ref={getProjects}>Projects</h3>
      <div className="projectsInner">
        <LinkStyle to="https://masashi381.github.io/mid-term-webdev1-masashi381/" target="_blank">
          <img className="portfolio img" src={portfolio} alt="portfolio" />
          <p>Portfolio by HTML & CSS</p>
        </LinkStyle>
        <LinkStyle to="https://masashi381.github.io/Remaking-HomePages/" target="_blank">
          <img className="mockup img" src={redBeef} alt="Remaking HomePages" />
          <p>Remaking HomePages</p>
        </LinkStyle>
        <LinkStyle to="https://fridgefy-ten.vercel.app/" target="_blank">
          <img className="fridgefy img" src={fridgeFy} alt="fridgefy react" />
          <p>fridgefy react</p>
        </LinkStyle>
        <LinkStyle to="https://github.com/masashi381/eventllege" target="_blank">
          <img className="Eventllege img" src={eventllege} alt="Eventllege" />
          <p>Eventllege</p>
        </LinkStyle>
        <LinkStyle to="https://github.com/masashi381/restaurant_review" target="_blank">
          <img className="Restaurant_review img" src={restaurantReview} alt="Restaurant Review" />
          <p>Eventllege</p>
        </LinkStyle>
      </div>
    </ProjectContainer>
  );
}
Projects.propTypes = {
  getProjects: PropTypes.shape({
    current: PropTypes.any,
  }),
};
