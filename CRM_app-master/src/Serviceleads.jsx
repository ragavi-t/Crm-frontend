import React from 'react'
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function Serviceleads() {
  return (
    <div className="list">
    <Card sx={{ minWidth:200,height:50}}>
      <Typography gutterBottom variant="h5" component="div">
        New
      </Typography>
    </Card>
    <Card sx={{ minWidth: 200,height:50 }}>
      <Typography gutterBottom variant="h5" component="div">
        Contacted
      </Typography>
    </Card>
    <Card sx={{ minWidth: 200,height:50 }}>
      <Typography gutterBottom variant="h5" component="div">
        Qualified
      </Typography>
    </Card>
    <Card sx={{ minWidth: 200,height:50}}>
      <Typography gutterBottom variant="h5" component="div">
        Lost
      </Typography>
    </Card>
    <Card sx={{ minWidth: 200,height:50}}>
      <Typography gutterBottom variant="h5" component="div">
        New
      </Typography>
    </Card>
    <Card sx={{ minWidth: 200,height:50}}>
      <Typography gutterBottom variant="h5" component="div">
        New
      </Typography>
    </Card>

  </div>
  )
}

export default Serviceleads