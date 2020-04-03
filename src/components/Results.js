import React from 'react'
import {Grid} from "@material-ui/core";
import Result from './Result'

function Results ({ results, openPopup }) {
	return (
		<Grid container direction="row" justify="center" alignItems="center" className="films">
			{results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</Grid>
	)
}

export default Results
