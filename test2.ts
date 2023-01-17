interface IElData {
  readings: number,
  units: string,
  mode: string,
}

interface IWData {
  readings: number,
  units: string
}

const electricityUserData: IElData = {
  readings: 95,
  units: "kWt",
  mode: "double",
};

const waterUserData: IWData = {
  readings: 3,
  units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePayments = (
  { readings: elReadings, mode }: IElData,
  { readings: wReadings }: IWData,
  elRate: number,
  wRate: number
): void => {
  if (mode === "double" && elReadings < 50) {
    monthPayments[0] = elReadings * elRate * 0.7;
  } else {
    monthPayments[0] = elReadings * elRate;
  }

  monthPayments[1] = wReadings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
  [el, water]: number[],
  { readings: elReadings, units: elUnits }: IElData,
  { readings: wReadings, units: wUnits }: IWData
): string => {
  const text = `    Hello!
    This month you used ${elReadings} ${elUnits} of electricity
    It will cost: ${el}€
    
    This month you used ${wReadings} ${wUnits} of water
    It will cost: ${water}€`;

  return text;
};

console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));
