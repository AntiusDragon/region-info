import style from "./Country.module.css";

export function Counrty({ name, flags, population, region, capital }) {
  return (
    <div className={style.counrty}>
      <div className={style.fotoText}>
        <img className={style.foto} src={flags} alt="flags" />
        <div className={style.title}>{name}</div>
      </div>
      <div className={style.regionInfo}>
        <div className={style.description}>
          <p>Population:_ {population}</p>
          <p>Region:_ {region}</p>
          <p>Capital:_ {capital}</p>
        </div>
      </div>
    </div>
  );
}
