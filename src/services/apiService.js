const _baseUrl = 'https://jsonplaceholder.typicode.com/users/';

const getAllUsers = async () => {
  const res = await fetch(_baseUrl);
  if (!res.ok) { throw new Error('fetch error'); }

  const body = await res.json();
  return body;
};

const getUserDetails = async (id) => {
  const res = await fetch(_baseUrl + id);
  if (!res.ok) { throw new Error('fetch error')}

  const body = await res.json();
  return body;
};

export {
  getAllUsers,
  getUserDetails
}
