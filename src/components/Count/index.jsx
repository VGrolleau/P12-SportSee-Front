import { PropTypes } from 'prop-types';
import '../../utils/style/Count.css';

function Count(props) {
    const COUNT_DATA = props.countData;
    const CLASSNAMES = props.className;
    return (
        <div className={CLASSNAMES}>
            <div className='img-div'>
                <img src={COUNT_DATA.icon} alt="" />
            </div>
            <div>
                <h2>{COUNT_DATA.value}{COUNT_DATA.unity}</h2>
                <p>{COUNT_DATA.text}</p>
            </div>
        </div>
    )
}

Count.propTypes = {
    countData: PropTypes.object,
    className: PropTypes.string
}

export default Count;