import { FormLoginState } from "@/types/form";
import { useCallback, useState } from "react";

export function FormLogin() {
  const [form, setForm] = useState<FormLoginState>({
    email: "",
    password: "",
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const name = event.target.name;

      setForm({
        ...form, // spread operator
        [name]: value,
      });

      console.log(form);
    },
    [form]
  );

  return (
    <>
      <h1>Email : {form.email}</h1>
      <h1>Password {form.password}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>Email:</label>
        <input onChange={handleChange} name="email" placeholder="Email" />
        <label>Password:</label>
        <input onChange={handleChange} name="password" placeholder="Password" />
        <button>Submit</button>
      </div>
    </>
  );
}
