import React, {useState, useEffect }from 'react';
import { Router } from "@reach/router"
import Layout from "../components/layout"
import {Link} from 'gatsby'
import styled from 'styled-components';
import RbButton from '../components/RbButton'

const nouns = [
    
];

const Success = () => {
    const [noun, setNoun] = useState("touch")

    const wordSwitch = () => {
        setInterval(() => {
            setNoun(nouns[Math.floor(Math.random() * nouns.length)]);
        }, 1500);
    }


    useEffect(() => {
        wordSwitch()
    }, [])



  return (
    <Layout>
      <Row>
        <h3>Awesome, thank you!</h3>
        <HomeLink to="/"> Go Home!</HomeLink>
        </Row>
    </Layout>
  )
}
export default Success


const Row = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    margin-top: 0;
    padding-top: 0;
    height: 100vh;
    background-color: white;
    text-align: center;
`

const HomeLink = styled(Link)`
  background-color: #1A202D;
  padding: .25rem 1rem;  
  margin: 2px;
  border-radius: 4px;
  color: white;
  &:hover {
    background-color:transparent;
    color: black;
    border: 2px solid black
  }
`