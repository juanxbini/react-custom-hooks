# 🛠️ useFetch Hook

**useFetch** es un **hook personalizado en React** que facilita las peticiones HTTP utilizando `fetch`.  
Este hook maneja automáticamente los estados de **carga (`loading`), error (`error`) y respuesta (`data`)**, además de permitir la recarga manual de datos.

---

## 📌 Instalación

### **1️⃣ Instalación desde npm** (si está disponible)
Si el hook se ha publicado en **npm**, puedes instalarlo con:

```
sh
npm install react-use-fetch
```
E importarlo en tu proyecto:
```
js

import useFetch from "react-use-fetch";
```
### 2️⃣ Instalación manual
Si deseas incluirlo manualmente en tu proyecto:

Copia el archivo useFetch.js en la carpeta hooks/ de tu proyecto.
Luego, impórtalo en el componente donde lo necesites.
```
sh
mkdir hooks
cp useFetch.js hooks/
```
```
js
import useFetch from "./hooks/useFetch";
```
## 📌 Uso Básico
```
js
import useFetch from "./hooks/useFetch";

const ExampleComponent = () => {
  const { data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default ExampleComponent;
```

## 📌 Explicación de useCallback
El hook useCallback se usa para evitar que la función fetchData se cree en cada render.

### ¿Por qué es importante?
1. *Optimización:* Evita la recreación de funciones innecesarias.
2. *Eficiencia:* useEffect solo ejecuta fetchData si url u options cambian.
```
js
const fetchData = useCallback(async () => {
  // Código de la función
}, [url, options]);
```
Sin useCallback, useEffect detectaría una nueva función en cada render y ejecutaría fetchData repetidamente.

## 📌 Uso con Diferentes Métodos HTTP
### Ejemplo de POST
Para enviar datos a un servidor:
```
js
const { data, loading } = useFetch("https://api.example.com/items", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Nuevo Item" })
});
```
### Ejemplo con Autenticación
Si la API requiere un token de autenticación, se pueden agregar los headers:
```
js
const { data, error, loading } = useFetch("https://api.example.com/private-data", {
  headers: {
    "Authorization": "Bearer token_aqui"
  }
});
```
## 📌 Contribuciones
Si deseas mejorar este hook o proponer cambios, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama nueva con el siguiente comando:
```
sh
git checkout -b feature/mejora-useFetch
```
3. Realiza tus modificaciones y sube el código:
```
sh
git add .
git commit -m "feat: mejorar manejo de errores en useFetch"
git push origin feature/mejora-useFetch
```
4. Abre un Pull Request en GitHub.

## 📜 Licencia
Este proyecto está bajo la licencia MIT, lo que significa que puedes usarlo y modificarlo libremente. 🎉

## 📞 Contacto
Si tienes preguntas o sugerencias, no dudes en abrir un issue en GitHub.

🚀 ¡Gracias por usar useFetch! ¿Listo para optimizar tus peticiones HTTP en React? 💡