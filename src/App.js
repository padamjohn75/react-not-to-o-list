import "./App.css";
import { Button, Container, Row, Col, Alert } from "react-bootstrap";
import { AddForm } from "./components/form/AddForm";
import { TaskList } from "./components/tasklist/TaskList";
import { NotToDoList } from "./components/tasklist/NotToDoList";
import { useState } from "react";

//Process
//create new state
//Todo List
//[*]add form UI
//[*]add form data to state
//render state data in list view
//handle on mark as nottodo and todo list
//select intems and delete
//count total not to do hours

function App() {
  //creating states

  const [taskLists, setTaskLists] = useState([]);
  const [notToDoLists, setNotToDoLists] = useState([]);
  const [totalHrs, setTotalHrs] = useState(0);

  const [itemToDelete, setItemToDelete] = useState([]);
  const [notToDoItemDelete, setNotToDoItemDelete] = useState([]);

  //calculatuing hours

  const handleOnAddTask = (frmDt) => {
    if (totalHrs + +frmDt.hr > 168) {
      return alert(
        "Adding this task will exceed the total amount of hours per week"
      );
    }
    // remove from array
    setTotalHrs(totalHrs + +frmDt.hr);
    setTaskLists([...taskLists, frmDt]);
  };

  //handling as not to do list

  // const handleOnMarkAsNotAddTask = (index) => {
  //   console.log(notToDoLists);

  //   const item = taskLists.splice(index, 1);
  //   setnotToDoLists([...notToDoLists, item[0]]);
  // };

  //organized way

  const handleOnMarkAsNotAddTask = (index) => {
    const item = taskLists[index];
    const newArg = taskLists.filter((item, i) => i !== index);

    setTaskLists(newArg);
    setNotToDoLists([...notToDoLists, item]);
  };

  //handling not as to do list

  // const handleAsToDo = (index) => {
  //   const item = notToDoLists.splice(index, 1);
  //   setTaskLists([...taskLists, item[0]]);
  // };

  //ORGANIZED WAY

  const handleAsToDo = (index) => {
    const item = notToDoLists[index];
    const newArg1 = notToDoLists.filter((item, i) => i !== index);

    setNotToDoLists(newArg1);
    setTaskLists([...taskLists, item]);
  };

  //Deleting items from taks mark as to do list

  const handleDelete = (index) => {
    const newArg1 = notToDoLists.filter((item, i) => i !== index);
    setNotToDoLists(newArg1);
  };

  //Deleting items from mark as not to do list

  const handleDeleteNotToDoList = (index) => {
    const newArg2 = taskLists.filter((item, i) => i !== index);
    setTaskLists(newArg2);
  };

  //Delete  section for not to do list

  const handleOnChange = (e) => {
    const { checked, value } = e.target;
    // console.log("change", checked, value);

    if (checked) {
      return setItemToDelete([...itemToDelete, +value]);
    }
    //remove from array
    const newlist = itemToDelete.filter((item) => item !== value);
    setItemToDelete(newlist);
  };

  //delete for to do list section

  const handleOnNotToDoChange = (e) => {
    const { checked, value } = e.target;
    // console.log("change", checked, value);

    if (checked) {
      return setNotToDoItemDelete([...itemToDelete, +value]);
    }
    //remove from array
    const newlist = itemToDelete.filter((item) => item !== value);
    setNotToDoItemDelete(newlist);
  };

  //delete item when button is clicked

  const deleteItems = () => {
    if (window.confirm("Are you sure you want to delete?"));
    {
      deleteFromTaskList();
      deleteFromNotToDoTaskList();
    }
  };

  const deleteFromTaskList = () => {
    const newArg3 = taskLists.filter((item, i) => !itemToDelete.includes(i));

    const newTtl = newArg3.reduce((subTtl, item) => {
      return subTtl + item.hr;
    }, 0);

    setTotalHrs(newTtl);
    setTaskLists(newArg3);
    setItemToDelete([]);
  };

  const deleteFromNotToDoTaskList = () => {
    const newArg = notToDoLists.filter(
      (item, i) => !notToDoItemDelete.includes(i)
    );

    // const newTtl = newArg.reduce((subTtl, item) => {
    //   return subTtl + item.hr;
    // }, 0);

    // setTotalHrs(newTtl);

    setNotToDoLists(newArg);
    setItemToDelete([]);
  };

  //delete item from from not to do list

  const deleteItemsNotToDoList = () => {
    if (window.confirm("Are you sure you want to delete?"));
    {
      deleteFromTaskList();
      deleteFromNotToDoTaskList();
    }
  };

  return (
    <div className="main">
      <Container>
        <Row>
          <Col>
            <div className="text-center mt-5"></div>
            <h2>Not To Do List</h2>
          </Col>
        </Row>

        {/* sending props as handleOnAddTask */}
        <AddForm handleOnAddTask={handleOnAddTask} />

        <Row>
          <Col>
            {/* sending props to do list */}

            <TaskList
              taskLists={taskLists}
              handleOnChange={handleOnChange}
              handleDeleteNotToDoList={handleDeleteNotToDoList}
              handleOnMarkAsNotAddTask={handleOnMarkAsNotAddTask}
            />
          </Col>
          <Col>
            {/* sending props not to do list */}

            <NotToDoList
              notToDoLists={notToDoLists}
              handleOnNotToDoChange={handleOnNotToDoChange}
              handleDelete={handleDelete}
              handleAsToDo={handleAsToDo}
            />
          </Col>
        </Row>
        <Row>
          <Alert variant="primary">
            Your total Alocated time={totalHrs} /168 hours
          </Alert>
        </Row>
        <button variant="danger" onClick={deleteItems}>
          Delete
        </button>
      </Container>
    </div>
  );
}

export default App;
