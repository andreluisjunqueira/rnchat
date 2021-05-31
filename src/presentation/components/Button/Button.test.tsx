import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '../../../theme';
import Button from './';

jest.useFakeTimers();

const renderButton = (text: string, params: any = {}) => (
    <ThemeProvider theme={theme}>
        <Button label={text} {...params} />
    </ThemeProvider >
)

describe('Button', () => {
    test('should render a label if is isLoading is false', () => {
        const buttonLabel = 'test-label'

        const { queryByText } = render(renderButton('test-label'));
        const foundButton = queryByText(buttonLabel);
        expect(foundButton).toBeTruthy();

        expect.assertions(1);
    });

    test('should not render a label if is isLoading is true', () => {
        const buttonLabel = 'test-label'
        const { queryByText } = render(renderButton('test-label', { isLoading: true }));
        const foundButton = queryByText(buttonLabel);

        expect(foundButton).toBeFalsy();
        expect.assertions(1);
    });

    test('should render a correct label text ', () => {
        const buttonLabel = 'test-label'

        const { queryByText } = render(renderButton('test-label'));
        const foundButton = queryByText(buttonLabel);
        expect(foundButton.props.children).toBe(buttonLabel);

        expect.assertions(1);
    });


    test('should render an loading indicator if isloading is true', () => {
        const loadingId = 'loading'
        const { queryByTestId } = render(renderButton('', { isLoading: true }));
        const foundLoading = queryByTestId(loadingId);

        expect(foundLoading).toBeTruthy();
        expect.assertions(1);
    });

    test('should not render an loading indicator if isloading is false', () => {
        const loadingId = 'loading'
        const { queryByTestId } = render(renderButton('', { isLoading: false }));
        const foundLoading = queryByTestId(loadingId);

        expect(foundLoading).toBeFalsy();
        expect.assertions(1);
    });

    test('should call onPress function on pressed', () => {
        const buttonLabel = 'test-label'

        const mockOnPress = jest.fn();

        const { queryByText } = render(renderButton('test-label', { onPress: mockOnPress }));
        const foundButton = queryByText(buttonLabel);
        fireEvent(foundButton, 'onPress');

        expect(mockOnPress).toHaveBeenCalled();

        expect.assertions(1);
    });
})