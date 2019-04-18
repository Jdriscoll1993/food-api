// // builds up the HTML for the dom
// foodFactory = (foodItem) => {
//     let HTMLel = "";
//     (foodItem.name)
//     HTMLel += `<h2>${foodItem.name}</h2>`

//     if (foodItem.category) {
//         HTMLel += `<p>${foodItem.category}</p>`
//     }
//     if (foodItem.ethnicity) {
//         HTMLel += `<p>${foodItem.ethnicity}</p>`
//     }
//     return HTMLel;

// }
// //take what you pass in and populate it on the DOM
// addFoodToDom = (foodAsHTML) => {
//     el.innerHTML += foodAsHTML;
// }
// function getFoodData(resource) {
//     el.innerHTML = "";
//     fetch(`http://localhost:8088/${resource}`) // makes a request to a specific domain(localhost), port address(8088), and resource on web(food). by default, fetch performs a GET operation.
//         .then(foodList => {
//             return foodList
//         })
//         .then(res => res.json()) // accepts the response from my request, parses the body of the response as JSON, and returns it to any subsequent " then() " method.
//         .then(parsedFoods => {  //This line of code accepts the parsed JSON as the argument to a function, and then uses " console.table() " to display the results.
//             parsedFoods.forEach(food => {

//                 const foodAsHTML = foodFactory(food)
//                 addFoodToDom(foodAsHTML);
//             });
//         });
// }

const el = document.querySelector(".foodList");
//make button work*--get a reference to the button
const getDataButton = document.getElementById("btn-getData");
// add the listener so when we click on it itll do something
getDataButton.addEventListener("click", () => getFoodData("drinks"));
//when it hears the click, itl call the function "getData"

const getDataButton2 = document.getElementById("btn-getData2");
// add the listener so when we click on it itll do something
getDataButton2.addEventListener("click", () => getFoodData("food"));






// console.log("foodapi ROCKS");


// foodFactory = (foodItem) => {
//     return `<h2>${foodItem.name}</h2>`
// }
// // ^ html component <h2>

// addFoodToDom = (foodAsHTML) => {
//     const el = document.querySelector("#container");
//     el.innerHTML += foodAsHTML;
// }

// // get data, return data, stick it on the dom. We dont want it to call right away, so we'll wrap fetch into a function:
// // 3 functions going on here: create html element, appends it to the dom, fetch function--gets data, pass it into other two functions to display properly.
// function getData(resource) {
//     el.innerHTML = "";
//     fetch(`http://localhost:8088/${resource}`)
//         .then(foodResult => {
//             console.log(foodResult)
//             return foodResult
//         })
//         .then(foods => foods.json())
//         .then(parsedFoods => {
//             parsedFoods.forEach(food => {
//                 const foodAsHTML = foodFactory(food);
//                 addFoodToDom(foodAsHTML);
//             })
//         })
// }
// const el = document.querySelector("#container");
// //make button work*--get a reference to the button
// const getDataButton = document.getElementById("btn-getData");
// // add the listener so when we click on it itll do something
// getDataButton.addEventListener("click", () => getData("drinks"));
// //when it hears the click, itl call the function "getData"

// const getDataButton2 = document.getElementById("btn-getData2");
// // add the listener so when we click on it itll do something
// getDataButton2.addEventListener("click", () => getData("food"));





















// (fetch)go do this call, THEN do this----THEN do this----
// parsedFoods is "jsonified" on the previous line.
// fetch is a method built into javascript--- give us some data then be able to parse it.




//add event listener with an id of getText--the event we want to listen to is a click then we want to run a function called getText

//call the fetch function taking in a parameter--a url or a file whatever you want to get 
// fetch a text file asynchronously --fetch returns a promise. its a placeholder for the response we'll get asynch. for promises we'll use .then

// function getText(){
//     fetch('sample.txt')
//     .then(function(res){
//         return (res.text());
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }

// //from first .then--> it takes in a function and passes res or response. return res..in this case we want hte text so we'll do res.text(). for json it would be res.json()
// // return the res.text() then add another .then and put a function in it that passes data..then we can console.log(data) and we'll getting the actual text thats in the file.

// //arrow function instead of above
// document.getElementById('getText').addEventListener
//     ('click', getText);

// document.getElementById('getUsers').addEventListener
//     ('click', getUsers);

// function getText() {
//     fetch('sample.txt')
//         .then((res) => res.text())
//         .then((data) => {
//             document.getElementById('output').innerHTML = data;
//         })
//         .catch((err) => console.log(err))
// }

// function getUsers() {

//     fetch('http://localhost:8088/South_Park_Dudes')
//         .then((res) => res.json())
//         .then((data) => {
//             let output = '<h2>Users</h2>';
//             data.forEach(function (user) {
//                 output +=
//                     `<ul>
//                     <li>ID: ${user.id}</li>
//                     <li>ID: ${user.name}</li>
//                     <li>ID: ${user.character}</li>
//                 </ul>`;
//             });
//             document.getElementById('output').innerHTML = output;
//         })
// }


function getFoodData(resource) {
    let foodList = document.querySelector(".foodList");
    foodList.innerHTML + "";
    fetch(`http://localhost:8088/${resource}`)
        .then((res) => {
            let jsonResult = res.json();
            console.log(jsonResult);
        })
        .then(parsedFoods => {
            console.table(parsedFoods);
            parsedFoods.forEach(food => {
                fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                    .then(res => res.json())
                    .then(parsedAPIfoods => {
                        foodList.innerHTML += foodFactory(food, parsedAPIfoods);
                    });
            });
        });
}
// input local + API food data to create DOM elements
function foodFactory(localFood, apiFood) {
    return `
    <div class="food_list">
        <h2>${localFood.name}</h2>
        <h3>${localFood.ethnicity}</h3>
        <img src="${apiFood.product.image_url}">
        <p>${localFood.type}</p>
        <p>country${apiFood.product.countries}</p>
    </div>`
}































































