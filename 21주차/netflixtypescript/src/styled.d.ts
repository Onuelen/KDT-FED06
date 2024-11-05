import styled from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    red: string;
    black: {
      vaeryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      darker: spring;
      lighter: string;
    };
  }
}
