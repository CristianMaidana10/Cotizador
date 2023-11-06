**Requisitos

*React
*React-router-dom
*TypeScript
*Node.js

**Uso

El cotizador consta de un formulario con tres campos:

Tipo de ubicación: Selecciona el tipo de ubicación de tu hogar.
Tipo de propiedad: Selecciona el tipo de propiedad que tienes.
Metros cuadrados: Ingresa los metros cuadrados de tu propiedad.

Al hacer clic en el botón "Cotizar", el cotizador calculará el precio mensual del seguro y lo mostrará en un mensaje.

Historial de cotizaciones

En la parte inferior del formulario, hay un enlace para ver el historial de tus cotizaciones. Este historial persiste, lo que significa que puedes salir del sitio web y volver a ingresar y seguir visualizando tu historial.

El historial de cotizaciones es una tabla con las siguientes columnas:

*Fecha y hora: La fecha y hora en que se realizó la cotización.
*Tipo de propiedad: El tipo de propiedad que seleccionaste.
*Tipo de ubicación: El tipo de ubicación que seleccionaste.
*Importe mensual: El precio mensual del seguro.

**Cómo funciona

El cotizador utiliza una fórmula matemática para calcular el precio mensual del seguro. La fórmula tiene en cuenta los siguientes factores:

*Tipo de propiedad: Los seguros de hogar tienen diferentes precios para diferentes tipos de propiedades.
*Tipo de ubicación: Los seguros de hogar tienen diferentes precios para diferentes ubicaciones.
*Metros cuadrados: Los seguros de hogar tienen diferentes precios para hogares de diferentes tamaños.