import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { PropTypes } from 'prop-types';
import '../../utils/style/AverageChart.css';
import CustomTooltip from './CustomAverageTooltip';
import { USER_AVERAGE_SESSIONS } from '../../services/MockedData';
import { getUserData } from '../../services/CallAPI';

function AverageChart(props) {
    const URL_ID = props.userId;
    const USER_DATA = props.userData;

    // const { userData, isLoadingData, errorData } = getUserData(URL_ID, "average");

    let userAverageSessions;
    if (USER_DATA) {
        if (USER_DATA.data.userId === parseInt(URL_ID)) {
            userAverageSessions = USER_DATA.data;
        }
    } else {
        USER_AVERAGE_SESSIONS.forEach(userAverage => {
            if (userAverage.userId === parseInt(URL_ID)) {
                userAverageSessions = userAverage;
            }
        });
    }

    const USER_ID = userAverageSessions.userId;
    const USER_AVERAGE_SESSIONS_API = userAverageSessions.sessions;

    const DAYS = {
        1: "L",
        2: "M",
        3: "M",
        4: "J",
        5: "V",
        6: "S",
        7: "D"
    };

    const USER_AVERAGE_SESSIONS_ARRAY = [
        {
            day: DAYS[1],
            sessionLength: USER_AVERAGE_SESSIONS_API[0].sessionLength
        },
        {
            day: DAYS[2],
            sessionLength: USER_AVERAGE_SESSIONS_API[1].sessionLength
        },
        {
            day: DAYS[3],
            sessionLength: USER_AVERAGE_SESSIONS_API[2].sessionLength
        },
        {
            day: DAYS[4],
            sessionLength: USER_AVERAGE_SESSIONS_API[3].sessionLength
        },
        {
            day: DAYS[5],
            sessionLength: USER_AVERAGE_SESSIONS_API[4].sessionLength
        },
        {
            day: DAYS[6],
            sessionLength: USER_AVERAGE_SESSIONS_API[5].sessionLength
        },
        {
            day: DAYS[7],
            sessionLength: USER_AVERAGE_SESSIONS_API[6].sessionLength
        }
    ]

    return (
        <div className='average-chart'>
            <h2>Durée moyenne des<br />sessions</h2>
            <ResponsiveContainer width="100%" height="100%" className="responsive-container">
                <LineChart
                    data={USER_AVERAGE_SESSIONS_ARRAY}
                    outerRadius="75%"
                    margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
                >
                    <XAxis
                        dataKey="day"
                        stroke="rgba(255, 255, 255, 0.6)"
                        axisLine={false}
                        dy={10}
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fontWeight: 500,
                        }}
                    />
                    <YAxis
                        dataKey="sessionLength"
                        domain={[0, "dataMax + 60"]}
                        hide={true}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} />
                    <Line
                        dataKey="sessionLength"
                        type={`${USER_ID === "18" ? "step" : "monotone"}`}
                        stroke="rgba(255, 255, 255, 0.6)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            stroke: "rgba(255,255,255, 0.6)",
                            strokeWidth: 10,
                            r: 5,
                        }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

AverageChart.propTypes = {
    userId: PropTypes.string,
    userData: PropTypes.object
}

export default AverageChart;