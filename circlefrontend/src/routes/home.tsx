import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/store/slices/counter-slice";
import { Button, Text } from "@chakra-ui/react";

export function HomeRoute() {
  return (
    <>
      <Text color={"white"}>My Counter</Text>
      <Counter />
    </>
  );
}

function Counter() {
  const counter = useAppSelector((state) => state.counter.value);

  return (
    <>
      <Text color={"white"} fontSize={"2xl"}>
        {counter}
      </Text>
      <CounterIncrementButton />
      <CounterDecrementButton />
      <CounterIncrementByAmount value={109} />
    </>
  );
}

function CounterIncrementButton() {
  const dispatch = useAppDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(increment());
      }}
    >
      +
    </Button>
  );
}

function CounterDecrementButton() {
  const dispatch = useAppDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(decrement());
      }}
    >
      -
    </Button>
  );
}

function CounterIncrementByAmount({ value }: { value: number }) {
  const dispatch = useAppDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(incrementByAmount(value));
      }}
    >
      + By {value}
    </Button>
  );
}
