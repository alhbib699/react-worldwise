import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";
const flagEmojiToPNG = (flag) => {
  if (!flag || typeof flag !== "string") return null;
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  if (countryCode.length !== 2) return null;
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${currentCity.id === id ? styles["cityItem--active"] : ""}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
         <span className={styles.emoji}>
          {emoji && emoji.length === 2 ? (
            <img 
              src={`https://flagcdn.com/24x18/${emoji.toLowerCase()}.png`} 
              alt="flag" 
            />
          ) : (
            flagEmojiToPNG(emoji)
          )}
        </span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
