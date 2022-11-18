import '../../utils/style/ActivityChart.css';
import { PropTypes } from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ActivityChart(props) {
    const USER_ACTIVITIES = props.userActivities;
    const USER_ACTIVITIES_SESSIONS = USER_ACTIVITIES.sessions;

    return (
        <div className="activity-chart">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={USER_ACTIVITIES_SESSIONS} barGap={8} barCategoryGap="35%" width={500}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis
                        dataKey="calories"
                        dx={10}
                        domain={["dataMin - 160", "dataMax + 10"]}
                        allowDecimals={false}
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
                    <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

ActivityChart.propTypes = {
    userActivities: PropTypes.object
}

export default ActivityChart;