import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("./home-background.svg") no-repeat 700px bottom;
  background-color: ${(props) => props.theme.gray100};
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: ${(props) => props.theme.red};
  padding-bottom: 50px;
  text-align: center;
  text-shadow: 1px 1px 2px #322153;
  max-width: 500px;
`;

export const SubTitle = styled.h2`
  font-size: 40px;
  color: ${(props) => props.theme.purpleDark};
  padding-bottom: 20px;
  text-align: center;

  max-width: 500px;
`;

export const Description = styled.p`
  font-size: 24px;
  padding-bottom: 50px;
  text-align: center;
  max-width: 500px;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .linkContainer {
    text-decoration: none;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img.attrs(() => ({
  src: "home-image.svg",
}))`
  width: 50%;
`;

export const ButtonTest = styled.button`
  background: ${(props) => props.theme.purple};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: none;  
  cursor: pointer;

  &:hover {
    filter: opacity(0.9);
  }

  p {
    background: ${(props) => props.theme.purpleDark};
    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    padding: 1rem 1rem 1rem 1rem;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }

  svg {
    background: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    margin: 0 0.75rem 0 0.75rem;
  }
`
