import dotEnv from 'dotenv-safe';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

dotEnv.load();

Enzyme.configure({ adapter: new Adapter() });
