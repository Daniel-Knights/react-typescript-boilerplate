import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import type { WeatherData } from './types';

type Props = {
    weatherData: WeatherData | Record<string, undefined>;
};

const Container = styled.div<{ data: string }>`
    padding: 10px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    opacity: ${(props) => props.data};
    transition: opacity 0.2s;
`;

const WindDirection = styled.span<{ deg: number | undefined }>`
    font-size: 15px;
    transform: rotate(${(props) => props.deg}deg);
`;

class Display extends React.Component<Props> {
    static propTypes = {
        weatherData: PropTypes.object,
    };

    render(): React.ReactNode {
        const { name, main, weather, wind } = this.props.weatherData;

        return (
            <Container data={Object.keys(this.props.weatherData).length ? '1' : '0'}>
                <h1>{name}</h1>
                <p>Description: {weather ? weather[0].description : ''}</p>
                <p>Temperature: {main?.temp}°</p>
                <p>Humidity: {main?.humidity}%</p>
                <p>Pressure: {main?.pressure}hPa</p>
                <p>Wind-speed: {wind?.speed}km/h</p>
                <p>
                    Wind-direction: {wind?.deg}°{' '}
                    <WindDirection deg={wind?.deg} className="material-icons">
                        arrow_upward
                    </WindDirection>
                </p>
            </Container>
        );
    }
}

export default Display;
