import React from 'react';

import {useSelector, useDispatch} from 'react-redux';

import { useFormik } from "formik";

import * as Yup from "yup";

import "./styles.css";


export default function CourseList() {
  const courses = useSelector(state => state.data);

  const dispatch = useDispatch();

  const newOngSchema = Yup.object({
    course: Yup.string().required("O curso é Obrigatório"),
    
  });

  const formik = useFormik({
    initialValues: {
      course: ""
    },
    validationSchema: newOngSchema,
    onSubmit: async (values) => {
      const newOng = {
        course: values.course,
      };

      try {
        dispatch({ type: 'ADD_COURSE', title: values.course})
      } catch (err) {
        console.log(err)
      }
    },
  });
  
  return (
    <>
    <ul>
      {courses.map(course => <li key={course}>{course}</li>)}
    </ul>
    <form onSubmit={formik.handleSubmit}>
    <div className="input-group-props">
        <input
          name="course"
          placeholder="Nome do curso"
          onChange={formik.handleChange}
          value={formik.values.course}
          className={
            formik.errors.course && formik.touched.course
              ? "input-medium-error"
              : "input-medium"
          }
        />
        <div className="error-message">
          {formik.errors.course && formik.touched.course ? (
            <small>{formik.errors.course}</small>
          ) : null}
        </div>

    </div>
    <button className="button-submit" type="submit" >
       Add Course
    </button>
    </form>

    </>
  )
}
