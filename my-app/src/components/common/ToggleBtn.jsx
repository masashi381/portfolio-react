import { HamburgerStyle } from "./HeaderStyle";
import PropTypes from "prop-types";

export default function ToggleBtn({ controls, open, onClick }) {
  return (
    <HamburgerStyle type="button" aria-controls={controls} aria-expanded={open} onClick={onClick} className="toggleBtn">
      <span className="line-1 line"></span>
      <span className="line-2 line"></span>
      <span className="line-3 line"></span>
    </HamburgerStyle>
  );
}
ToggleBtn.propTypes = {
  controls: PropTypes.string,
  open: PropTypes.bool,
  onClick: PropTypes.func,
};
