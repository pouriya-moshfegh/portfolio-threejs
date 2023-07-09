'use client'
import Image from "next/image";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Contact from "./components/Contact";
import Works from "./components/Works";
import { styled } from "styled-components";
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

export default function Home() {
  return (
    <Container >
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}
