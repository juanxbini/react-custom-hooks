# 🚀 React Custom Hooks

¡Bienvenido a **React Custom Hooks**! 🎉  
Este repositorio contiene una colección de **hooks personalizados** en React, diseñados para mejorar la reutilización del código y optimizar el desarrollo de aplicaciones.

---

## 📌 ¿Qué son los Custom Hooks?
Los **custom hooks** en React son funciones que encapsulan lógica reutilizable utilizando los hooks nativos (`useState`, `useEffect`, `useCallback`, etc.).  
Estos hooks permiten mejorar la organización del código y evitar la repetición en los componentes.

Ejemplo de un custom hook simple:
```js
import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return { count, increment };
};
```
Puedes usar este hook en cualquier componente sin necesidad de duplicar la lógica de estado.

## 📂 Estructura del Repositorio
Cada hook tiene su propia carpeta con su implementación, documentación y ejemplos de uso.
```
/react-custom-hooks
  /useFetch
    ├── useFetch.js         # Implementación del hook
    ├── ExampleComponent.js # Ejemplo de uso
    ├── README.md           # Documentación del hook
    ├── package.json        # Configuración para publicación en npm
```
## 📌 Lista de Hooks Disponibles

| Hook      | Descripción |
|-----------|------------------------------------------|
| [useFetch](useFetch/)  | Hook para manejar peticiones HTTP con fetch, optimizado con useCallback. |
| 🚀 Más hooks próximamente... | 

## 📥 Instalación
Puedes instalar un hook desde npm si está disponible, o simplemente copiar el archivo en tu proyecto.

 ### Instalar desde npm
Si el hook está publicado en npm, puedes instalarlo con:
```
sh
npm install react-use-fetch
```
Luego, impórtalo en tu proyecto:
```
js
import useFetch from "react-use-fetch";
```
Instalación manual
Si prefieres, puedes copiar el archivo del hook en la carpeta hooks/ de tu proyecto:
```
sh
mkdir hooks
cp useFetch.js hooks/
```
E importar el hook en tu componente:
```
js
import useFetch from "./hooks/useFetch";
```

## 📌 Ejemplo de Uso
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
## 📌 Contribuciones
Si tienes ideas para mejorar los hooks o agregar nuevos, ¡serás bienvenido! 🚀

### 1️⃣ Haz un fork del repositorio
Presiona el botón "Fork" en GitHub y clona el repositorio en tu máquina.
```
sh
git clone https://github.com/tu_usuario/react-custom-hooks.git
cd react-custom-hooks
```
### 2️⃣  Crea una nueva rama para tu hook
```
sh
git checkout -b feature/nuevo-hook
```
### 3️⃣ Agrega tu hook en una nueva carpeta siguiendo la estructura
```
bash
/react-custom-hooks
  /useNuevoHook
    ├── useNuevoHook.js
    ├── ExampleComponent.js
    ├── README.md
```
### 4️⃣ Realiza un commit y envía tu PR
```
sh
git add .
git commit -m "feat: agregar useNuevoHook"
git push origin feature/nuevo-hook
```
Luego, abre un Pull Request (PR) en GitHub para que revisemos tu aporte. 🎉

## 📜 Licencia
Este proyecto está bajo la licencia MIT, lo que significa que puedes usarlo y modificarlo libremente. 🎉

## 📞  Contacto
Si tienes preguntas o sugerencias, no dudes en abrir un issue o contactarme en GitHub.

🚀 ¡Gracias por visitar este repositorio! ¿Listo para optimizar tu código en React con hooks reutilizables? 💡
