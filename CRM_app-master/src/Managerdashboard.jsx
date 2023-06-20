
import * as React from "react";
import Employeelist from "./Employeelist";





function Managerdashboard() {
  const styles = { width: "200px" };

  return (
    <div className="managerDashBoard">
      <Employeelist></Employeelist>
    </div>
  );
}

export default Managerdashboard;
