
//Request http to Pokemons API
const  obtainPokemons = async() =>{
    //Request
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');

        //Obtain data
        const data = await response.json();
        arrayPokemons = data.results;
        console.log(data);
        let urlImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png";
        
        //obtain image of pokemon
        let element = document.getElementById("foto").src=urlImage;
        
        //obtain name of pokemon
        //let paragraph = document.getElementById("name");
        //paragraph.innerText = data.species.name; 
        
       
    }
    
    // error case
    catch(error){
        console.log(error);
    }    
}

obtainPokemons();


