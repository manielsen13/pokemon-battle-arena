class BattleAnnouncer { //currently these will all be console.logs, but eventually these will write to the battle text box as well

    constructor(){
    }

    announceSupereffective() {
        console.log(`It's super effective!`)
    }

    announceMiss() {
        console.log(`The attack missed!`)
    }

    announceImmunity(target) {
        console.log(`${target.name} is immune. The attack has no effect...`)
    }

    announceMove(pokemon, move) {
        console.log(`${pokemon.name} used ${move.name}!`)
    }

    announceCrit() {
        console.log(`It's a critical hit!`)
    }

    announceResistance() {
        console.log(`It's not very effective.`)
    }

    announceStartOfBattle(){
        console.log(`A wild trainer appeared with a random pokémon from the Poké API!`)
    }

    announceEnemyThrow(pokemon){
        console.log(`The trainer throws out ${pokemon.name}!`)
    }

    announceUserThrow(pokemon) {
        console.log(`Go get 'em ${pokemon.name}!`)
    }

}

export default new BattleAnnouncer()