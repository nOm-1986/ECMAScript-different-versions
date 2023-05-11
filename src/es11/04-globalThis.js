/**
 * Global this.
 * Hay diferentes formas de acceder al objeto global, navegador -> window, node -> global, webworkers -> self;
 * Para acceder al Objeto Global en diferentes entornos. Antes cada entorno tenia su forma de llamarse.
 * Lo que se hizo fue una convención para solo llamarlo de una forma en todos lados(servidor, cliente, webworkers)
 */

//Esta primera forma solo se ve en el navegador
console.log(window);

//Para acceder ahora desde node
console.log(global);

//Para un webworker
console.log(self);

//Con GlobalThis: -> Va a exponer la información según sea el contexto donde va a ser ejecutada.
console.log(globalThis);