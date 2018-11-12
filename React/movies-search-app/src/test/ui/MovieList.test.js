import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviesList from '../../js/ui/MoviesList';

Enzyme.configure({ adapter: new Adapter() })

describe('ui', () => {
    it('MoviesList component renders correctly', () => {
        const props = {
            movies : ['hi','hello'],
            movieDes : jest.fn(),
            history : {}
        }
        const movieListComp = shallow(<MoviesList {...props} />);
        expect(movieListComp).toMatchSnapshot();
    }) 
})
