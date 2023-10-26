// ////////async - frontend code///////
// const request = new XMLHttpRequest();
// request. addEventListener('readystatechange', () => {
// //console. log(request, request. readyState);
// if(request.readyState === 4 && request. status === 200){
// console.log(request, request.responseText);
// } else if (request.readyState === 4){
//     console.log("could not fetch the data")
// }
// });
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request. send();



// const axiosRequest = require('axios');
// const { response } = require('express');

// axiosRequest
    
//     .then(response =>{
        
//     })
//     .catch(error =>{
//         console.error(`ERROR! ${error}`)
//     })


// async function getActivity(){
//     try{
//         let response = await axiosRequest.get('https://www.boredapi.com/api/activity')
//         console.log(`You could ${response.data.activity}`)
//     }
//     catch (error){
//         console.error(`ERROR: ${error}`)
//     }
// }

// getActivity()