import request from 'superagent';
const URL = 'https://todos-project-kds.herokuapp.com';

export async function signUp(email, password) {
const response = await request
.post(`${URL}/auth/signup`)
.send({ email, password })
return response.body;
}

export async function signIn(email, password) {
const response = await request
.post(`${URL}/auth/signin`)
.send({ email, password })
return response.body;
}

export async function postTodo(todo, token) {
    const response = await request
    .post(`${URL}/api/todos`)
    .set({'Authorization': token})
    .send({todo})
    return response.body
}

export async function getTodos(token) {
    const response = await request
    .get(`${URL}/api/todos`)
    .set({'Authorization': token})
    return response.body
}

export async function updateTodo(id, token) {
    const response = await request
    .put(`${URL}/api/todos/${id}`)
    .set({'Authorization': token})
    return response.body
}