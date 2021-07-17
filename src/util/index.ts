export const adviceMap = (description: string): string => {
  const desc = description.toLocaleLowerCase();
  switch (desc) {
    case "clouds":
      return "It's cloudy. A chance for rain? Consider an umbrella.";
    case "rain":
      return "It's raining. Put on your raincoat. Don't forget your umbrella.";
    case "clear":
      return "It's clear out. Enjoy the day.";
    case "thunderstorm":
      return "A thunderstorm. Umbrella? Might want to stay inside.";
    default:
      return "Enjoy your day.";
  }
};
