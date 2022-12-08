export default class ModelClass {
    // Prepare data
    static prepareData(raw) {
        return raw.data;
    }
    static prepareSessions(raw) {
        return raw.data.sessions;
    }

    // Prepare counts
    static prepareCountCalorie(count, icon) {
        return {
            text: "Calories",
            value: count.calorieCount,
            unity: "kCal",
            icon: icon
        }
    }
    static prepareCountProtein(count, icon) {
        return {
            text: "Protéines",
            value: count.proteinCount,
            unity: "g",
            icon: icon
        }
    }
    static prepareCountCarbohydrate(count, icon) {
        return {
            text: "Glucides",
            value: count.carbohydrateCount,
            unity: "g",
            icon: icon
        }
    }
    static prepareCountLipid(count, icon) {
        return {
            text: "Lipides",
            value: count.lipidCount,
            unity: "g",
            icon: icon
        }
    }
}