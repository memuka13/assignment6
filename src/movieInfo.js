//  api key: 3126bd16
// http://www.omdbapi.com/?t=avatar&apikey=3126bd16

// let url = `http://www.omdbapi.com/?t=avatar&apikey=3126bd16`;

// https://restcountries.com/v3.1/name/

function getData(input, callback) {
  fetch(`http://www.omdbapi.com/?t=${input}&apikey=3126bd16`)
    .then((response) => response.json())
    .then((data) => callback(data));
}

const searchButton1 = document.querySelector('.searchButton1');

searchButton1.addEventListener('click', () => {
  const movieTitle = document.querySelector('.movieInput').value;
  document.querySelector('.movieInput').value = '';

  getData(movieTitle, (info) => {
    document.querySelector('.releseResult').innerText = `${
      2022 - info.Year
    } years ago`;

    const actorsArray = [];
    info.Actors.split(' ').forEach((element, index) => {
      if (index % 2 === 0) {
        actorsArray.push(element);
      }
    });
    document.querySelector('.actorsResult').innerText = actorsArray;

    fetch(`https://restcountries.com/v3.1/name/${info.Country}`)
      .then((response) => response.json())
      .then((data) => {
        document
          .querySelector('.flagsResult')
          .setAttribute('src', data[0].flags.png);
        document.querySelector('.currencyResult').innerText = Object.keys(
          data[0].currencies
        );
        console.log(data);
      });
  });
});

const searchButton2 = document.querySelector('.searchButton2');

searchButton2.addEventListener('click', () => {
  const movieTitle1 = document.querySelector('.movieInput1').value;
  document.querySelector('.movieInput1').value = '';
  const movieTitle2 = document.querySelector('.movieInput2').value;
  document.querySelector('.movieInput2').value = '';
  const movieTitle3 = document.querySelector('.movieInput3').value;
  document.querySelector('.movieInput3').value = '';

  let allMoviesLength = 0;
  let allPopulation = 0;
  if (movieTitle1 !== '') {
    getData(movieTitle1, (info) => {
      allMoviesLength += Number(info.Runtime.split(' ')[0]);
      document.querySelector('.allMoviesLength').innerText = allMoviesLength;
      fetch(`https://restcountries.com/v3.1/name/${info.Country}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          allPopulation += data[0].population;
          document.querySelector('.allMoviesPopulation').innerText =
            allPopulation;
        });
    });
  }
  if (movieTitle2 !== '') {
    getData(movieTitle2, (info) => {
      allMoviesLength += Number(info.Runtime.split(' ')[0]);
      document.querySelector('.allMoviesLength').innerText = allMoviesLength;
      fetch(`https://restcountries.com/v3.1/name/${info.Country}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          allPopulation += data[0].population;
          document.querySelector('.allMoviesPopulation').innerText =
            allPopulation;
        });
    });
  }
  if (movieTitle3 !== '') {
    getData(movieTitle3, (info) => {
      allMoviesLength += Number(info.Runtime.split(' ')[0]);
      document.querySelector('.allMoviesLength').innerText = allMoviesLength;
      fetch(`https://restcountries.com/v3.1/name/${info.Country}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          allPopulation += data[0].population;
          document.querySelector('.allMoviesPopulation').innerText =
            allPopulation;
        });
    });
  }
});
