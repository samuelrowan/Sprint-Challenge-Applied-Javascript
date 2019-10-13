// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then( res => {
    console.log(res.data.articles);
    cardCreator(res.data.articles.bootstrap);
  })
  .catch( err => {
    console.log(err);
  })


// function cardCreator(obj){
//   Object.keys(obj).forEach( topic => {
//     for (i = 0; i < topic.length-1; i++){
//       const cardDiv = document.createElement('div');
//       const headlineDiv = document.createElement('div');
//       const authorDiv = document.createElement('div');
//       const authorImgDiv = document.createElement('div');
//       const authorImg = document.createElement('img');
//       const authorSpan = document.createElement('span');
//
//       cardDiv.classList.add('card');
//       headlineDiv.classList.add('headline');
//       authorDiv.classList.add('author');
//       authorImgDiv.classList.add('img-container');
//
//       authorImg.src = obj.topic[i].authorPhoto;
//
//       cardsContainer.appendChild(authorImg)
//     }
//   })
//   return cardsContainer;
// }
function cardCreator(arr){
  for (i = 0; i < arr.length; i++){
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const authorImgDiv = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorSpan = document.createElement('span');

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    authorImgDiv.classList.add('img-container');

    authorImg.src = arr[i].authorPhoto;

    cardsContainer.appendChild(authorImg)
    }
  return cardsContainer;
}
