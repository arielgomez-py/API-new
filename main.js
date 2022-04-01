
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

        arryIDs = [];// array containing ids of Pokemons names
        arrayIdsImg = []; //array containing ids of pokemons image

        //filling the arrays
        for(let i = 0; i < arrayPokemons.length; i ++){
            arryIDs.push("name_" + arrayPokemons[i].name);
            arrayIdsImg.push("img_" + arrayPokemons[i].name);   
        }
        //Show name of each pokemon in html labels (h3)
        function mostrarNombre(){
            for(let i = 0; i < arryIDs.length; i ++){
                document.getElementById(arryIDs[i]).innerHTML = arrayPokemons[i].name;
                //document.getElementById("wartortle").innerHTML='<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">';
            }
        }
        mostrarNombre();
        
        function showImage(){
            for(let i = 0; i < arrayIdsImg.length; i ++){
                console.log(arrayIdsImg[i]);
                //document.getElementById(arrayPokemons[i].name).innerHTML='<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">';
                
            }
        }
        showImage();
    }
    
    // error case
    catch(error){
        console.log(error);
    }    
}

/*class Pokemon{
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
}*/
obtainPokemons(
    
);

