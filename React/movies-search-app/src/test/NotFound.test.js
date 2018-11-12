import React from 'react';
import NotFound from '../../src/NotFound';
import renderer from 'react-test-renderer';

describe('ui', () => {
    it('NotFound component renders correctly', () => {
        const notFoundComp = renderer.create(<NotFound />).toJSON();
        expect(notFoundComp).toMatchSnapshot();
    }) 
})
