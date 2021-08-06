const { expect } = chai;

describe('concertFlyer', function () {
  it('should return true if given the strings "hello world" and "hello"', function () {
    const magazine = 'hello world';
    const flyer = 'hello';

    const result = concertFlyer(magazine, flyer);

    expect(result).to.eql(true);
  });

  it('should return true if given the strings "Why are there so many songs about rainbows?" and "so many songs"', function () {
    const magazine = 'Why are there so many songs about rainbows?';
    const flyer = 'so many songs';

    const result = concertFlyer(magazine, flyer);

    expect(result).to.eql(true);
  });

  it('should return true if given the strings "Give me one grand today night" and "Give one grand today"', function () {
    const magazine = 'Give me one grand today night';
    const flyer = 'Give one grand today';

    const result = concertFlyer(magazine, flyer);

    expect(result).to.eql(true);
  });

  it('should return false if given the strings "I\'ve got a lovely bunch of coconuts" and "two times two is four"', function () {
    const magazine = "I've got a lovely bunch of coconuts";
    const flyer = "I've got some coconuts";

    const result = concertFlyer(magazine, flyer);

    expect(result).to.eql(false);
  });

  it('should return false if given the strings "What\'s so amazing that keeps us stargazing" and "stargazing whats keeps us so amazing"', function () {
    const magazine = "What's so amazing that keeps us stargazing";
    const flyer = 'stargazing whats keeps us so amazing';

    const result = concertFlyer(magazine, flyer);

    expect(result).to.eql(false);
  });
});
