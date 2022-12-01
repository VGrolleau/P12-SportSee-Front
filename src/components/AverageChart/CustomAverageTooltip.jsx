import '../../utils/style/CustomAverageTooltip.css';
import { PropTypes } from 'prop-types';

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