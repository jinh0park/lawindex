import "./App.css";
// import indices from "./indices.json";
import sortedIndices from "./sorted_indices.json";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid2";
import JoStack from "./JoStack";
import WordList from "./WordList";

function App() {
  const [indices, setIndices] = useState(sortedIndices);
  const [currentIndex, setCurrentIndex] = useState(indices[1805]);
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid size={3}>
          <WordList
            indices={indices}
            setCurrentIndex={setCurrentIndex}
          ></WordList>
        </Grid>
        <Grid size={9}>
          <JoStack word={currentIndex.word} jos={currentIndex.data}></JoStack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
