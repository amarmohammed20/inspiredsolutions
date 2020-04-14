const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// The below is used to catch all errors
async function getJSON(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw error;
    }
}

// Handle all fetch requests
// Any call that uses a await needs to be wrapped in a async function
async function getPeopleInSpace(url) {
    // Parse the above to json.
    const peopleJSON = await getJSON(url);

    // Map is performing a async operation on every item in the array and assigning the results to profiles
    const profiles = peopleJSON.people.map( async (person) => {
        const craft = person.craft;
        const profileJSON = await getJSON(wikiUrl = person.name);

        // Here we used the spread property to copy all the properties from the profileJSON onto the new object
        return { ...profileJSON, craft};
    });

    // Promise.all is the result of all the map calls, the multiple objects in the array
    return Promise.all(profiles);
}

// Generate the markup for each profile
function generateHTML(data) {
  data.map( person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    section.innerHTML = `
      <img src=${person.thumbnail.source}>
      <span>${person.craft}</span>
      <h2>${person.title}</h2>
      <p>${person.description}</p>
      <p>${person.extract}</p>
    `;
  });
}

btn.addEventListener('click', (event) => {
  event.target.textContent = "Loading...";

  getPeopleInSpace(astrosUrl)
    .then(generateHTML)
    .catch( e => {
        peopleList,innerHTML = "<h3>Something went wrong!</h3>";
        console.error(e);
    })
    .finally( () => event.target.remove())
  event.target.remove();

});