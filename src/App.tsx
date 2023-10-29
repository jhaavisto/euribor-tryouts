import RateList from './components/RatesList';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f1f6fe;
    padding: 10px;
  }
`;

const AppContainer = styled.div`
  text-align: center;
`;

const AppTitle = styled.h1`
  text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <AppTitle>Current Euribor Interest Rates</AppTitle>
        <RateList />
      </AppContainer>
    </>
  );
}

export default App;
