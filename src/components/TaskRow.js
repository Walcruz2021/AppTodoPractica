import React from "react";

export const TaskRow = props => (

  <tr key={props.task.name}>
    <td>{props.task.name}</td>
    <td>{props.task.desc}</td>
    <td>{props.task.fec}</td>
    <td>
      <input
        type="checkbox"
        checked={props.task.done}
        onChange={() => props.toggleTask(props.task)}
      />
    </td>
    {/* <td>{props.task.fecha}</td> */}
  </tr>
);
