/**
 * Dynamic import es una gran característica que cambia la forma de cargar nuestros Scripts.
 * Con este nuevo concepto vamos a utilizar este import pero cuando lo necesitemos.
 * Estos nos da una garantía para organizar que queremos cargar al principio y hacer que el usuario interactúe, haciendo el render
 * de los componentes vitales y conforme el usuario se va moviendo ir agregarndo estos elementos clave de nuestra aplicación.
 */
const btn = document.getElementById('btn');

btn.addEventListener('click', async () => {
    const module = await import('./module.js');
    console.log(module);
    module.hello();
});