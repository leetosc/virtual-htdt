import React, { useState, createContext, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Text, Button, SimpleGrid, Code } from "@chakra-ui/react";
import GameLayout from "@/components/Layouts/GameLayout";
import Hud from "@/components/Hud/Hud";
import axios from "axios";
import InventoryItem from "@/components/InventoryItem/InventoryItem";
import InventoryItemDraggable from "@/components/InventoryItem/InventoryItemDraggable";
import { useAppState } from "@/context/state";
import BoxTarget from "@/components/BoxTarget/BoxTarget";
import { usePreview } from "react-dnd-multi-backend";
import { CORRECT_ANSWERS, RESPONSE_TYPES } from "../../utils/kitchen";
import isEqual from "lodash/isEqual";

export const CardContext = createContext({
  updateLocation: null,
  checkAnswer: null,
});

const generatePreview = (item, style) => {
  return (
    <div
      style={{
        ...style,
        backgroundColor: item.color,
        width: "250px",
        height: "50px",
        whiteSpace: "nowrap",
      }}
    >
      <InventoryItem name={item.name} image={item.image} />
    </div>
  );
};

const HookPreview = () => {
  const { display, style, item } = usePreview();
  if (!display) {
    return null;
  }
  return generatePreview(item, style);
};

export default function Kitchen() {
  const router = useRouter();
  const { appState } = useAppState();
  const [ingredientsList, setIngredientsList] = useState(
    appState.inventory.map((item) => ({
      name: item.name,
      image: item.image,
      id: item.name,
      locations: [],
    }))
  );

  const [showAnswer, setShowAnswer] = useState(false);
  const [cookAttempts, setCookAttempts] = useState(0);
  const [cookedCorrect, setCookedCorrect] = useState({
    pho: false,
    bbh: false,
    banhbeo: false,
    banhxeo: false,
    banhmi: false,
  });

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get("https://dbdev.ga/teams").then((res) => {
      const teamList = res.data.map((team) => ({
        name: team.Name,
        id: team.id,
      }));
      setTeams(teamList);
    });
  }, []);

  const updateLocation = (id, location) => {
    const itemIndex = ingredientsList.findIndex((i) => i.id === id);
    const newIngredientsList = [...ingredientsList];
    newIngredientsList[itemIndex].locations.push(location);
    setIngredientsList(newIngredientsList);
    setCookedCorrect((prevState) => ({
      ...prevState,
      [location]: false,
    }));
  };

  const removeLocation = (id, location) => {
    const itemIndex = ingredientsList.findIndex((i) => i.id === id);
    const newIngredientsList = [...ingredientsList];
    const newLocations = newIngredientsList[itemIndex].locations.filter(
      (i) => i !== location
    );
    newIngredientsList[itemIndex].locations = newLocations;
    setIngredientsList(newIngredientsList);
    setCookedCorrect((prevState) => ({
      ...prevState,
      [location]: false,
    }));
  };

  const checkAnswer = (location) => {
    // constants defined in utils/kitchen.js
    const itemsAtLocation = ingredientsList.filter((i) =>
      i.locations.includes(location)
    );
    setCookAttempts(cookAttempts + 1);

    // too many or too few items
    if (itemsAtLocation.length > CORRECT_ANSWERS[location].length) {
      setCookedCorrect((prevState) => ({
        ...prevState,
        [location]: false,
      }));

      return RESPONSE_TYPES.tooHigh;
    }
    if (itemsAtLocation.length < CORRECT_ANSWERS[location].length) {
      setCookedCorrect((prevState) => ({
        ...prevState,
        [location]: false,
      }));

      return RESPONSE_TYPES.tooLow;
    }
    // correct number of items
    if (itemsAtLocation.length === CORRECT_ANSWERS[location].length) {
      const itemNames = itemsAtLocation.map((i) => i.name);
      console.log("items", itemNames.sort());
      console.log("correct", CORRECT_ANSWERS[location].sort());
      if (isEqual(itemNames.sort(), CORRECT_ANSWERS[location].sort())) {
        setCookedCorrect((prevState) => ({
          ...prevState,
          [location]: true,
        }));
        return RESPONSE_TYPES.correct;
      } else {
        setCookedCorrect((prevState) => ({
          ...prevState,
          [location]: false,
        }));

        return RESPONSE_TYPES.incorrectItems;
      }
    }
  };

  return (
    <CardContext.Provider value={{ updateLocation, checkAnswer }}>
      <>
        <GameLayout>
          <Box
            w="100%"
            h="100%"
            backgroundColor="gray.800"
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
              w="100%"
            >
              <HookPreview />
              <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3, xl: 3 }}
                spacing={4}
              >
                <BoxTarget
                  food="pho"
                  foodName={`Pho (${
                    ingredientsList.filter((i) => i.locations.includes("pho"))
                      .length
                  }/10)`}
                  image="/food/phoimage.jpeg"
                >
                  {ingredientsList.length > 0 &&
                    ingredientsList
                      .filter((i) => i.locations.includes("pho"))
                      .map(({ id, name, image }) => (
                        <InventoryItemDraggable
                          key={id}
                          id={id}
                          name={name}
                          image={image}
                          showButton
                          location={"pho"}
                          removeLocation={removeLocation}
                        />
                      ))}
                </BoxTarget>
                <BoxTarget
                  food="bbh"
                  foodName={`Bun Bo Hue (${
                    ingredientsList.filter((i) => i.locations.includes("bbh"))
                      .length
                  }/11)`}
                  image="/food/bbh.jpg"
                >
                  {ingredientsList.length > 0 &&
                    ingredientsList
                      .filter((i) => i.locations.includes("bbh"))
                      .map(({ id, name, image }) => (
                        <InventoryItemDraggable
                          key={id}
                          id={id}
                          name={name}
                          image={image}
                          showButton
                          location={"bbh"}
                          removeLocation={removeLocation}
                        />
                      ))}
                </BoxTarget>
                <BoxTarget
                  food="banhbeo"
                  foodName={`Banh Beo (${
                    ingredientsList.filter((i) =>
                      i.locations.includes("banhbeo")
                    ).length
                  }/5)`}
                  image="/food/banhbeo.jpg"
                >
                  {ingredientsList.length > 0 &&
                    ingredientsList
                      .filter((i) => i.locations.includes("banhbeo"))
                      .map(({ id, name, image }) => (
                        <InventoryItemDraggable
                          key={id}
                          id={id}
                          name={name}
                          image={image}
                          showButton
                          location={"banhbeo"}
                          removeLocation={removeLocation}
                        />
                      ))}
                </BoxTarget>
                <BoxTarget
                  food="banhxeo"
                  foodName={`Banh Xeo (${
                    ingredientsList.filter((i) =>
                      i.locations.includes("banhxeo")
                    ).length
                  }/7)`}
                  image="/food/banhxeo.jpg"
                >
                  {ingredientsList.length > 0 &&
                    ingredientsList
                      .filter((i) => i.locations.includes("banhxeo"))
                      .map(({ id, name, image }) => (
                        <InventoryItemDraggable
                          key={id}
                          id={id}
                          name={name}
                          image={image}
                          showButton
                          location={"banhxeo"}
                          removeLocation={removeLocation}
                        />
                      ))}
                </BoxTarget>
                <BoxTarget
                  food="banhmi"
                  foodName={`Banh Mi (${
                    ingredientsList.filter((i) =>
                      i.locations.includes("banhmi")
                    ).length
                  }/5)`}
                  image="/food/banhmi.jpg"
                >
                  {ingredientsList.length > 0 &&
                    ingredientsList
                      .filter((i) => i.locations.includes("banhmi"))
                      .map(({ id, name, image }) => (
                        <InventoryItemDraggable
                          key={id}
                          id={id}
                          name={name}
                          image={image}
                          showButton
                          location={"banhmi"}
                          removeLocation={removeLocation}
                        />
                      ))}
                </BoxTarget>
              </SimpleGrid>
            </Box>
          </Box>

          <Hud>
            <Box whiteSpace="pre-line">
              <Box>
                <Text>
                  Prepare the foods from the ingredients you collected. Remember
                  the advice people gave you during your journey!
                </Text>
                <Text mt={6}>Cook attempts: {cookAttempts}</Text>

                {appState.SHOW_ANSWERS && (
                  <Box display="flex" flexDir="column">
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        setShowAnswer(!showAnswer);
                      }}
                    >
                      Show Answer
                    </Button>
                    {showAnswer && (
                      <Code p={2}>
                        <pre>{JSON.stringify(CORRECT_ANSWERS, null, 2)}</pre>
                      </Code>
                    )}
                  </Box>
                )}
              </Box>
            </Box>
            <Box w="100%" pt={2}>
              <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={1}>
                {ingredientsList.length > 0 &&
                  ingredientsList.map((i) => (
                    <InventoryItemDraggable
                      key={i.id}
                      name={i.name}
                      image={i.image}
                      id={i.id}
                    />
                  ))}
              </SimpleGrid>
            </Box>
            <Box p={2}>
              <>
                <Text my={2}></Text>
                <Button
                  colorScheme="cyan"
                  disabled={Object.values(cookedCorrect).some(
                    (i) => i === false
                  )}
                  onClick={() => {
                    console.log("correct answers");
                    // send tries count to server
                    axios
                      .put(
                        `https://dbdev.ga/teams/${
                          teams.find((i) => i.name === appState.team).id
                        }`,
                        {
                          cookAttempts: cookAttempts,
                        }
                      )
                      .then((res) => {
                        console.log(res.data);
                        router.push("/htdt/42-uncle");
                      })
                      .catch((error) => {
                        console.log("error", error);
                        router.push("/htdt/42-uncle");
                      });
                  }}
                >
                  Submit Dishes
                </Button>
                {showAnswer && appState.SHOW_ANSWERS && (
                  <Button
                    colorScheme="red"
                    onClick={() => {
                      console.log("correct answers");
                      // send tries count to server
                      axios
                        .put(
                          `https://dbdev.ga/teams/${
                            teams.find((i) => i.name === appState.team).id
                          }`,
                          {
                            cookAttempts: cookAttempts,
                          }
                        )
                        .then((res) => {
                          console.log(res.data);
                          router.push("/htdt/42-uncle");
                        })
                        .catch((error) => {
                          console.log("error", error);
                          router.push("/htdt/42-uncle");
                        });
                    }}
                  >
                    Skip and Submit
                  </Button>
                )}
              </>
            </Box>
          </Hud>
        </GameLayout>
      </>
    </CardContext.Provider>
  );
}
