import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { getCurrentTime } from "../../helpers";

export function TimeModule() {
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Text px="6" py="1" fontSize="sm">
      {currentTime}
    </Text>
  );
}
