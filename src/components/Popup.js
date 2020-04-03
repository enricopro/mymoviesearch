import React from "react";
import Button from "@material-ui/core/Button";

function Popup({ selected, closePopup }) {
  return (
    <section className="titles">
      <div>
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>
        <p>Rating: {selected.imdbRating} ★</p>
        <div>
          <img className="posters" src={selected.Poster} alt={selected.Poster} />
          <p>{selected.Plot}</p>
        </div>
        <Button variant="contained" color="primary" size="medium" onClick={closePopup}>Close</Button>
      </div>
    </section>
  );
}

export default Popup;
