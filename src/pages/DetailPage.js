import React from "react";
import jobs from "../jobs.json";
import { useParams } from "react-router-dom";

import { Box, Container, Typography } from "@mui/material";

function DetailPage() {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);

  if (!job)
    return (
      <Typography variant="h3" margin={3}>
        No found Job
      </Typography>
    );
  return (
    <Container>
      <Typography variant="h3" margin={3}>
        {job.title}
      </Typography>
      <br></br>
      <Box marginTop={3} sx={{ display: "flex" }} variant="h4">
        Skills: {job.skills.slice(0, 4).join(", ")}
      </Box>
      <br></br>
      <Typography variant="h4" margin={3}>
        Salary Low: {job.salaryLow}
      </Typography>
      <br></br>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", fontStyle: "italic", margin: 1 }}
      >
        <span style={{ fontWeight: "bold" }}>Salary High:</span>{" "}
        <span style={{ fontStyle: "italic" }}>{job.salaryHigh}</span>
      </Typography>
      <br></br>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", fontStyle: "italic", margin: 1 }}
      >
        <span style={{ fontWeight: "bold" }}>Remote:</span>{" "}
        <span style={{ fontStyle: "italic" }}>{job.remote}</span>
      </Typography>
    </Container>
  );
}

export default DetailPage;
