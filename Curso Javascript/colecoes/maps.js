function getAdmins(map) {
  let admins = [];
   for ([key,value] of map){
    if (value === 'Admin'){
      admins.push(key);
    }
   
   }
   return admins
}

const usuarios = new Map();

usuarios.set('marcos','Admin');
usuarios.set('luiz','Admin');
usuarios.set('giulia','Admin');
usuarios.set('Andre','user');

console.log(getAdmins(usuarios))