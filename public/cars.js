//using handlebars to display car color
const colorsTemplateSource = document.querySelector('.colorsTemplate');
const colorsTemplate = Handlebars.compile(colorsTemplateSource.innerHTML);

const brandsTemplateSource = document.querySelector('.brandsTemplate');
const brandsTemplate = Handlebars.compile(brandsTemplateSource.innerHTML);

const allCarsTemplateSource = document.querySelector('.allCarsTemplate');
const allCarsTemplate = Handlebars.compile(allCarsTemplateSource.innerHTML);



//to access car colors url = http://api-tutor.herokuapp.com/v1/colors

axios.get('http://api-tutor.herokuapp.com/v1/colors')
  .then(function (response) {

    const colorsElem = document.querySelector('.colors');
    colorsElem.innerHTML = colorsTemplate({
        colors: response.data
    })
  });

  //to access car makes url = http://api-tutor.herokuapp.com/v1/makes

  axios.get('http://api-tutor.herokuapp.com/v1/makes')
  .then(function (response) {

     const brandsElem = document.querySelector('.brands');
     brandsElem.innerHTML = brandsTemplate({
         brands: response.data
     })
  });

    //to access all cars url = http://api-tutor.herokuapp.com/v1/cars

    axios.get('http://api-tutor.herokuapp.com/v1/cars')
    .then(function (response) {
  
      const allCarsElem = document.querySelector('.cars');
      allCarsElem.innerHTML = allCarsTemplate({
         allCars: response.data
      })
      console.log(response.data)
    });
  

  