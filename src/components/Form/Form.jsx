import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasks/tasksSlice';
import { Formik, Field } from 'formik';
import { StyledForm,FormGroup, Label, Input, ErrorMsg, SubmitButton } from './Form.styled';

import { nanoid } from 'nanoid'

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addTask({ name: values.taskName, description: values.description, completed: false, id: nanoid() }));
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
      <StyledForm>
        <FormGroup>
          <Label htmlFor="taskName">Task Name:</Label>
          <Input type="text" id="taskName" name="taskName" />
          <ErrorMsg name="taskName" component="div" className="error" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description:</Label>
          <Field as="textarea" id="description" name="description" />
          <ErrorMsg name="description" component="div" className="error" />
        </FormGroup>
        <SubmitButton type="submit">
          Add Task
        </SubmitButton>
      </StyledForm>
    )}
  </Formik>
  );
};

export default TaskForm;