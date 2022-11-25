import "./index.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import Borders from "../../components/Borders";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const Country = () => {
  const { code } = useParams();

  const { data, loading, error } = useFetch(
    `https://restcountries.com/v3.1/alpha/${code}`
  );

  const [country, setCountry] = useState();

  const handleBack = () => {
    window.history.go(-1);
    return false;
  };

  useEffect(() => {
    const getInfo = (obj) => {
      let _obj = [];
      let keys = Object.keys(obj);

      keys.forEach((key) => {
        if (obj[key].hasOwnProperty("name")) {
          // Currencies
          _obj.push(obj[key].name);
        } else if (obj[key].hasOwnProperty("common")) {
          // NativeName
          _obj.push(obj[key].common);
        } else {
          // Languages
          _obj.push(obj[key]);
        }
      });

      return _obj.join(", ");
    };

    if (data) {
      const langs = data[0].languages;
      const currencies = data[0].currencies;
      const nativeName = data[0].name.nativeName;

      let infos = [
        ["Native Name", getInfo(nativeName)],
        ["Population", data[0].population],
        ["Region", data[0].region],
        ["Subregion", data[0].subregion],
        ["Capital", data[0].capital],
        ["Top Level Domain", data[0].tld],
        ["Currencies", getInfo(currencies)],
        ["Languages", getInfo(langs)],
      ];

      setCountry({ ...data[0], infos });
    }
  }, [data]);

  return (
    <div className="container">
      <div className="country">
        <button className="btn" onClick={handleBack}>
          <span>
            <ion-icon name="arrow-back-outline"></ion-icon> Back
          </span>
        </button>

        <Error error={error} />

        <Loading loading={loading} />

        {country && (
          <div className="country__data">
            <img
              className="country__flag"
              src={country.flags.svg}
              alt={country.name.common}
            />
            <div>
              <h1 className="country__name">{country.name.common}</h1>
              <ul className="country__info">
                {country.infos.map((info, i) => (
                  <li key={`info-${i}`}>
                    <span>{info[0]}: </span>
                    {info[1]}
                  </li>
                ))}
              </ul>
              {country.borders && (
                <Borders bordersStr={country.borders.join(",")} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;
