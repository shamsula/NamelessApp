import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "../App";
import { ThemeProvider } from "styled-components/macro";
import { theme } from "../Style/theme";
import Picture from "../Style/Picture";

it("Picture renders without crashing", () => {
  shallow(<Picture />);
});

// url param for picture 
const url = "url";
// faux url param
const fauxUrl = 1 

it("Picture accepts 1 url parameter", () => {
  const url = "url";
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Picture url={url} />
    </ThemeProvider>
  );
  expect(wrapper.find("Picture").props().url).toEqual("");
});
