import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Display from './Display';
import Search from './Search';
import Toast from './Toast';
import type { WeatherData } from './types';

type State = {
    search: string;
    weatherData: WeatherData | Record<string, undefined>;
    errorMsg: string;
};

const Container = styled.div`
    width: 500px;
    max-width: 90vw;
    text-align: center;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;

    span {
        color: #387eff;
    }
`;

class Widget extends React.Component<unknown, State> {
    constructor(props: unknown) {
        super(props);

        this.onLocationInput = this.onLocationInput.bind(this);
        this.onLocationSubmit = this.onLocationSubmit.bind(this);
    }

    state: State = {
        search: '',
        weatherData: {},
        errorMsg: '',
    };

    onLocationInput(value: string): void {
        this.setState({ search: value });
    }

    onLocationSubmit(): void {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&units=metric&appid=${process.env.REACT_APP_API_KEY}
        `,
            )
            .then((res) => {
                this.setState({ weatherData: res.data });
            })
            .catch((err) => {
                this.setState({ errorMsg: err.message });

                setTimeout(() => {
                    this.setState({ errorMsg: '' });
                }, 5000);
            });
    }

    render(): React.ReactNode {
        return (
            <Container>
                <Title>
                    <h1>Weather Search</h1>
                    <span className="material-icons">cloud</span>
                </Title>
                <Search onLocationInput={this.onLocationInput} onLocationSubmit={this.onLocationSubmit} />
                <Display weatherData={this.state.weatherData} />
                {this.state.errorMsg && <Toast errorMsg={this.state.errorMsg} />}
            </Container>
        );
    }
}

export default Widget;
