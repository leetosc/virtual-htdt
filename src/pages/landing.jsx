import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Box,
  Text,
  Button,
  Select,
  Code,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Typist from "react-typist";
import Link from "next/link";
import { useAppState } from "@/context/state";
import axios from "axios";

export default function Landing() {
  const [typingDone, setTypingDone] = useState(false);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get("https://dbdev.ga/teams").then((res) => {
      const teamList = res.data.map((team) => team.Name);
      setTeams(teamList);
    });
  }, []);

  const { appState, setTeam } = useAppState();

  return (
    <Box
      w="100%"
      minH="100vh"
      backgroundColor="gray.900"
      textColor="white"
      display="flex"
      pt={14}
    >
      <Head>
        <title>Virtual HTDT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box px={8} py={4} fontSize="xl" w="100%">
        <Text fontSize="lg" mb={2}>
          Select Team
        </Text>
        <Select
          color="black"
          mb={4}
          backgroundColor="white"
          placeholder="Select your team"
          onChange={(e) => setTeam(e.target.value)}
          maxW={64}
        >
          {teams.map((team) => (
            <option value={team} key={team}>
              {team}
            </option>
          ))}
        </Select>

        <Typist
          cursor={{ hideWhenDone: true, blink: true }}
          avgTypingDelay={5}
          onTypingDone={() => setTypingDone(true)}
        >
          Welcome to Virtual Camp 2021 Hanh Trinh Duc Tin!
          <Typist.Delay ms={500} />
          <br />
          <br />
          Are you ready to begin your journey?
          <br />
          <br />
          Get all team members into your team Discord channel.
          <br />
          <br />
          Note: This site is best viewed on a desktop.
          <Text fontWeight="semibold" fontSize="2xl" mt={2}>
            One person on your team will be the <b>main</b> player.
            <br />
            The main player will share their screen in the team Discord channel.
            <br />
            When needed, the main player can share the URL of the page they are
            on to the rest of the team to help find clues or solve puzzles, but
            the main player should only navigate using the buttons on the page.
          </Text>
          <Text fontWeight="bold" my={4} fontSize="2xl">
            Main player: Do NOT refresh the page or go back and forth using the
            browser back/forward buttons. ONLY navigate using the buttons on the
            page.
          </Text>
          <br />
          <br />
          <Text fontWeight="bold" my={4} fontSize="xl">
            If you need a hint,{" "}
            <ChakraLink
              href="https://veym.net/resources/prayers#cauxinchuathanhthan"
              isExternal
              textColor="blue.300"
              textDecoration="underline"
            >
              pray to the Holy Spirit
            </ChakraLink>
            . Then type <Code>!hint (message)</Code> in your team chat channel,
            and help will come. Include the page URL in the message.
          </Text>
          <br />
          <br />
          When everyone is ready, press Start to begin.
        </Typist>
        {appState.team !== "" && typingDone && (
          <Link href="/storyline/introduction">
            <Button
              colorScheme="cyan"
              textTransform="uppercase"
              size="lg"
              mt={4}
            >
              Start
            </Button>
          </Link>
        )}
        {appState.team !== "" && appState.SHOW_ANSWERS && (
          <Link href="/storyline/introduction">
            <Button
              colorScheme="red"
              textTransform="uppercase"
              size="lg"
              mt={4}
            >
              Start
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
}
