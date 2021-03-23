import React from "react";
import { Table, Card, Button, InputGroup } from "react-bootstrap";

export const TaskList = ({
  taskLists,
  handleOnMarkAsNotAddTask,
  handleDeleteNotToDoList,
  handleOnChange,
}) => {
  return (
    <>
      <h3> To do Task</h3>
      <Table variant="info" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskLists.map((row, i) => (
            <tr key={i}>
              <td>
                <input
                  type="checkbox"
                  defaultValue={i}
                  onChange={handleOnChange}
                />
                <label>{row?.title}</label>
              </td>
              <td>{row?.hr}</td>
              <td>
                <Button
                  class="btn btn-primary"
                  onClick={() => handleOnMarkAsNotAddTask(i)}
                >
                  {" "}
                  Not to Do
                </Button>
                <Button
                  class="btn btn-danger"
                  variant="danger"
                  onClick={() => handleDeleteNotToDoList(i)}
                >
                  {" "}
                  delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
