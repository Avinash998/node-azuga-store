let taxCategory = [{
    "itemCategory": "Medicine",
    "tax": 5
},
{
    "itemCategory": "Food",
    "tax": 5
},
{
    "itemCategory": "Imported",
    "tax": 18
},
{
    "itemCategory": "Book",
    "tax": 0
},
{
    "itemCategory": "Music",
    "tax": 3
},
{
    "itemCategory": "Clothes",
    "tax": 10
}];


// {
//     "Medicine":{
//         "tax": "5",
//         //other condition
//     },
//     "cloth":{
//         "discount":10,
//         "range": [
//             {  tax:5
//                 min: 0
//                 max: 999
//             },
//             {
//                 tax:10,
//                 min: 1000
//                 max: 9999}
//             ]
//         //other condition
//     },
// }

//needs to check for cloth
module.exports = {taxCategory}; 