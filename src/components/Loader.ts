import styled from "styled-components";

export const ContainerLoad = styled.div`
  background-color: #111;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s;

  &.hide {
    opacity: 0;
  }
  &.show {
    opacity: 1;
  }
`;

export const Loader = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #bf9e02;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: rotation 1.3s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
