// //elements
// const year = document.querySelector("#year");
// const yinyang = document.querySelector("#yinyang");
// const element = document.querySelector("#element");
// const animal = document.querySelector("#animal");
// //function
//     //Yin Yang
//     year.addEventListener("input", () => {
//         console.log("Input event triggered"); 
//         const yearValue = Number(year.value); 
//         if (yearValue % 2 === 0) {
//           yinyang.textContent = "Yang";
//         } else {
//           yinyang.textContent = "Yin";
//         }
//     });
    
//     // Element
//     year.addEventListener("input", () => {
//         const yearValue = Number(year.value);
//         let elementElement;
//         const elementIndex = yearValue;
      
//         switch(elementIndex) {
//             case 1:
//               elementElement = "Wood";
//               break;
//             case 2:
//               elementElement = "Fire";
//               break;
//             case 3:
//               elementElement = "Earth";
//               break;
//             case 4:
//               elementElement = "Metal";
//               break;
//             case 5:
//               elementElement = "Water";
//               break;
//             default:
//               elementElement = "Invalid year";
//         }
//         element.textContent = elementElement; 
//     });

//     //Animal
//     year.addEventListener("input", () => {
//       const yearValue = Number(year.value);
//       let animalElement;
//       const animalIndex = (yearValue - 4) % 12; 

//       switch (animalIndex) {
//         case 0:
//           animalElement = "Rat";
//           break;
//         case 1:
//           animalElement = "Ox";
//           break;
//         case 2:
//           animalElement = "Tiger";
//           break;
//         case 3:
//           animalElement = "Rabbit";
//           break;
//         case 4:
//           animalElement = "Dragon";
//           break;
//         case 5:
//           animalElement = "Snake";
//           break;
//         case 6:
//           animalElement = "Horse";
//           break;
//         case 7:
//           animalElement = "Goat";
//           break;
//         case 8:
//           animalElement = "Monkey";
//           break;
//         case 9:
//           animalElement = "Rooster";
//           break;
//         case 10:
//           animalElement = "Dog";
//           break;
//         case 11:
//           animalElement = "Pig";
//           break;
//         default:
//           animalElement = "Invalid year"; 
//       }

//       animal.textContent = animalElement; 
//     });


// Elements
const year = document.querySelector("#year");
const yinyang = document.querySelector("#yinyang");
const element = document.querySelector("#element");
const animal = document.querySelector("#animal");

// Function to update all values
function updateChineseZodiac() {
    const yearValue = Number(year.value);
    if (!yearValue) return; // Prevent errors if input is empty

    // Yin-Yang
    yinyang.textContent = yearValue % 2 === 0 ? "Yang" : "Yin";

    // Five Elements (Cycle repeats every 10 years, using mod 10)
    const elements = ["Wood", "Wood", "Fire", "Fire", "Earth", "Earth", "Metal", "Metal", "Water", "Water"];
    element.textContent = elements[yearValue % 10];

    // Zodiac Animal (Cycle repeats every 12 years, using mod 12)
    const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
    animal.textContent = animals[(yearValue - 4) % 12];
}

// Single event listener
year.addEventListener("input", updateChineseZodiac);

// Ensure YearPicker is initialized correctly after the page loads
document.addEventListener("DOMContentLoaded", function () {
    $('.yearpicker').yearpicker({
        year: new Date().getFullYear(), // Default to current year
    });

    // Update values on change
    $('.yearpicker').on('change', function () {
        updateChineseZodiac();
    });
});
