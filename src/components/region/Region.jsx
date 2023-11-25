import { Counrty } from "../coubtry/Country";
import style from "./Region.module.css";

export function Region({ title, countries }) {
  return (
    <div className={style.region1}>
      <h2>{title}</h2>
      <div className={style.region2}>
        {countries.map((country, idx) => (
          <Counrty
            name={country.name.common}
            flags={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
    </div>
  );
}
