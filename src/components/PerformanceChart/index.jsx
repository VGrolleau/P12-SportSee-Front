import { PropTypes } from 'prop-types';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import '../../utils/style/PerformanceChart.css';
import { USER_PERFORMANCE } from '../../services/MockedData';
import { getUserData } from '../../services/CallAPI';

function PerformanceChart(props) {
    const URL_ID = props.userId;

    const { userData, isLoadingData, errorData } = getUserData(URL_ID, "performance");

    let userPerformances;
    if (userData) {
        if (userData.data.userId === parseInt(URL_ID)) {
            userPerformances = userData.data;
        }
    } else {
        USER_PERFORMANCE.forEach(userPerformance => {
            if (userPerformance.userId === parseInt(URL_ID)) {
                userPerformances = userPerformance;
            }
        });
    }

    // const USER_PERFORMANCES = props.userPerformances;
    // const USER_PERFORMANCES_DATAS = USER_PERFORMANCES.data;
    const USER_PERFORMANCES_DATAS = userPerformances.data;

    /* Get performance's datas with french kinds instead of number kinds */
    const FRENCH_KINDS = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité"
    };
    const ORDERED_PERFORMANCES = [];
    for (const kind in FRENCH_KINDS) {
        for (let data of USER_PERFORMANCES_DATAS) {
            if (data.kind === parseInt(kind)) {
                ORDERED_PERFORMANCES.push({
                    value: data.value,
                    kind: FRENCH_KINDS[kind]
                });
            }
        }
    };

    /* Ordering performance's datas in the right order. */
    ORDERED_PERFORMANCES.reverse();

    return (
        <div className="performance-chart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} width={730} height={250} data={ORDERED_PERFORMANCES}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="kind"
                        stroke="white"
                        dy={4}
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fontWeight: 500,
                        }} />
                    <Radar dataKey="value" stroke="transparent" fill="#ff0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

PerformanceChart.propTypes = {
    // userPerformances: PropTypes.object
    userId: PropTypes.string
}

export default PerformanceChart;