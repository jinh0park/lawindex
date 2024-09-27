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

function WordList({ indices, setCurrentIndex }) {
  return (
    <List style={{ height: "100vh", overflow: "scroll" }}>
      {indices.map((index, i) => (
        <ListItem disablePadding key={i}>
          <ListItemButton
            onClick={() => {
              setCurrentIndex(index);
            }}
          >
            <ListItemText primary={index.word} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default React.memo(WordList);
