process.env.NODE_ENV = 'test';
const {Incidents} = require('../models')

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Incidents', () => {
    /*beforeEach((done) => { //Before each test we empty the database
        Incidents.destroy({}, (error) => {
            done();
        });
    });*/

    /*
      * Test the /GET route
      */
    describe('/GET Incidents', () => {
        it('it should GET all the Incidents', (done) => {
            chai.request(app)
                .get('/api/v1/incidents')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });
});
