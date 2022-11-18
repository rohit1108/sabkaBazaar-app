import renderer from 'react-test-renderer'
import Anchor from './Anchor';
import ReactDOM from 'react-dom';

test('it should have right anchor component snapshot', () => {
    const tree = renderer.create(<Anchor/>).toJSON();
    expect(tree).toMatchSnapshot();
    
  });
  it('renders the comp properly', () => {
    const divEl = document.createElement('div');
    ReactDOM.render(<Anchor />, divEl);
  });

