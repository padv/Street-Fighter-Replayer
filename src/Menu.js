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
    this.eventList = ["EVO","Treta Championship","Defend the North", "EVO Japan"];
    this.titleFilter = {character1: '', character2: '', player: '', event: ''};
    this.state = {disabledPlusButton: false, disabledMinusButton: true};


    PubSub.subscribe("plus", (topic,boolean) => this.setState({disabledPlusButton: boolean}));
    PubSub.subscribe("minus", (topic,boolean) => this.setState({disabledMinusButton: boolean}));

  }

  changeSelectedFilter(event){
    
    this.titleFilter[event.target.id] = event.target.value.toLowerCase(); 

    PubSub.publish("filter-change", this.titleFilter);
     
  }

  render() {
    
    return (

      <div className="sidenav">
              <SelectCustomizado id="character1" name="character1" options={this.characterList} label="Character" onChange={this.changeSelectedFilter.bind(this)}/>
              <SelectCustomizado id="character2" name="character2" options={this.characterList} label="Character" onChange={this.changeSelectedFilter.bind(this)}/>
              <SelectCustomizado id="player" name="player" options={this.playerList} label="Player" onChange={this.changeSelectedFilter.bind(this)}/>
              <SelectCustomizado id="event" name="event" options={this.eventList} label="Event" onChange={this.changeSelectedFilter.bind(this)}/>
              <PageChangeButton label=">>" operator="plus" disabled={this.state.disabledPlusButton}/>
              <PageChangeButton label="<<" operator="minus" disabled={this.state.disabledMinusButton}/>
      </div>
    );
  }

}