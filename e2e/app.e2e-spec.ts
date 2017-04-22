import { AngularCroppiePage } from './app.po';

describe('angular-croppie App', () => {
  let page: AngularCroppiePage;

  beforeEach(() => {
    page = new AngularCroppiePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
