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

async function fetchAPI(url) {
    let result = await fetch(`http://localhost:3000/${url}`);
    let actualUserData = await result.json();

    return actualUserData;
}