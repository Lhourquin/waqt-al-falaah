import React, { Component } from "react";
import { NavBar } from "./components/navbar/NavBar";
import { SearchBar } from "./components/search-bar/SearchBar";
import NavBarTodayAndMounth from "./components/Homepage-components/navbar-today-mounth/NavBarTodayAndMounth";
import { Calendar } from "./components/Homepage-components/calendar-components/Calendar";
import { Today } from "./components/Homepage-components/today-components/Today";
import { Routes, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputCityValue: "",
      inputCountryValue: "",
      city: "",
      country: "",
      method: [
        {
          methodTwo: {
            value: 2,
            stringValue: "Amérique du Nord (15°)",
          },
        },
        {
          methodFifteen: {
            value: 15,
            stringValue: "Comité d'observation de la lune",
          },
        },
      ],
      selectedMethod :"",
      errorMessageLocation: "",
    };
  }

  componentDidMount() {
    this.intervalApiCall = setInterval(() =>
      this.requestDataPosition.bind(this)
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalApiCall);
  }

  requestDataPosition() {
    navigator.geolocation.getCurrentPosition(
      this.getPosition.bind(this),
      this.notGetPosition.bind(this)
    );
  }

  getPosition(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=fr`
    )
      .then((response) => response.json())
      .then((data) => {
        if (this.state.city === "" && this.state.country === "") {
          this.setState({ city: data.city });
          this.setState({ country: data.countryName });
        }
      });

    this.setState({ errorMessageLocation: "" });
  }

  notGetPosition() {
    this.setState({
      errorMessageLocation:
        "Nous n'avons pas pu avoir accées à votre localisation.",
    });
    setTimeout(() => {
      this.setState({ errorMessageLocation: "" });
    }, 5000);
  }

  render() {
    {
      console.log(" selectedMethod : "  + this.state.selectedMethod);
      console.log(this.state.method[0].methodTwo.stringValue);
    }
    return (
      <>
        <header>
          <NavBar />

          <SearchBar
            inputCity={this.state.inputCityValue}
            inputCountry={this.state.inputCountryValue}
            getPosition={this.requestDataPosition.bind(this)}
            handleChangeInputCityValue={(e) =>
              this.setState({ inputCityValue: e.target.value })
            }
            handleChangeInputCountryValue={(e) =>
              this.setState({ inputCountryValue: e.target.value })
            }
            handleSubmitValue={(event) => {
              event.preventDefault();

              if (
                this.state.inputCityValue === "" ||
                this.state.inputCountryValue === ""
              ) {
                this.setState({ city: "" });
                this.setState({ country: "" });
              } else {
                this.setState({ city: this.state.inputCityValue });
                this.setState({ country: this.state.inputCountryValue });
                setTimeout(() => {
                  this.setState({ inputCityValue: "" });
                  this.setState({ inputCountryValue: "" });
                }, 1000);
              }
            }}
          />
        </header>
        <div style={{ textAlign: "center", color: "#bc4749" }}>
          {this.state.errorMessageLocation}
        </div>
        <NavBarTodayAndMounth />

        <Routes>
          <Route
            path="/"
            element={
              <Today
                city={this.state.city}
                country={this.state.country}
                method={this.state.method}
                getAngleOptionValue={(event) =>
                  this.setState({ selectedMethod: event.target.value })
                }
                selectedMethod={this.state.selectedMethod}
              />
            }
          />
          <Route
            path="/calendar"
            element={
              <Calendar
                city={this.state.city}
                country={this.state.country}
                method={this.state.method}
                getAngleOptionValue={(event) =>
                  this.setState({ method: event.target.value })
                }
              />
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
