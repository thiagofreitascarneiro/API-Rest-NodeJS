import { test, beforeAll, afterAll } from 'vitest'
import { app } from '../app'
import request from 'supertest'

beforeAll( async () => {
    await app.ready()
})

afterAll( async () => {
   await app.close() 
})

test('o usuário consegue criar uma nova transação', async () => {
    await request(app.server)
        .post('/transactions')
        .set('Cookie', 'sessionId=9c9b7e3e-fa2a-4d5a-a012-fdc242bedf04')
        .send({ 
            title: 'New trasaction',
            amount: 5000,
            type: 'credit',
        })
        .expect(201)
})