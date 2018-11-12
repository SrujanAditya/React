import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MovieDesc,mapStateToProps} from '../../js/components/MovieDesc';

Enzyme.configure({ adapter: new Adapter() })

describe('ui', () => {
    const props = {
        fetchAndSetMovieData : jest.fn(),
        match : {
            params : {
                id : 24
            }
        }
    }

    it('MovieDesc component renders correctly', () => {
        const movieDescComp = shallow(<MovieDesc {...props}/>);
        expect(movieDescComp).toMatchSnapshot();
        movieDescComp.setProps({
            fetchAndSetMovieData : jest.fn(),
            match : {
                params : {
                    id : 25
                }
            }
        })
        expect(movieDescComp).toMatchSnapshot();
        movieDescComp.setProps({
            fetchAndSetMovieData : jest.fn(),
            match : {
                params : {
                    id : 25
                }
            },
            movieDataLength : 0,
            dataLength : 0
        })
        expect(movieDescComp).toMatchSnapshot();
    }) 
})


describe('testing map state to props and map dispatch to props', () => {
    const initialState = {
        data: [],
        movieData: [],
        searchText: 'kill',
        match : {
            params : {
                id : 24
            }
        }
    }

    it('testing map state to props : dataLength', () => {
        expect(mapStateToProps(initialState).dataLength).toEqual(0);
    });

    it('testing map state to props : movieDataLength', () => {
        expect(mapStateToProps(initialState).movieDataLength).toEqual(0);
    });

    it('testing map state to props : movieData', () => {
        expect(mapStateToProps(initialState).movieData).toEqual([]);
    });

    it('testing map state to props : searchText', () => {
        expect(mapStateToProps(initialState).searchText).toEqual('kill');
    });

    it('testing map state to props : movies', () => {
        expect(mapStateToProps(initialState).movies).toEqual([]);
    });
})

