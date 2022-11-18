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
  const urlId = useParams().userId;
  let firstName = "Jean";
  let userDatas;
  let titleDoc;
  USER_MAIN_DATA.forEach(user => {
    if (user.id === parseInt(urlId)) {
      userDatas = user;
      firstName = user.userInfos.firstName;
    }
  });

  useEffect(() => { document.title = titleDoc })
  if (userDatas) {
    titleDoc = `SportSee`
    return (
      <section className="dashboard">
        <h1>Bonjour <span className='firstname'>{firstName}</span></h1>

        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

        <div className='charts-counts'>
          <div className='charts'>
            <ActivityChart />
            <AverageChart />
            <PerformanceChart />
            <ScoreChart />
          </div>

          <div className='counts'>
            <Count />
          </div>
        </div>
      </section>
    );
  } else {
    titleDoc = `Kasa - 404`
    return (
      <section className="dashboard">
        <Error />
      </section>
    );
  }

}

export default Dashboard;
