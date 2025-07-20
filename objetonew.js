const web = {
    nombre: 'google',
    links: {
        enlace: 'www.google.com'
    },
    redesSociales: {
        youtube:{ 
            enlace: 'youtube.com/google',
            nombre: 'google yt'
        },
        facebook:{
            enlace: 'facebook.com/google',
            nombre: 'google fb'
        }
    }
}

//const enlaceYT = web.redesSociales.facebook.enlace;

const {enlace} = web.redesSociales.youtube;

console.log(enlace);