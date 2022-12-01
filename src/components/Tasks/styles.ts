import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 46rem;
  margin: 0 auto;
  margin-top: 5.625rem;
  padding: 0 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    p {
      color: ${({theme}) => theme.blue};
      font-size: 0.875rem;
      font-weight: 700;
    }

    .purpleText {
      color: ${({theme}) => theme.purple};
    }

    span {
      background: ${({theme}) => theme.gray400};
      color: ${({theme}) => theme.gray200};
      padding: 3px 9px;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 700;
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
`;

export const EmptySection = styled.section`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  color: ${({theme}) => theme.gray300};
  text-align: center;

  svg {
    opacity: 0.3;
  }

  p {
    font-weight: 700;
  }
`;