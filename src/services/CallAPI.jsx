import axios from "axios";
import { useEffect, useState } from "react";

// const BASE_URL = "localhost:3001";
const BASE_URL = "192.168.1.14:3001";

export function getUserInfo(urlId) {
    const [userInfo, setUserInfo] = useState(null);
    const [isLoadingInfo, setIsLoadingInfo] = useState(true);
    const [errorInfo, setErrorInfo] = useState(null);

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const response = await fetch(`http://${BASE_URL}/user/${urlId}`);
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualUserInfo = await response.json();
                setUserInfo(actualUserInfo);
                setErrorInfo(null);
            } catch (err) {
                setErrorInfo(err.message);
                setUserInfo(null);
            } finally {
                setIsLoadingInfo(false);
            }
        }
        getUserInfo()
    }, [])

    return { userInfo, isLoadingInfo, errorInfo }
}

export function getUserActivity(urlId) {
    const [userActivity, setUserActivity] = useState(null);
    const [isLoadingActivity, setIsLoadingActivity] = useState(true);
    const [errorActivity, setErrorActivity] = useState(null);

    useEffect(() => {
        const getUserActivity = async () => {
            try {
                const response = await fetch(`http://${BASE_URL}/user/${urlId}/activity`);
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualUserActivity = await response.json();
                setUserActivity(actualUserActivity);
                setErrorActivity(null);
            } catch (err) {
                setErrorActivity(err.message);
                setUserActivity(null);
            } finally {
                setIsLoadingActivity(false);
            }
        }
        getUserActivity()
    }, [])

    return { userActivity, isLoadingActivity, errorActivity }
}

export function getUserAverage(urlId) {
    const [userAverage, setUserAverage] = useState(null);
    const [isLoadingAverage, setIsLoadingAverage] = useState(true);
    const [errorAverage, setErrorAverage] = useState(null);

    useEffect(() => {
        const getUserAverage = async () => {
            try {
                const response = await fetch(`http://${BASE_URL}/user/${urlId}/average-sessions`);
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualUserAverage = await response.json();
                setUserAverage(actualUserAverage);
                setErrorAverage(null);
            } catch (err) {
                setErrorAverage(err.message);
                setUserAverage(null);
            } finally {
                setIsLoadingAverage(false);
            }
        }
        getUserAverage()
    }, [])

    return { userAverage, isLoadingAverage, errorAverage }
}

export function getUserPerformance(urlId) {
    const [userPerformance, setUserPerformance] = useState(null);
    const [isLoadingPerformance, setIsLoadingPerformance] = useState(true);
    const [errorPerformance, setErrorPerformance] = useState(null);

    useEffect(() => {
        const getUserPerformance = async () => {
            try {
                const response = await fetch(`http://${BASE_URL}/user/${urlId}/performance`);
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualUserPerformance = await response.json();
                setUserPerformance(actualUserPerformance);
                setErrorPerformance(null);
            } catch (err) {
                setErrorPerformance(err.message);
                setUserPerformance(null);
            } finally {
                setIsLoadingPerformance(false);
            }
        }
        getUserPerformance()
    }, [])

    return (console.log(userPerformance),
        { userPerformance, isLoadingPerformance, errorPerformance })
}
