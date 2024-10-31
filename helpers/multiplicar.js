
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    return new Promise( (resolve, reject) => {

        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
        }
        
        if( listar ) {
            console.log('======================'.green);
            console.log('     Tabla del:'.green, colors.blue( base ));
            console.log('======================'.green);

            console.log(consola);
        }

        try {
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            resolve(`tabla-${base}.txt`);
          } catch (err) {
            reject(new Error('No se pudo crear el archivo:', err));
          }
    });

}

module.exports = {
    crearArchivo
}
