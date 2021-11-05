import React from "react";

export const PanelInf = props => (
 <>
 <h4 className="bg-success text-white text-center p-4">
    TAREAS DE: {props.userName} 
  </h4>
   <h5 className="bg-primary text-white text-center p-4">
   Cantidad de tareas:  {props.taskItems.filter(t => !t.done).length}{" "}
   
 </h5>
</>
);
