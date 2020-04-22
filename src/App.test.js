import React from 'react';
import {render} from '@testing-library/react';
import ReactDOM from 'react-dom';
import MainApp from './App';

test('renders learn react link', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainApp/>, div);
    ReactDOM.unmountComponentAtNode(div);

    // const { getByText } = render(<MainApp />);
    // const linkElement = getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});
