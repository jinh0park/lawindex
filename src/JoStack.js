import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function highlightText(text, target) {
  // target 문자열을 찾고, 해당 문자열을 <span> 태그로 감싸 빨간색으로 표시
  const highlightedText = text.replace(
    new RegExp(`"${target}"`, "gi"),
    (match) => {
      return `<span style="color: red;"><b>${match}</b></span>`;
    }
  );

  return (
    <p
      dangerouslySetInnerHTML={{ __html: highlightedText }}
      style={{ whiteSpace: "pre-line" }}
    ></p>
  );
}

export default function JoStack({ word, jos }) {
  return (
    <Container>
      <Box sx={{ height: "100vh", overflow: "scroll" }}>
        <Stack spacing={2}>
          {jos.map((data, i) => (
            <Item key={i}>
              <h3>{data.name}</h3>
              {highlightText(data.jo, word)}
            </Item>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
