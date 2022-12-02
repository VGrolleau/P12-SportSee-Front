import ActivityChart from '../components/ActivityChart';
import AverageChart from '../components/AverageChart';
import Count from '../components/Count';
import PerformanceChart from '../components/PerformanceChart';
import ScoreChart from '../components/ScoreChart';
import Error from '../pages/Error';
import '../utils/style/Dashboard.css';
import { USER_MAIN_DATA } from '../services/MockedData';
import { getUserData } from '../services/CallAPI';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import iconCalorie from '../assets/icon-calories.svg';
import iconProtein from '../assets/icon-proteines.svg';
import iconCarbonhydrate from '../assets/icon-glucides.svg';
import iconLipid from '../assets/icon-lipides.svg';

function Dashboard() {
  let titleDoc;
  const URL_ID = useParams().userId;

  const { userData, isLoadingData, errorData } = getUserData(URL_ID, "info");

  let userMainDatas;
  let firstName;

  let score;
  let counts;

  if (userData) {
    if (userData.data.id === parseInt(URL_ID)) {
      userMainDatas = userData.data;
      firstName = userData.data.userInfos.firstName;
      score = userData.data.score;
      counts = userData.data.keyData;
    }
  } else {
    USER_MAIN_DATA.forEach(user => {
      if (user.id === parseInt(URL_ID)) {
        userMainDatas = user;
        firstName = user.userInfos.firstName;
        score = user.score;
        counts = user.keyData;
      }
    });
  }

  const CALORIE_COUNT_OBJECT = {
    text: "Calories",
    value: counts.calorieCount,
    unity: "kCal",
    icon: iconCalorie
  }
  const PROTEIN_COUNT_OBJECT = {
    text: "Protéines",
    value: counts.proteinCount,
    unity: "g",
    icon: iconProtein
  }
  const CARBONHYDRATE_COUNT_OBJECT = {
    text: "Glucides",
    value: counts.carbohydrateCount,
    unity: "g",
    icon: iconCarbonhydrate
  }
  const LIPID_COUNT_OBJECT = {
    text: "Lipides",
    value: counts.lipidCount,
    unity: "g",
    icon: iconLipid
  }

  useEffect(() => { document.title = titleDoc })
  if (userMainDatas) {
    titleDoc = "SportSee"
    return (
      <section className="dashboard">
        <h1>Bonjour <span className='firstname'>{firstName}</span></h1>

        <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>

        <div className='charts-counts'>
          <div className='charts'>
            <ActivityChart userId={URL_ID} />
            <div className='under-charts'>
              <AverageChart userId={URL_ID} />
              <PerformanceChart userId={URL_ID} />
              <ScoreChart score={score} />
            </div>
          </div>

          <div className='counts'>
            <Count className='count calorie' countData={CALORIE_COUNT_OBJECT} />
            <Count className='count protein' countData={PROTEIN_COUNT_OBJECT} />
            <Count className='count carbonhydrate' countData={CARBONHYDRATE_COUNT_OBJECT} />
            <Count className='count lipid' countData={LIPID_COUNT_OBJECT} />
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
