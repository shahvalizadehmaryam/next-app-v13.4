async function Users() {
  // this is for ssg
  //   fetch(url, {
  //     cache: "force-cache",
  //   });
  // this is for ssr
  //   fetch(url, {
  //     cache: "no-store",
  //   });
  // this is for Isr
  //   fetch(url, {
  //     next:{revalidate:10}
  //   });

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
