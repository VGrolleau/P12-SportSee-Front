import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import '../../utils/style/ScoreChart.css';

function ScoreChart(props) {
    const SCORE = props.score;
    console.log(SCORE);
    const pieData = [
        { name: "completed", value: SCORE, fillColor: "#ff0101" },
        { name: "not-completed", value: 1 - SCORE, fillColor: "transparent" },
    ];

    return (
        <div className='score-chart'>
            <h2>Score</h2>

            <ResponsiveContainer width="100%" height="100%">
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
                            console.log(entry, index)
                            return (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.fillColor}
                                />
                            )
                        })}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            <p><span>{`${100 * SCORE}%`}</span> de votre objectif</p>
        </div>
    );
}

export default ScoreChart;