import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    position: fixed;
    bottom: 20px;
    right: 25px;
    padding: 0 40px;
    color: #fff;
    background-color: rgba(255, 0, 0, 0.8);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    animation: toast-in 0.2s, toast-in 0.2s 4.8s reverse;

    @keyframes toast-in {
        from {
            transform: translateY(100%);
            opacity: 0;
        }
    }
`;

class Toast extends React.Component<{ errorMsg: string }> {
    static propTypes = {
        errorMsg: PropTypes.string.isRequired,
    };

    render(): React.ReactNode {
        return (
            <Container>
                <p>{this.props.errorMsg}</p>
            </Container>
        );
    }
}

export default Toast;
