import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  //Custom hooks in react are just JS functions that begin with the prefix "use" & currency is a parameter passed to this custom hook. This parameter is expected to be a string representing the currency code.
  const [Data, setData] = useState({}); //Data here is an empty object as a currency will have multiple conversions. Eg: if currency is usd then it can be converted to inr, eur etc.
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) //Response is converted to JSON
      .then((res) => setData(res[currency]));
    /* After parsing, the currency key is extracted from the response object and passed to setData() to update the Data state. For example, if currency = "usd", then Data will be set to: 
    {
      "eur": 0.91,
      "inr": 83.23,
      "jpy": 150.12
    }*/

    console.log(Data);
  }, [currency]);
  console.log(Data);
  return Data;
}

export default useCurrencyInfo;
