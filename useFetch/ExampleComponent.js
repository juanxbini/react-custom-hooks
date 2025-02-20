import React from "react";
import useFetch from "./useFetch";

/**
 * Componente de ejemplo que usa el hook `useFetch` para obtener datos de una API.
 */
const ExampleComponent = () => {
  const { data, error, loading, fetchData } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Lista de Posts</h2>
      <button onClick={fetchData}>Recargar datos</button>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
