const INITIAL_STATE = {
    meals: {
        protein: [{
            id: 1,
            name: "Chicken",
            group: "Protein",
            description: "2 pcs",
            price: 1000,
            image: "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meeeal-1.png?alt=media&token=5f5736eb-d1a7-4c77-9516-fa2b6d0da254"
        },
        
        {
            id: 2,
            name: "Turkey",
            group: "Protein",
            description: "2 pcs",
            price: 1000,
            image: "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-2.png?alt=media&token=bda5bb95-75a8-4775-a32d-64d21da4da69"
        },
        
        {
            id: 3,
            name: "Wings",
            group: "Protein",
            description: "5 pcs",
            price: 1200,
            image: "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-3.png?alt=media&token=c0c0c464-cf1f-444a-9d44-da886af0056e"
        },

        {
            id: 10,
            name: "Pork Ribs",
            group: "Protein",
            description: "5 pcs",
            price: 2000,
            image: "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-10.jpg?alt=media&token=ac962683-7f57-447e-9bcc-22c58f73659b"
        }
    
    
    
    ],
    
    sides: [{
        id: 4,
        name: "Potato",
        group: "Sides",
        description: "",
        price: 500,
        image: "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-4.png?alt=media&token=1dbe2418-e7a8-47eb-a3de-fcdaf8c68186"
    },
    
    {
        id: 5,
        name: "Yam",
        group: "Sides",
        description: "",
        price: 500,
        image: "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-5.png?alt=media&token=9ce58d67-6ec1-4257-ae5d-614ae1c26f6c"
    },
    
    {
        id: 6,
        name: "Plantain",
        group: "Sides",
        description: "",
        price: 500,
        image: "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-6.png?alt=media&token=d25004e6-deb2-4654-a058-6b99d7c86758"
    }], 
    
    burgers: [{
        id: 7,
        name: "Relish Cheese Burger",
        group: "Burgers",
        description: "Contains patty, onions, cheese, bacon, lettuce & sauce",
        price: 1500,
        image: "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-7.png?alt=media&token=38d9d363-184d-4359-b09a-4e53e8b8c338"
    },
    
    {
        id: 8,
        name: "Relish Burger Meal",
        group: "Burgers",
        description: "Contains burger, one side, 5x wings, corn and sauce",
        price: 3500,
        image: "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-8.png?alt=media&token=e7e32611-53e7-4e1c-8fa4-8a27b020f753"
    },
    
    {
        id: 9,
        name: "Relish Burger Tray",
        group: "Burgers",
        description: "Contains 2 burgers, one side, 10x wings, corn and sauce",
        price: 6000,
        image: "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-9.png?alt=media&token=aaad5263-ae59-468b-a67b-e74a8e4523b1"
    }], 
    
    trays: [{
        id: 12,
        name: "Asun Tray",
        group: "Trays",
        description: "A full tray of fresh goat meat",
        price: 25000,
        image: "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/asun.jpg?alt=media&token=28c3dde5-e255-4808-a4ec-49855d694fc7"
    },
    
    {
        id: 13,
        name: "Half Turkey Tray",
        group: "Trays",
        description: "A half tray of Turkey",
        price: 14000,
        image: "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/half%20turkey.jpg?alt=media&token=bc848c6a-f245-42a2-b275-d1c13884aecd"
    },
    
    {
        id: 14,
        name: "Full Turkey Tray",
        group: "Trays",
        description: "A full tray of Turkey",
        price: 28000,
        image: "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/turkey.jpg?alt=media&token=0f7997bb-aa36-45f1-ba31-33e1035d3626"
    },
    
    {
        id: 15,
        name: "Half Chicken Tray",
        group: "Trays",
        description: "A half tray of Chicken",
        price: 13000,
        image: "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/half%20chicken.jpg?alt=media&token=e681864f-2dff-4684-8e36-da90526ce861"
    },
    
    {
        id: 16,
        name: "Full Chicken Tray",
        group: "Trays",
        description: "A full tray of Chicken",
        price: 26000,
        image: "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/chicken.jpg?alt=media&token=7baa967d-baf6-4ef4-9a1f-ddf105ca034f"
    }]
    }
}

const menuReducer = (state = INITIAL_STATE, action) => {
    return state
}

export default menuReducer;