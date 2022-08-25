"use strict"

//запрос через xhr (get,colback)
// const requestURL = 'https://jsonplaceholder.typicode.com/users'

// const xhr = new XMLHttpRequest()

// xhr.open(method: 'GET', requestURL)

// xhr.responseType = 'json'

// xhr.onload = () => {
//     if (xhr.status >= 400) {
//         console.error(xhr.response)
//     } else {
//         console.log(xhr.response)
//     }
// }

// xhr.onerror = () => {
//     console.log(xhr.response)
// }
// xhr.send()

//promise,post
// const requestURL = 'https://jsonplaceholder.typicode.com/users'

// function sendRequest(method, url) {
// return new Promise( executor, (resolve, reject) => {
    
// })
// }

// const xhr = new XMLHttpRequest()

// xhr.open(method, requestURL)

// xhr.responseType = 'json'

// xhr.onload = () => {
//     if (xhr.status >= 400) {
//         reject(xhr.response)
//     } else {
//         resolve(xhr.response)
//     }
// }

// xhr.onerror = () => {
//     reject(xhr.response)
// }
// xhr.send()

// sendRequest(method, 'GET', requestURL)


//теория из урока вик 20
// let user = {
//     name: "Алиса",
//     married: false,
//     age: 34
// }
// console.log(user);

// let userJson = JSON.stringify(user);
// console.log(userJson);

// user = JSON.parse(userJson);
// console.log(user);

// let userComplex = {
//     name: "Алиса", 
//     married: false,
//     age: 34,
//     company: {
//         name: "Opera",
//         country: "Sweeden"
//     },
//     favColor: ['blue', 'pink', 'white']
// }
// console.log(userComplex);

// let userComplexJson = JSON.stringify(userComplex);
// console.log(userComplexJson);

// let jsonBook = `[{
//     "title": "Властелин колец",
//     "autor": "Дж. Р. Р. Толкин",
//     "year": "1954"
// },{   
//     "title": "Совершенный код",
//     "autor": "Стив Макконелл",
//     "year": "1993"
// },{
//     "title": "Алиса в зазеркалье",
//     "autor": "ЛЬюис Кэрол",
//     "year": "1993"
// }]`;
// document.addEventListener("DOMContentLoaded", function (event) {
//     let books = JSON.parse(jsonBook);

//     let booksContent = ""; // создаем пустую строку 
//     for (let book of books) { // в цикле генерим 
//         booksContent += `<div class='book'> 
//         <h2>${book.title}</h2>
//         <div>Автор: ${book.author}</div>
//         <div>Год выпуска: ${book.year}</div>
//         </div>`;
//     }
//     document.getElementById("booksContainer").innerHTML = booksContent;
// });

//получение JSON-объекта с последними коммитами из репозитория на GitHub
// fetch('https://api.github.com/repos/itgirlschool/frontend/commits')
//     .then(response => response.json())
//     .then(commits => alert(commits[0].author.login));
    
// fetch("https://api.github.com/dacha94")
//     .then(response => console.log(response.json()))
//     .then(user => 
//         {
//             document.getElementById("avatar").src = user.avatar_url;
//             document.getElementById("userName")
//             .innerText = user.name;
//         })
//     .catch(error => console.log(error));

// обращение к бесплатному аппи, погода 
// document.addEventListener("DOMContentLoaded", 
// function (event) {
//     getWeather('Moscow'); 
// }); 

// function getWeather(city) {
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d6e481919bcce169184f16536bb64bd8&units=metric')
//     .then(response => response.json())
//     .then(weather => {
//         console.log(weather);
//         document.querySelector('.city')
//         .innerText = weather.name;
//         document.querySelector
//     ('.tempValue').innerText = 
//     Math.round(weather.main.temp);
//     document.querySelector('.weather')
//     .innerText = weather.weather[0]
//     .description;
//     })
//     .catch(err => console.log(err));
// }


