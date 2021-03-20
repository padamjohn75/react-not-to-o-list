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
      <h3>Task List</h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th></th>
            <th>Tasks</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskLists.map((row, i) => (
            <tr key={i}>
              <td>
                {" "}
                <td>
                  <input
                    type="checkbox"
                    defaultValue={i}
                    onChange={handleOnChange}
                  />
                  <label>{row?.title}</label>
                </td>
              </td>
              <td>{row?.title}</td>
              <td>{row?.hr}</td>
              <td>
                <Button onClick={() => handleOnMarkAsNotAddTask(i)}>
                  {" "}
                  Mark As Not to Do
                </Button>
                <Button
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
