import React from 'react';

const Search=({searchfield,searchchange})=>{
	return(
		<div className='pa2'>
			<input 
			className='pa3 ba bg-lightest-blue b--green'
			type='search' 
			placeholder='Search Robo'
			onChange={searchchange} 
			/>
		</div>
		);
}

export default Search;