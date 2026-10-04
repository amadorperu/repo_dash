# Mi Dashboard: app para celular

## 1. Prepara la hoja de Google Sheets
- Primera fila con estas columnas: `fecha`, `categoria`, `monto`, `meta`, `detalle`.
- `fecha`, `categoria` y `monto` son obligatorias. `meta` y `detalle` son opcionales.
- Fechas en formato `2026-10-04` o `04/10/2026`.
- Usa `plantilla-datos.csv` como punto de partida (Archivo > Importar).

## 2. Publica la hoja como CSV
- Archivo > Compartir > Publicar en la Web.
- Elige la pestaña con los datos y el formato "Valores separados por comas (.csv)".
- Publica y copia el enlace.

## 3. Conecta el dashboard
- Abre `index.html` y busca el bloque CONFIGURACIÓN.
- Pega el enlace en `sheetCsvUrl`.
- Ajusta `titulo`, `moneda` y `periodoInicial` si lo necesitas.
- Si cambias el título, cámbialo también en `manifest.json` (`name` y `short_name`).

## 4. Súbelo a GitHub Pages
- Crea un repositorio nuevo (por ejemplo `mi-dashboard`).
- Sube todo el contenido de esta carpeta respetando la carpeta `icons`.
- Settings > Pages > Branch: `main`, carpeta `/ (root)` > Save.
- La app queda en `https://TU-USUARIO.github.io/mi-dashboard/`.

## 5. Instálalo en el celular
- Android (Chrome): menú ⋮ > Instalar app.
- iPhone (Safari): Compartir > Agregar a inicio.

## Notas
- La app actualiza los datos al abrirla y con el botón Actualizar.
- Sin conexión muestra los últimos datos descargados.
- Google tarda hasta 5 minutos en reflejar cambios de la hoja en el CSV publicado.
- El enlace CSV publicado es visible para cualquiera que lo tenga. No pongas datos sensibles.
- Cada vez que edites `index.html`, sube la versión en `sw.js` (`dash-v1` a `dash-v2`) para que el celular cargue el cambio.
