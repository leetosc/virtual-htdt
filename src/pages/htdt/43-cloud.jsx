import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, Select, FormLabel } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import axios from "axios";
import ReactWordcloud from "react-wordcloud";

export default function Wordcloud() {
  const router = useRouter();

  const [saMacSinhs, setSaMacSinhs] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedName, setSelectedName] = useState("");

  useEffect(() => {
    axios.get("https://dbdev.ga/sa-mac-sinhs").then((res) => {
      const smslist = res.data.map((sms) => ({
        name: sms.Name,
        team: sms.team.Name,
        id: sms.id,
        comments: sms.comments.map((comment) => comment.text),
      }));
      setSaMacSinhs(smslist);
    });
  }, []);

  console.log(saMacSinhs);

  const teams = saMacSinhs.reduce(
    (acc, curr) => (!acc.includes(curr.team) ? [...acc, curr.team] : [...acc]),
    []
  );

  const wordArray =
    selectedName && saMacSinhs.length > 0
      ? saMacSinhs.find((i) => i.name === selectedName).comments.join(" ")
      : "";

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
      <GameLayout>
        <Box
          w="100%"
          h="100%"
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
            maxW="800px"
            w="100%"
            mx="auto"
            backgroundColor="white"
          >
            {process.browser && (
              <ReactWordcloud
                words={wordCountArray}
                options={{
                  colors: [
                    "#1f77b4",
                    "#ff7f0e",
                    "#2ca02c",
                    "#d62728",
                    "#9467bd",
                    "#8c564b",
                  ],
                  enableTooltip: false,
                  deterministic: false,
                  fontFamily: "impact",
                  fontSizes: [65, 105],
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

        <Hud>
          <Box whiteSpace="pre-line">
            <Box>
              <FormLabel>Select your team</FormLabel>
              <Select
                backgroundColor="white"
                placeholder="Select your team"
                onChange={(e) => setSelectedTeam(e.target.value)}
              >
                {teams.map((team) => (
                  <option value={team} key={team}>
                    {team}
                  </option>
                ))}
              </Select>
              <FormLabel mt={4}>Select your name</FormLabel>
              <Select
                backgroundColor="white"
                placeholder="Select your name"
                onChange={(e) => setSelectedName(e.target.value)}
              >
                {saMacSinhs
                  .filter((i) => i.team === selectedTeam)
                  .map((sms) => (
                    <option value={sms.name} key={sms.id}>
                      {sms.name}
                    </option>
                  ))}
              </Select>
            </Box>
          </Box>
          <Box w="100%" pt={2}>
            {selectedName !== "" && (
              <>
                <Text>Comments from your teammates:</Text>
                {saMacSinhs
                  .find((i) => i.name === selectedName)
                  .comments.map((comment, index) => (
                    <Text my={2} key={index}>{`"${comment}"`}</Text>
                  ))}
              </>
            )}
          </Box>
          <Box p={2}>
            <Text>
              Share this page URL with your teammates. Each person can view
              their own word cloud.
            </Text>
            {selectedName !== "" && (
              <>
                <Text my={2}></Text>
                <Button
                  colorScheme="cyan"
                  onClick={() => router.push("/storyline/finish")}
                >
                  Continue
                </Button>
              </>
            )}
          </Box>
        </Hud>
      </GameLayout>
    </>
  );
}
