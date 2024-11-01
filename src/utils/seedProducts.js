import db from "../db/db.js"
import { addDoc, collection } from "firebase/firestore"

const products = [
    {
        id:"1",
        name:"Samba OG W",
        description:"Samba Og W es un nuevo producto para Mujer de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés Samba Og W podés dejar una reseña abajo; siempre nos encanta conocer tu opinión. Aún estamos trabajando para tener más información de Samba Og W, así que volvé pronto. Mientras tanto, tomá nota del número de artículo que identifica el producto IG1968 para que lo puedas encontrar de nuevo fácilmente. Está categorizado como: Zapatillas",
        price: 183.999,
        stock: 20,
        image:"/public/img/Samba-grises.jpg",
        category:"calzado"
    },
    {
        id:"2",
        name:"Gazelle Indoor",
        description:"Estas zapatillas Gazelle Indoor actualizan uno de los diseños más legendarios de adidas. Creadas originalmente como calzado de entrenamiento de fútbol, su silueta icónica ha superado la prueba del tiempo. El exterior de gamuza de primera calidad y la suela de caucho natural te ofrecen una pisada cómoda y elegante, mientras que el Trifolio y las 3 Tiras dentadas rinden homenaje al legado de adidas.",
        price:189.999,
        stock:20,
        image:"/public/img/Gazelle-verde.jpg",
        category:"calzado"
    },
    {
        id:"3",
        name:"Crazy Infinity",
        description:"Subí de nivel con estas zapatillas adidas Crazy Infinity. Los costados de poliuretano moldeado y la punta de caucho evocan el pasado, mientras que la cubierta para malla y el exterior textil miran hacia el futuro. Con estas zapatillas atraerás todas las miradas y disfrutarás de una comodidad que dura hasta bien entrada la noche.",
        price:245.999,
        stock:20,
        image:"/public/img/Crazy-infinity.jpg",
        category:"calzado"
    },
    {
        id:"4",
        name:"Pureboost 5",
        description:"Salí a correr de mañana y a hacer mandados en la ciudad con estas zapatillas de running adidas. Nuestra amortiguación BOOST más ligera a la fecha mantiene tus pasos energizados y el exterior de malla está optimizado para una máxima transpirabilidad y soporte. Caminá con seguridad sobre cualquier terreno con la suela Adiwear de gran agarre. Este producto contiene al menos un 20% de material reciclado. Utilizando materiales reciclados disminuimos los residuos, nuestra dependencia de los recursos finitos y la huella que generan los productos que fabricamos.",
        price:189.999,
        stock:20,
        image:"/public/img/zapatillas-running.jpg",
        category:"calzado"
    },
    {
        id:"5",
        name:"Campus 00S",
        description:"Estas zapatillas adidas recuperan los elementos más emblemáticos de los Campus 80s y los actualizan con un toque skater. Conocida por su resistencia al desgaste y la forma de amoldarse al pie, su parte superior de gamuza te ofrece una pisada estable durante más tiempo. Los nuevos colores, estampados y logotipos de inspiración universitaria crean una identidad renovada para que las nuevas generaciones expresen su estilo.",
        price:171.999,
        stock:20,
        image:"/public/img/campus-azules.jpg",
        category:"calzado"
    },
    {
        id:"6",
        name:"Sandalias Adilette 22",
        description:"¿Estás listo para conquistar el mundo o simplemente relajarte junto a la piscina? Ponete las sandalias adidas Adilette 22 y estarás listo para cualquiera de los dos. Con un diseño de una sola pieza para máxima comodidad, están diseñadas para ir a donde tu día te lleve. Su diseño futurista está inspirado en la topografía y la carrera hacia el espacio. Los materiales naturales a base de materiales biológicos brindan amortiguación con cada paso para que puedas seguir explorando todo el día. Este producto está hecho con un mínimo de 20% de materiales renovables. Usar materiales provenientes de fuentes renovables ofrece nuevas posibilidades de reducir nuestra dependencia de recursos finitos. Elegimos materiales renovables porque son recursos naturales que se pueden plantar y cultivar de nuevo. Esto es diferente a los materiales a base de combustibles fósiles, que una vez utilizados, no podemos reponer.",
        price:89.999,
        stock:20,
        image:"/public/img/Sandalias-blancas.jpg",
        category:"calzado"
    },
    {
        id:"7",
        name:"Musculosa Power Boxy 3 Tiras Felpa Francesa",
        description:"Este musculosa adidas de felpa francesa se mueve con vos en cada sentadilla, estocada y abdominal. Diseñada para entrenamientos de fuerza de alta intensidad, la tecnología AEROREADY mantiene tu cuerpo seco y cómodo. El largo por encima de la cintura y el corte holgado te permiten levantar pesas con total confianza. Concentrate en tu forma, no en tu ropa, porque este top tiene todo lo que necesitás con dos capas. Este producto está hecho con un mínimo de 70% de materiales reciclados. Utilizando materiales reciclados disminuimos los residuos, nuestra dependencia de los recursos finitos y la huella que generan los productos que fabricamos.",
        price:62.999,
        stock:20,
        image:"/public/img/Musculosa_Power_Boxy.jpg",
        category:"mujer"
    },
    {
        id:"8",
        name:"Top Deportivo Powerreact Big Logo Estampado",
        description:"Este top deportivo con espalda racer-back te brinda el soporte que necesitas mientras entrenas. Diseñado para entrenamientos de bajo impacto donde la comodidad es clave, este top deportivo se mueve contigo. Ajustá la banda elástica para encontrar el ajuste perfecto y sentir tu piel seca con la tecnología de absorción AEROREADY. Este producto está hecho con un mínimo de 70% de materiales reciclados. Utilizando materiales reciclados disminuimos los residuos, nuestra dependencia de los recursos finitos y la huella que generan los productos que fabricamos.",
        price:38.999,
        stock:20,
        image:"/public/img/Top_Deportivo_Powerreact.jpg",
        category:"mujer"
    },
    {
        id:"9",
        name:"Remera sin Mangas Run It",
        description:"Dejá que tu originalidad brille mientras movés tu cuerpo. La colección Run It celebra la expresión individual, ayudándote a prosperar y empoderándote para sacarle el máximo provecho a tus carreras. Lleva tu experiencia al correr a otro nivel con esta remera sin mangas que se siente suave contra la piel kilómetro tras kilómetro. La remera sin mangas Run It está hecha con materiales ligeros y transpirables que te ofrecen comodidad de principio a fin de cada carrera. La tecnología de absorción adidas AEROREADY controla el sudor del cuerpo para que tu piel se sienta seca por más tiempo, mientras que los detalles reflectantes maximizan tu visibilidad. El llamativo logo performance le pone el toque final al look, demostrándole a todos lo que llevas en el corazón. Al elegir materiales reciclados, podemos reutilizar materiales que ya han sido creados, lo que ayuda a reducir los residuos y nuestra dependencia de recursos finitos.",
        price:40.999,
        stock:20,
        image:"/public/img/Remera_sin_Mangas_Run.jpg",
        category:"mujer"
    },
    {
        id:"10",
        name:"OTR B SHORT",
        description:"Otr B Short es un nuevo producto para Mujer de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés Otr B Short podés dejar una reseña abajo; siempre nos encanta conocer tu opinión. Aún estamos trabajando para tener más información de Otr B Short, así que volvé pronto. Mientras tanto, tomá nota del número de artículo que identifica el producto IX6371 para que lo puedas encontrar de nuevo fácilmente. Está categorizado como: Shorts",
        price:52.999,
        stock:20,
        image:"/public/img/OTR_B_SHORT_Negro.jpg",
        category:"mujer"
    },
    {
        id:"11",
        name:"OPT ST HR 1/1 L",
        description:"Opt St Hr 1/1 L es un nuevo producto para Mujer de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés Opt St Hr 1/1 L podés dejar una reseña abajo; siempre nos encanta conocer tu opinión. Aún estamos trabajando para tener más información de Opt St Hr 1/1 L, así que volvé pronto. Mientras tanto, tomá nota del número de artículo que identifica el producto IX0218 para que lo puedas encontrar de nuevo fácilmente. Está categorizado como: Pantalones y Calzas, Calzas",
        price:83.999,
        stock:20,
        image:"/public/img/OPT_ST_HR.jpg",
        category:"mujer"
    },
    {
        id:"12",
        name:"Campera Deportiva adidas x FARM Rio Premium",
        description:"Movete con estilo del gimnasio a la ciudad con esta campera de entrenamiento adidas x FARM Rio. Inspirada en los patrones que se observan en la selva, esta campera holgada luce un llamativo estampado de leopardo y colores vivos para un look salvaje. Con un tejido entrelazado suave y una capucha amplia para mantenerte cómodo, esta campera deportiva te permite pasar fácilmente de tu entrenamiento a una salida nocturna.",
        price:116.999,
        stock:20,
        image:"/public/img/Campera_Deportiva_adidas_fem.jpg",
        category:"mujer"
    },
    {
        id:"13",
        name:"Shorts Power Workout Dos-en-Uno",
        description:"Supera tus entrenamientos de HIIT o de fuerza con estos shorts versátiles de adidas. Ligeros y transpirables, los shorts exteriores proporcionan cobertura y comodidad, mientras que los shorts internos ceñidos ofrecen soporte localizado para hacer sentadillas, estocadas y cardio. Mantén la concentración en tu entrenamiento, gracias a la tecnología AEROREADY. Los bolsillos con cierre mantienen tus objetos esenciales seguros para que puedas moverte libremente. Al elegir contenido reciclado, podemos reutilizar materiales que ya han sido creados, lo que ayuda a disminuir los residuos. La elección de materiales renovables nos ayudará a eliminar nuestra dependencia de recursos finitos. Nuestros productos hechos con una mezcla de materiales reciclados y renovables incorporan al menos un 70 % de estos materiales.",
        price:99.999,
        stock:20,
        image:"/public/img/Shorts_Power_Workout_Dos-en-Uno.jpg",
        category:"hombre"
    },
    {
        id:"14",
        name:"Camiseta Alternativa River Plate 24/25 Versión Jugador",
        description:"Una moderna reversión de la camiseta bordó para celebrar los 75 años de amistad entre River Plate y Torino. La tecnología HEAT.RDY mantiene tu cuerpo seco cuando la temperatura sube dentro o fuera del campo. La inscripción Grandeza en la nuca te recuerda la importancia de valorar el pasado en el camino hacia un futuro mejor. Hecho con materiales 100 % reciclados, este producto representa solo una de nuestras soluciones para acabar con los residuos plásticos.",
        price:169.999,
        stock:20,
        image:"/public/img/Camiseta_Alternativa_River_Plate.jpg",
        category:"hombre"
    },
    {
        id:"15",
        name:"Camiseta Titular Authentic River Plate 24/25",
        description:"Esta nueva camiseta oficial de River Plate adidas muestra elegancia en su nuevo diseño con una banda roja que le cruza simulando aquel uniforme utilizado en la Intercontinental de 1986. Un diseño que recuerda la gloria del pasado para un equipo que se supera cada día. La tecnología HEAT.RDY y los paneles de malla se encargan de brindarte la comodidad que necesitás en el partido. Hecho con materiales 100 % reciclados, este producto representa solo una de nuestras soluciones para acabar con los residuos plásticos.",
        price:169.999,
        stock:20,
        image:"/public/img/Camiseta_Titular_Authentic_River_Plate.jpg",
        category:"hombre"
    },
    {
        id:"16",
        name:"Camiseta Titular Argentina 2024 Versión Jugador",
        description:"Renová tu look para celebrar un legado épico. Diseñada para jugadores profesionales, la colección Authentic fusiona detalles de alta tecnología con un diseño audaz para darle un giro vibrante al juego. La camiseta titular Argentina 2024 versión jugador incorpora los icónicos símbolos nacionales en una moderna silueta que celebra la pasión que distingue a los fanáticos de la Albiceleste. Con el inconfundible azul y blanco como base, esta camiseta de ajuste ceñido está confeccionada con un tejido ligero que se siente cómodo sobre tu piel. La tecnología adidas HEAT.RDY utiliza materiales avanzados para maximizar el flujo de aire y mantener tu piel fresca en los momentos más intensos. Este producto está hecho con un mínimo de 70% de materiales reciclados. Al reutilizar materiales ya creados, ayudamos a disminuir los residuos y nuestra dependencia de recursos finitos.",
        price:169.999,
        stock:20,
        image:"/public/img/Camiseta_Titular_Argentina_2024.jpg",
        category:"hombre"
    },
    {
        id:"17",
        name:"Pantalón Z.N.E.",
        description:"Celebrá el poder del trabajo en equipo con este pantalón adidas. Está confeccionado en un tejido de punto doble que te aísla del frío para que podás concentrarte en tu entrenamiento o disfrutar del partido con tus amigos sin distracciones. Las líneas estampadas en caucho con acabado mate están inspiradas en el campo de juego, demostrando tu pasión por el deporte dondequiera que vayas.",
        price:94.999,
        stock:20,
        image:"/public/img/Pantalon_Z.N.E._Blanco.jpg",
        category:"hombre"
    },
    {
        id:"18",
        name:"Buzo con Capucha ADN Argentina con Cierre Frontal 24",
        description:"Destacá tu pasión por Argentina con este buzo con capucha adidas. Su tejido de una mezcla de algodón suave te envuelve con comodidad desde el primer momento y los colores llamativos te tendrán en la mirada de todos en la tribuna. Luciendo las 3 estrellas, el escudo tejido de la selección en el pecho deja de manifiesto tus alianzas en la cancha. Al elegir materiales reciclados, podemos dar nueva vida a materiales que ya se han utilizado. La utilización de materiales renovables nos ayuda a reducir nuestra dependencia de los recursos finitos. Nuestros productos hechos con una mezcla de materiales reciclados y renovables incorporan al menos un 70% de estos materiales.",
        price:124.999,
        stock:20,
        image:"/public/img/Buzo_con_Capucha.jpg",   
        category:"hombre"
    },
]

const seedProducts = () => {
    const productsRef = collection(db, "products")
    products.map(( { id, ...dataProduct } )=> {
        addDoc(productsRef, dataProduct)
    })

    console.log("productos subidos")
    return
}

seedProducts()