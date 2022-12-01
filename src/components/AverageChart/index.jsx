import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { PropTypes } from 'prop-types';
import '../../utils/style/AverageChart.css';

function AverageChart(props) {
    const USER_AVERAGE = props.userAverageSessions;
    const USER_ID = USER_AVERAGE.userId;
    const USER_AVERAGE_SESSIONS = USER_AVERAGE.sessions;
    // console.log(USER_AVERAGE_SESSIONS);

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
            sessionLength: USER_AVERAGE_SESSIONS[0].sessionLength
        },
        {
            day: DAYS[2],
            sessionLength: USER_AVERAGE_SESSIONS[1].sessionLength
        },
        {
            day: DAYS[3],
            sessionLength: USER_AVERAGE_SESSIONS[2].sessionLength
        },
        {
            day: DAYS[4],
            sessionLength: USER_AVERAGE_SESSIONS[3].sessionLength
        },
        {
            day: DAYS[5],
            sessionLength: USER_AVERAGE_SESSIONS[4].sessionLength
        },
        {
            day: DAYS[6],
            sessionLength: USER_AVERAGE_SESSIONS[5].sessionLength
        },
        {
            day: DAYS[7],
            sessionLength: USER_AVERAGE_SESSIONS[6].sessionLength
        }
    ]

    // console.log(USER_AVERAGE_SESSIONS_ARRAY);

    return (
        <div className='average-chart'>
            <h2>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%" className="responsive-container">
                <LineChart
                    data={USER_AVERAGE_SESSIONS_ARRAY}
                    outerRadius="75%"
                    margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
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
                    <Tooltip />
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
    userAverageSessions: PropTypes.object
}

export default AverageChart;