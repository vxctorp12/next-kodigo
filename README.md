# 🌐 Scent Factory (Catálogo de Perfumes)

Landing page interactiva desarrollada con **Next.js** y **Supabase**.

El proyecto consiste en una landing page sobre **un catálogo de perfumes**, con información almacenada dinámicamente en una base de datos de Supabase.

---

## 📋 Descripción del proyecto

Scent factory es una landing page moderna y responsive enfocada en **mostrar el catálogo de una tienda de perfumes**.

El sitio permite a los usuarios explorar diferentes contenidos obtenidos desde una base de datos en **Supabase**, utilizando **Next.js App Router** para la estructura y navegación de la aplicación.

El proyecto fue desarrollado aplicando buenas prácticas de desarrollo, incluyendo:

- Server Components.
- Rutas dinámicas.
- Consumo de datos desde Supabase.
- Manejo de estados de carga.
- Manejo de errores.
- Variables de entorno.
- Políticas de seguridad RLS.
- Diseño responsive.
- Código organizado y reutilizable.

---

## 🚀 Demo

🌎 **Sitio en producción:**

[https://next-kodigo.vercel.app/](https://next-kodigo.vercel.app/)

📦 **Repositorio de GitHub:**

[https://github.com/vxctorp12/next-kodigo](https://github.com/vxctorp12/next-kodigo)

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **Next.js 16+** | Framework principal |
| **React** | Construcción de componentes |
| **TypeScript** | Tipado estático |
| **Supabase** | Base de datos y backend serverless |
| **PostgreSQL** | Base de datos utilizada por Supabase |
| **Vercel** | Despliegue de la aplicación |
| **CSS / Tailwind CSS** | Estilos y diseño responsive |

---

## ✨ Características principales

### 🏠 Landing Page

La página principal presenta:

- Hero section.
- Descripción de la temática.
- Contenido destacado.
- Navegación principal.
- Secciones informativas.
- Diseño adaptable a dispositivos móviles.

### 🗄️ Integración con Supabase

Los contenidos mostrados en la aplicación se obtienen desde una tabla de Supabase.

## Instalación

### Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/next-c+kodigo.git

```

### Navegar al repositorio del proyecto
```bash
cd next-kodigo
```

### Instalar dependencias

```bash
npm install
```

### Configurar variables de entorno

Crea un archivo .env.local en la raíz del proyecto basándote en las instrucciones de la sección inferior.

### Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abre http://localhost:3000 en tu navegador para ver el resultado.

## Variables de entorno necesarias

Para que el proyecto se conecte correctamente a la base de datos, es estrictamente necesario crear un archivo .env.local en la raíz del proyecto e incluir las siguientes variables.


```bash
# URL de la API del proyecto en Supabase
NEXT_PUBLIC_SUPABASE_URL=[https://tu-id-de-proyecto.supabase.co](https://tu-id-de-proyecto.supabase.co)

# Clave pública (anon/publishable) para consultas seguras desde el cliente
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable__tu_clave_publica_aqui
```