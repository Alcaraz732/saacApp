const sql = require("../models/db");
var tabID;
var botonID;
const generarDatos = async(emailUsu, Usuname) => {
    sql.query(`INSERT INTO \`tablero\` (\`Nombre\`, \`Usuario\`, \`Color\`) VALUES ( 'Tablero de ${Usuname}', '${emailUsu}', '#26CCE6')`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        tabID = res.insertId
            //console.log(res);

        sql.query(`INSERT INTO \`categoria\` ( \`Nombre\`, \`Icono\`, \Tablero\) VALUES
        ( 'Frases', 'https://cdn-icons-png.flaticon.com/512/100/100766.png', ${tabID}),
        ('Noticias', 'https://cdn-icons-png.flaticon.com/512/88/88290.png', ${tabID}),
        ('Tiempo', 'https://icons-for-free.com/iconfiles/png/512/forecast+sun+weather+icon-1320184881471073011.png', ${tabID}),
        ('Musica', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png', ${tabID})`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            console.log("datos creados 2");
            console.log(res.insertId);
            botonID = res.insertId;

            sql.query(`INSERT INTO \`boton\` ( \`Nombre\`, \`Color\`, \`Imagen\`, \`Sonido\`, \`Favorito\`, \`categoria\`) VALUES
            ('Hola ¿Cómo estas?', '#66F000', 'https://cdn.pixabay.com/photo/2017/06/08/20/18/computer-icon-2384752_1280.png', 'Hola, como estas?', 0, ${botonID}),
            ('¿Cómo te llamas?', '#1287DE', 'p', '¿Como te llamas?', 0, ${botonID}),
            ('Chiste', '#D2DE12', 'https://ouch-cdn2.icons8.com/SnXPMFWwjS_z755YPVtJkkt3v3ZVliAPZUOv8IYBNFI/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjg4/L2MzNDA2NmRkLWQ5/YWMtNGFkOC05MzA5/LTVmMmE5YzEyMDI2/NS5zdmc.png', '¿Me cuentas un chiste?', 0, ${botonID}),
            ('¿Quién eres?', '#1BD048', 'p', '¿Quién eres?', 0, ${botonID}),
            ('Que día es hoy?', '#86629C', 'https://cdn-icons-png.flaticon.com/512/425/425868.png', 'Que día es hoy?', 0, ${botonID}),
            ('Pon una alarma', '#F35207', 'https://cdn4.iconfinder.com/data/icons/web-pack/64/alarm-512.png', 'Hola, como estas?', 0,  ${botonID}),
            ('Jugar', '#EF7B16', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/768px-Video-Game-Controller-Icon-IDV-green.svg.png', 'quiero jugar a algo', 0,  ${botonID}),
            ('Cuando es tu cumpleaños?', '#19DAD1', 'p', 'Cuando es tu cumpleaños?', 0,  ${botonID}),
            ('Donde estoy?', '#1ED64F', 'p', 'Donde estoy?', 0,  ${botonID}),
            ('Noticias de hoy', '#F35207', 'p', 'dime las noticias de hoy', 0,  ${botonID+1}),
            ('Noticias deportivas', '#10CFE2', 'https://cdn-icons-png.flaticon.com/512/857/857418.png', 'Dime las noticias deportivas', 0,  ${botonID+1}),
            ('Prensa rosa', '#F380EF', 'p', 'Dime la prensa rosa de hoy', 0,  ${botonID+1}),
            ('Antena 3 noticias', '#D5EA0A', 'https://static.wikia.nocookie.net/logopedia/images/1/1b/Primer-Logotipo-Antena-3-Noticias.png/revision/latest?cb=20200307154833&path-prefix=es', 'Dime las noticias de antena 3', 0,  ${botonID+1}),
            ('El País', '#1ED64F', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/El_Pais_logo_2007.svg/2560px-El_Pais_logo_2007.svg.png', 'Dime las noticias de El País', 0,  ${botonID+1}),
            ('Tiempo hoy', '#12D9C1', 'p', 'Que tiempo hace hoy', 0,  ${botonID+2}),
            ('Tiempo mañana', '#28CF39', 'p', 'Que tiempo hará mañana?', 0,  ${botonID+2}),
            ('Canción al azar', '#9472DC', 'p', 'Pon una canción', 0,  ${botonID+3}),
            ('Música Chill', '#42DFB5', 'p', 'Pon musica chill', 0,  ${botonID+3}),
            ('Música energica', '#F63607', 'p', 'Pon musica energica', 0,  ${botonID+3}),
            ('Música para bailar', '#609A63', 'p', 'Pon las canciones del momento', 0,  ${botonID+3}),
            ('Spotify', '#10CB18', 'https://i.pinimg.com/originals/71/7d/1c/717d1cb8acba98548edbe4e30b00f019.png', 'abre spotify', 0,  ${botonID+3})
            `, (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                    return;
                }

                console.log("datos creados 3 ");

            });


        });

    });




}

module.exports = { generarDatos }