import '../../utils/style/CustomAverageTooltip.css';
import { PropTypes } from 'prop-types';

/**
 * If the tooltip is active and there is a payload, return a div with a paragraph containing the
 * average time
 * @returns A React component that is a div with a class of tooltip-container. Inside the div is a p
 * tag with a class of tooltip-line. The p tag has a string that is the value of the first item in the
 * payload array.
 */
function CustomAverageTooltip({ active, payload }) {
    if (active && payload) {
        return (
            <div className='tooltip-container'>
                <p className='tooltip-line'>
                    {`${payload[0].value} min`}
                </p>
            </div>
        );
    }

    return null;
}

CustomAverageTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
};

export default CustomAverageTooltip;