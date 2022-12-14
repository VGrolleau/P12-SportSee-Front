import '../../utils/style/CustomActivityTooltip.css';
import { PropTypes } from 'prop-types';

/**
 * It returns a div with two p elements if the active and payload props are truthy
 * @returns A React component
 */
function CustomActivityTooltip({ active, payload }) {
    if (active && payload) {
        return (
            <div className='tooltip-container'>
                <p className='tooltip-line'>
                    {`${payload[0].value} kg`}
                </p>
                <p className='tooltip-line'>
                    {`${payload[1].value} kCal`}
                </p>
            </div>
        );
    }

    return null;
}

CustomActivityTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
};

export default CustomActivityTooltip;