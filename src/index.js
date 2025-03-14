function displayPoem(response){

    console.log("poem generatated")
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor:"",
      });
    
}

function generatePoem(event){
    event.preventDefault();

   let instructionsInput = document.querySelector("#user-instructions") ;
   let apiKey="3e7751ao608a0543f0ba87d742et2457";
   let prompt=`User Instructions:Generate Chinese poem about ${instructionsInput.vaule}`;
   let context="Your a romantic poem expert. Your mission is to generate a 8 line poem in basic HTML. Make sure to follow the User insrtuctions. Sign code with 'SheCodes AI' inside a <strong> element at the bottom of the poem";
   let apiUrl= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

console.log("generating poem");
console.log(`Prompt: ${prompt}`);   
console.log(`Prompt: ${context}`)

axios.get (apiUrl).then(displayPoem);

}

let poemFormElement= document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit",generatePoem);