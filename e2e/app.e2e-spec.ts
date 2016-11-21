import { NumericPage } from './app.po';

describe('numeric App', function() {
  let page: NumericPage;

  beforeEach(() => {
    page = new NumericPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
