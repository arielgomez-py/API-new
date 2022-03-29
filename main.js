
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
        /*let urlImage_1 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
        let element_1 = document.getElementById("bulbasaur").src=urlImage_1;
        let namePokemon_1 = document.getElementById("name_bulbasaur");
        namePokemon_1.innerText = data.results[0].name;

        let urlImage_2 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png";
        let element_2 = document.getElementById("ivysaur").src=urlImage_2;
        let namePokemon_2 = document.getElementById("name_ivysaur");
        namePokemon_2.innerText = data.results[1].name;*/       
    }
    
    // error case
    catch(error){
        console.log(error);
    }    
}

class Pokemon{
    constructor({
        name,
        image,
    })
    {
        this.name = name;
        this.image = image;
    };
    getName(name){
        
    }
    getImage(image){

    }
}

obtainPokemons();
