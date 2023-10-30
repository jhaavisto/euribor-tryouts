import { useEffect, useState } from 'react';
import { fetchEuribor } from '../api';
import styled from 'styled-components';
import { breakpoints } from '../theme';
import LoadingIndicator from './LoadingIndicator';

const RateBoxContainer = styled.div<{ rate: number }>`
  width: 160px;
  padding: 20px;
  border-radius: 10px;
  color: #666;
  background-color: ${props => {
    if (props.rate > 4) return '#ffcccb';
    if (props.rate >= 2 && props.rate < 4) return '#fffcbb';
    return '#daf5bc';
  }};
  box-shadow: 0 2px 5px 0 rgba(0,0,100,.1);
  margin: 10px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.small}) {
    width: calc(100% - 10px);
  }
`;

const RateTitle = styled.h2`
  text-transform: capitalize;
`;

const RateValue = styled.span`
  font-size: 2em;
`;

const RateListContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
    align-items: center;
  }
`;

const DateText = styled.p`
  font-size: 1em;
  color: grey;
`;

function convertToLocaleDateFormat(usDate: string): string {
  if (!usDate) return '';

  const [month, day, year] = usDate.split('-');
  const date = new Date(`${year}-${month}-${day}`);
  const dayStr = String(date.getDate()).padStart(2, '0');
  const monthStr = String(date.getMonth() + 1).padStart(2, '0');
  const yearStr = date.getFullYear();

  return `${dayStr}-${monthStr}-${yearStr}`;
}

interface RateBoxProps {
  type: string;
  rate: number;
}

const RateBox = ({ type, rate }: RateBoxProps) => {
  const formattedType = type.replace(/(\d+)([a-zA-Z]+)/, '$1 $2');
  return (
    <RateBoxContainer rate={rate}>
      <RateTitle>{formattedType}</RateTitle>
      <RateValue>{rate}%</RateValue>
    </RateBoxContainer>
  );
};

const RateList = () => {
  const [rates, setRates] = useState<Euribor>({ rates: {} });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedRates = await fetchEuribor();
        setRates(fetchedRates);
      } catch (error) {
        console.error('There was a problem fetching the Euribor rates: ', error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : (
        <>
          <DateText>Last updated {convertToLocaleDateFormat(rates.lastUpdated || '')}</DateText>
          <RateListContainer>
            {rates && Object.keys(rates.rates || {}).map((key) => (
              <RateBox key={key} type={key} rate={rates.rates[key as keyof EuriborRates] ?? 0} />
            ))}
          </RateListContainer>
        </>
      )}
    </>
  );
};

export default RateList;