export const caloriesDetails = {
    protein: 4,
    carbohydrates: 4,
    fat: 4,
};

export interface FoodDetails {
    name: string,
    protein: number,
    carbohydrates: number,
    fat: number,
}

export const foodDetails: FoodDetails[] = [
    {
        name: 'Chappathi',
        protein: 10,
        carbohydrates: 20,
        fat: 5,
    },
    {
        name: 'Biriyani',
        protein: 50,
        carbohydrates: 30,
        fat: 6
    },
    {
        name: 'Egg',
        protein: 20,
        carbohydrates: 10,
        fat: 60
    },
    {
        name: 'Milk',
        protein: 80,
        carbohydrates: 30,
        fat: 60
    }
];
