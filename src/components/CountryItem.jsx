import styles from "./CountryItem.module.css";

const flagEmojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};



function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}>
                {country.emoji && country.emoji.length === 2 ? (
                  <img 
                    src={`https://flagcdn.com/24x18/${country.emoji.toLowerCase()}.png`} 
                    alt="flag" 
                  />
                ) : (
                  flagEmojiToPNG(country.emoji)
                )}
              </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
