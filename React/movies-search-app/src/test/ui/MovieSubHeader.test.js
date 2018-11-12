import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import MovieSubHeader from '../../js/ui/MovieSubHeader';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    searchText: "Action"
  }

  const enzymeWrapper = shallow(<MovieSubHeader {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('ui', () => {
  describe('MovieSubHeader', () => {
    const { props } = setup();

    it('should check props', () => { 
      expect(props.searchText).toEqual("Action");
    })
  })
  
}) 

describe('ui', () => {
    it('MovieSubHeader component renders correctly', () => {
        const props =  {
            searchText: "Comedy"
        }
        const FooterComp = renderer.create(<MovieSubHeader {...props} />).toJSON();
        expect(FooterComp).toMatchSnapshot();
    }) 
})
