import PropTypes from 'prop-types';

const Statistic = ({
    good, neutral, bad, total, positivePercentage,
}) =>{
return(
<>
<ul>
    <li><p>Good: {good}</p></li>
    <li><p>Neutral: {neutral}</p></li>
    <li><p>Bad: {bad}</p></li>
    <li><p>Total: {total}</p></li>
    <li><p>PositivePercentage: {positivePercentage}%</p></li>
</ul>
</>
)}

Statistic.propType = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}

export default Statistic;