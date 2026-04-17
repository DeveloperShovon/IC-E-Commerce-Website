import { useGetProductsQuery } from "../features/apiSlice";

export default function Test() {
  const { data, isLoading, error } = useGetProductsQuery();
  const products = data ?? [];
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      {products.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}