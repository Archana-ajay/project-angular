export interface CartDataRes {
    id: string,
    restaurantId: string,
    quantity: number,
    userId: string,
    createdAt: string,
    updatedAt: string,
    Restaurant: RestaurantData
}

export interface RestaurantData {
    id: string,
    restaurantId: number,
    categoryName: string,
    description: string,
    restaurantName: string,
    price: string,
    availability: boolean,
    photoUrl: string,
    openingHours: string,
    categoryId: number,
    createdAt: string,
    updatedAt: string
}



