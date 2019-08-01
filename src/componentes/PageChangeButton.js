import React from 'react';
import PubSub from 'pubsub-js';                 

export default class PageChangeButton extends React.Component{


	pageChange(operator){

		PubSub.publish("page-change", operator);
		

	}

	render() {
		return(

          <div>                                   
            <button onClick={this.pageChange.bind(this, this.props.operator)} label={this.props.label} operator={this.props.operator} disabled={this.props.disabled}>{this.props.label}</button>                                 
          </div>

		);
	}
}

