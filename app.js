const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    const request = new XMLHttpRequest(); //создание запроса
    request.open("GET", "data.json"); //указываем метод запроса и указываем путь запроса
    request.setRequestHeader("Content-type", "application/json"); //добавляем тип данных
    request.send(); //отправка запроса
    request.addEventListener("load", () => {
        console.log(JSON.parse(request.response));
        const data = JSON.parse(request.response);
        document.querySelector('.name').innerHTML = data.name;
        document.querySelector('.surname').innerHTML = data.surname;
        document.querySelector('.age').innerHTML = data.age;
        document.querySelector('.hobbie').innerHTML = data.favorite;
        document.querySelector('.number_2').innerHTML = data.favorite2;
        document.querySelector('.film').innerHTML = data.film;
    })
})