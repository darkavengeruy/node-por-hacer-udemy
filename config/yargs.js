// const opts ={
//     completado: {
//         demand: true,
//         alias: 'c'
//     },
//     descripcion: {
//         alias: 'd',
//         desc: 'Descripcion de la tarea por hacer',
//         demand: true,
//     }
// }

const argv = require('yargs')

    .command('crear','Crea en consola las tareas.',{        
        descripcion: {
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer',
            demand: true,
        }
    })
    .command('actualizar','Actualiza las tareas.',{
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer',
        },
        completado: {
            default: true, 
            alias: 'c',                       
            desc: 'Marca como completado o pendiente la tarea.',
        }
    })
    .command('borrar','Borra la tarea seleccionada.',{
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Borra la tarea por hacer',
        }        
    })     
    .help()
    .argv;


    module.exports = {
        argv
    }