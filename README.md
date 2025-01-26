# Alura Challenge - Amigo Secreto

Este proyecto permite gestionar un sorteo de amigo secreto. Los usuarios pueden agregar amigos a una lista, asegurándose de que no haya nombres repetidos ni vacíos, y luego realizar un sorteo aleatorio para asignar un amigo secreto a cada participante.

## Características

- **Agregar Amigos**: Los usuarios pueden ingresar nombres que se almacenan en una lista. Los nombres son validados para evitar duplicados y entradas vacías. Además, los nombres se convierten a formato capitalizado automáticamente antes de ser añadidos a la lista.
- **Mostrar Mensajes**: Se muestran mensajes de error o éxito dependiendo de la acción realizada (como agregar un nombre válido o intentar agregar un nombre duplicado).
- **Sortear Amigo Secreto**: El botón de sorteo solo se habilita si hay al menos 2 amigos en la lista. Si se hace clic en el botón, se selecciona aleatoriamente un amigo secreto de la lista y se muestra el resultado en la interfaz.
- **Interfaz de Usuario**: La interfaz es dinámica, actualizando la lista de amigos y el resultado del sorteo en tiempo real.

## Tecnologías Usadas

- **HTML5**: Para la estructura básica de la aplicación.
- **CSS3**: Para el diseño y los estilos de la interfaz.
- **JavaScript (ES6+)**: Para la lógica de la aplicación, validación de datos y manejo de la interacción con el usuario.
- **Google Fonts**: Para mejorar la tipografía de la interfaz con las fuentes **Inter** y **Merriweather**.

## Requisitos

- Navegador moderno que soporte JavaScript y CSS3.

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/marcosguz/alura-challenge-amigo-secreto.git
