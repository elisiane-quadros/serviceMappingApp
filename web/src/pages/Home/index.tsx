import {
  Container,
  Title,
  Image,
  LeftContainer,
  RightContainer,
  SubTitle,
  Description,
  ButtonTest,
} from './styles'
import { MdLogin } from 'react-icons/md'

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Container>
      <LeftContainer>
        <Title>MyWay</Title>
        <SubTitle>O mapa local de sua cidade</SubTitle>
        <Description>
          Encontre no comércio local tudo o que você precisa!
        </Description>

        <Link className="linkContainer" to="/register">
          <ButtonTest>
            <MdLogin size={24} />
            <p>Cadastre um ponto comercial</p>
          </ButtonTest>
        </Link>
      </LeftContainer>

      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  )
}
