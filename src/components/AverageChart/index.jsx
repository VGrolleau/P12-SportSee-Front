import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { PropTypes } from 'prop-types';
import '../../utils/style/AverageChart.css';

function AverageChart(props) {
    const USER_AVERAGE = props.userAverageSessions;
    const USER_AVERAGE_SESSIONS = USER_AVERAGE.sessions;
    // console.log(USER_AVERAGE);

    return (
        <div className='average-chart'>
            <h2>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={USER_AVERAGE_SESSIONS}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

AverageChart.propTypes = {
    userAverageSessions: PropTypes.object
}

export default AverageChart;