import { render } from '@testing-library/react';
import Home from './Home';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser';

jest.mock('@awesome-cordova-plugins/in-app-browser', () => ({
  InAppBrowser: {
    create: jest.fn(() => ({
      show: jest.fn(),
    })),
  },
}));

describe('Home', () => {
  it('should open the In-App Browser with the correct URL', () => {
    render(<Home />);
    expect(InAppBrowser.create).toHaveBeenCalledWith('https://topbarassist.reviewcenterphil.com/page/lawgpt');
  });
});
