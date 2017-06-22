import { MyServicesPage } from './app.po';

describe('my-services App', () => {
  let page: MyServicesPage;

  beforeEach(() => {
    page = new MyServicesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
