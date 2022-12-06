import ActivityChart from '../components/ActivityChart';
import AverageChart from '../components/AverageChart';
import Count from '../components/Count';
import PerformanceChart from '../components/PerformanceChart';
import ScoreChart from '../components/ScoreChart';
import Error from '../pages/Error';
import '../utils/style/Dashboard.css';
import { USER_MAIN_DATA } from '../services/MockedData';
import { getUserData } from '../services/CallAPI';
import { getDataByCategory } from '../services/APIService';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import iconCalorie from '../assets/icon-calories.svg';
import iconProtein from '../assets/icon-proteines.svg';
import iconCarbonhydrate from '../assets/icon-glucides.svg';
import iconLipid from '../assets/icon-lipides.svg';

function Dashboard() {
  // const [userData, setUserData] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverage, setUserAverage] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [errorData, setErrorData] = useState(null);
  let titleDoc;
  const URL_ID = useParams().userId;

  useEffect(() => {
    const getData = async () => {
      try {
        // getDataByCategory("info", URL_ID);
        // if (!response.ok) {
        //   throw new Error(
        //     `This is an HTTP error: The status is ${response.status}`
        //   );
        // }
        // console.log(response, response.json());
        // let actualUserData = await response.json();
        // let actualUserData = await getDataByCategory("info", URL_ID);
        let actualUserInfo = await getDataByCategory("info", URL_ID);
        let actualUserActivity = await getDataByCategory("activity", URL_ID);
        let actualUserAverage = await getDataByCategory("average", URL_ID);
        let actualUserPerformance = await getDataByCategory("performance", URL_ID);
        setUserInfo(actualUserInfo);
        setUserActivity(actualUserActivity);
        setUserAverage(actualUserAverage);
        setUserPerformance(actualUserPerformance);
        setErrorData(null);
      } catch (err) {
        setErrorData(err.message);
        setUserInfo(null);
      } finally {
        setIsLoadingData(false);
      }
    }
    getData()
  }, []);

  // const { userData, isLoadingData, errorData } = getUserData(URL_ID, "info");

  let userMainInfo;
  let firstName;

  let score;
  let counts;

  if (userInfo) {
    userMainInfo = userInfo.data;
    firstName = userInfo.data.userInfos.firstName;
    score = userInfo.data.score;
    counts = userInfo.data.keyData;
  }
  /** Call mocked data */
  // else {
  //   USER_MAIN_DATA.forEach(user => {
  //     if (user.id === parseInt(URL_ID)) {
  //       userMainDatas = user;
  //       firstName = user.userInfos.firstName;
  //       score = user.score;
  //       counts = user.keyData;
  //     }
  //   });
  // }

  let calorieCountObject;
  let proteinCountObject;
  let carbonhydrateCountObject;
  let lipidCountObject;
  if (counts) {
    calorieCountObject = {
      text: "Calories",
      value: counts.calorieCount,
      unity: "kCal",
      icon: iconCalorie
    }
    proteinCountObject = {
      text: "Protéines",
      value: counts.proteinCount,
      unity: "g",
      icon: iconProtein
    }
    carbonhydrateCountObject = {
      text: "Glucides",
      value: counts.carbohydrateCount,
      unity: "g",
      icon: iconCarbonhydrate
    }
    lipidCountObject = {
      text: "Lipides",
      value: counts.lipidCount,
      unity: "g",
      icon: iconLipid
    }
  };

  useEffect(() => { document.title = titleDoc })
  if (userMainInfo) {
    titleDoc = "SportSee"
    return (
      <section className="dashboard">
        <h1>Bonjour <span className='firstname'>{firstName}</span></h1>

        <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>

        <div className='charts-counts'>
          <div className='charts'>
            <ActivityChart userId={URL_ID} userData={userActivity} />
            {/* <ActivityChart userId={URL_ID} /> */}
            <div className='under-charts'>
              <AverageChart userId={URL_ID} userData={userAverage} />
              <PerformanceChart userId={URL_ID} userData={userPerformance} />
              <ScoreChart score={score} />
              {/* <AverageChart userId={URL_ID} />
              <PerformanceChart userId={URL_ID} /> */}
            </div>
          </div>

          <div className='counts'>
            <Count className='count calorie' countData={calorieCountObject} />
            <Count className='count protein' countData={proteinCountObject} />
            <Count className='count carbonhydrate' countData={carbonhydrateCountObject} />
            <Count className='count lipid' countData={lipidCountObject} />
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
