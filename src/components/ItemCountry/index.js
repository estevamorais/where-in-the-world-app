import "./index.scss";

import { NavLink } from "react-router-dom";

const ItemCountry = ({ country }) => {
  const to = `/country/${country.cca3}/${country.name.common
    .toLowerCase()
    .replaceAll(" ", "-")}`;

  return (
    <li className="item-country">
      <NavLink to={to}>
        <img
          className="item-country__flag"
          src={country.flags.svg}
          alt={country.name.common}
        />
        <div className="item-country__content">
          <h3 className="item-country__name">{country.name.common}</h3>
          <ul className="item-country__info">
            <li>
              <span>Population:</span> {country.population}
            </li>
            <li>
              <span>Region:</span> {country.region}
            </li>
            <li>
              <span>Capital:</span> {country.capital}
            </li>
          </ul>
        </div>
      </NavLink>
    </li>
  );
};

export default ItemCountry;
