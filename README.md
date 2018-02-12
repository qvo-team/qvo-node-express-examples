<h1 align="center">
  <a href="https://qvo.cl">
    <img src="https://cdn.rawgit.com/qvo-team/qvo-node-express-examples/master/sticker.png" alt="QVO Developers" width="200">
  </a>
  <br>
  Ejemplos QVO Node.js (Express)
  <br>
  <br>
</h1>


Este repositorio contiene una APP en Express con ejemplos de funcionalidades de la [API QVO](https://docs.qvo.cl).

Los ejemplos incluidos en esta APP son:

- **Cobrar a tarjeta**: Se muestra de manera simple la funcionalidad de un cobro puntual a tarjetas de débito o crédito mediante Webpay Plus.
- **Planes y suscripciones**: Se muestra de manera simple la funcionalidad de planes y suscripciones mediante un formulario selección de planes. Se asume que el cliente no existe y se registra en la plataforma eligiendo un plan. Se crearon previamente los planes en el sistema.
- **Botón de pago y Checkout**: Se muestra de manera simple la funcionalidad del botón de pago para un producto puntual.

La APP viene previamente configurada con credenciales para realizar pruebas de inmediato, pero puedes cambiarlas por tus propias credenciales en el archivo `.env` ubicado en `/`.

Para realizar pagos de prueba utiliza las credenciales provistas en [nuestra documentación](https://docs.qvo.cl/#pruebas-y-sandbox).

## Documentación

 - [Referencia API QVO](https://docs.qvo.cl)
 - [Guía Desarrolladores](https://qvo.cl/guia/hola-mundo/)

## Requisitos

- [Git](https://www.atlassian.com/git/tutorials/install-git)
- [Node.js](https://nodejs.org/es/download/package-manager/) >= 6.12

## Instalación

```bash
git clone git@github.com:qvo-team/qvo-node-express-examples.git
cd qvo-node-express-examples
npm install
```

## Ejecución

```bash
npm start
```

Ahora dirígete en tu navegador a `http://localhost:3000`

## Desarrollo

```bash
npm run start:dev
```

Ahora dirígete en tu navegador a `http://localhost:3000`.
