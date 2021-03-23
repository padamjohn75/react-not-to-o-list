import { Alert } from "bootstrap";
import React from "react";
import { Table, Button } from "react-bootstrap";

// recieving props here

export const NotToDoList = ({
  notToDoLists,
  handleAsToDo,
  handleDelete,
  handleOnNotToDoChange,
}) => {
  // const totalSaveTime = notToDoLists.reduce(subTtl,item)
  const totalSavedTime = notToDoLists.reduce((subTtl, item) => {
    return subTtl + +item.hr;
  }, 0);

  return (
    <>
      <h3>Not to do Task</h3>
      <Table variant="info" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {notToDoLists.map((row, i) => (
            <tr key={i}>
              <td>
                <input
                  type="checkbox"
                  defaultValue={i}
                  onChange={handleOnNotToDoChange}
                />
                <label>{row.title}</label>
              </td>
              <td>{row?.hr}</td>
              <td>
                <Button onClick={() => handleAsToDo(i)}> To Do</Button>
                <Button variant="danger" onClick={() => handleDelete(i)}>
                  {" "}
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div class="timeDiv"> You saved ={totalSavedTime} hours</div>
    </>
  );
};
