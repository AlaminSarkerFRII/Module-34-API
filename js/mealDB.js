
const searchFood = () =>{
            const searchField = document.getElementById('search-field');
            const searchFieldText = searchField.value;
            searchField.value = '';

            // error handle

            if(searchFieldText == ''){
                    alert ('Please enter value')
            } else {

                 // search kore niye asbo. load data..
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}
            `;
            fetch(url)
            .then(response => response.json())
            .then(data => displaySearchResult(data.meals))
                }             
}

const displaySearchResult = meals => {
        const searchResults = document.getElementById('search-results');
        searchResults.textContent = ''; //clear field
        if(meals.lenght==0){
            //show no results found
        }
        meals.forEach( meal => {
    const div =document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `<div onClick="mealDetail('${meal.idMeal}')" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
    </div>
  </div>`

  searchResults.appendChild(div);


        });
}

// <!-- single meal Details -->

const mealDetail = idMeal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res =>res.json())
    .then(meal => displayMealDetail(meal.meals[0])); // array te index dite hobe...

}

const displayMealDetail = meal =>{
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = ''; 
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
     <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>

    `;
    
    mealDetails.appendChild(div);
}

