import React, { useState, useEffect } from "react";
import { PanelInf } from "./components/PanelInf";
import { Abaut } from "./components/Abaut"
import { TaskRow } from "./components/TaskRow";
import { PanelSup } from "./components/PanelSup";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
  const [userName, setUserName] = useState("Admin");
  const [taskItems, setTaskItems] = useState([
    { name: "Salir a correr", done: false,fecha:"2021-11-19" },
    { name: "Pagar la luz", done: false,fecha:"2021-11-19" },
    { name: "Cobrar el sueldo", done: true,fecha:"2021-11-19" },
    { name: "Ir al gym", done: false,fecha:"2021-11-19" }
  ]);
  const [showCompleted, setshowCompleted] = useState(true);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data != null) {
      setTaskItems(JSON.parse(data))
    } else {
      setUserName("Admin");
      setTaskItems([
        { name: "Salir a correr", done: false,fecha:"2021-11-19" },
        { name: "Pagar la luz", done: false,fecha:"2021-11-19" },
        { name: "Cobrar el sueldo", done: true,fecha:"2021-11-19" },
        { name: "Ir al gym", done: false ,fecha:"2021-11-19"}
      ]);
      setshowCompleted(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = taskName => {
    // if (!taskItems.find(t => t.name === taskName)) {
    //   setTaskItems([...taskItems, { name: taskName, done: false }]);
    // }
    if (!taskItems.find(t => t.name === taskName.name)) {
      setTaskItems([...taskItems, { name: taskName.name, done: false,desc:taskName.desc,fec:taskName.fec}]);
      //setTaskItems([...taskItems, { name: taskName.name, done: false,fec:taskName.fec}]);
    }
  };

  const toggleTask = task =>
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const taskTableRows = doneValue =>
    taskItems
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));

  return (
    <>
  <div style={{ padding: "10px" }}><Abaut /></div>
      <div>
        {/* <h1 class="mx-auto" style={{width: "5rem"}}>APP</h1> */}

        <div className="container-lg">

          <PanelSup callback={createNewTask} />
          <table className="table table-bordered table-hover table-dark">
            <thead class="thead-light">
              <tr>
                <th>Descripcion de Tareas</th>
                <th>Detalles</th>
                <th>Fecha</th>
                <th>Tarea Realizada</th>
              </tr>
            </thead>
            <tbody>{taskTableRows(false)}</tbody>
          </table>
          <div className="bg-secondary text-white text-center p-2">
            <VisibilityControl
              description="Tareas Realizadasº "
              isChecked={showCompleted}
              callback={checked => setshowCompleted(checked)}
            />
          </div>
          {showCompleted && (
            <table className="table table-bordered table-hover ">
              <thead>
                <tr>
                  <th>Descripcion de Tareas</th>
                  <th>Detalles</th>
                  <th>Fecha</th>
                  <th>Tarea Realizada</th>
                </tr>
              </thead>
              <tbody>{taskTableRows(true)}</tbody>
            </table>
          )}
          <PanelInf userName={userName} taskItems={taskItems} />
        </div>
      </div>
      <div style={{ padding: "10px" }}><Abaut /></div>
    </>
  );
}

export default App;
