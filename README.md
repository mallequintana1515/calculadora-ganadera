# Calculadora Ganadera

Aplicacion web para calcular de forma rapida la produccion ganadera y el valor total segun la cantidad y el precio por unidad.

## Actualizaciones del proyecto

- Se elimino el bloque blanco de inicio para que la interfaz abra directamente en la calculadora.
- Se retiro el boton de inicio visible en blanco y se dejo una navegacion mas limpia.
- La vista principal ahora arranca en `Calculadora`.
- Se mantuvo el modal de inicio de sesion con validacion basica.
- Se agrego un glosario ganadero con buscador interno.
- Se conservo el formulario de contacto con mensaje de confirmacion.
- Se mantiene el boton para copiar el precio al portapapeles.
- Se ajusto el diseno para que sea mas moderno y responsive.

## Funcionalidades

- Seleccion de animal: vaca, cerdo o pollo.
- Asignacion automatica del tipo de produccion:
  - Vaca: leche
  - Cerdo: carne
  - Pollo: huevos
- Habilitacion progresiva de cantidad, precio y calculo.
- Calculo del total con la formula:
  - `total = cantidad * precio`
- Copiado del precio al portapapeles.
- Inicio de sesion modal con credenciales de prueba.
- Seccion de informacion con instrucciones de uso.
- Seccion de contacto con enlace a WhatsApp.
- Glosario ganadero con terminos tecnicos.
- Diseno adaptable a pantallas pequenas.

## Como usar el proyecto

1. Abre `index.html` en tu navegador o con Live Server.
2. En la pestaña `Calculadora`, selecciona el animal.
3. Presiona `2. Habilitar cantidad`.
4. Ingresa la cantidad producida por dia.
5. Presiona `4. Habilitar precio`.
6. Escribe el precio por unidad.
7. Usa `5. Calcular total` para ver el resultado.
8. Si lo necesitas, usa `Copiar precio` para copiar el valor actual.
9. Puedes abrir `Iniciar sesion` para probar el modal.
10. Usa `Glosario` para buscar terminos ganaderos.

## Credenciales de prueba

El inicio de sesion es solo demostrativo.

- Usuario: `admin`
- Contrasena: `1234`

## Archivos del proyecto

- `index.html`: estructura principal de la interfaz.
- `estilos.css`: estilos visuales y diseno responsive.
- `script.js`: logica de la calculadora, modales y acciones de la interfaz.
- `README.md`: documentacion del proyecto.

## Requisitos

- Navegador moderno.
- Conexion a internet para cargar las fuentes externas y abrir el enlace de WhatsApp.
- Live Server recomendado para probar los cambios en tiempo real.

## Notas

- El proyecto es una interfaz front-end y no incluye backend.
- La sesion es solo demostrativa y no reemplaza un sistema real de autenticacion.
- La interfaz esta pensada para un flujo simple, visual y rapido de usar.
