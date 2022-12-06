import { PropTypes } from 'prop-types';
import { Cell, Pie, PieChart } from 'recharts';
import '../../utils/style/ScoreChart.css';

function ScoreChart(props) {
    const SCORE = props.score;
    const pieData = [
        { name: "completed", value: SCORE, fillColor: "#ff0101" },
        { name: "not-completed", value: 1 - SCORE, fillColor: "transparent" },
    ];

    return (
        <div className='score-chart'>
            <h2>Score</h2>

            <PieChart width={160} height={160}>
                <Pie
                    data={pieData}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={450}
                >
                    {pieData.map((entry, index) => {
                        return (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.fillColor}
                            />
                        )
                    })}
                </Pie>
            </PieChart>

            <p><span>{`${100 * SCORE}%`}</span><br />de votre<br />objectif</p>
        </div>
    );
}

ScoreChart.propTypes = {
    score: PropTypes.number
}

export default ScoreChart;