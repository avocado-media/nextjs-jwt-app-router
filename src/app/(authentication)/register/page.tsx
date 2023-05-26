"use client";

export default function Page() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(Object.fromEntries(formData));
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>name</label>
      <input
        name="name"
        type="text"
        defaultValue="John Doe"
      />

      <label>Email</label>
      <input
        name="email"
        type="email"
        defaultValue="johndoe@example.com"
      />

      <label>Password</label>
      <input
        name="password"
        type="password"
        defaultValue="password"
      />

      <label>Password confirmation</label>
      <input
        name="password_confirmation"
        type="password"
        defaultValue="password"
      />

      <button type="submit">Sign in</button>
    </form>
  );
}
