import React from "react";
import jobs from "../jobs.json";
import { useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";
import { Box, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

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
      <Typography
        variant="h3"
        margin={3}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {job.title}
      </Typography>
      <br></br>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="h6" sx={{ marginRight: "16px" }}>
          Skills you need:
        </Typography>
        <Stack direction="column" spacing={2}>
          {job.skills.slice(0, 4).map((skill, index) => (
            <Chip key={index} label={skill} color="primary" />
          ))}
        </Stack>
      </Box>
    </Container>
  );
}

export default DetailPage;
