# Logger Singleton Project

## Consigna

Crea una clase Logger que registre mensajes en la consola. Esta clase debe seguir el patrón Singleton para que solo exista una única instancia de Logger en toda la aplicación. Cada vez que se registre un mensaje, se debe agregar un número incremental que indique el orden de los mensajes registrados.

## Descripción

Este proyecto implementa una clase `Logger` que utiliza el **patrón Singleton**. El Singleton asegura que solo exista una única instancia de la clase `Logger` en toda la aplicación, independientemente de cuántas veces se llame al método de creación. Cada vez que se registra un mensaje, se incrementa un contador interno para mostrar el orden en que los mensajes han sido registrados.

### Características principales:
- **Patrón Singleton:** Solo puede existir una instancia de la clase `Logger`.
- **Contador incremental:** Cada mensaje registrado incluye un número incremental que indica el orden.
- **Método `getInstance`:** Crea o devuelve la instancia existente de `Logger`.
- **Método `showMessage`:** Muestra un mensaje con el número de registro correspondiente.

