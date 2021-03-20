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
      <h3>Not to do Task List</h3>
      <Table striped bordered hover size="sm">
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
                {row?.title}
                <label>{row.title}</label>
              </td>
              <td>{row?.hr}</td>
              <td>
                <Button onClick={() => handleAsToDo(i)}> Mark As to Do</Button>
                <Button variant="danger" onClick={() => handleDelete(i)}>
                  {" "}
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        your saved ={totalSavedTime} hours
      </Table>
    </>
  );
};
