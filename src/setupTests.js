// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: function () {
        this.on = jest.fn();
        this.remove = jest.fn();
        this.addControl = jest.fn();
    },
    NavigationControl: jest.fn(),
}));