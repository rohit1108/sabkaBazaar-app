import ReactDOM from 'react-dom';
import Logo from './Logo';

  it('renders the comp properly', () => {
    const divEl = document.createElement('div');
    ReactDOM.render(<Logo />, divEl);
  });

