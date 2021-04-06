import React from "react";
import Bio from "../Bio/Bio";

import { ThemeProvider } from "styled-components/macro";
import { theme } from "../Style/theme";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("bio front-side renders correctly", () => {
  const { getByText, debug } = render(
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <Bio />
      </BrowserRouter>
    </ThemeProvider>
  );
  const backButton = getByText(/back/i);
  fireEvent.click(backButton);
  
  const welcomeDiv = getByText(/software developer/i);
  expect(welcomeDiv).toBeVisible();
});

test("test bio flip-side render", () => {
  const {getByText} = render(
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <Bio isFlipped={true}/>
      </BrowserRouter>
    </ThemeProvider>
  )
  const flipDiv = getByText(/flip side/i);
  expect(flipDiv).toBeVisible();

})
