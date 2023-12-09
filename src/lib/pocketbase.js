import PocketBase from 'pocketbase';
import { redirect } from 'react-router-dom';

const url = 'http://127.0.0.1:8090'
export const client = new PocketBase(url)

client.autoCancellation(false);

await client.admins.authWithPassword('gylondaddi@yahoo.com', '123123123');


export async function getExpenses() {
    return await client.collection("expenses").getFullList();
}

export async function createExpense(name, amount, category) {
    const data={expense_name: name, expense_amount: amount, Category: category}
    await client.collection("expenses").create(data);
}

export async function deleteExpense(id)
{
    await client.collection("expenses").delete(id);
    window.location.reload();
}

export async function register(data) {
    try {
        await client.collection('users').create(data)
    } catch (e) {
        console.error("email invalid or in use already")
    }   
}

export const isLoggedIn = client.authStore.isValid

// const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     contact: "",
//     password: "",
//     confirmPassword: "",
//   };

export async function Login(data) {
    const authData = await client
      .collection("users")
      .authWithPassword(data.email, data.password);


  }


