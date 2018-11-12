import React from 'react';
import Enzyme, { shallow,mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieData from '../../js/ui/MovieData';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        movieData : {},
        history : {}
    }
    const enzymeWrapper = shallow(<MovieData {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

describe('ui', () => {
    describe('MovieData', () => {
        it('check on Click method called', () => { 
            const props = {
                movieData : {}
            }
            const historyMock = { replace: jest.fn(()=>console.log("CLICKED : History replace")) };
            const wrapper= shallow(<MovieData history={historyMock} {...props} />) 
            wrapper.find(".searchButton").simulate('click');
            expect(historyMock.replace.mock.calls.length).toBe(1);
        })
    })
})

describe('ui', () => {
    describe('MovieData', () => {
        it('check with other cases in conditional rendering in the container', () => { 
            const props = {
                movieData : {
                    vote_average : 0,
                    runtime : 195
                }
            }
            const movieDataComp = shallow(<MovieData {...props} />);
            expect(movieDataComp).toMatchSnapshot();
        })
    })
})

describe('ui', () => {
    it('MovieData component renders correctly', () => {
        const { props } = setup();

        const movieDataComp = shallow(<MovieData {...props} />);
        expect(movieDataComp).toMatchSnapshot();
    }) 
    
})
