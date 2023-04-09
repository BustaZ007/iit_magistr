type TGreetings = "morning" | "day" | "evening" | "night";

function getGreeting(): TGreetings {
  const greetings: TGreetings[] = ["night", "morning", "day", "evening"];
  const timeOfDay = Math.trunc(new Date().getHours() / 6);
  return greetings[timeOfDay];
}

export default getGreeting;
