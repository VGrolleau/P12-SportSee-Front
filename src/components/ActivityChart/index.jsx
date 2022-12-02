import '../../utils/style/ActivityChart.css';
import { PropTypes } from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomActivityTooltip';

function ActivityChart(props) {
    const USER_ACTIVITIES = props.userActivities;
    const USER_ACTIVITIES_SESSIONS = USER_ACTIVITIES.sessions;

    return (
        <div className="activity-chart">
            <div className='title-legend'>
                <h2>Activité quotidienne</h2>
                <div className='activity-legends'>
                    <p className='kg-legend'><span></span> Poids (kg)</p>
                    <p className='kcal-legend'><span></span> Calories brûlées (kCal)</p>
                </div>
            </div>

            <ResponsiveContainer className="responsive-container" height={230}>
                <BarChart data={USER_ACTIVITIES_SESSIONS} barGap={8} barCategoryGap="10%" className='barchart'>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="day"
                        dy={10}
                        tickLine={false}
                        tickFormatter={formatXAxis}
                        tick={{ fontSize: '1.17rem' }}
                    />
                    <YAxis
                        dataKey="calories"
                        dx={20}
                        domain={["dataMin - 160", "dataMax + 10"]}
                        allowDecimals={false}
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: '1.17rem' }}
                        className="yaxis"
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} />
                    <Bar name='Poids (kg)' dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
                    <Bar name='Calories brûlées (kCal)' dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

ActivityChart.propTypes = {
    userActivities: PropTypes.object
}

function formatXAxis(tickItem) {
    const DATE = new Date(tickItem);
    let options = { day: 'numeric', month: 'numeric' };
    return new Intl.DateTimeFormat('fr-FR', options).format(DATE);
}

export default ActivityChart;