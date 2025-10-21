Ejercicio 1 

En el contexto de JavaScript orientado a objetos basado en prototipos, las "reglas escritas" del lenguaje son las que definen su funcionamiento interno, su sintaxis y su modelo conceptual.
Estas reglas incluyen:

* Los objetos son entidades dinámicas que pueden crearse y modificarse en tiempo de ejecución.
* No existen clases como en otros lenguajes clásicos (como Java o C++); en su lugar, se usan **funciones constructoras** y el **objeto `prototype`** para compartir propiedades y métodos.
* La palabra clave `this` hace referencia al objeto que invoca la función.
* La palabra clave `new` se usa para crear instancias que heredan del prototipo del constructor.
* La "herencia se logra mediante prototipos", es decir, un objeto puede “heredar” propiedades y métodos de otro a través de la **cadena de prototipos** (*prototype chain*).
* Todos los objetos descienden en última instancia de `Object.prototype`.
* El lenguaje es **dinámicamente tipado** (no se definen tipos explícitos) y **multi-paradigma** (permite también programación funcional o imperativa).

Ejercicio 4

* Flexibilidad: al no depender de clases rígidas, se pueden crear y extender objetos de manera muy dinámica.
* Reutilización sencilla: los métodos definidos en el prototipo son compartidos por todas las instancias, lo que optimiza memoria y evita duplicación de código.
* Herencia más simple y directa: algunos consideran que el modelo de herencia basado en prototipos es más intuitivo que el de clases, ya que los objetos heredan de otros objetos.
* Naturaleza dinámica: JavaScript permite modificar objetos, agregar o eliminar propiedades en tiempo de ejecución, lo cual brinda gran adaptabilidad.
* Simplicidad conceptual: se basa en la idea de objetos concretos, sin necesidad de pensar en jerarquías formales de clases.
* Universalidad: corre en cualquier navegador o entorno (Node.js), lo que lo hace muy versátil.


