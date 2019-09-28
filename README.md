# BabyShare
Repositorio para BabyShare 2019

****************** GIT & GITHUB ******************

1. Como creo un nuevo repositorio local (Git):

- En terminal, ubicarse en la carpeta dónde estará nuestro proyecto. Ejemplo: En Desktop creé BabyShare, entonces:
    cd Desktop/BabyShare [me moví a BabyShare]
    git init [Hago el repositorio]
    
2. Añadó el repositorio remoto al local, seguimos en la misma carpeta:

    git remote add origin https://github.com/lenserrano/BabyShare [copien la url que les salga]
    git push -u origin master [esto nos sirve para no copiar la url todas las veces, ahora ocupamos origin]

3. Traer al repositorio local los archivos del remoto [en este caso sólo está el README.md]

    git pull origin master

4. Para añadir archivos al repositorio LOCAL.
    git add . [añade todos los archivos que tengas] / git add ejemplo.txt [añade sólo el archivo específicado]
    git commit -m "l: mi primer commit" [recuerden que un commit siempre tiene que tener mensaje, SIEMPRE. Aquí diría que pongamos nuestra inicial para saber más fácil quien hizo qué commit (yo l, diana d, claudia c)]
    git status [nos muestra si tenemos algún archivo pendiente por añadir, o algún commit faltante...todo bien: working tree free]

5. Para añadir archivos al repositorio REMOTO.
    Con el staging libre [todos los archivos añadidos y hecho commit]

    git push -u origin master [la última es la rama que mandaremos al repositorio, puede ser diferente a master(default)]

6. Como creo una RAMA:

    git checkout -b gh-pages [me salgo de la rama master y con -b creo la rama gh-pages, automáticamente me moví a esa rama (gh-pages)]

7. Como me muevo entre ramas:

    git checkout gh-pages [el último argumento es el nombre de la rama a mover, es decir estando en master me moví a la rama gh-pages]

8. Como hago MERGE entre ramas:

    -Primero hay que recordar hacer el merge desde la rama a dónde queremos traer las cosa, hay que asegurarnos que el HEAD este en el lugar indicado.
        git log [ esto te despliega los commits hechos y la rama dónde estas actualmente]
        >>Len:BabyShare LenSerrano$ git log
            commit 42c1aaa5f9c3e60bdcbbbd0465659ba838b72ca0 (HEAD -> master, origin/master) [<- Aquí es donde me dice en que rama estoy actualmente]
            Author: Len Serrano <53360267+lenserrano@users.noreply.github.com>
            Date:   Mon Sep 23 22:30:38 2019 -0500

                Initial commit

    -Ya estando en la rama deseada.
        git merge origin/master [el último argumento es el nombre de la rama a la que queremos combinar]

9. ¿Conflictos?
    1. Trabajar sobre el mismo archivo (componente). Ejemplo que dos o más esten trabajando sobre estilos.css en la misma clase .body
    2. Eliminar un archivo sobre el que otra persona trabaje. Ejemplo yo estoy trabajando sobre _variables.scss y alguien lo borra, cuando guarde y suba mis cambios al remoto hay conflicto.
    3. Renombrar un archivo. Ejemplo cambio estilos.css por styles.css y hay alguien trabajando sobre el le creará un conflicto al hacer merge.



