import { render, screen } from '../../../utils/testUtils';
import { describe, it } from 'vitest';
import Scorecard from '../index';

describe('<Scorecard />', () => {
  it('Renders empty Scorecard', async () => {
    render(<Scorecard />);

    await screen.findByText('components.scorecard.fields.classic.Ones');
  });
});
