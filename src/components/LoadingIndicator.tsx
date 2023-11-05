import styled from "styled-components";


const LoadingIndicatorContainer = styled.div`
  border: 24px solid;
  border-color: rgba(5, 168, 244, 0.15) rgba(5, 168, 244, 0.25) rgba(5, 168, 244, 0.35) rgba(5, 168, 244, 0.5);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: animloader 1s linear infinite;

  @keyframes animloader {
    0% {
      border-color: rgba(5, 168, 244, 0.15) rgba(5, 168, 244, 0.25) rgba(5, 168, 244, 0.35) rgba(5, 168, 244, 0.75);
}
    33% {
      border-color: rgba(5, 168, 244, 0.75) rgba(5, 168, 244, 0.15) rgba(5, 168, 244, 0.25) rgba(5, 168, 244, 0.35);
}
    66% {
      border-color: rgba(5, 168, 244, 0.35) rgba(5, 168, 244, 0.75) rgba(5, 168, 244, 0.15) rgba(5, 168, 244, 0.25);
}
    100% {
      border-color: rgba(5, 168, 244, 0.25) rgba(5, 168, 244, 0.35) rgba(5, 168, 244, 0.75) rgba(5, 168, 244, 0.15);
}
  }
`;

const LoadingIndicator = () => {
  return (
    <LoadingIndicatorContainer></LoadingIndicatorContainer>
  )
}

export default LoadingIndicator;
