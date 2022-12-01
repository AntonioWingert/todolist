import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${({theme}) => theme.gray500};
  border: 1px solid ${({theme}) => theme.gray400};
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  p {
    font-size: 0.875rem;
    line-height: 1.18rem;
    color: ${({theme}) => theme.gray100};
    margin-right: auto;
  }
  
  .textCompleted {
    color: ${({theme}) => theme.gray300};
    text-decoration: line-through;
  }
`;

export const CheckContainer = styled.button`
  min-width: 1.125rem;
  height: 1.125rem;
  background: none;
  border: none;

  svg {
    width: 100%;
    height: 100%;
    color: ${({theme}) => theme.purple};
  }

  div {
    width: 100%;
    height: 100%;
    border: 2px solid ${({theme}) => theme.blue};
    border-radius: 50%;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${({theme}) => theme.gray300};
`;
