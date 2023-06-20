import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "./global"


function Technicians() {
  const [techniciansData, setTechniciansData] = useState([]);
  const get_technicians_data = async () => {
    const getData = await fetch(`${api}/CRM/showTechnicians`, {
      headers: {
        "x-auth-managerToken": localStorage.getItem("managerToken"),
      },
    });
    const jsonData = await getData.json();
    setTechniciansData(jsonData);
  };

  useEffect(() => {
    get_technicians_data();
  }, []);

  const titleColor = { color: "#14A44D" };
  return (
    <div>
      <h3 style={{ color: "#E4A11B" }}>Technicians</h3>
      
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={titleColor}>Name</TableCell>
              <TableCell style={titleColor} align="right">
                Id
              </TableCell>
              <TableCell style={titleColor} align="right">
                Email
              </TableCell>
              <TableCell style={titleColor} align="right">
                Department
              </TableCell>
              <TableCell style={titleColor} align="right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {techniciansData.map((data) => (
              <TableRow
                key={data.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.name}
                </TableCell>
                <TableCell align="right">{data._id}</TableCell>
                <TableCell align="right">{data.email}</TableCell>
                <TableCell align="right">{data.department}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="fingerprint">
                    <EditIcon color="secondary" />
                  </IconButton>
                  <IconButton aria-label="fingerprint">
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Technicians;
