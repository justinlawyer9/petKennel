import React, { Component } from 'react';
import ChildComponent from './childComponent';
import { initialData } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: initialData 
    };
  }


  handleUpdate = (id) => {
    console.log("Parent received event for ID:", id);
    const updatePets = this.state.pets.map(pet => {
      if(pet.id === id) {
        return {...pet, curImg: pet.curImg === 0 ? 1 : 0, status: pet.curStatus === 0 ? 1 : 0};
      }
      return pet;
    });

    this.setState({pets: updatePets});
  }

  render() {
    if(!this.state || !this.state.pets)
    {
      return <div>Loading Pets...</div>;
    }
    return (
      <div className="app-container" style={{ 
        display: 'flex',             
        flexDirection: 'column',     
        alignItems: 'center',        
        justifyContent: 'center',    
        minHeight: '100vh',
        width: '100vw',          
        backgroundColor: '#03b6fc',  
        margin: '0',                 
        padding: '20px',              
        boxSizing: 'border-box'
      }}>
        <h1 style={{
          display: 'flex', 
          flexWrap: 'wrap',          
          gap: '20px', 
          justifyContent: 'center'}}>Pet Kennel</h1>

        <div className="children-container" style={{ 
        display: 'flex', 
        justifyContent: 'center',  
        flexWrap: 'wrap',         
        gap: '40px',               
        width: '100%',             
        marginTop: '30px' 
        }}>
          {this.state.pets.map(pet => (
            <ChildComponent
              key={pet.id}
              id={pet.id}
              header={pet.name}
              image={pet.image[pet.curImg]}
              onAction={this.handleUpdate}
              buttonText={pet.curImg === 0 ? "Make Happy" : "Make Sad"}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
