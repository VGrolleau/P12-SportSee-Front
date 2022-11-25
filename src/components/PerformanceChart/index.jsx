import { PropTypes } from 'prop-types';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import '../../utils/style/PerformanceChart.css';

function PerformanceChart(props) {
    const USER_PERFORMANCES = props.userPerformances;
    const USER_PERFORMANCES_DATAS = USER_PERFORMANCES.data;
    const FRENCH_KINDS = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité"
    }
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
    }

    return (
        <div className="performance-chart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} width={730} height={250} data={ORDERED_PERFORMANCES}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

PerformanceChart.propTypes = {
    userPerformances: PropTypes.object
}

export default PerformanceChart;