import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return(<>
    {options.map(option => (<button
    key={option}
    name={option}
    onClick={onLeaveFeedback}
    >
      {option}  
      </button>))}
    </>

    )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;