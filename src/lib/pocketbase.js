import PocketBase from 'pocketbase';

const url = 'http://127.0.0.1:8090'
export const client = new PocketBase(url)

client.autoCancellation(false);

export async function getExpenses() {
    return await client.collection("expenses").getFullList();
}

export async function createExpense(name, amount, category) {
    const data={name: name, amount: amount, category: category}
    await client.collection("expenses").create(data);
}

export async function deleteExpense(id)
{
    await client.collection("expenses").delete(id);
    window.location.reload();
}