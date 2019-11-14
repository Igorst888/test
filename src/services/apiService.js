const getAllsers = async () => {
  debugger;
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  debugger;
  if (!res.ok) { throw new Error('fetch error'); }

  const body = await res.json();
  debugger;
  return body;
};

export {
  getAllsers
}
