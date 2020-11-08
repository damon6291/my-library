import React from 'react';
import Format from '../../Format';

const js2 = `{
  "confirmed": {
    "value": 5102424,
    "detail": "https://covid19.mathdro.id/api/confirmed"
  },
  "recovered": {
    "value": 1948739,
    "detail": "https://covid19.mathdro.id/api/recovered"
  },
  "deaths": {
    "value": 332924,
    "detail": "https://covid19.mathdro.id/api/deaths"
  },
  "dailySummary": "https://covid19.mathdro.id/api/daily",
  "dailyTimeSeries": {
    "pattern": "https://covid19.mathdro.id/api/daily/[dateString]",
    "example": "https://covid19.mathdro.id/api/daily/2-14-2020"
  },
  "image": "https://covid19.mathdro.id/api/og",
  "source": "https://github.com/mathdroid/covid19",
  "countries": "https://covid19.mathdro.id/api/countries",
  "countryDetail": {
    "pattern": "https://covid19.mathdro.id/api/countries/[country]",
    "example": "https://covid19.mathdro.id/api/countries/USA"
  },
  "lastUpdate": "2020-05-22T02:36:51.000Z"
}`;

const js3 = `class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
}`;

const js4 = `const CountryPicker = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, [countries]);
}`;

const json = [
  {
    code: `import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = \`$ {url}/countries/$ {country}\`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifiedData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(\`$ {url}/daily\`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(\`$ {url}/countries\`);

    return countries.map((country) => country.name);
  } catch (error) {}
};
  `,
  },
  {
    language: 'json',
    code: js2,
  },
  {
    language: 'javascript',
    code: js3,
  },
  {
    language: 'javascript',
    code: js4,
  },
];

const Axios = () => {
  return <Format json={json} />;
};

export default Axios;
