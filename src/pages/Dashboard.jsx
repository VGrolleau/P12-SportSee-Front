import ActivityChart from '../components/ActivityChart';
import AverageChart from '../components/AverageChart';
import Count from '../components/Count';
import PerformanceChart from '../components/PerformanceChart';
import ScoreChart from '../components/ScoreChart';
import Error from '../pages/Error';
import '../utils/style/Dashboard.css';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../services/MockedData';
import { useParams } from 'react-router';
import { useEffect } from 'react';

function Dashboard() {
  let titleDoc;
  const URL_ID = useParams().userId;

  let userMainDatas;
  let firstName = "Jean";
  let score;
  let counts;
  USER_MAIN_DATA.forEach(user => {
    if (user.id === parseInt(URL_ID)) {
      userMainDatas = user;
      firstName = user.userInfos.firstName;
      score = user.score;
      counts = user.keyData;
    }
  });

  let userActivities;
  USER_ACTIVITY.forEach(userActivity => {
    if (userActivity.userId === parseInt(URL_ID)) {
      userActivities = userActivity;
    }
  });

  let userAverageSessions;
  USER_AVERAGE_SESSIONS.forEach(userAverage => {
    if (userAverage.userId === parseInt(URL_ID)) {
      userAverageSessions = userAverage;
    }
  });

  let userPerformances;
  USER_PERFORMANCE.forEach(userPerformance => {
    if (userPerformance.userId === parseInt(URL_ID)) {
      userPerformances = userPerformance;
    }
  });

  useEffect(() => { document.title = titleDoc })
  if (userMainDatas) {
    titleDoc = "SportSee"
    return (
      <section className="dashboard">
        <h1>Bonjour <span className='firstname'>{firstName}</span></h1>

        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

        <div className='charts-counts'>
          <div className='charts'>
            <ActivityChart userActivities={userActivities} />
            <div className='under-charts'>
              <AverageChart userAverageSessions={userAverageSessions} />
              <PerformanceChart userPerformances={userPerformances} />
              <ScoreChart score={score} />
            </div>
          </div>

          <div className='counts'>
            <Count counts={counts} />
          </div>
        </div>
      </section>
    );
  } else {
    titleDoc = `SportSee - 404`
    return (
      <section className="dashboard">
        <Error />
      </section>
    );
  }
}

export default Dashboard;
