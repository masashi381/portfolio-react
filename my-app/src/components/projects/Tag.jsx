import PropTypes from "prop-types";

export default function Tag({ children }) {
  return <span>{children}</span>;
}
Tag.propTypes = {
  children: PropTypes.node.isRequired,
};
