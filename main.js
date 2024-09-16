// Write your JavaScript code here! 
var planets = [ 
['Pluto', 0.06], 
['Neptune', 1.148], 
['Uranus', 0.917], 
['Saturn', 1.139], 
['Jupiter', 2.640], 
['Mars', 0.3895], 
['Moon', 0.1655], 
['Earth', 1], 
['Venus', 0.9032], 
['Mercury', 0.377], 
['Sun', 27.9] 
];

    // We are going to solve this by breaking the problem into three parts. 
    // Programmers like automating things, we'll populate the HTML drop down options using code, 
    // instead of having to type out all the values. 
    // Create a function that does the some math and gives us the new weight. 
    // Then create a function that responds when the user clicks on the button. 

    // 1. Populate the dropdown element with the data found in the planets array. 
    // The value of each option should be the planet's name. 
    // Use the following built-in methods: 
    // `.forEach` `document.createElement` `document.getElementById` `.appendChild` 

const planetSelect = document.getElementById('planets')

planets.reverse().forEach(planet => {
    const option = document.createElement('option')
    option.value = planet[0]
    option.textContent = planet[0]
    planetSelect.appendChild(option)
})

function calculateWeight(weight, planetName) { 
    // 2. Write the code to return the correct weight 
    return weight * planets.find(([label, _])=> label == planetName)[1]
} 

function handleClickEvent(e) {
    // 3. Declare a variable called userWeight and assign the value of the user's weight. 
    const userWeight = document.getElementById('user-weight').value

    // 4. Delcare a variable called planetName and assign the name of the selected planet from the drop down. 
    const planetName = document.getElementById('planets').value

    // 5. Declare a variable called result and assign the value of the new calculated weight. 
    const result = calculateWeight(userWeight, planetName)
    console.log(result)

    // 6. Write code to display the message shown in the screenshot. 
    document.getElementById('output').innerText =`If you were on ${planetName}, you would weigh ${result}lbs!`
} 

// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
const calculateButton = document.getElementById('calculate-button')
calculateButton.onclick = handleClickEvent

    // 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
    // feel free to add classes and id's to the HTML elements as you need, 
    // import.a google font and use it for some or all of the text on your page. 


    // Bonus Challenges 
    // 8. Reverse the drop down order so that the sun is first.

// Pluto Exclusion Checkbox
function handlePlutoExclusion(checkbox) {
    const plutoOption = Array.from(planetSelect.options).find(option => option.value === 'Pluto');

    if (checkbox.checked) {
        planetSelect.removeChild(plutoOption)
    } else if (!checkbox.checked) {
        const newOption = document.createElement('option')
        newOption.value = 'Pluto'
        newOption.textContent = 'Pluto'
        planetSelect.appendChild(newOption)
    }
}
const checkbox = document.getElementById('exclude-pluto')
checkbox.addEventListener("click", () => handlePlutoExclusion(checkbox))


// Adding a custom planet
function handleAddCustomPlanet(planetName, multiplier) {

    // input validation
    if (!customPlanetMultiplier.value || !customPlanetName.value) return
    
    customPlanetMultiplier.value = null
    customPlanetName.value = null

    planets.push([planetName, multiplier])
    const newPlanet = document.createElement('option')
    newPlanet.value = planetName 
    newPlanet.textContent = planetName
    planetSelect.appendChild(newPlanet) 
}

const addCustomPlanetButton = document.getElementById('add-custom-planet')
const customPlanetName = document.getElementById('planet-name')
const customPlanetMultiplier = document.getElementById('multiplier')


addCustomPlanetButton.addEventListener('click', () => handleAddCustomPlanet(customPlanetName.value, customPlanetMultiplier.value))