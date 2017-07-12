import { AngularCroppieModulePage } from './app.po';

describe('angular-croppie-module App', () => {
  let page: AngularCroppieModulePage;

  beforeEach(() => {
    page = new AngularCroppieModulePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
