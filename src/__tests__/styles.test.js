import { media } from '../styles';
import theme from '../theme';

const medias = Object.keys(media);

it('media unit types', () => {
  expect(medias).toMatchSnapshot();
  expect(theme.responsive).toMatchSnapshot();
});
