import "./index.scss";

import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

import Select from "../../components/Select";
import InputSearch from "../../components/InputSearch";
import ItemCountry from "../../components/ItemCountry";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  const [countries, setCountries] = useState([]);
  const [countriesFiltred, setCountriesFiltred] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const handleFilterCountries = (e) => {
    const _search = e.target.name === "search" ? e.target.value : search;
    const _region = e.target.name === "region" ? e.target.value : region;

    const filtered = [];

    for (var i = 0; i < countries.length; i++) {
      if (
        countries[i].name.common
          .toLowerCase()
          .includes(_search.toLowerCase()) &&
        (!_region ||
          countries[i].region.toLowerCase() === _region.toLowerCase())
      ) {
        filtered.push(countries[i]);
      }
    }

    setSearch(_search);
    setRegion(_region);
    setCountriesFiltred(_search || _region ? filtered : countries);
  };

  // Sort countries by name
  useEffect(() => {
    if (data) {
      const ordenateCountries = data.sort((a, b) =>
        a.name.common > b.name.common ? 1 : -1
      );

      setCountries(ordenateCountries);
      setCountriesFiltred(ordenateCountries);
    }
  }, [data]);

  return (
    <div className="container">
      <div className="filters">
        <InputSearch
          name="search"
          value={search}
          onChange={handleFilterCountries}
          placeholder="Search for a country..."
        />

        <Select
          name="region"
          value={region}
          onChange={handleFilterCountries}
          options={[
            { value: "", label: "All Regions" },
            { value: "Africa", label: "Africa" },
            { value: "Americas", label: "Americas" },
            { value: "Asia", label: "Asia" },
            { value: "Europe", label: "Europe" },
            { value: "Oceania", label: "Oceania" },
          ]}
        />
      </div>

      <div className="list">
        <Error error={error} />

        <Loading loading={loading} />

        {Object.keys(countriesFiltred).length !== 0 ? (
          <ul className="list__items">
            {countriesFiltred.map((country, i) => (
              <ItemCountry key={`country-${i}`} country={country} />
            ))}
          </ul>
        ) : (
          <Error
            error={
              search
                ? `No countries found for "${search}"` +
                  (region ? ` in the "${region}"` : "")
                : ""
            }
          />
        )}
      </div>
    </div>
  );
};

export default Home;