//ответы на вопросы. вопрос 1. пример1
// let jsonForest = `[{
//         "class": "Хвойные",
//         "another": "вечнозеленые",
//         "name": [ "Араукарии", "Сосна", "Кедр", "Кипарис", "Кедр"],
//         "image": "#",
//         "description": "В современном мире к хвойным относят древесные растения с одним стволом и боковыми ветвями, расположенными на нем. Это араукариевые, сосновые и кипарисовые деревья такие как ель, кипарис, можжевельник, секвойя, тис, каури, пихта, кедр, сосна и лиственница. Если у растения есть шишки, в которых развиваются семена, а листья похожи на длинные иголки, то его смело можно назвать хвойным.",
//     },{
//         "class": "Лиственные",
//         "another": "Мелколистные",
//         "name": [ "Клен", "Дуб", "Каштан", "Липа", "Ива"],
//         "image": "#",
//         "description": "К ним относятся такие деревья как клен, осина, липа, ясень. Так же деревья делятся по сроку жизни листьев на вечнозеленые и листопадные. Листопадные ближе к зиме сбрасывают свой лиственный покров, а весной вновь выпускают почки, из которых снова вырастают зеленые листочки. Вечнозеленые деревья меняют свои листья постепенно в любое время года.",
//     }]`
//     console.log(jsonForest);

 // пример 2 
    // let jsonAnime = `[{
    //     "name": "Атака титанов",
    //     "class": "Экшен",
    //     "year": "2013",
    //     "author": "Хадзимэ Исаяма",
    //     "image": "#",
    //     "developments": "«Атáка титáнов»[3] (яп. 進撃の巨人 Сингэки но Кёдзин, букв.«Атакующий гигант»), — японская постапокалиптическая манга, написанная и иллюстрированная Хадзимэ Исаямой. Выпускалась в ежемесячном журнале Bessatsu Shonen Magazine японского издательства «Коданся» с октября 2009 года по апрель 2021 года. Действие манги происходит в вымышленной вселенной, напоминающей Европу XIX века, где человечество живёт на территориях, окружённых тремя огромными стенами, защищающими их от гигантских существ, поедающих людей, называемых Титанами."
    // },{
    //     "name": "Истинная грусть",
    //     "class": "Триллер, драма",
    //     "year": "1998",
    //     "author": "Сатоси Кон",
    //     "image": "#",
    //     "developments": "Молодая поп-певица Мима Киригоэ пытается перейти из мира музыки в индустрию ТВ-сериалов и прославиться как актриса, но, похоже, что не всем её поклонникам понравилось такое решение, и началось: странный телефонный звонок, факс, конверт со взрывчаткой... К тому же в интернете обнаружилась страничка с якобы её дневником. "
    // }{
    //     "name": "Эрго прокси",
    //     "class": "Драма, детектив",
    //     "year": "2006",
    //     "author": "Сюко Мурасэ, Акира Тоба, Кэи Цунэмацу,",
    //     "image": "#",
    //     "developments": "Когда с андроидами-авторейвами начинают происходить неприятности, за расследование происшествий берется Рил Мейер, сотрудница разведки. Работника управления авторейвов Винсента Лоу преследует таинственный гуманоидный монстр Прокси... Дороги Рил и Винсента пересекаются."
    // }]`
    // console.log(jsonAnime);


    // XML and JSON. вопрос 2 
    // let jsonBreed = `[{
    //     "breed": "Beagle",
    //     "size": "Large",
    //     "colour": "orange",
    //     "age": "6 years"
    // }]`

// xml 
// <?xml version="1.0"?>
// <DOG>
//     <BREED>Beagle</BREED>
//     <SIZE>Large</SIZE>
//     <COLOUR>orange</COLOUR>
//     <AGE>6</AGE>
// </DOG>


// задание 2. 20 недели 

document.addEventListener("DOMContentLoaded", function(){
    fetch("https://api.nasa.gov/planetary/apod?api_key=7l6USJJeCaSnkPLvHrVUAsKhFf4FBKt6GtB3HXyS")
    .then(response => response.json())
    .then(planet => {
        console.log('hihihi');

        let apodContent = "7";

        apodContent =
            `<h2 class="planet__name">${planet.title}</h2>
                <div class="planet__date">${planet.date}</div>
                <img class="planet__image" src="${planet.url}" alt="astronomy picture"></img>
                <div class="planet__text">${planet.explanation}</div>`

        document.getElementById("planet").innerHTML = apodContent;
        document.getElementById("footer").innerHTML = `<div>©${planet.copyright}</div>`
    })
    .catch(error => console.log(error));
});

