import { Button } from "@material-tailwind/react";
import React, {
  createContext,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

export default function Products() {
  const [increaseNumber, setIncreaseNumber] = useState(0);

  const random = useMemo(() => {
    return Math.random();
  }, [increaseNumber]);
  return (
    <>
      <Button
        onClick={() => {
          setIncreaseNumber(increaseNumber + 1);
        }}
      >
        {increaseNumber}
      </Button>

      <p>{random}</p>
    </>
  );
}
