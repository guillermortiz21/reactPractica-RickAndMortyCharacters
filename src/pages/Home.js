import React from 'react';
import CharacterCard from '../components/CharacterCard';
import PageError from '../components/PageError';
import logo  from '../images/logo.png';
import api from '../api';
import './styles/Home.css';

class Home extends React.Component{
  state = {
    loading: true,
    error: null,
    characters: [],
    page: 1
  };

  async componentDidMount(){
    this.setState({loading: true, error: null});
    
    try{
      const data = await api.getCharacters(this.state.page);
      this.setState({
        loading: false, 
        characters: data.results
      });
    }catch(error){
      this.setState({loading: false, error});
    }
  }
  
  async handleLoadMoreCharactersClick(){
    await this.setState({loading: true, page: this.state.page + 1});
    try{
      const data = await api.getCharacters(this.state.page);
      this.setState({
        loading: false, 
        characters: [].concat(this.state.characters, data.results)
      });
    }catch(error){
      this.setState({loading: false, error});
    }
  }

  render(){
    
    if(this.state.error){
      return(
        <PageError error={this.state.error}/>
        )
      }
      
      const characters = this.state.characters;
      return(
        <div className="Home">
        <img className="Logo" src={logo} alt="Rick and Morty"/>
        <div className="CharactersGrid">
          {characters.map((character) => {
            return(
              <CharacterCard
              key={character.id}
              image={character.image}
              name={character.name}
              />
              )
            })}
        </div>
        <div className="Button">
          <button onClick={this.handleLoadMoreCharactersClick.bind(this)}>
            Load More Characters
          </button>
        </div>
      </div>
    );
  }
}

export default Home;