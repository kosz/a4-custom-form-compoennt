import { FormComponentPage } from './app.po';

describe('form-component App', () => {
  let page: FormComponentPage;

  beforeEach(() => {
    page = new FormComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
