async function fetchUsers() {
  await new Promise((res) => setTimeout(res, 3000)); // Simula retraso
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

export default async function Users() {
  const users = await fetchUsers();

  return (
    <div className="bg-blue-100 p-4 rounded">
      <h2 className="text-lg font-bold mb-2">Usuarios</h2>
      <ul className="list-disc list-inside">
        {users.slice(0, 3).map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}