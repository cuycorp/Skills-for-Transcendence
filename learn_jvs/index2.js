/**
 * 
 * example of promise, when waiting for an API request
 * a substitute is using async and await, but it has the same functionality
 */

const axios = require("axios");
const data = axios.get("https://dog.ceo/api/breeds/image/random](https://dog.ceo/api/breeds/image/random");

data
    .then((res) =>{
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    });