import PropTypes from 'prop-types';
import { StyledBtn } from './Button.styled';

export const Button = ({ text, onClick, isActive = false }) => {
  return (
    <StyledBtn type="button" onClick={onClick} isActive={isActive}>
      {text}
    </StyledBtn>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};
