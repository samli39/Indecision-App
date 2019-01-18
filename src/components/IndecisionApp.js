import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import Addoption from './Addoption';
import OptionModal from './OptionModal';
export default class IndecisionApp extends React.Component{
		state={
			options:[],
			selectedOption:undefined,
			modal:false
		}

	removeAll=()=>{
		this.setState(()=>({
			options:[]
		})
	)}

	removeOne=(option)=>{
		this.setState((prevState)=>({
			options:prevState.options.filter((e)=> e !== option)
		}))
	}

	pick=()=>{
		const randomNum = Math.floor(Math.random()*this.state.options.length);
		const selectedOption = this.state.options[randomNum];
		this.setState(()=>({
			selectedOption,
			modal:true
		}))
	}

	addOption=(option)=>{
		if(!option){
			return 'Enter valid value to add item';
		}else if(this.state.options.indexOf(option) >-1){
			return 'The item has been added';
		}
		this.setState((prevState)=>({
			options:prevState.options.concat(option)
		})
	)}

	modalClose=()=>{
		this.setState(()=>({
			modal:false
		}))
	}

	render(){
		return(
			<div>
				<Header />
				<div className="container" >
					<Action 
						hasOptions={this.state.options.length >0} 
						pick = {this.pick}
					/>
					<div className="widget">
						<Options 
							options={this.state.options} 
							removeAll = {this.removeAll}
							removeOne= {this.removeOne} 
						/>

						<Addoption 
							addOption={this.addOption}
						/>
					</div>
				</div>
				
					<OptionModal 
						ariaHideApp={false} 
						selectedOption={this.state.selectedOption} 
						modalClose={this.modalClose}
						modal={this.state.modal}
					/>
				
			</div>
			)
	}
}



