export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const params = data.map((user) => ({ userId: String(user.id) }));
  return params;
}
const UserDetails = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await res.json();
  return (
    <div>
      <h3>user - {params.userId}</h3>
      <p>{data.name}</p>
    </div>
  );
};

export default UserDetails;
