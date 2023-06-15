Adicionales de GIT

git commit -m "mensaje" (NOMBRE CON EL QUE GUARDAS UN COMMIT)

git remote remove origin (NO SE PARA QUE ES PERO FACIL ELIMINA ALGO)

git log (PARA VER ID DE TODOS LOS COMMITS GUARDADOS)

git log --oneline --graph (COMO EL LOG PERO EN LINEA Y MAS SIMPLIFICADO)

git diff <id1> <id2> (COMPARAR CAMBIOS ENTRE DOS COMMITS)

git show <id> (VER CAMBIOS ESPECIFICOS POR COMMIT)

git status (VER CUALES ARCHIVOS NECESITAN GUARDARSE EN UN COMMIT POR QUE FUERON EDITADOS)

git init (INICIA UN COMMIT)

git checkout <id> <Nombre archivo.<lenguaje(html,jv,py,etc)>> (ACCEDER A UN COMMIT GUARDADO PREVIAMENTE)

git reset <id> --hard (ELIMINAR TODO LO GUARDADO Y USAR SOLO EL ID DEL COMMIT COLOCADO AQUI)

git add .(Nombre de archivo o ".", si usas el punto se guarda todo es mas recomendable)

git brunch -M (insertar nombre main o master)

DIAGRAMA DE FLUJO:

git init ---> git status ---> git add . --->git commit -m "mensaje" --->git log

LUEGO: Dependiendo de que quieres hacer con cada commit usaras:

git diff <id1> <id2>(diferenciarlos)

git checkout <id> <Nombre de archivo con extension> (ver un commit en especifico)

git reset <id> --hard (eliminar todo)

Finalmente, ejecuta git push/pull origin master para empujar tus archivos a Github.

GITHUB:

eval 'ssh-agent -s' (Comando para evaluar)
eval "$(ssh-agent -s)" (Comando general para evaluar clave en caso no sirva la otra opcion)
ssh-add ~/.ssh/id_rsa (agregar acceso a clave)

--1er link de github--
  
git remote -v (ver estatus en github)
  
--3er link de github--
