process.env.NODE_ENV = 'test';
const {Incidents} = require('../models')

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Incidents', () => {
    beforeEach((done) => { //Before each test we empty the database
        Incidents.remove({}, (error) => {
            done();
        });
    });

    /*
      * Test the /GET route
      */
    describe('/GET Incidents', () => {
        it('it should GET all the Incidents', (done) => {
            chai.request(server)
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
