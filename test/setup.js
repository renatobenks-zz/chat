import dotEnv from 'dotenv-safe';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import './__mocks__/window';

dotEnv.load();

Enzyme.configure({ adapter: new Adapter() });
