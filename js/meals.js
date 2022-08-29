const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        // console.log(meal);//
        mealDiv.classList.add('col');
        // mealDiv.classList.add('shadow-sm p-3 mb-5 bg-body rounded')
        mealDiv.innerHTML = `
        <div class="card h-100 shadow-lg p-3 mb-5 bg-body rounded">
                            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${meal.strMeal}</h5>
                                <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                            </div>
       </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}


const searchFood = () => {

    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
    loadMeals(searchFieldText);
    searchField.value = "";
}

loadMeals('a');