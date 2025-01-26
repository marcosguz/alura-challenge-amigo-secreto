# Alura Challenge - Amigo Secreto

Este proyecto permite gestionar un sorteo de amigo secreto. Los usuarios pueden agregar amigos a una lista, asegurándose de que no haya nombres repetidos ni vacíos, y luego realizar un sorteo aleatorio para asignar un amigo secreto a cada participante.

```javascript
function sortearAmigo() {
    if (amigos.length < 2) {
        mostrarMensaje('Debe haber al menos 2 amigos para sortear.', 'error');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    mostrarResultado(amigoSeleccionado);
}
```

## Características

- **Agregar Amigos**: Los usuarios pueden ingresar nombres que se almacenan en una lista. Los nombres son validados para evitar duplicados y entradas vacías. Además, los nombres se convierten a formato capitalizado automáticamente antes de ser añadidos a la lista.
- **Mostrar Mensajes**: Se muestran mensajes de error o éxito dependiendo de la acción realizada (como agregar un nombre válido o intentar agregar un nombre duplicado).
- **Sortear Amigo Secreto**: El botón de sorteo solo se habilita si hay al menos 2 amigos en la lista. Si se hace clic en el botón, se selecciona aleatoriamente un amigo secreto de la lista y se muestra el resultado en la interfaz.
- **Interfaz de Usuario**: La interfaz es dinámica, actualizando la lista de amigos y el resultado del sorteo en tiempo real.

## Tecnologías Usadas

![Javascript](https://img.shields.io/badge/Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

## Requisitos

- Navegador moderno que soporte JavaScript y CSS3.

## Instalación

### 1. Clona este repositorio en tu máquina local:
   ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
```bash
   git clone https://github.com/marcosguz/alura-challenge-amigo-secreto.git

