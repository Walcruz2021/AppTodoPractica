import React, { useState } from "react";

export const PanelSup = props => {

  // const [newTaskName, setNewTaskName] = useState("");
  const [newTaskName, setNewTaskName] = useState({ name: "", desc: "", fec: "" });
  //const [newTaskName, setNewTaskName] = useState({name:"",fec:""});
  console.log(newTaskName, "taskcreator")

  // const updateNewTaskValue = e => setNewTaskName(e.target.value);
  const updateNewTaskValue = e => setNewTaskName({ ...newTaskName, [e.target.name]: e.target.value });

  const createNewTask = () => {
    props.callback(newTaskName);
    console.log(newTaskName)
    // setNewTaskName('');
    setNewTaskName({ name: "", desc: "", fec: "" });
    //setNewTaskName({name:"",fec:""});
  }

  return (
    <>
      <div class="bg-secondary mx-auto mt-2" style={{ padding: "10px" }}>
        <h4 class="bg-warning text-center p-3">Agregar Tarea</h4>
        {/* //<form class="form-group row"> */}
        <form class="container-sm mt-2 text-white">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Agregar Tarea:</label>
            {/* <div class="text-center text-white p-2">AGREGAR TAREA</div> */}
            {/* <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="Agregar ToDo"
          value={newTaskName}
          onChange={updateNewTaskValue}
        /> */}
            <div class="col-sm-10">
              <input
                type="text"
                name="name"
                //className="form-control w-50 mx-auto"
                className="form-control-plaintext text-white"
                placeholder="Agregar ToDo"
                value={newTaskName.name}
                onChange={updateNewTaskValue}
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Detalles:</label>
            <div class="col-sm-10">
              <input
                type="text"
                name="desc"
                //name="fec"
                className="form-control-plaintext text-white"
                placeholder="Agregar ToDo"
                //value={newTaskName.desc}
                value={newTaskName.desc}
                onChange={updateNewTaskValue}
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Fecha:</label>
            <div class="col-sm-10">
              <input
                type="date"
                name="fec"
                //name="fec"
                className="form-control-plaintext text-white"
                placeholder="Agregar ToDo"
                //value={newTaskName.desc}
                value={newTaskName.fec}
                onChange={updateNewTaskValue}
              />
            </div>
          </div>
        </form>
        <button className="btn btn-outline-success btn-lg btn-block w-50 w-50 mx-auto " style={{ margin: "15px" }} onClick={createNewTask}>
          Agregar Tarea
        </button>

      </div>
    </>
  );
};
