import { useCounterStore } from "@/store/counter";
import { Button, Text } from "@chakra-ui/react";

export function CounterRoute() {
  const { counter, increment, decrement, reset, incrementByAmount, decrementByAmount } = useCounterStore(
    (state) => state
  );

  return (
    <>
      <Text color={"white"} fontSize={"2xl"}>
        {counter}
      </Text>
      <Button
        onClick={() => increment()}
        colorScheme="teal"
        backgroundColor={"brand.primary"}
      >
        +
      </Button>
      <Button
        onClick={() => decrement()}
        colorScheme="teal"
        backgroundColor={"brand.primary"}
      >
        -
      </Button>
      <Button
        onClick={() => incrementByAmount(50)}
        colorScheme="teal"
        backgroundColor={"brand.primary"}
      >
        Add By 50
      </Button>
      <Button
        onClick={() => decrementByAmount(50)}
        colorScheme="teal"
        backgroundColor={"brand.primary"}
      >
        Decrease By 50
      </Button>
      <Button
        onClick={() => reset()}
        colorScheme="teal"
        backgroundColor={"brand.primary"}
      >
        Reset Value
      </Button>
    </>
  );
}
