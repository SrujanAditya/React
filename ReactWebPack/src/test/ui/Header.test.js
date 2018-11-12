import React from 'react';
import Enzyme, { shallow , mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Header from '../../js/ui/Header';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        fetchData : jest.fn()
    }
    const enzymeWrapper = shallow(<Header {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

describe('ui', () => {
  describe('Header', () => {
    const { enzymeWrapper } = setup();

    enzymeWrapper.find("#titleBtn").simulate("click");

    it('check title button click and color changed to red', () => { 
        expect(enzymeWrapper.instance().bgColorTitle).toEqual("red");
        expect(enzymeWrapper.instance().bgColorGenre).toEqual("grey");
    })
  })
}) 

describe('ui', () => {
    describe('Header', () => {
      const { enzymeWrapper } = setup();
  
      enzymeWrapper.find("#genreBtn").simulate("click");
  
      it('check genre button click and color changed to red', () => { 
          expect(enzymeWrapper.instance().bgColorTitle).toEqual("grey");
          expect(enzymeWrapper.instance().bgColorGenre).toEqual("red");
      })
    })
}) 

describe('ui', () => {
    describe('Header', () => {
       const { props } = setup();
        const wrapper = mount(<Header {...props} />);
      it('check Submit button click', () => { 
        const spy = jest.spyOn(wrapper.instance(), 'onSubmit');
        wrapper.update();
        wrapper.find(".searchButton").simulate('click');
        expect(spy).not.toHaveBeenCalled();
      })
    })
})

describe('ui', () => {
    describe('Header', () => {
       const { props } = setup();
        const wrapper = mount(<Header {...props} />);
      it('check Enter function called on clicking enter key', () => { 
        const spy = jest.spyOn(wrapper.instance(), 'checkEnter');
        wrapper.update();
        wrapper.find(".searchBox").simulate('keypress',{key:'Enter'});
        expect(spy).not.toHaveBeenCalled();
      })
    })
})

describe('ui', () => {
    describe('Header', () => {
       const { props } = setup();
        const wrapper = mount(<Header {...props} />);
      it('check Enter function called on clicking A letter key', () => { 
        const spy = jest.spyOn(wrapper.instance(), 'checkEnter');
        wrapper.update();
        wrapper.find(".searchBox").simulate('keypress',{key:'A'});
        expect(spy).not.toHaveBeenCalled();
      })
    })
})

describe('ui', () => {
    describe('Header', () => {
       const { props } = setup();
        const wrapper = mount(<Header {...props} />);
      it('check searchTextChange function called on text change in search box', () => { 
        const spy = jest.spyOn(wrapper.instance(), 'searchTextChange');
        wrapper.update();
        wrapper.find(".searchBox").simulate('change',{target:{value:'kill'}});
        expect(spy).not.toHaveBeenCalled();
      })
    })
})

describe('ui', () => {
    it('Header component renders correctly', () => {
        const HeaderComp = renderer.create(<Header />).toJSON();
        expect(HeaderComp).toMatchSnapshot();
    }) 
})
