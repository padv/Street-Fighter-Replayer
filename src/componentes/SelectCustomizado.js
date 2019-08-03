import React from 'react';                 


export default class SelectCustomizado extends React.Component{

	render() {
		return(

			<div>
    			<label htmlFor={this.props.id}>{this.props.label}</label> 
   				<select id={this.props.id} type={this.props.type} name={this.props.name} onChange={this.props.onChange}>
   					<option value="">Select {this.props.label}</option>
   					{
   					   this.props.options.map((data, index) => {
   							
   							return (

   								<option key={index} value={data}>{data}</option>

   							);   					
   					
   					   })

   					} 
   				</select>                
  			</div>
		);
	}
}


