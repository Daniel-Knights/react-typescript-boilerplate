import React from 'react';
import styled from 'styled-components';
import Widget from './components/Widget';

const StyledApp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
`;

class App extends React.Component {
    render(): React.ReactNode {
        return (
            <StyledApp>
                <Widget />
            </StyledApp>
        );
    }
}

export default App;
