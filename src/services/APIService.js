/**
 * It takes a category and a urlId, and returns the data from the API based on the category
 * @param category - The category of data to fetch.
 * @param urlId - The id of the user you want to get data for.
 * @returns A function that takes in a category and urlId and returns a fetchAPI call with the
 * appropriate url.
 */
export function getDataByCategory(category, urlId) {
    switch (category) {
        case "info":
            return fetchAPI(`user/${urlId}`);

        case "activity":
            return fetchAPI(`user/${urlId}/activity`);

        case "average":
            return fetchAPI(`user/${urlId}/average-sessions`);

        case "performance":
            return fetchAPI(`user/${urlId}/performance`);

        default:
            return null;
    }
}

/**
 * It takes a url as an argument, fetches the data from the url, and returns the data as a JSON object
 * @param url - The url of the API endpoint you want to fetch.
 * @returns The actualUserData is being returned.
 */
async function fetchAPI(url) {
    // let result = await fetch(`http://localhost:3000/${url}`);
    let result = await fetch(`http://192.168.1.12:3000/${url}`);
    let actualUserData = await result.json();

    return actualUserData;
}