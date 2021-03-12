import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import { ThemeProvider } from "styled-components/macro";
import { theme } from "../Style/theme";
import { BrowserRouter } from "react-router-dom";

it("App renders without crashing", () => {
  shallow(<App />);
});

// it("doesn't accept any paremeters", () => {
//   const wrapper = mount(
//     <BrowserRouter basename="/">
//       <ThemeProvider theme={theme}>
//         <App user={{}} >
//             hello
//             </App>
//       </ThemeProvider>
//     </BrowserRouter>
//   );
//   expect(wrapper).toThrowError("value must be a function");
// });
