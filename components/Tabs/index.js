// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tabs = document.querySelector('.topics')
axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then( res => {
    console.log(res.data);
    tabs.appendChild(tabCreator(res.data.topics))
  })
  .catch( err => {
    console.log(err);
  })

function tabCreator(arr){
  for (i = 0; i < arr.length-1; i++){
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = arr[i];
    tabs.appendChild(tabDiv);
  }
  return tabs
}
