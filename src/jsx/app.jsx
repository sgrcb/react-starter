var React = require('react');
var ReactDOM = require('react-dom');

var Commentbox = React.createClass({
	render:function(){
		return(
			<div>{this.props.greeting} こんにちは</div>
		);
	}
});

ReactDOM.render(
	<Commentbox greeting="どうも！" />,
	document.getElementById('page')
);