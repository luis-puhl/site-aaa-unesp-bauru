import { SiteAaaUnespBauruPage } from './app.po';

describe('site-aaa-unesp-bauru App', () => {
  let page: SiteAaaUnespBauruPage;

  beforeEach(() => {
    page = new SiteAaaUnespBauruPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
