import React from 'react';

export default class AddOption extends React.Component{
		state={
			error:undefined
		};

	addOption=(e)=>{
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.addOption(option);

		this.setState(()=>({error}));

		if(!error){
			e.target.elements.option.value='';
		}
	}

	render(){
		return(
			<div>
			{this.state.error && <p className="addOptionError">{this.state.error}</p>}
				<form 
					onSubmit={this.addOption}
					className="add-option"
				>
					<input 
						className="add-option__input"
						type="text" name="option"/>
					<button className="button">Add Option</button>
				</form>
			</div>
		)
	}
}

