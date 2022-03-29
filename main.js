
//Request http to Pokemons API
const  obtainPokemons = async() =>{
    //Request
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');

        //Obtain data
        const data = await response.json();
        arrayPokemons = data.results;
        console.log(data);
        
        //obtain image and name of pokemon
        let urlImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
        let element = document.getElementById("bulbasaur").src=urlImage;
        let namePokemon = document.getElementById("name_bulbasaur");
        namePokemon.innerText = data.results[0].name;

       
    }
    
    // error case
    catch(error){
        console.log(error);
    }    
}

obtainPokemons();
