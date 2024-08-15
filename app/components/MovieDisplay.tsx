"use client";
import { SpinnerIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Link,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useMovieContext } from "./MovieProvider";

interface Movie {
  MovieID: number;
  Title: string;
  Duration: string;
  Views: string;
  Genre: string;
}

const MovieDisplay = () => {
  const { movieDisplay, movies } = useMovieContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <Box px={"15%"} py={"10%"} bgColor={"gray.900"}>
        {movies.length === 0 ? (
          <Flex justify={"center"} my={300}>
            <Spinner color="yellow.400" boxSize={200} />
          </Flex>
        ) : (
          <Box maxW={"1200px"} margin={"auto"}>
            <HStack justify={"space-between"} marginBottom={5}>
              <Heading color={"white"} my={6}>
                {movieDisplay === 0 ? "New Releases" : "Search Results"}
              </Heading>
              <Link color={"yellow.400"} fontSize={"lg"}>
                View More
              </Link>
            </HStack>
            <Grid
              h="700px"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(3, 1fr)"
              gap={4}
            >
              {movies.map((movie, index) => (
                <GridItem
                  colSpan={movieDisplay === 0 ? (index === 0 ? 2 : 1) : 1}
                  bg="linear-gradient(to top, black, #2e2e2e)"
                  p={4}
                  key={movie.MovieID || index}
                >
                  <VStack align={"start"} h="100%" justify="space-between">
                    <Box bg={"yellow.400"} borderRadius={10} px={1.5} py={0.5}>
                      <Text fontSize={"xs"}>{movie.Genre}</Text>
                    </Box>
                    <VStack align={"start"} color={"white"}>
                      <HStack>
                        <HStack marginRight={3}>
                          <TimeIcon></TimeIcon>
                          <Text>{movie.Duration}</Text>
                        </HStack>
                        <HStack>
                          <ViewIcon></ViewIcon>
                          <Text>{movie.Views}</Text>
                        </HStack>
                      </HStack>
                      <Heading>{movie.Title}</Heading>
                    </VStack>
                  </VStack>
                </GridItem>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
};

export default MovieDisplay;
