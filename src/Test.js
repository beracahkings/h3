function Test(props)
{
	return(
		<div>
		<h1>Kingston Abraham</h1><br/>
		<h3>{props.company}</h3><br/>
		<h3>{props.children}</h3>
		</div>
		);
}

export default Test;