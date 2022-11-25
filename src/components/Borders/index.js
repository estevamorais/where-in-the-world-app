import "./index.scss";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Borders = ({ bordersStr }) => {
  const { data } = useFetch(
    `https://restcountries.com/v3.1/alpha?codes=${bordersStr}`
  );

  const [borders, setBorders] = useState();

  useEffect(() => {
    if (data) {
      const _borders = [];

      data.forEach((country) => {
        _borders.push({
          code: country.cca3,
          to: `/country/${country.cca3}/${country.name.common
            .toLowerCase()
            .replace(" ", "-")}`,
          name: country.name.common,
        });
      });

      setBorders(_borders);
    }
  }, [data]);

  return (
    <>
      {borders && (
        <div className="borders">
          <p>Border Countries:</p>
          <nav>
            {borders.map((country) => (
              <NavLink
                className="btn btn--sm"
                key={country.code}
                to={country.to}
              >
                <span>{country.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Borders;
