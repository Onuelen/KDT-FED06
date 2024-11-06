import styled from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    red: string;
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      darker: spring;
      lighter: string;
    };
  }
}
