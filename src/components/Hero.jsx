import React from "react"
const placeholder_text = ["A Book At Bedtime - Redgauntlet", "Agatha Christie Sketch", "Escape From Film", "Election Night Special", "Everest Climbed by Hairdressers", "Anne Elke's Theory on Brontosauruses", "Elizabethan Pancake Smugglers", "Exploding Penguin on TV Set", "Argument Clinic, and other Retreats", "How to Fall from a Building", "Exploding Version of the Blue Danube", "The First Underwater Production of Measure for Measure", "Farming Club/Life of Tchaikovsky", "Art Gallery - The Place of the Nude", "French Lecture on Sheep-Aircraft", "Bank Robber in a Lingerie Shop", "Batley Townswomen's Guild Presents the Battle of Pearl Harbour", "Batley Townswomen's Guild Presents the First Heart Transplant", "BBC is Short of Money", "The Funniest Joke in the World", "Gestures to Indicate Pauses in Civilized Talk", "The Bishop: From Russia with Love", "Blancmanges Playing Tennis", "The Golden Age of Ballooning", "The Butcher Who is Alternately Rude and Polite", "Homicidal Barber", "How Not To Be Seen", "Camel Spotting, and other Interesting Things", "Hell's Grannies", "How to Rid the World of All Known Diseases", "Confuse-a-Cat", "The Idiot in Society", "Conquistador Coffee Campaign", "Crackpot Religions Ltd.", "Is There? ...Life After Death?", "Crossing the Atlantic on a Tricycle", "Kamikaze Scotsmen, and other Tribes" ]
    var item = placeholder_text[Math.floor(Math.random()*placeholder_text.length)];

const Hero = () => (
    
  <div className="container py-4 lg:pb-16 bg-transparent">
    <div class="flex flex-row justify-around items-center">
        <div class="flex flex-col justify-start items-start mb-8 text-left">
                <h1 className="my-2 font-extrabold uppercase text-high-yellow lg:text-5xl text-center">
                    Srishti Archive
                </h1>
                <p class="lg:text-base text-sm  capitalize font-medium leading-relaxed text-mint-cream ">
                    Structured and searchable crowdsourced <br></br>repository of projects done at Srishti.
                </p>
        </div>
       <div class="flex flex-row justify-center items-center">
           <div>
           <span class="text-4xl lg:-mt-4 px-2">👉</span>
           </div>
           <div>
               <a href="https://submission-form.herokuapp.com">
           <span className="font-bold text-mint-cream uppercase text-center text-2xl border-2 hover:text-black border-black rounded-sm shadow-orange py-2 px-8 bg-blaze-orange focus:outline-none hover:bg-blue-purple">📨 Submit Your Own</span> 
           </a>
           </div>
        </div>
    </div>
    <div class="mx-auto flex flex-col justify-center items-center">
        <p class="text-xl text-gray-700 font-bold py-4">...or browse projects</p>
    <div class="flex flex-col justify-center space-y-4 items-center">
    
        <div class="max-w-4xl">
        <input type="text" class=" text-sm  appearance-none shadow-orange w-full py-2 px-16 bg-mint-cream text-gray-700 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder = {`${item}`} />
        </div>
    <div>
    <span className="font-bold text-center text-sm border-2 border-black rounded-sm shadow-shadow-yellow py-3 px-6  hover:bg-yellow focus:outline-none hover:bg-blue-purple mx-4 bg-yellow-400">Search</span> 

    </div>
    </div>
    </div>
  </div>




)

export default Hero
