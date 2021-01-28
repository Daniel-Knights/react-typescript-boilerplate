import React, { FormEvent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

type Props = {
    onLocationInput: (value: string) => void;
    onLocationSubmit: () => void;
};

type State = {
    error: boolean;
};

const FormContainer = styled.form`
    display: flex;
    padding: 10px;

    input {
        font-family: 'Yusei Magic', sans-serif;
    }
`;

const StyledInput = styled.input<{ error: boolean }>`
    padding: 15px 10px;
    width: 90%;
    font-size: 18px;
    box-shadow: ${(props) => (props.error ? '0 0 0 5px rgba(255, 0, 0, 0.5)' : 'none')};
    border: ${(props) => (props.error ? '1px solid rgba(255, 0, 0)' : '1px solid rgba(0, 0, 0, 0.5)')};
    border-radius: 5px 0 0 5px;
    transition: box-shadow 0.2s;
`;

const StyledSubmit = styled.input`
    padding: 10px;
    font-size: 15px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-left: none;
    border-radius: 0 5px 5px 0;
`;

class Search extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            error: false,
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static propTypes = {
        onLocationInput: PropTypes.func.isRequired,
        onLocationSubmit: PropTypes.func.isRequired,
    };

    handleInput(e: FormEvent<HTMLInputElement>): void {
        this.props.onLocationInput((e.target as HTMLInputElement).value);
    }

    handleSubmit(e: FormEvent<HTMLFormElement>): void {
        const form = e.target as HTMLFormElement;
        const input = form.children[0] as HTMLInputElement;

        e.preventDefault();

        if (!input.value) {
            this.setState({ error: true });
            return;
        } else this.setState({ error: false });

        this.props.onLocationSubmit();
    }

    render(): React.ReactNode {
        return (
            <FormContainer onSubmit={this.handleSubmit}>
                <StyledInput error={this.state.error} onInput={this.handleInput} placeholder="Enter a location..." />
                <StyledSubmit type="submit" value="SEARCH" />
            </FormContainer>
        );
    }
}

export default Search;
