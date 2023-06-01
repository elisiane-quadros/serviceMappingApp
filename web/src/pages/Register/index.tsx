import {
  Button,
  ButtonContainer,
  CategoryBox,
  CategoryContainer,
  CategoryImage,
  Container,
  Form,
  FormTitle,
  MapContainer,
  Section,
} from "./styles";
import Input from "../../components/Input";
import { useState } from 'react'
import { LatLngExpression } from "leaflet"
import { TileLayer, Marker } from "react-leaflet";
import { categories } from "./categories";

export default function Register() {
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    contact: '',
    category: ''
  })
  return (
    <Container>
      <Form>
        <FormTitle>
          Cadastro do comércio local
        </FormTitle>
        <Section>
          Dados
        </Section>
        <Input
          label="Nome do local"
          name="name"
          value={formValues.name}
          onChange={setFormValues}
        />
        <Input
          label="Descrição"
          name="description"
          value={formValues.description}
          onChange={setFormValues}
        />
        <Input
          label="Contato"
          name="contact"
          value={formValues.contact}
          onChange={setFormValues}
        />
        <Section>Endereço</Section>

        <MapContainer center={{
          lat:12,
          lng: 23
        } as LatLngExpression}
        zoom={13}
        whenCreated={() => {}}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[12,23] as LatLngExpression} />
        </MapContainer>

        <Section>Categorias</Section>

        <CategoryContainer>
          {categories.map((category) => (
            <CategoryBox
              key={category.key}
              onClick={() => {
                setFormValues((prev) => ({ ...prev, category: category.key }));
              }}
              isActive={formValues.category === category.key}
            >
              <CategoryImage src={category.url} />
              {category.label}
            </CategoryBox>
          ))}
        </CategoryContainer>
      </Form>
    </Container>
  )
}