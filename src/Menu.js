import React from 'react';
import './css/side-bar.css';
import PubSub from 'pubsub-js';
import SelectCustomizado from './componentes/SelectCustomizado';
import PageChangeButton from './componentes/PageChangeButton';


export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.characterList = ["Ryu", "Ken", "Sakura", "Abigail"];
    this.playerList = ["Daigo", "Punk", "ProblemX", "Tokido"];
    this.seasonList = [1, 2, 3, 4];
    this.eventList = ["EVO","Treta Championship","Defend the North", "EVO Japan"];
    this.filtro = {character1: '', character2: '', player: '', season: '', event: ''};
    this.state = {disabledPlusButton: false, disabledMinusButton: true};

    PubSub.subscribe("plus", (topic,boolean) => this.setState({disabledPlusButton: boolean}));
    PubSub.subscribe("minus", (topic,boolean) => this.setState({disabledMinusButton: boolean}));

  }

  mudaValorSelecionado(event){
    
    this.filtro[event.target.id] = event.target.value.toLowerCase(); 

    PubSub.publish("mudanca-campo", this.filtro);
     
  }

  render() {
    
    return (

      <div className="sidenav">
              <SelectCustomizado id="character1" name="character1" options={this.characterList} label="Character" onChange={this.mudaValorSelecionado.bind(this)}/>
              <SelectCustomizado id="character2" name="character2" options={this.characterList} label="Character" onChange={this.mudaValorSelecionado.bind(this)}/>
              <SelectCustomizado id="player" name="player" options={this.playerList} label="Player" onChange={this.mudaValorSelecionado.bind(this)}/>
              <SelectCustomizado id="season" name="season" options={this.seasonList} label="Season" onChange={this.mudaValorSelecionado.bind(this)}/>
              <SelectCustomizado id="event" name="event" options={this.eventList} label="Event" onChange={this.mudaValorSelecionado.bind(this)}/>
              <PageChangeButton label=">>" operator="plus" disabled={this.state.disabledPlusButton}/>
              <PageChangeButton label="<<" operator="minus" disabled={this.state.disabledMinusButton}/>
      </div>
    );
  }

}