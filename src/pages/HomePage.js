import { Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import JobCard from "../components/JobCard";
import jobs from "../jobs.json";

function HomePage() {
  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        {jobs.slice(0, 4).map((job) => (
          <Grid key={job.id} item xs={12} md={6}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
