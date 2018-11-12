import React from 'react';
import Footer from '../../js/ui/Footer';
import renderer from 'react-test-renderer';

describe('ui', () => {
    it('Footer component renders correctly', () => {
        const FooterComp = renderer.create(<Footer/>).toJSON();
        expect(FooterComp).toMatchSnapshot();
    }) 
})
