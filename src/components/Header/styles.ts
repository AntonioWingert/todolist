import styled from 'styled-components';

export const Container = styled.header`
  background: ${({theme}) => theme.gray700};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12.5rem;
  position: relative;

  form {
    position: absolute;
    height: 3.375rem;
    bottom: calc(-3.375rem / 2);
    width: 100%;
    max-width: 46rem;
    display: flex;
    gap: 0.5rem;
    padding: 0 1rem;


    input {
      height: 100%;
      flex: 1;
      color: ${({theme}) => theme.gray100};
      background: ${({theme}) => theme.gray500};
      border: 1px solid ${({theme}) => theme.gray700};
      padding: 0 1rem;
      font-size: 1rem;
    }

    input::placeholder {
      color: ${({theme}) => theme.gray300};
    }

    button {
      height: 100%;
      padding: 0 1rem;
      background: ${({theme}) => theme.bluedark};
      color: ${({theme}) => theme.gray100};
      border: none;
      border-radius: .5rem;
      display: flex;
      align-items: center;
      gap: 0.375rem;
      font-weight: 700;
      font-size: 0.875rem;
    }
  }




`;
