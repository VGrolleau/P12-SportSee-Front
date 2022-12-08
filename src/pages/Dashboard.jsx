import ActivityChart from '../components/ActivityChart';
import AverageChart from '../components/AverageChart';
import Count from '../components/Count';
import PerformanceChart from '../components/PerformanceChart';
import ScoreChart from '../components/ScoreChart';
import Error from '../pages/Error';
import '../utils/style/Dashboard.css';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../services/MockedData';
// import { getUserData } from '../services/CallAPI';
import { getDataByCategory } from '../services/APIService';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import iconCalorie from '../assets/icon-calories.svg';
import iconProtein from '../assets/icon-proteines.svg';
import iconCarbohydrate from '../assets/icon-glucides.svg';
import iconLipid from '../assets/icon-lipides.svg';
import ModelClass from '../utils/ModelClass.js';
const MODE = "prod";
// const MODE = "dev";

function Dashboard() {
  const [userInfo, setUserInfo] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverage, setUserAverage] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [errorData, setErrorData] = useState(null);
  // const [responseOk, setResponseOk] = useState(false);
  const URL_ID = useParams().userId;
  let titleDoc;
  let userMainInfo;
  let userMainData = {};
  let firstName;
  let score;
  let counts;
  let actualUserActivity;
  let userMockActivities;
  let actualUserAverage;
  let userMockAverageSessions;
  let userMockPerformances;

  USER_MAIN_DATA.forEach(user => {
    if (user.id === parseInt(URL_ID)) {
      userMainData = { data: user };
    }
  });
  USER_ACTIVITY.forEach(userActivity => {
    if (userActivity.userId === parseInt(URL_ID)) {
      userMockActivities = { data: userActivity };
    }
  });
  USER_AVERAGE_SESSIONS.forEach(userAverage => {
    if (userAverage.userId === parseInt(URL_ID)) {
      userMockAverageSessions = { data: userAverage };
    }
  });
  USER_PERFORMANCE.forEach(userPerformance => {
    if (userPerformance.userId === parseInt(URL_ID)) {
      userMockPerformances = userPerformance;
    }
  });

  console.log(userMainData);

  if (MODE === "prod") {
    /** Use call API */
    useEffect(() => {
      const getData = async () => {
        try {
          // console.log(response);
          // let getActualUserInfo = await getDataByCategory("info", URL_ID);
          // let actualUserInfo = getActualUserInfo.actualUserData;
          let actualUserInfo = await getDataByCategory("info", URL_ID);
          setUserInfo(actualUserInfo);
          // let actualUserInfoResponse = getActualUserInfo.result;
          // console.log(response);

          let getActualUserActivity = await getDataByCategory("activity", URL_ID);
          actualUserActivity = ModelClass.prepareSessions(getActualUserActivity);
          setUserActivity(actualUserActivity);

          let getActualUserAverage = await getDataByCategory("average", URL_ID);
          actualUserAverage = ModelClass.prepareSessions(getActualUserAverage);
          setUserAverage(actualUserAverage);

          let actualUserPerformance = await getDataByCategory("performance", URL_ID);
          setUserPerformance(actualUserPerformance);

          // if (!actualUserInfoResponse.ok) {
          //   throw new Error(
          //     `This is an HTTP error: The status is ${actualUserInfoResponse.status}`
          //   );
          // }

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

    if (userInfo) {
      userMainInfo = ModelClass.prepareData(userInfo);
      firstName = userMainInfo.userInfos.firstName;
      score = userMainInfo.score;
      counts = userMainInfo.keyData;
    };

  } else {
    /** Call mocked data */
    userMainInfo = ModelClass.prepareData(userMainData);
    firstName = userMainInfo.userInfos.firstName;
    score = userMainInfo.score;
    counts = userMainInfo.keyData;

    useEffect(() => {
      const getData = () => {
        try {
          actualUserActivity = ModelClass.prepareSessions(userMockActivities);
          setUserActivity(actualUserActivity);

          actualUserAverage = ModelClass.prepareSessions(userMockAverageSessions);
          setUserAverage(actualUserAverage);

          // let actualUserPerformance = ModelClass.prepareData(userMockPerformances);
          // setUserPerformance(actualUserPerformance);

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
  };

  let calorieCountObject;
  let proteinCountObject;
  let carbohydrateCountObject;
  let lipidCountObject;
  if (counts) {
    calorieCountObject = ModelClass.prepareCountCalorie(counts, iconCalorie);
    proteinCountObject = ModelClass.prepareCountProtein(counts, iconProtein);
    carbohydrateCountObject = ModelClass.prepareCountCarbohydrate(counts, iconCarbohydrate);
    lipidCountObject = ModelClass.prepareCountLipid(counts, iconLipid);
  };

  useEffect(() => { document.title = titleDoc })
  if (userMainInfo && userActivity && userAverage && userPerformance) {
    titleDoc = "SportSee"
    return (
      <section className="dashboard">
        <h1>Bonjour <span className='firstname'>{firstName}</span></h1>

        <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>

        <div className='charts-counts'>
          <div className='charts'>
            <ActivityChart userId={URL_ID} userData={userActivity} />
            <div className='under-charts'>
              <AverageChart userId={URL_ID} userData={userAverage} />
              <PerformanceChart userId={URL_ID} userData={userPerformance} />
              <ScoreChart score={score} />
            </div>
          </div>

          <div className='counts'>
            <Count className='count calorie' countData={calorieCountObject} />
            <Count className='count protein' countData={proteinCountObject} />
            <Count className='count carbohydrate' countData={carbohydrateCountObject} />
            <Count className='count lipid' countData={lipidCountObject} />
          </div>
        </div>
      </section>
    );
  } else if (isLoadingData) {
    titleDoc = 'SportSee - Loading';
    return (
      <section className="dashboard">
        <h1>Chargement des données...</h1>
      </section>
    );
  } else if (errorData) {
    titleDoc = `SportSee - 404`;
    return (
      <section className="dashboard">
        <Error />
      </section>
    );
  }
}

export default Dashboard;
