"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h3>Something went wrong</h3>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}
