import { DocumentationCookBookPage } from './app.po';

describe('documentation-cook-book App', () => {
  let page: DocumentationCookBookPage;

  beforeEach(() => {
    page = new DocumentationCookBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
