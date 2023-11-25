import style from "./Main.module.css";
import { Region } from "../region/Region";
import { useState, useEffect } from "react";

export function Main() {
  const [data, setData2] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((resData) => setData2(resData))
      .catch((err) => setIsError(true));
  }, []);
  console.log(data);

  const region = [];

  for (const country of data) {
    if (!region.includes(country.region)) {
      region.push(country.region);
    }
  }
  console.log(region);

  function RegionF(params) {}
  return (
    <main className={style.main}>
      <div className={style.regionFilter}>
        <div className={style.filter}>paiuesska</div>
        <div className={style.regionList}>filter</div>
      </div>
      
      <div className={style.region}>
        {region.map((region, idx) => (
          <Region 
            countries={data.filter(country => country.region === region)}
            title={region}
          />
        ))}
      </div>
    </main>
  );
}
