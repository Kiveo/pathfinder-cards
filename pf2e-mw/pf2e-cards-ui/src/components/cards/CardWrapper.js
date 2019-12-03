import styled from 'styled-components';

const CardWrapper = styled.li`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.tertiary};
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
  padding: 1rem;
  width: 500px;
  hr {
    width: 100%;
    border: 1px solid ${(props) => props.theme.tertiary};
  };
  .card__info-wrapper {
    flex: 1;
    min-height: 100px;
  };
  .card__info {
    width: 100%;
    flex: 1;
    display: inline-block;
    text-align: left;
    margin: 0.5rem;
    font-weight: normal;
    &--normal {
      font-size: ${(props) => props.theme.small};
      font-weight: normal;
    };
  };
  @media (max-width: 900px) {
    width: 100%;
    margin: 1rem 0.5rem;
  };
`;

export default CardWrapper;
