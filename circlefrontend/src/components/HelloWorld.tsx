export function Hello({ name, address }: { name: string; address?: string }) {
  return (
    <>
      <h1>Hello {name}!</h1>
      <h1>Address : {address}</h1>
    </>
  );
}

export function Hello3() {
    return (
      <>
        <h1>test bang</h1>
      </>
    );
  }

export default function Hello2({
  name,
  address,
}: {
  name: string;
  address?: string;
}) {
  return (
    <>
      <h1>Hello2 {name}!</h1>
      <h1>Address : {address}</h1>
    </>
  );
}