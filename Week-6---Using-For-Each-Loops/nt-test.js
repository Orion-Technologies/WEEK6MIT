import createParagraph from './foreach';

describe('Testing createParagraph', function() {
    test('should return a single string', () => {
          let words = ['test','passed'];
        expect(createParagraph(words)).toEqual('test passed ');
    });
  });