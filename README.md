```markdown
# Jardinería Andrés — Sitio web para GitHub Pages

Este repositorio contiene una web estática simple para Jardinería Andrés (Felanitx, Mallorca).

Contenido:
- index.html
- styles.css
- script.js

Instrucciones para publicar en GitHub Pages:
1. Crea un repositorio nuevo en tu cuenta (por ejemplo `jardineria-andres`).
2. Sube los archivos arriba al repositorio (puedes usar la interfaz web o git).
   - Si usas git local:
     - git init
     - git add .
     - git commit -m "Sitio inicial Jardinería Andrés"
     - git branch -M main
     - git remote add origin https://github.com/TU_USUARIO/jardineria-andres.git
     - git push -u origin main
3. En GitHub > Settings > Pages: seleccionar la rama `main` y la carpeta `/ (root)` y guardar.
4. GitHub generará la URL: https://TU_USUARIO.github.io/jardineria-andres

Notas:
- Reemplaza las imágenes placeholder por tus fotos en la carpeta `assets/` y actualiza las rutas en `index.html`.
- El formulario de contacto usa Formspree como ejemplo. Para recibir emails desde el formulario:
  - Regístrarte en https://formspree.io y sustituir `{TU_FORM_ID}` en index.html por tu ID.
  - Si no quieres usar servicios externos, puedes eliminar `action` del formulario e indicar a los visitantes que contacten por email/teléfono.
```
