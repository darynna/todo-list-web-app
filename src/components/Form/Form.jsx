import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasks/tasksSlice';
import { Formik, Field } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  StyledForm,
  FormGroup,
  Label,
  InputStyled,
  ErrorMsg,
  SubmitButton,
  FormDescriptionText,
  FormWrap,
  
} from './Form.styled';

import { nanoid } from 'nanoid';

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addTask({
        name: values.taskName,
        description: values.description,
        completed: false,
        id: nanoid(),
      })
    );
    Notify.success('Task was created!');
    resetForm();
  };

  return (
    <FormWrap>
         <FormDescriptionText>
        Welcome to the task creation form. Please fill out the following fields
        to add a new task to your to-do list. Provide a title for the task in
        the designated field, along with a description.
      </FormDescriptionText>
    <Formik
      initialValues={{ taskName: '', description: '' }}
      validate={values => {
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
            <InputStyled type="text" id="taskName" name="taskName" />
            <ErrorMsg name="taskName" component="div" className="error" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Description:</Label>
            <Field className='field' as="textarea" id="description" name="description"/>
            <ErrorMsg name="description" component="div" className="error" />
          </FormGroup>
          <SubmitButton type="submit">Add Task</SubmitButton>
        </StyledForm>
      )}
    </Formik>
    </FormWrap>
  );
};

export default TaskForm;
