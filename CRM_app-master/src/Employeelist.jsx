import Admin from "./Admin";
import ServiceAdvisor from "./ServiceAdvisor";
import Teamlead from "./Teamlead";
import Technicians from "./Technicians";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';






 function Employeelist() {

  return (
    <div className='employeeTable'>
        <div className="serviceOptions">
      <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Leads
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link to="/leadrequests">
                <Dropdown.Item href="#/action-1">Service</Dropdown.Item>
              </Link>

              <Dropdown.Item disabled href="#/action-2">
                Body Shop{" "}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Service Request
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link to="/servicerequests">
                <Dropdown.Item href="#/action-1">Service</Dropdown.Item>
              </Link>

              <Dropdown.Item disabled href="#/action-2">
                Body Shop{" "}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link style={{textDecoration:"none"}} to="/addemployee">
          <IconButton aria-label="fingerprint" >
                    <AddIcon color="secondary"/><span >Add Employee</span>
                  </IconButton></Link>
          </div>
   <Admin></Admin>
    <Teamlead></Teamlead>
    <ServiceAdvisor></ServiceAdvisor>
    <Technicians></Technicians>
    </div>
  );
}
export default Employeelist;