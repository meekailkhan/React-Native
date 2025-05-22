
import { StyleSheet, Text, View, Platform, ScrollView ,StatusBar} from 'react-native';
import PokemonCard from './components/PokemonCard';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"


export default function App() {

  const pokemons = [
    {
      name: "Charmander",
      type: "Fire",
      image: require('./assets/charmander.png'),
      hp: 39,
      moves: ["Scratch", "Ember", "Growl", "Leer"],
      weakness: ["water", "Rock"],
      key: 1
    },
    {
      name: "Squirtle",
      type: "Water",
      image: require('./assets/squirtle.png'),
      hp: 44,
      moves: ["Tackle", "Watergun", "Tail Whip", "Withdraw"],
      weakness: ["Electric", "Grass"],
      key: 2
    },
    {
      name: "Balbasaur",
      type: "Grass",
      image: require('./assets/bulbasaur.png'),
      hp: 45,
      moves: ["Tackle", "Vine Whipe", "Growl", "Leech Seed"],
      weakness: ["Fire", "Ice", "Flying", "Phychic"],
      key: 3
    },
    {
      name: "Pikachu",
      type: "Electric",
      image: require('./assets/pikachu.png'),
      hp: 46,
      moves: ["Quick Attack", "Thunderbolt", "Growl", "Tail Whipe"],
      weakness: ["Ground"],
      key: 4
    },

  ]

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          {pokemons.map((item,i) => (
            <PokemonCard {...item} key={i}/>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',

  },
});
