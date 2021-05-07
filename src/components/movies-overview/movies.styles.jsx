import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import CustomButton from "../custom-button/custom-button.component";

import styled from "styled-components/macro";

export const MoviesOverviewContainer = styled(Container)`
  margin-top: 1em;
  margin-bottom: 3em;
  padding: 0;
`

export const CardContainer = styled(Card)`
  width: 14rem;
  height: 25rem;
  margin: 7px auto;
`

export const CardImgContainer = styled(Card.Img)`
  width: 13.9rem;
  height: 18rem;
`
export const CardBodyContainer = styled(Card.Body)`
  margin: 0;
`
export const CardTitle = styled(Card.Title)`
  font-size: 1.1rem;
  margin-bottom: 1em;
`

export const AddButton = styled(CustomButton)`
  position: absolute;
  display: block;
  align-self:center;
  width: 81.985%;
  bottom: 0.5em;
`

export const MessageContainer = styled.div`
  margin: 5vh auto;
  font-size: 2rem;
  text-align: center;
`
