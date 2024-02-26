import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const TaskForm = ({ onAddTask }) => {
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
        onAddTask(values);
        resetForm();
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
          <button type="submit" disabled={isSubmitting}>
            Add Task
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;