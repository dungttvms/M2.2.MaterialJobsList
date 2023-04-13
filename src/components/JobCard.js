import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ height: 300 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {job.title}
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary">
          Skills: {job.skills}
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary">
          Description: {job.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => navigate(`/job/${job.id}`)}
          size="small"
        >
          Read More ...
        </Button>
      </CardActions>
    </Card>
  );
}
