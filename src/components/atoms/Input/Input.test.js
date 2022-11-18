import './Input';
//import { getByRole, screen} from '@testing-library/react';
import Input from './Input';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
//import { getAllJSDocTags } from 'typescript';

test('should have right Input comp snapshot', () => {
    const tree = renderer.create(<Input/>).toJSON();
    expect(tree).toMatchSnapshot();
    
  });

  it('renders the comp properly', () => {
    const divEl = document.createElement('div');
    ReactDOM.render(<Input />, divEl);
  });

