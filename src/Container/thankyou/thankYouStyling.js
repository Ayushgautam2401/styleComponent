import styled from "styled-components";

export const MainContainer = styled.div.attrs((props) => {
  const {
    theme: {
      background: { primary, ...restbg },
    },
  } = props;
  return {
    bg: restbg[props.bg] || primary,
  };
})`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.bg};
`;