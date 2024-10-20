# Music Adapter Project

## Consigna

Tienes un sistema de música en el que los dispositivos de reproducción pueden ser de diferentes tipos. Todos los dispositivos deberían implementar la interfaz `IReproductorMusica`, que contiene los métodos `reproducir()` y `detener()`.

Sin embargo, tienes una clase llamada `Vinilo` que tiene métodos incompatibles con la interfaz `IReproductorMusica`: `colocarAguja()` y `levantarAguja()`.

Tu tarea es crear un adaptador, llamado `AdaptadorVinilo`, que permita utilizar un objeto de tipo `Vinilo` como si fuera un objeto de tipo `IReproductorMusica`, adaptando sus métodos para que sean compatibles con la interfaz `IReproductorMusica`.

## Descripción

Este proyecto implementa un **adaptador** que convierte una clase `Vinilo` en un dispositivo que puede ser tratado como un `IReproductorMusica`. El adaptador permite utilizar métodos incompatibles en un contexto donde se espera que los objetos implementen la interfaz `IReproductorMusica`.

### Características principales:
- **Interfaz `IReproductorMusica`:** Define los métodos que todos los dispositivos reproductores de música deben implementar (`reproducir()` y `detener()`).
- **Clase `Vinilo`:** Contiene métodos específicos de los reproductores de discos de vinilo (`colocarAguja()` y `levantarAguja()`).
- **Clase `AdaptadorVinilo`:** Adapta la clase `Vinilo` para que cumpla con la interfaz `IReproductorMusica`.


