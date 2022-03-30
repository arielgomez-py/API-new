
//Request http to Pokemons API
const  obtainPokemons = async() =>{
    //Request
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');

        //Obtain data
        const data = await response.json();
        //array containing pokemons objects
        arrayPokemons = data.results;
        console.log(arrayPokemons); 

        arryIDs =[];// array containind ids of Pokemons names

        //filling the list
        for(let i = 0; i < arrayPokemons.length; i ++){
            arryIDs.push("name_" + arrayPokemons[i].name);   
        }

        for(let i = 0; i < arryIDs.length; i ++){
            let namePokemon = document.getElementById(arryIDs[i]);
            console.log(namePokemon);
            let namePokemonId = document.getElementById(namePokemon);
            console.log(namePokemonId);
            namePokemonId.innerHTML= arryIDs[i];
        }

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
    getName(){
        let namePokemon = document.getElementById("name_bulbasaur");
        namePokemon = arrayPokemons[1].name;
        namePokemon.innerText = namePokemon;    
    }
    getImage(image){

    }
}

class Bulbasur extends Pokemon{
    constructor(props){
        super(props);
    }
}
obtainPokemons();
