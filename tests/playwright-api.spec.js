import { test, expect } from '@playwright/test';

test('ReqRes API Automation', async ({ request }) => {
  const createResponse = await request.post('https://reqres.in/api/users', {
    data: { name: "Chaitu", job: "QA" }
  });

  expect(createResponse.status()).toBe(201);
  const createData = await createResponse.json();
  const userId = createData.id;

  const getResponse = await request.get('https://reqres.in/api/users/2');
  expect(getResponse.status()).toBe(200);

  const updateResponse = await request.put(`https://reqres.in/api/users/${userId}`, {
    data: { name: "Sai", job: "Senior QA" }
  });

  expect(updateResponse.status()).toBe(200);
  const updateData = await updateResponse.json();
  expect(updateData.name).toBe("Sai");
});
