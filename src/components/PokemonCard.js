import React from 'react'
import { Card } from 'semantic-ui-react'
import { stat } from 'fs'

class PokemonCard extends React.Component {
  
  state ={
    showFront: true
  }

  handleClick = () => {
    // if (this.state.showFront){
    //   this.setState({showFront: false})
    // } else {
    //   this.setState({showFront: true})
    // }
    this.setState({showFront: !this.state.showFront})
  }

  render() {
    const {name, stats, sprites: {front, back}} = this.props.pokemon
    let image = (this.state.showFront) ? front : back;
    const hp = stats.find(stat => stat.name === 'hp').value
    return (
      <Card onClick={this.handleClick} >
        <div>
          <div className="image">
            <img alt="oh no!" src={image} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
