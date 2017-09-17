import { ThreesToKingsScorePage } from './app.po';

describe('threes-to-kings-score App', () => {
  let page: ThreesToKingsScorePage;

  beforeEach(() => {
    page = new ThreesToKingsScorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
