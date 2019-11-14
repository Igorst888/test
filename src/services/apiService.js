const getAllsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) { throw new Error('fetch error'); }

  const body = await res.json();
  return body;
};

export {
  getAllsers
}
