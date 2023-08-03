function getMoves(pokemon){
    return pokemon.moves;
}


function getPrimaryAbility(pokemon){
    return pokemon.ability.primary;
}


function getWeaknesses(pokemon){
    return pokemon.modifiers.weakness;
}


function getResistances(pokemon){
    return pokemon.modifiers.resistances;
}


function resistsType(pokemon, tipo){
    return pokemon.modifiers.resistances.includes(tipo)
}


function resistsMove(pokemon, movimiento){
    tipo =  Object.values(movimiento);
    return pokemon.modifiers.resistances.includes(tipo[1])
}


function isWeakAgainst(pokemones){
    return pokemones.attaked.modifiers.resistances.includes(pokemones.attaker.type)
}


function isStrongAgainst(attaker, attaked){
    return attaked.modifiers.resistances.includes(attaker.type)
}


function addAbility(pokemon, habilidad ){
    
}


function addMove (pokemon, movimiento){
    pokemon.moves.push(movimiento)
    return pokemon
}


function removeMove (pokemon, movimiento){
    pokemon.moves.splice(pokemon.moves.indexOf(movimiento), 1)
    return pokemon;
}


function getAttackModifier (pokemones){
    if (pokemones.attaked.modifiers.weakness.includes(pokemones.attaker.type)){
        return 2;
    }else if (pokemones.attaked.modifiers.resistances.includes(pokemones.attaker.type)){
        return 0.5;
    }else{
        return 1;
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
            "weakness": ["fire, ice", "flying", "psychic"],
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

const pikachu = getPikachu()
const squirtle = getSquirtle()
const bulbasaur = getBulbasaur();
const charmander = getCharmander();
let abilityNew = { secondary: "Discharge" }
let fighters = {attaker: pikachu, attaked: bulbasaur}
console.log(getAttackModifier(f))
console.log(isWeakAgainst(f))


