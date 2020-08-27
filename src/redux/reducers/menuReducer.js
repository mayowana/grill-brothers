const INITIAL_STATE = {
    "meals": {
        'protein': [{
            "_id": "001",
            "name": "Chicken",
            "group": "Protein",
            "description": "2 pcs",
            "price": 1000,
            "image": "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meeeal-1.png?alt=media&token=5f5736eb-d1a7-4c77-9516-fa2b6d0da254"
        },
        
        {
            "_id": "002",
            "name": "Turkey",
            "group": "Protein",
            "description": "2 pcs",
            "price": 1000,
            "image": "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-2.png?alt=media&token=bda5bb95-75a8-4775-a32d-64d21da4da69"
        },
        
        {
            "_id": "003",
            "name": "Wings",
            "group": "Protein",
            "description": "5 pcs",
            "price": 1200,
            "image": "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-3.png?alt=media&token=c0c0c464-cf1f-444a-9d44-da886af0056e"
        },

        {
            "_id": "010",
            "name": "Pork Ribs",
            "group": "Protein",
            "description": "5 pcs",
            "price": 2000,
            "image": "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-10.jpg?alt=media&token=ac962683-7f57-447e-9bcc-22c58f73659b"
        }
    
    
    
    ], 'sides': [], 'burgers': [], 'trays': []
    }
}

const menuReducer = (state = INITIAL_STATE, action) => {
    return state
}

export default menuReducer;

/* {
    "_id": "001",
    "name": "Chicken",
    "group": "Protein",
    "description": "2 pcs",
    "price": 1000,
    "image": "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meeeal-1.png?alt=media&token=5f5736eb-d1a7-4c77-9516-fa2b6d0da254"
},

{
    "_id": "002",
    "name": "Turkey",
    "group": "Protein",
    "description": "2 pcs",
    "price": 1000,
    "image": "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-2.png?alt=media&token=bda5bb95-75a8-4775-a32d-64d21da4da69"
},

{
    "_id": "003",
    "name": "Wings",
    "group": "Protein",
    "description": "5 pcs",
    "price": 1200,
    "image": "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-3.png?alt=media&token=c0c0c464-cf1f-444a-9d44-da886af0056e"
},

{
    "_id": "004",
    "name": "Potato",
    "group": "Sides",
    "description": "",
    "price": 500,
    "image": "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-4.png?alt=media&token=1dbe2418-e7a8-47eb-a3de-fcdaf8c68186"
},

{
    "_id": "005",
    "name": "Yam",
    "group": "Sides",
    "description": "",
    "price": 500,
    "image": "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-5.png?alt=media&token=9ce58d67-6ec1-4257-ae5d-614ae1c26f6c"
},

{
    "_id": "006",
    "name": "Plantain",
    "group": "Sides",
    "description": "",
    "price": 500,
    "image": "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-6.png?alt=media&token=d25004e6-deb2-4654-a058-6b99d7c86758"
},

{
    "_id": "007",
    "name": "Relish Cheese Burger",
    "group": "Burgers",
    "description": "Contains patty, onions, cheese, bacon, lettuce & sauce",
    "price": 1300,
    "image": "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-7.png?alt=media&token=38d9d363-184d-4359-b09a-4e53e8b8c338"
},

{
    "_id": "008",
    "name": "Relish Burger Meal",
    "group": "Burgers",
    "description": "Contains burger, one side, 5x wings, corn and sauce",
    "price": 3500,
    "image": "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-8.png?alt=media&token=e7e32611-53e7-4e1c-8fa4-8a27b020f753"
},

{
    "_id": "009",
    "name": "Relish Burger Tray",
    "group": "Burgers",
    "description": "Contains 2 burgers, one side, 10x wings, corn and sauce",
    "price": 6000,
    "image": "https://firebasestorage.googleapis.com/v0/b/grill-brothers.appspot.com/o/meal-9.png?alt=media&token=aaad5263-ae59-468b-a67b-e74a8e4523b1"
}
*/