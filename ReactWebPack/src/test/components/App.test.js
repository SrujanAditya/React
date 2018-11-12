import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App,mapStateToProps} from '../../js/components/App';
import {store} from '../../js/store/store';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() })

describe('ui', () => {
    const props = {
        dataLength : 1
    }
    it('App component renders correctly with changing conditions', () => {
        const AppComp = shallow(<App {...props}/>);
        expect(AppComp).toMatchSnapshot();
        AppComp.setProps({
            dataLength : 0
        })
        expect(AppComp).toMatchSnapshot();
    }) 
})

describe('ui', () => {
    it('App component renders correctly with store', () => {
        const AppComp = shallow( <Provider store={store}><App /></Provider> )
        expect(AppComp).toMatchSnapshot();
    }) 
})

describe('testing map state to props and map dispatch to props', () => {
    const initialState = {
        data: [],
        movieData: [],
        resultsFound: 100,
        searchText: 'kill'
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

    it('testing map state to props : resultsFound', () => {
        expect(mapStateToProps(initialState).resultsFound).toEqual(100);
    });

    it('testing map state to props : searchText', () => {
        expect(mapStateToProps(initialState).searchText).toEqual('kill');
    });

    it('testing map state to props : movies', () => {
        expect(mapStateToProps(initialState).movies).toEqual([]);
    });
})
