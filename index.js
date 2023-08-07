function getMoves(pokemon){ 
    return pokemon.moves;
}
// devuelve lista de movimientos

function getPrimaryAbility(pokemon){
    return pokemon.ability.primary;
}
// devuelve la habilidad primaria


function getWeaknesses(pokemon){
    return pokemon.modifiers.weakness;
}
// devuelve lista de tipos contra los que es debil


function getResistances(pokemon){
    return pokemon.modifiers.resistances;
}
// devuelve la lista de tipos contra los que es resistente


function resistsType(pokemon, tipo){
    return pokemon.modifiers.resistances.includes(tipo)
}



function resistsMove(pokemon, movimiento){
    tipo =  Object.values(movimiento);
    return pokemon.modifiers.resistances.includes(tipo[1])
}


function isWeakAgainst(pokemones){
    return pokemones.attacked.modifiers.weakness.includes(pokemones.attacker.type)
}
// devuelve true si el pokemon atacado es debil frente al pokemon que lo ataca


function isStrongAgainst(pokemones){
    return pokemones.attacked.modifiers.resistances.includes(pokemones.attacker.type)
}
// devuelve true si el pokemon atacado es resistente frente al pokemon que lo ataca


function addAbility(pokemon, habilidadNueva ){
    pokemon.ability= {...pokemon.ability, ...habilidadNueva};
    return pokemon
}
// devuelvel el pokemon con un habilidad agregada


function addMove (pokemon, movimiento){
    pokemon.moves.push(movimiento)
    return pokemon
}
// devuelve el pokemon con un movimiento agregado


function removeMove (pokemon, movimiento){
    pokemon.moves.splice(pokemon.moves.indexOf(movimiento), 1)
    return pokemon;
}
// elimina un movimiento del pokemon


function getAttackModifier (pokemones){
    if (isWeakAgainst(pokemones)){
        return 2;
    }else if (isStrongAgainst(pokemones)){
        return 0.5;
    }else{
        return 1;
    }
}


function getAttackLog(pokemones){
    if (pokemones.modifier === "weak"){
        return `${pokemones.attacker} used ${pokemones.move}! ${pokemones.attacked} lost ${pokemones.damage} HP! It's super effective!`
    }else if(pokemones.modifier === "resistant"){
        return `${pokemones.attacker} used ${pokemones.move}! ${pokemones.attacked} lost ${pokemones.damage} HP! It's not very effective!`
    }else{
        return `${pokemones.attacker} used ${pokemones.move}! ${pokemones.attacked} lost ${pokemones.damage} HP!`
    }
}

function calculateDamage(attack, defense, modifier){
    return Math.floor(0.5 * attack * (attack / defense) * modifier);
}


function battle (pokemon1, pokemon2){
    let history = [];
    let rounds = 0; 
    if (pokemon1.stats.speed > pokemon2.stats.speed){
        pokeAttacker = pokemon1;
        pokeAttacked = pokemon2;
    }else{
        pokeAttacker = pokemon2;
        pokeAttacked = pokemon1;
    }
    while (pokemon1.stats.hp > 0 && pokemon2.stats.hp > 0){
        rounds = rounds +1;
        let modifier = 0;
        
        if (isWeakAgainst({attacker: pokeAttacker, attacked: pokeAttacked })){
            modifier= "weak";
        }else if(isStrongAgainst({attacker: pokeAttacker, attacked: pokeAttacked})){
            modifier= "resistant";
        }else{
            modifier = "normal";
        }
        
        let movesAttacker= getMoves(pokeAttacker);

        let attackModifier = getAttackModifier({attacker: pokeAttacker, attacked: pokeAttacked});

        let daño= calculateDamage(pokeAttacker.stats.attack, pokeAttacked.stats.deffense, attackModifier);

        pokeAttacked.stats.hp = pokeAttacked.stats.hp - daño;

        history.push(getAttackLog({
            attacker:pokeAttacker.name,
            attacked: pokeAttacked.name,
            move: movesAttacker[Math.floor(Math.random() * movesAttacker.length)],
            damage: daño,
            modifier: modifier,
        }));
        
        
        let variableDeCambio= pokeAttacker
        pokeAttacker = pokeAttacked;
        pokeAttacked = variableDeCambio;        
        
    }

    
    if (pokemon1.stats.hp > 0 && pokemon2.stats.hp <= 0){
        winner = {name:pokemon1.name, hp: pokemon1.stats.hp};
        losser = {name: pokemon2.name, hp: pokemon2.stats.hp}
    }else{
        winner = {name:pokemon2.name, hp: pokemon2.stats.hp};
        losser = {name: pokemon1.name, hp: pokemon1.stats.hp}
    }
    

    return resultBattle = {
        rounds : rounds,
        results: {
            winner: winner,
            losser: losser
        },
        history: history
    }
    
}



const getBulbasaur = () => {
    return{
        name: "Bulbasaur",
        type: "grass",
        ability: {
            "primary": "Overgrow",
            "hidden": "Chlorophyll"
        },
        stats: {
            hp: 45,
            attack: 49,
            deffense: 59,
            speed: 45
        },
        moves: [
            "Growl", "Tackle", "Vine Whip", "Razor Leaf"
        ],
        modifiers: {
            "weakness": ["fire", "ice", "flying", "psychic"],
            "resistances": ["water", "grass", "electric", "fighter"]
        }
    }
}   

const getCharmander = () => {
    return {
        name: "Charmander",
        type: "fire",
        ability: {
            "primary": "Blaze",
            "hidden": "Solar Power"
        },
        stats: {
            hp: 39,
            attack: 52,
            deffense: 43,
            speed: 65
        },
        moves: [
            "Growl", "Scratch", "Flamethrower", "Dragon Breath"
        ],
        modifiers: {
            "weakness": ["water", "ground", "rock"],
            "resistances": ["fire", "ice", "grass", "steal"]
        }
    }
}

const getSquirtle = () => {
    return {
        name: "Squirtle",
        type: "water",
        ability: {
            "primary": "Torrent",
            "hidden": "Rain Dish"
        },
        stats: {
            hp: 44,
            attack: 48,
            deffense: 50,
            speed: 43
        },
        moves: [
            "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
        ],
        modifiers: {
            "weakness": ["electric", "grass"],
            "resistances": ["water", "fire", "ice", "steel"]
        }
    }
}

const getPikachu = () => {
    return {
        name: "Pikachu",
        type: "electric",
        ability: {
            "primary": "Static",
            "hidden": "Lightning rod"
        },
        stats: {
            hp: 35,
            attack: 55,
            deffense: 40,
            speed: 90
        },
        moves: [
            "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
        ],
        modifiers: {
            "weakness": ["ground"],
            "resistances": ["electric", "flying", "water", "steel"]
        }
    }
}

const pikachu = getPikachu();
const squirtle = getSquirtle();
const bulbasaur = getBulbasaur();
const charmander = getCharmander();
console.log(battle(bulbasaur, charmander));
