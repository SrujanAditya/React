import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import SubHeader from '../../js/ui/SubHeader';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        updateMovies : jest.fn()
    }
    const enzymeWrapper = shallow(<SubHeader {...props}/>)

    return {
        enzymeWrapper
    }
}

describe('ui', () => {
  describe('SubHeader', () => {
    const { enzymeWrapper } = setup();

    enzymeWrapper.find("#release_date").simulate("click");

    it('check release_date button click and color changed to red', () => { 
        expect(enzymeWrapper.instance().dateColor).toEqual("red");
        expect(enzymeWrapper.instance().ratingColor).toEqual("grey");
    })
  })
}) 

describe('ui', () => {
    describe('SubHeader', () => {
        const { enzymeWrapper } = setup();
    
        enzymeWrapper.find("#rating").simulate("click");

        it('check rating button click and color changed to red', () => { 
            expect(enzymeWrapper.instance().ratingColor).toEqual("red");
        })
    })
})

describe('ui', () => {
    it('SubHeader component renders correctly', () => {
        const subHeaderComp = renderer.create(<SubHeader />).toJSON();
        expect(subHeaderComp).toMatchSnapshot();
    }) 
})
