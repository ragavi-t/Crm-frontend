import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Contactedleads({customerData}) {
    const titleColor = { color: "yellow" };
    return (
      <div>
        <h3 style={{ color: "yellow" }}>Contacted</h3>
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
                  vehiclebrand
                </TableCell>
                <TableCell style={titleColor} align="right">
                  vehiclevin
                </TableCell>
                <TableCell style={titleColor} align="right">
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
  
            <TableBody>
              {customerData.map((data) =>
                data.status == "contacted" ? (
                  <TableRow
                    key={data.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {data.name}
                    </TableCell>
                    <TableCell align="right">{data._id}</TableCell>
                    <TableCell align="right">{data.email}</TableCell>
                    <TableCell align="right">{data.vehiclebrand}</TableCell>
                    <TableCell align="right">{data.vehiclevin}</TableCell>
                    <TableCell style={{ color: "yellow" }} align="right">
                      {data.status}
                    </TableCell>
                  </TableRow>
                ) : (
                  ""
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
}

export default Contactedleads