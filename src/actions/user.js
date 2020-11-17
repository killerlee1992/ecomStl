import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type:SET_USER_PURCHASES,
        payload: [
            {
                _id:1,
                amount: 10.72,
                orderNumber: 'A00483438343',
                orderDate: new Date(),
                creditCard: '-0000',
                user:{
                    name: 'jordan Hudgens',
                    spippingAdress:'1234 West State Street'
                }
            },
            {
                _id:2,
                amount: 32.72,
                orderNumber: 'A0043453343',
                orderDate: new Date(),
                creditCard: '-0000',
                user:{
                    name: 'Kristal lee',
                    spippingAdress:'6454 West State Street'
                }
            },
            {
                _id:3,
                amount: 45.45,
                orderNumber: 'A004826546343',
                orderDate: new Date(),
                creditCard: '-0000',
                user:{
                    name: 'Brittany lee',
                    spippingAdress:'5464 West State Street'
                }
            },
            {
                _id:4,
                amount: 23.43,
                orderNumber: 'A00482456563',
                orderDate: new Date(),
                creditCard: '-0000',
                user:{
                    name: 'Cassidy Bennett',
                    spippingAdress:'1235r34 South State Street'
                }
            },
            {
                _id:5,
                amount: 433.54,
                orderNumber: 'A0048248565656',
                orderDate: new Date(),
                creditCard: '-0000',
                user:{
                    name: 'Jeffry domer',
                    spippingAdress:'4563 east State Street'
                }
            },
            {
                _id:6,
                amount: 144.32,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user:{
                    name: 'Carol Baskin',
                    spippingAdress:'1434 north State Street'
                }
            },
           
            
        ]
    })
}