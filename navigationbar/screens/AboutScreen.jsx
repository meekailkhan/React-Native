import { View, Text, ScrollView } from "react-native"
import PokemonCard from "../components/PokemonCard"

export default function AboutScreen() {
    const pokemons = [
        {
            name: "Charmander",
            type: "Fire",
            image: require('../assets/charmander.png'),
            hp: 39,
            moves: ["Scratch", "Ember", "Growl", "Leer"],
            weakness: ["water", "Rock"],
            key: 1
        },
        {
            name: "Squirtle",
            type: "Water",
            image: require('../assets/squirtle.png'),
            hp: 44,
            moves: ["Tackle", "Watergun", "Tail Whip", "Withdraw"],
            weakness: ["Electric", "Grass"],
            key: 2
        },
        {
            name: "Balbasaur",
            type: "Grass",
            image: require('../assets/bulbasaur.png'),
            hp: 45,
            moves: ["Tackle", "Vine Whipe", "Growl", "Leech Seed"],
            weakness: ["Fire", "Ice", "Flying", "Phychic"],
            key: 3
        },
        {
            name: "Pikachu",
            type: "Electric",
            image: require('../assets/pikachu.png'),
            hp: 46,
            moves: ["Quick Attack", "Thunderbolt", "Growl", "Tail Whipe"],
            weakness: ["Ground"],
            key: 4
        }]
    return (
        <ScrollView>
            {pokemons.map((item, i) => (
                <PokemonCard {...item} key={i} />
            ))}
        </ScrollView>
    )
}