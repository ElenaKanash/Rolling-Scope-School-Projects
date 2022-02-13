const img = document.querySelector('.img');
const url = 'https://api.unsplash.com/search/photos?query=winter&per_page=6&orientation=landscape&client_id=pakF7ID8qJ1KmpCgkfsCXoxnIGTgrxlK_bmDhJSJ4sk';


async function getData() {
  const response = await fetch(url);
 // console.log(response);
  const data = await response.json();
 // console.log(data);
  showData(data);
}
getData();

const gallery = document.querySelector('.image__items');
console.log(gallery)

function showData(data) {
  gallery.innerHTML = "";

  let arrayImg = data['results'].map((el) => {
  let image = document.createElement('img');
  image.classList.add('img');
  image.alt = `image`;
  image.src = `${el.urls.regular}`;
  gallery.append(image);
  });
}






