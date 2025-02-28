import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Add a New Movie</h1>
      <button onClick={() => navigate('/')}>Go Back</button>
      <form>
        <label>Title: <input type="text" /></label><br />
        <label>Director: <input type="text" /></label><br />
        <label>Genre: <input type="text" /></label><br />
        <label>Release Year: <input type="number" /></label><br />
        <label>Synopsis: <textarea></textarea></label><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;