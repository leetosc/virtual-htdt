import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import ReactWordcloud from "react-wordcloud";

export default function Wordcloud() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("https://dbdev.ga/comments?_limit=500").then((res) => {
      const commentlist = res.data.map((comment) => comment.text);
      setComments(commentlist);
    });
  }, []);

  const wordArray = comments.join(" ");

  console.log("wordarray", wordArray);

  const wordcnt = wordArray
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .reduce(function (map, word) {
      map[word] = (map[word] || 0) + 1;
      return map;
    }, Object.create(null));

  console.log("wordcount", wordcnt);
  const wordCountArray = Object.entries(wordcnt).map(([key, value]) => {
    return { text: key, value: value };
  });
  console.log("wordcountarray", wordCountArray);

  return (
    <>
      <Box
        w="100%"
        minH="100vh"
        backgroundColor="white"
        textColor="white"
        display="flex"
      >
        <Head>
          <title>Virtual HTDT</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Box
          h="100%"
          position="relative"
          justifyContent="space-between"
          overflow="auto"
          p={6}
          mt={16}
          maxW="800px"
          w="100%"
          mx="auto"
          backgroundColor="white"
        >
          {process.browser && (
            <ReactWordcloud
              words={wordCountArray}
              size={[800, 800]}
              options={{
                // colors: [
                //   "#1f77b4",
                //   "#ff7f0e",
                //   "#2ca02c",
                //   "#d62728",
                //   "#9467bd",
                //   "#8c564b",
                // ],
                enableTooltip: false,
                deterministic: false,
                // fontFamily: "impact",
                fontSizes: [15, 205],
                fontStyle: "normal",
                fontWeight: "normal",
                padding: 1,
                // rotations: 3,
                // rotationAngles: [0, 90],
                scale: "sqrt",
                spiral: "archimedean",
                transitionDuration: 1000,
              }}
            />
          )}
        </Box>
      </Box>
    </>
  );
}
