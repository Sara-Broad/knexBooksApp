const db = require('../db/knex')
const app = require('../server')
const request = require('supertest')



// describe('outer', () => {
//     console.log('describe outer-a');
  
//     describe('describe inner 1', () => {
//       console.log('describe inner 1');
//       test('test 1', () => {
//         console.log('test for describe inner 1');
//         expect(true).toEqual(true);
//       });
//     });
  
//     console.log('describe outer-b');
  
//     test('test 1', () => {
//       console.log('test for describe outer');
//       expect(true).toEqual(true);
//     });
  
//     describe('describe inner 2', () => {
//       console.log('describe inner 2');
//       test('test for describe inner 2', () => {
//         console.log('test for describe inner 2');
//         expect(false).toEqual(false);
//       });
//     });
  
//     console.log('describe outer-c');
//   });

describe('GET /books', () => {
    beforeEach(async () => {
        await db('Books').truncate();
    });

    afterEach(async () => {
        await db('Books').truncate()
    });

    it('should return status code 200 when request is successful', async () => {
        const res = await request(app).get('/books');

        expect(res.status).toBe(200);
    });
    it('should return the correct number of posts stored in the database', async () => {
        const res = await request(app).get('/books');

        expect(res.body.length).toBe(0);
    });
    it('should return an empty array when the database has no entries', async () => {
        const res = await request(app).get('/books');

        expect(JSON.parse(res.text)).toEqual([]);
    });
});

describe('GET /books/:id', () => {
    beforeEach(async () => {
        await db('Books').truncate();
    });
    afterEach(async () => {
        await db('Books').truncate();
    });

    it('should return status code 200 when request is successful', async () => {
        await request(app).post('/books').send({ id: 1, title: 'test', author: 'fake author', dateFinished: '01-01-2019', pages: 300, rating: 5 });
        const res = await request(app).get('/books/1');

        expect(res.status).toEqual(200);
    });
    it('should return the correct response body', async () => {
        const newBook = await request(app).post('/books').send({ id: 1, title: 'test', author: 'fake author', dateFinished: '01-01-2019', pages: 300, rating: 5 });
        // console.log(newBook)
        const res = await request(app).get('/books/1');
        // console.log('res', res)
        expect(res.body[0].title).toBe('test');
    });
    // it('should return a 404 error if a book with a specific id does not exist', async () => {
    //     await request(app).get('/books/50')
    //     .then((res) => {
    //         console.log(res.status)
    //         expect(res.body.message).toEqual('The book with the specified ID does not exist.')
    //     });
    // });
});