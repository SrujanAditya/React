import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieComp from '../../js/ui/MovieComp';

Enzyme.configure({ adapter: new Adapter() })

describe('ui', () => {
    it('MovieComp component renders correctly', () => {
        const props = {
            poster_path:'',
            id:'',
            title:'',
            genres:['a','b'],
            release_date:'',
            onClick: jest.fn(),
            history : {}
        }
        const movieListComp = shallow(<MovieComp {...props} />);
        expect(movieListComp).toMatchSnapshot();
    }) 
})

describe('ui', () => {
    it('MovieComp test history push on click', () => {
        const props = {
            poster_path:'',
            id:'',
            title:'',
            genres:['a','b'],
            release_date:'',
            onClick:jest.fn()
        }
        const historyMock = { push : jest.fn(()=>console.log("CLICKED : History push")) };
        const wrapper= shallow(<MovieComp history={historyMock} {...props} />) 
        
        wrapper.find(".movieBlock").simulate("click");

        expect(historyMock.push.mock.calls.length).toBe(1);
    }) 
})
