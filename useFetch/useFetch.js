import { useState, useEffect, useCallback } from "react";

/**
 * Hook personalizado para manejar peticiones HTTP con fetch.
 * 
 * @param {string} url - La URL de la API a consultar.
 * @param {Object} options - Opciones de configuración de la petición (método, headers, body, etc.).
 * @returns {Object} { data, error, loading, fetchData }
 * 
 * @example
 * const { data, error, loading, fetchData } = useFetch("https://jsonplaceholder.typicode.com/posts");
 */
const useFetch = (url, options = {}) => {
  // 📌 useState para manejar estados de la petición
  const [data, setData] = useState(null); // Estado que almacena los datos recibidos
  const [error, setError] = useState(null); // Estado que almacena el mensaje de error si ocurre un fallo
  const [loading, setLoading] = useState(false); // Estado booleano para manejar el estado de carga

  /**
   * 🔹 useCallback: Se usa para evitar que la función `fetchData` se vuelva a crear en cada render.
   * Esto es importante porque `useEffect` dependerá de esta función, y sin `useCallback`, 
   * cada render causaría una nueva ejecución innecesaria.
   */
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  /**
   * 🔹 useEffect: Llama a la función `fetchData` cuando `url` o `options` cambian.
   */
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, fetchData };
};

export default useFetch;
