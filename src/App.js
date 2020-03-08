import React from "react";
import ReactDOM from "react-dom";
import HookForm from "./HookForm";
import { Heading, Box, Button } from "@chakra-ui/core";

function App() {
  return (
    <Box p={4} background={"white"}>
      <Heading>Heading 1</Heading>
      <HookForm />
      <br />
      <Button borderRadius={"sm"} boxShadow={"xl"}>
        Submit
      </Button>

      <br />
      <br />
      <br />

      <Box bg="tomato" w="100%" borderRadius={"sm"} p={4} color="white">
        This is the Box
      </Box>
    </Box>
  );
}
export default App;
