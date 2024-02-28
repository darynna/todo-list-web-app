import styled from "styled-components";

export const TaskListItem = styled.li`
  width: 800px;
  display: flex;
  justify-content: space-between;
  margin:0 auto;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const TaskName = styled.h3`
  color: #0056b3;
`;


export const TaskDescription = styled.p`
  color: #333;
  margin-bottom: 10px;
`;

export const ActionButton = styled.button`
width: 150px;
  background-color: #1e90ff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 3px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DeleteButton = styled(ActionButton)`
  background-color:#ff7070;
  &:hover {
    background-color: #e63900;
  }
`;

export const TaskDate = styled.p`
  color: #333;
`;
