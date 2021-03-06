
//Request http to Pokemons API
const  obtainPokemons = async() =>{
    //Request
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');

        //Obtain data
        const data = await response.json();
        //array containing pokemons objects
        arrayPokemons = data.results;

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
            }
        }
        mostrarNombre();
        //Show image of each pokemon 
        function showImage(){
            for(let i = 0; i < arrayIdsImg.length; i ++){
                console.log(arrayIdsImg[i]);
                document.getElementById(arrayIdsImg[i]).innerHTML= "<img src = https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+String(i + 1)+".png>";
                
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
    }
    getImage(image){

    }
}

class Bulbasur extends Pokemon{
    constructor(props){
        super(props);
    }
}*/
obtainPokemons();

