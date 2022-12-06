import { useEffect, useState } from "react";

// const BASE_URL = "localhost:3000";
const BASE_URL = "192.168.1.14:3000";

/**
 * It fetches data from the API and returns an object with the data, a boolean for whether the
 * data is loading, and an error message if there is one
 * @param {string} urlId id in URL parameter
 * @param {string} category chart's category
 * @returns An object with three properties: userData, isLoadingData, and errorData.
 */
export function getUserData(urlId, category) {
    const [userData, setUserData] = useState(null);
    const [isLoadingData, setIsLoadingData] = useState(true);
    const [errorData, setErrorData] = useState(null);

    const ENDPOINT = getEndpointByCategory(category, urlId);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await fetch(`http://${BASE_URL}/${ENDPOINT}`);
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualUserData = await response.json();
                setUserData(actualUserData);
                setErrorData(null);
            } catch (err) {
                setErrorData(err.message);
                setUserData(null);
            } finally {
                setIsLoadingData(false);
            }
        }
        getUserData()
    }, [])

    return { userData, isLoadingData, errorData }
}

/**
 * It takes a category and a urlId and returns an endpoint
 * @param {*} category chart's category
 * @param {*} urlId id in URL parameter
 * @returns The endpoint for the category.
 */
function getEndpointByCategory(category, urlId) {
    switch (category) {
        case "info":
            return `user/${urlId}`;

        case "activity":
            return `user/${urlId}/activity`;

        case "average":
            return `user/${urlId}/average-sessions`;

        case "performance":
            return `user/${urlId}/performance`;

        default:
            return null;
    }
}