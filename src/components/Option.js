import React from 'react';
const Option = (props)=>(
	<div className="option">
		<p className="option__text">{props.count} .  {props.text}</p>
		<button onClick={()=>{
			props.removeOne(props.text);
		}}
		className="button button--link"
		>remove</button>
	</div>

)

export default Option;