export const celsiusToFahrenheit = (temp: number): number => {
  const f = temp * 1.8 + 32;
  return Math.round(f);
};

export const FahrenheitToCelsius = (temp: number): number => {
  const c = (temp - 32) / 1.8;
  return Math.round(c);
};
