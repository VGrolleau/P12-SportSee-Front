export const USER_MAIN_DATA = [
    {
        id: 12,
        userInfos: {
            firstName: 'UserOneFirst',
            lastName: 'UserOneLast',
            age: 31,
        },
        score: 0.22,
        keyData: {
            calorieCount: 2930,
            proteinCount: 255,
            carbohydrateCount: 390,
            lipidCount: 60
        }
    },
    {
        id: 18,
        userInfos: {
            firstName: 'UserTwoFirst',
            lastName: 'UserTwoLast',
            age: 34,
        },
        score: 0.4,
        keyData: {
            calorieCount: 3500,
            proteinCount: 100,
            carbohydrateCount: 250,
            lipidCount: 220
        }
    }
]

export const USER_ACTIVITY = [
    {
        userId: 12,
        sessions: [
            {
                day: '2020-07-11',
                kilogram: 80,
                calories: 240
            },
            {
                day: '2020-07-12',
                kilogram: 80,
                calories: 220
            },
            {
                day: '2020-07-13',
                kilogram: 81,
                calories: 280
            },
            {
                day: '2020-07-14',
                kilogram: 81,
                calories: 290
            },
            {
                day: '2020-07-15',
                kilogram: 80,
                calories: 160
            },
            {
                day: '2020-07-16',
                kilogram: 78,
                calories: 162
            },
            {
                day: '2020-07-17',
                kilogram: 76,
                calories: 390
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: '2020-07-11',
                kilogram: 70,
                calories: 240
            },
            {
                day: '2020-07-12',
                kilogram: 69,
                calories: 220
            },
            {
                day: '2020-07-13',
                kilogram: 70,
                calories: 280
            },
            {
                day: '2020-07-14',
                kilogram: 70,
                calories: 500
            },
            {
                day: '2020-07-15',
                kilogram: 69,
                calories: 160
            },
            {
                day: '2020-07-16',
                kilogram: 69,
                calories: 162
            },
            {
                day: '2020-07-17',
                kilogram: 69,
                calories: 390
            }
        ]
    }
]


export const USER_AVERAGE_SESSIONS = [
    {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 40
            },
            {
                day: 2,
                sessionLength: 33
            },
            {
                day: 3,
                sessionLength: 55
            },
            {
                day: 4,
                sessionLength: 60
            },
            {
                day: 5,
                sessionLength: 10
            },
            {
                day: 6,
                sessionLength: 10
            },
            {
                day: 7,
                sessionLength: 70
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: 1,
                sessionLength: 40
            },
            {
                day: 2,
                sessionLength: 50
            },
            {
                day: 3,
                sessionLength: 60
            },
            {
                day: 4,
                sessionLength: 40
            },
            {
                day: 5,
                sessionLength: 40
            },
            {
                day: 6,
                sessionLength: 60
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
    }
]


export const USER_PERFORMANCE = [
    {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 90,
                kind: 1
            },
            {
                value: 220,
                kind: 2
            },
            {
                value: 240,
                kind: 3
            },
            {
                value: 60,
                kind: 4
            },
            {
                value: 300,
                kind: 5
            },
            {
                value: 100,
                kind: 6
            }
        ]
    },
    {
        userId: 18,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 300,
                kind: 1
            },
            {
                value: 340,
                kind: 2
            },
            {
                value: 90,
                kind: 3
            },
            {
                value: 90,
                kind: 4
            },
            {
                value: 320,
                kind: 5
            },
            {
                value: 210,
                kind: 6
            }
        ]
    }
]
