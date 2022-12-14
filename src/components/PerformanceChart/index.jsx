import { PropTypes } from 'prop-types';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import '../../utils/style/PerformanceChart.css';

function PerformanceChart(props) {
    const USER_DATA = props.userData;
    const USER_PERFORMANCES_DATA = USER_DATA.data;

    /* Get performance's data with french kinds instead of number kinds */
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
        for (let data of USER_PERFORMANCES_DATA) {
            if (data.kind === parseInt(kind)) {
                ORDERED_PERFORMANCES.push({
                    value: data.value,
                    kind: FRENCH_KINDS[kind]
                });
            }
        }
    };

    /* Ordering performance's data in the right order. */
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
    userData: PropTypes.object
}

export default PerformanceChart;