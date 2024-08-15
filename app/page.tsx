"use client";

import Image from "next/image";
import SiteFooter from "./components/SiteFooter";
import { Box, Grid, GridItem, Heading, HStack } from "@chakra-ui/react";
import MovieFinder from "./components/MovieFinder";
import MovieDisplay from "./components/MovieDisplay";
import { MovieProvider } from "./components/MovieProvider";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <Box>
        <MovieProvider>
          <NavBar />
          <MovieFinder />
          <MovieDisplay />
        </MovieProvider>
      </Box>
    </>
  );
}
