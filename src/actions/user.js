import { 
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type:SET_USER_PURCHASES,
        payload: [
            {
                _id:1,
                total: 10.72,
                orderNumber: 'A00483438343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user:{
                    name: 'jordan Hudgens',
                    shippingAddress:'1234 West State Street'
                }
            },
            {
                _id:2,
                total: 32.72,
                orderNumber: 'A0043453343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user:{
                    name: 'Kristal lee',
                    shippingAddress:'6454 West State Street'
                }
            },
            {
                _id:3,
                total: 45.45,
                orderNumber: 'A004826546343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user:{
                    name: 'Brittany lee',
                    shippingAddress:'5464 West State Street'
                }
            },
            {
                _id:4,
                total: 23.43,
                orderNumber: 'A00482456563',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user:{
                    name: 'Cassidy Bennett',
                    shippingAddress:'1235r34 South State Street'
                }
            },
            {
                _id:5,
                total: 433.54,
                orderNumber: 'A0048248565656',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user:{
                    name: 'Jeffry domer',
                    shippingAddress:'4563 east State Street'
                }
            },
            {
                _id:6,
                total: 144.32,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user:{
                    name: 'Carol Baskin',
                    shippingAddress:'1434 north State Street'
                }
            },
           
            
        ]
    })
}