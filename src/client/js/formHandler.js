import { checkForName } from './nameChecker'
function handleSubmit(event) {
  event.preventDefault();

  //store input into variables
  let textInput = document.getElementById('name').value;
  //console.log(textInput);
  checkForName(textInput);

  //our api
  fetch('/sentiment_analysis', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({textInput})
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('results').innerHTML = `
                                                  <p><span>polarity:</span> ${data.polarity}</p></br>
                                                  <!-- <p>subjectivity: ${data.subjectivity}</p></br> -->
                                                  <p><span>polarity confidence:</span> ${data.polarity_confidence}</p></br>
                                                  <!-- <p>subjectivity confidence: ${data.subjectivity}</p></br>-->
                                                  <p><span>text:</span> ${data.text}</p>
                                                  `;
  })
}

export { handleSubmit };