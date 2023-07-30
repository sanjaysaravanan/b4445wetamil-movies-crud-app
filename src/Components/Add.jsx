import React from "react";
import { createMovie } from "../movieCrud";
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from './form.module.css';

const movieSchema = yup.object().shape({
  title: yup.string()
    .min(3, 'Minimum 3 characters required')
    .required('Title is required'),
  category: yup.string()
    .required('Category is required'),
  image: yup.string()
    .url('Please correct the url')
    .required('Image is required'),
  trailer: yup.string()
    .min(3, 'Minimum 3 characters required')
    .required('Trailer is required'),
  password: yup.string().trim().matches(
    "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$",
    'Minimum eight characters, at least one letter and one number')
});

const Add = () => {
  const movieForm = useFormik({
    initialValues: {
      title: '',
      category: '',
      image: '',
      trailer: '',
      password: ''
    },
    onSubmit: function (values, formHelpers) {
      alert('Submitting the form')
      console.log(values);
      // createMovie(values);
      formHelpers.resetForm();
    },
    validationSchema: movieSchema
  });

  return (
    <form onSubmit={movieForm.handleSubmit} style={{ padding: '16px' }}>
      {console.log('Errors', movieForm.errors)}
      {/* {console.log('Touch State', movieForm.touched.title)} */}
      <div style={{ padding: 4 }}>
        <label htmlFor="title">Title:</label>
        <div style={{ position: 'relative', display: 'inline-block' }} >
          <input
            type="text"
            id="title"
            name="title"
            value={movieForm.values.title}
            onChange={movieForm.handleChange}
            className={movieForm.errors.title ? styles.errorInput : ''}
          />
          {movieForm.errors.title && <i
            className="fa-solid fa-triangle-exclamation"
            style={{
              color: "#ff0000",
              position: 'absolute',
              top: '2px',
              right: '5px'
            }}></i>}
        </div>

        <br />
        {movieForm.touched.title && movieForm.errors.title
          && <div style={{ color: 'red' }}>{movieForm.errors.title}</div>}
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          onChange={movieForm.handleChange}
          id="category"
          value={movieForm.values.category}
        >
          <option value="" selected>--</option>
          <option value="Romance">Romance</option>
          <option value="Action">Action</option>
          <option value="Thriller">Thriller</option>
          <option value="Comedy">Comedy</option>
        </select>
        <br />
        {movieForm.touched.category && movieForm.errors.category
          && <div style={{ color: 'red' }}>{movieForm.errors.category}</div>}
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={movieForm.values.image}
          onChange={movieForm.handleChange}
        />
        <br />
        {movieForm.touched.image && movieForm.errors.image
          && <div style={{ color: 'red' }}>{movieForm.errors.image}</div>}
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="trailer">Trailer ID:</label>
        <input
          type="text"
          id="trailer"
          name="trailer"
          value={movieForm.values.trailer}
          onChange={movieForm.handleChange}
        />
        <br />
        {movieForm.touched.trailer && movieForm.errors.trailer
          && <div style={{ color: 'red' }}>{movieForm.errors.trailer}</div>}
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="trailer">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          value={movieForm.values.password}
          onChange={movieForm.handleChange}
        />
        <br />
        {movieForm.touched.password && movieForm.errors.password
          && <div style={{ color: 'red' }}>{movieForm.errors.password}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Add;