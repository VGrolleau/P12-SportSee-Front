export const USER_MAIN_DATA = [
    {
        id: 12,
        userInfos: {
            firstName: 'UserOneFirstName',
            lastName: 'UserOneLastName',
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
            firstName: 'UseTwoFirsName',
            lastName: 'UserTwoLastName',
            age: 34,
        },
        score: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120
        }
    }
]

export const USER_ACTIVITY = [
    {
        userId: 12,
        sessions: [
            {
                day: '2020-07-11',
                kilogram: 90,
                calories: 340
            },
            {
                day: '2020-07-12',
                kilogram: 90,
                calories: 320
            },
            {
                day: '2020-07-13',
                kilogram: 91,
                calories: 380
            },
            {
                day: '2020-07-14',
                kilogram: 91,
                calories: 390
            },
            {
                day: '2020-07-15',
                kilogram: 90,
                calories: 260
            },
            {
                day: '2020-07-16',
                kilogram: 88,
                calories: 262
            },
            {
                day: '2020-07-17',
                kilogram: 86,
                calories: 490
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 70,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 69,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 70,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 70,
                calories: 500
            },
            {
                day: '2020-07-05',
                kilogram: 69,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 69,
                calories: 162
            },
            {
                day: '2020-07-07',
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
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 40
            },
            {
                day: 3,
                sessionLength: 50
            },
            {
                day: 4,
                sessionLength: 30
            },
            {
                day: 5,
                sessionLength: 30
            },
            {
                day: 6,
                sessionLength: 50
            },
            {
                day: 7,
                sessionLength: 50
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
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 80,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
    }
]
