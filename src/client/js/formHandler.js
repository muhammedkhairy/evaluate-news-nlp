import { checkForName } from './nameChecker'
function handleSubmit(event) {
  event.preventDefault();

  //store input into variables
  let textInput = document.getElementById('name').value;
  //console.log(textInput);
  checkForName(textInput);

  /*example to fetch from local file
  fetch('http://localhost:3000/test')
  .then((response) => response.json())
  .then(response => {
    document.getElementById('results').innerHTML = `<p>${response.message}</p>`;
  });*/
}

export { handleSubmit };