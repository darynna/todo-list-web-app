import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasks/tasksSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
const { v4: uuidv4 } = require('uuid');

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addTask({ name: values.taskName, description: values.description, completed: false, id: uuidv4() }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ taskName: '', description: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.taskName) {
          errors.taskName = 'Task name is required';
        }
        if (!values.description) {
          errors.description = 'Description is required';
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values, { resetForm }); 
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="taskName">Task Name:</label>
            <Field type="text" id="taskName" name="taskName" />
            <ErrorMessage name="taskName" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <Field as="textarea" id="description" name="description" />
            <ErrorMessage name="description" component="div" className="error" />
          </div>
          <button type="submit">
            Add Task
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;