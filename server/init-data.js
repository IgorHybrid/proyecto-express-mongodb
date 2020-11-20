const db = require('./db.js');

const Subtype = require(process.cwd() + '/server/models/subtype');
const Type = require(process.cwd() + '/server/models/type');

const createData = async () => {
    try {
        const dbConnection = await db.startDB();

        await dbConnection.connection.db.dropDatabase();

        let productos = new Subtype();
        productos.name = 'Productos';
        const insertedProductos = await productos.save();

        let promociones = new Subtype();
        promociones.name = 'Promociones';
        const insertedPromociones =  await promociones.save();

        let devoluciones = new Subtype();
        devoluciones.name = 'Devoluciones';
        const insertedDevoluciones = await devoluciones.save();

        let envios = new Subtype();
        envios.name = 'Envíos';
        const insertedEnvios = await envios.save();

        let informacion = new Type();
        informacion.name = "Información";
        informacion._subtypes = [insertedProductos._id, insertedPromociones._id, insertedDevoluciones._id, insertedEnvios._id];;
        await informacion.save();

        let instalacion = new Subtype();
        instalacion.name = 'Instalación';
        const insertedInstalacion = await instalacion.save();

        let transporte = new Subtype();
        transporte.name = 'Transporte';
        const insertedTransporte =  await transporte.save();

        let incidencia = new Type();
        incidencia.name = "Incidencia técnica";
        incidencia._subtypes = [insertedInstalacion._id, insertedTransporte._id];;
        await incidencia.save();

        let consulta = new Subtype();
        consulta.name = 'Consulta General';
        const insertedConsulta =  await consulta.save();

        let otros = new Type();
        otros.name = "Otros";
        otros._subtypes = [insertedConsulta._id];;
        await otros.save();

    } catch (error) {
        console.error(error);
    }

    process.exit();
}

createData();