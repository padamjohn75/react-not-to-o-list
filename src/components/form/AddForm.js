import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { TaskList } from "../tasklist/TaskList";

//defining state

const initialFormData = {
  title: "",
  hr: 0,
};

//creating state

//recieving props as(handleOnAddTask)

export const AddForm = ({ handleOnAddTask }) => {
  const [task, setTask] = useState(initialFormData);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    //set function
    setTask({
      ...task,
      [name]: name === "hr" ? +value : value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnAddTask(task);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Row>
        <Col>
          <Form.Control
            onChange={handleOnChange}
            name="title"
            placeholder="Task name"
            value={task.title}
            required
          />
        </Col>
        <Col>
          <Form.Control
            onChange={handleOnChange}
            name="hr"
            type="number"
            placeholder="Number Of Hours"
            value={task.hr}
            required
          />
        </Col>
        <Col>
          <Button type="submit">Add Task</Button>
        </Col>
      </Row>
    </Form>
  );
};
