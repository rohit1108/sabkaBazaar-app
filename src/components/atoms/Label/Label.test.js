//import './Input';
//import { getByRole, screen} from '@testing-library/react';
import Label from './Label';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
//import { getAllJSDocTags } from 'typescript';

  it('renders the comp properly', () => {
    const divEl = document.createElement('div');
    ReactDOM.render(<Label />, divEl);
  });

