import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { updateSearchFilter } from '../../redux/tasks/tasksSlice';
import { InputStyled, InputBoxStyled, InputButtonStyled } from './TaskSearch.styled';
import { IoSearch } from "react-icons/io5";

const TaskSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    dispatch(updateSearchFilter(value)); 
  };

  return (
    <InputBoxStyled>
      <InputStyled 
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <InputButtonStyled><IoSearch /></InputButtonStyled>
    </InputBoxStyled>
  );
};

export default TaskSearch;