/**
 * Module dependencies
 */
const mapAppsByHost = require('./index').default;

describe('mapAppsByHost util', () => {
  it('Should return a map from an array of apps', () => {
    const data = [{"name":"Small Fresh Pants - Kautzer - Boyer, and Sons","contributors":["Edwin Reinger","Ofelia Dickens","Hilbert Cole","Helen Kuphal","Maurine McDermott Sr."],"version":7,"apdex":68,"host":["7e6272f7-098e.dakota.biz","9a450527-cdd9.kareem.info","e7bf58af-f0be.dallas.biz"]},{"name":"Refined Concrete Shirt - Hudson - Sauer, Group","contributors":["Ramon Harris DDS","Summer Dicki","Triston Sipes","Fae Lind","Carole Emard"],"version":6,"apdex":57,"host":["e0419f48-6a5a.craig.info","7e6272f7-098e.dakota.biz"]},{"name":"Ergonomic Wooden Soap - Lemke and Sons, Inc","contributors":["Miss Moises Walter","Caroline Murazik"],"version":2,"apdex":61,"host":["e7bf58af-f0be.dallas.biz","b0b655c5-928a.nadia.biz","95b346a0-17f4.abbigail.name"]}];

    const map = mapAppsByHost(data);
    expect(Object.keys(map)).toHaveLength(6);
  });
});
