const img = document.querySelector('.img');
let url = 'https://api.unsplash.com/search/photos?query=winter&per_page=6&orientation=landscape&client_id=pakF7ID8qJ1KmpCgkfsCXoxnIGTgrxlK_bmDhJSJ4sk';


async function getData() {
  const response = await fetch(url);
 // console.log(response);
  const data = await response.json();
 // console.log(data);
  showData(data);
}

getData();

const gallery = document.querySelector('.image__items');
//console.log(gallery)

function showData(data) {
  gallery.innerHTML = "";

  data.results.map((el) => {
  let image = document.createElement('img');
  image.classList.add('img');
  image.alt = `image`;
  image.src = `${el.urls.regular}`;
  gallery.append(image);
  });
}

const form = document.querySelector('.form-search');
//console.log(form)
const input = document.querySelector('.input');
//console.log(input)

form.addEventListener ('submit', getValue );

 function getValue (e) {
  e.preventDefault();

  let SearchUrl = `https://api.unsplash.com/photos/random?query=${input.value}&tag_mode=all&orientation=landscape&extras=url_m&count=30&client_id=pakF7ID8qJ1KmpCgkfsCXoxnIGTgrxlK_bmDhJSJ4sk`;

    console.log(SearchUrl);
    console.log(input.value);

    gallery.innerHTML = '';

    getData(SearchUrl)

  }







