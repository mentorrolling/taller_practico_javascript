# Curso práctico de Javascript RollingCode School

Este curso tiene la finalidad de ayudar a desarrollar la lógica en la resolución de problemas.

A través de diferentes talleres se resuelven enunciados que ponen a prueba nuestra capacidad para generar algoritmos y traducirlos con Javascript para que los ejecute el computador.

## Ejercicios para Algoritmos y diagramas de Flujo

- Problema: la lampara no funciona
- Problema: Estoy en la oficina y quiero café
- Problema: obtener el área de un rectángulo (a = b \* h)

## Taller n° 1

Somos dueños de una tienda y para motivar a los clientes les ofrecemos algunos descuentos.
Los clientes no saben cuanto van a estar pagando, solo saben que les haremos un descuento. Resolver la forma de que el cliente pueda saber exactamente cuanto debe pagar.

### Pasos

- Primer paso: definir las fórmulas
- Segundo paso: implementar las formulas en javascript
- Tercer paso: crear funciones
- Cuarto paso: Integrar JS con Html

## Taller n° 2

Se nos pide diseñar un sistema que simule un cajero automático.
Solo contiene cierta cantidad de billetes de 50, 20 y 10 dolares, por lo que deberemos controlar cuantos billetes de cada denominación podemos entregar para cubrir el monto a extraer.
Se debe imprimir en pantalla la cantidad de billetes de cada denominación utilizada.

### Pasos

- Primer paso: definir las fórmulas
- Segundo paso: implementar las formulas en javascript
- Tercer paso: crear funciones
- Cuarto paso: Integrar JS con Html

## Taller n° 3

### Información de usuarios

Tenemos una base de datos de usuarios que necesitamos ordenar en una tabla. La información la recibimos desde el backend en formato JSON.
La tabla debe tener los siguientes encabezados:

- Nombre
- Correo
- Teléfono
- Dirección
- Ciudad

Se deben obtener esos datos de la información recibida. En el caso de la dirección la información debe mostrarse como el siguiente ejemplo:

- Hoeger Mall - Apt. 692 (Coord: 29.4572, -164.2990)

### Información de Empresas

La información recibida de los usuarios también contiene, por cada uno, información de la compañia a la que pertenece. Necesitamos obtener los siguientes datos para mostrar:

- Nombre (name)
- Slogan (catchPhrase)

Con dichos datos crear una serie de citas que incluyan el nombre de la empresa y su slogan.
Usar Blockquotes de bootstrap para mostrar de esa manera la info.

- https://getbootstrap.com/docs/5.1/content/typography/#blockquotes

## Taller 4

## Manejo de datos

Se nos pide crear una interface de una web para fanáticos de la serie "Super Hero Squad". La página debe contener ciertos datos que vienen de un archivo json provisto previamente. Los datos necesarios son:

- squadName
- homeTown
- formed
- members

El dato **members** contiene un arreglo **powers** que debemos trabajar para generar por cada héroe la lista de sus super poderes.
Usar **fetch** para traer la info del archivo json y la **desestructuración** de objetos para acceder a los datos del objeto de ser necesario.
