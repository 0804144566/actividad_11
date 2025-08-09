Informe de Accesibilidad Sports App de la actividad 11
Este informe evalúa el prototipo de la aplicación web "Sports App" con base en los principios y criterios de éxito de las Pautas de Accesibilidad al Contenido Web WCAG 2.2. El análisis se centra en las tres interfaces principales: Inicio, Listado de Deportes y Login.
1.
Principio Perceptible
Criterio Contraste Mínimo.
Cumplimiento Alto el prototipo incluye un Modo Claro/Oscuro que asegura un contraste adecuado entre el texto y el fondo en ambos esquemas las combinaciones de colores han sido seleccionadas para cumplir o superar el nivel AA de WCAG, garantizando que el contenido sea legible para usuarios con baja visión.
2.
Contenido No Textual
Todas las imágenes utilizadas tienen un atributo alt descriptivo como, alt="Jugador de fútbol en silla de ruedas compitiendo en un partido". Esto permite a los lectores de pantalla transmitir la información visual a los usuarios ciegos o con discapacidad visual. Los emojis utilizados en las tarjetas de deportes tienen el atributo role="img" y un aria-label descriptivo para el mismo fin.
3
Universidad que transforma,
calidad que trasciende.
3.
Información y Relaciones
La estructura HTML utiliza etiquetas semánticas <header>, <nav>, <main>, <section>, <footer>, <article>, <h1>, <h2>, <button>, <a>, <label>, <input> para organizar el contenido de manera lógica. Esto permite a las tecnologías de asistencia comprender la estructura y la jerarquía de la página.
4.
Reestructuración
El diseño es completamente responsivo gracias a un enfoque mobile-first con Tailwind CSS, el contenido se adapta y fluye de manera natural en diferentes tamaños de pantalla móvil, tablet, escritorio sin perder información o funcionalidad. No se requiere desplazamiento horizontal.
5.
Operable Teclado
La navegación es posible usando exclusivamente el teclado. El orden de tabulación es lógico y sigue el flujo visual de la página el prototipo incluye un skip link Saltar al contenido principal para permitir a los usuarios de teclado saltar el menú de navegación y acceder directamente al contenido principal.
6.
Visible
Se ha implementado un contorno de foco claro y de alto contraste *:focus-visible para todos los elementos interactivos, como enlaces, botones y campos de formulario. Este indicador visual es crucial para que los usuarios que navegan con el teclado sepan dónde se encuentran en la página.
Propósito de los Enlaces En Contexto
4
Universidad que transforma,
calidad que trasciende.
Los enlaces y botones tienen un texto claro y descriptivo. Para aquellos elementos sin texto visible como el botón de cambio de tema, se utiliza el atributo aria-label para proporcionar una descripción accesible aria-label=Alternar entre modo claro y oscuro.
7.
Comprensible
Etiquetas o Instrucciones el formulario de inicio de sesión login utiliza la etiqueta <label> asociada correctamente a cada campo de entrada <input>. Los mensajes de error son claros y se muestran de forma accesible usando aria-describedby y role=alert, indicando al usuario qué necesita corregir.
8.
Sugerencia de Errores cuando un formulario falla la validación, el prototipo no solo muestra un mensaje de error claro, sino que también utiliza aria-invalid="true" en los campos con errores. La lógica de JavaScript mueve el foco al primer campo de formulario con error, mejorando la usabilidad para todos los usuarios.
9.
Idioma de las Partes el idioma principal de la página está declarado correctamente con lang="es" en la etiqueta <html>, lo que asegura que los lectores de pantalla y otros asistentes de voz utilicen la pronunciación adecuada.
10.
Nombre, Rol, Valor el código utiliza HTML y ARIA de manera correcta. Los elementos interactivos como los botones de menú y de cambio de tema tienen atributos ARIA (aria-expanded, aria-controls, aria-label) para exponer su estado y función a las tecnologías de asistencia de manera programática. Esto
5
Universidad que transforma,
calidad que trasciende.
permite que los usuarios con discapacidades interactúen con la aplicación de
forma fiable.
Para concluir el prototipo llamado Sports App demuestra una sólida comprensión y aplicación de los principios de accesibilidad de WCAG 2.2. La implementación del modo oscuro/claro, la navegación por teclado, el foco visible, el uso de etiquetas semánticas, los textos alternativos en imágenes y la validación de formularios accesibles son puntos fuertes que garantizan una experiencia de usuario inclusiva. El proyecto sirve como una base excelente para continuar el desarrollo, manteniendo la accesibilidad en su núcleo.
Anexos
Adjunto las capturas de pantalla del proseso que se realizó empezando con las carpetas que se realizo en visual estudio code que se usó.
Realizamos el commit a GitHub y creamos un repositorio.
https://github.com/0804144566/actividad_11.git
6
Universidad que transforma,
calidad que trasciende.
Ejecutamos la aplicación.
7
Universidad que transforma,
calidad que trasciende.
8
Universidad que transforma,
calidad que trasciende.
Probamos el botón de blanco y negro
Verificamos el login
9
Universidad que transforma,
calidad que trasciende.
Verificamos el pie de pagina
Verificamos los botones de acabildad
10
Universidad que transforma,
calidad que trasciende.
Verificamos las demás ventanas
11
Universidad que transforma,
calidad que trasciende.
