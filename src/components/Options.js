import React from 'react';
import Option from './Option';
const Options = (props)=>(
	<div>
		<div className="widget-header">
			<h3 className="widget-header__title">Your Options</h3>
			<button 
				onClick={props.removeAll}
				className="button button--link"
			>RemoveAll</button>
		</div>
		{
			(props.options.length > 0) ?
			props.options.map((e,index)=><Option key={e} text={e}  count={index+1} removeOne={props.removeOne} />)
			:
			<p className="widget__message">It is empty</p>
		}
	</div>

	)

export default Options;