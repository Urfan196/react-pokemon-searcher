import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  constructor(){
    super()

    this.state = {
      pokemons: [],
      searchText: ''
    }

    this.allPokemons = []
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/pokemon').then(resp => resp.json())
    .then(pokemons => {
      this.setState({
        pokemons: pokemons
      })
      this.allPokemons = pokemons;
    })

  }

  handleSearch = (event) => {
    this.setState({
      searchText: event.target.value
    })
    let newPokemons = this.allPokemons.filter((pokemon) => {
      return pokemon.name.startsWith(event.target.value)
    })
    this.setState({
      pokemons: newPokemons
    })
  }
  
  addPokemon = (newPokemon) => {
    this.setState({
      pokemons: [...this.allPokemons, newPokemon]
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search onChange={this.handleSearch} searchText={this.state.searchText}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemons} />
      </Container>
    )
  }
}

export default PokemonPage
