/* ==========================================================================
   BORALAN — Diccionarios de traducción
   Idioma fuente: español (es). Claves = texto exacto en español.
   Idiomas: eu (euskara), fr (français), en (English)
   Lo usa build.js para generar /eu/, /fr/, /en/.
   ========================================================================== */

// Etiquetas de idioma para el selector
const LANGS = [
  { code: "es", label: "ES", name: "Español", htmlLang: "es", hreflang: "es", dir: "" },
  { code: "eu", label: "EU", name: "Euskara", htmlLang: "eu", hreflang: "eu", dir: "/eu" },
  { code: "fr", label: "FR", name: "Français", htmlLang: "fr", hreflang: "fr", dir: "/fr" },
  { code: "en", label: "EN", name: "English", htmlLang: "en", hreflang: "en", dir: "/en" }
];

/* Diccionario de frases. Cada clave es el texto español EXACTO que aparece
   en las páginas. Si una frase no está aquí, se deja en español (fallback). */
const T = {
  eu: {
    // — Navegación —
    "Inicio": "Hasiera",
    "Servicios": "Zerbitzuak",
    "Nosotros": "Gu",
    "Galería": "Galeria",
    "Contacto": "Kontaktua",
    "Presupuesto": "Aurrekontua",
    "Saltar al contenido": "Edukira saltatu",
    "Abrir menú": "Menua ireki",
    "Cerrar menú": "Menua itxi",
    "Navegación principal": "Nabigazio nagusia",
    "Navegación móvil": "Mugikorreko nabigazioa",
    "Trabajos de Boralan": "Boralanen lanak",
    "Seleccionar imagen": "Irudia hautatu",
    "Arborista de Boralan trepando hasta la copa de un árbol con cuerdas": "Boralango arboristak soketan zuhaitz baten kopururaino igotzen",
    "Poda en altura de una haya doble mediante técnicas de trepa": "Pago bikoitz baten inausketa altueran, igoera teknikak erabiliz",
    "Trabajo vertical suspendido con cuerdas sobre un árbol de gran altura": "Soketatik zintzilik egindako lan bertikala altuera handiko zuhaitz batean",
    "Bosque entre la niebla en las montañas de Navarra": "Lainopean dagoen basoa Nafarroako mendietan",
    "Tala controlada de un árbol junto a una edificación en zona de difícil acceso": "Zuhaitz baten mozketa kontrolatua eraikin baten ondoan, sarbide zaileko eremuan",
    "Luz del sol entrando entre los árboles de un bosque": "Eguzki argia baso bateko zuhaitzen artean sartzen",
    "Boralan — inicio": "Boralan — hasiera",
    "Migas de pan": "Ogi-apurrak",

    // — Footer —
    "Poda y tala de grandes árboles en altura. Trepa y apeos controlados en Navarra y País Vasco.":
      "Zuhaitz handien inausketa eta mozketa altueran. Igoera eta mozketa kontrolatuak Nafarroan eta Euskal Herrian.",
    "Navegación": "Nabigazioa",
    "Lesaka, Navarra": "Lesaka, Nafarroa",
    "Todos los derechos reservados.": "Eskubide guztiak erreserbatuta.",
    "Aviso legal": "Lege-oharra",
    "Privacidad": "Pribatutasuna",
    "Cookies": "Cookieak",
    "Diseñado por": "Diseinatzailea:",
    "Escríbenos por WhatsApp": "Idatzi WhatsApp bidez",
    "Aviso de cookies": "Cookieen oharra",
    "Usamos cookies propias y técnicas para mejorar tu experiencia. Consulta nuestra":
      "Cookie propioak eta teknikoak erabiltzen ditugu zure esperientzia hobetzeko. Ikusi gure",
    "política de cookies": "cookieen politika",
    "Aceptar": "Onartu",
    "Rechazar": "Ukatu",

    // — Home: hero / loader —
    "Subir": "Igo", "donde": "besteek", "otros": "iristen", "no": "ez", "llegan.": "diren tokira.",
    "Poda y tala en altura · Navarra": "Inausketa eta mozketa altueran · Nafarroa",
    "Subimos donde": "Besteek iristen ez diren",
    "otros no llegan": "tokira igotzen gara",
    "Especialistas en talas controladas y podas de grandes árboles en zonas inaccesibles para maquinaria. Técnicas de trepa y apeos controlados. Abaratamos costes sin renunciar a la seguridad.":
      "Makineria iristen ez den tokietan zuhaitz handien mozketa eta inausketa kontrolatuetan adituak. Igoera-teknikak eta mozketa kontrolatuak. Kostuak merkatzen ditugu segurtasunari uko egin gabe.",
    "Pide presupuesto": "Eskatu aurrekontua",
    "Ver servicios": "Ikusi zerbitzuak",
    "Desplázate hacia abajo": "Behera mugitu",
    "Scroll": "Scroll",

    // — Home: marquesina —
    "Talas controladas": "Mozketa kontrolatuak",
    "Podas en altura": "Inausketa altueran",
    "Apeos controlados": "Mozketa kontrolatuak",
    "Zonas inaccesibles": "Sarbide zaileko guneak",
    "Gestión de residuos": "Hondakinen kudeaketa",

    // — Home: servicios —
    "Qué hacemos": "Zer egiten dugun",
    "Poda y tala de árboles peligrosos, en sitios imposibles.": "Zuhaitz arriskutsuen inausketa eta mozketa, toki ezinezkoetan.",
    "Boralan realiza talas controladas, podas en altura, trabajos en zonas inaccesibles y gestión de residuos de poda y tala en Navarra y el País Vasco, mediante técnicas de trepa y apeos controlados.": "Boralanek mozketa kontrolatuak, altuerako inausketak, sarbide zaileko guneetako lanak eta inausketa- eta mozketa-hondakinen kudeaketa egiten ditu Nafarroan eta Euskal Herrian, igoera-teknika eta mozketa kontrolatuen bidez.",
    "Nos llaman cuando un árbol presenta un riesgo o cuando no se puede entrar con máquinas. Subimos, lo cortamos trozo a trozo y lo bajamos de forma controlada.":
      "Zuhaitz batek arriskua duenean edo makinekin sartzerik ez dagoenean deitzen digute. Igo, zatika moztu eta modu kontrolatuan jaisten dugu.",
    "Apeo de grandes árboles trozo a trozo, sin riesgo para casas, vallados ni instalaciones cercanas.":
      "Zuhaitz handien mozketa zatika, etxe, hesi edo inguruko instalazioentzat arriskurik gabe.",
    "Técnicas de trepa para podar la copa con precisión, mejorando la salud y la seguridad del árbol.":
      "Igoera-teknikak kopa zehaztasunez inausteko, zuhaitzaren osasuna eta segurtasuna hobetuz.",
    "Trabajamos donde no llega la maquinaria. Abaratamos costes al no necesitar grúas ni grandes medios.":
      "Makineria iristen ez den tokietan lan egiten dugu. Kostuak merkatzen ditugu garabirik edo bitarteko handirik behar ez dugulako.",
    "Nos encargamos de los restos de poda y tala. Dejamos la zona limpia y lista.":
      "Inausketa eta mozketa hondakinez arduratzen gara. Gunea garbi eta prest uzten dugu.",
    "Más información": "Informazio gehiago",

    // — Home: stats —
    "Seguidores en Instagram": "Jarraitzaileak Instagramen",
    "Visualizaciones de media por vídeo": "Ikustaldi batez beste bideoko",
    "El árbol más alto que talamos": "Moztu dugun zuhaitzik altuena",
    "Profesionales en cada trabajo": "Profesional lan bakoitzean",

    // — Home: nosotros split —
    "Quiénes somos": "Nor garen",
    "Tres lesakarras que emprenden en altura.": "Altueran ekiten duten hiru lesakar.",
    "Somos una empresa especializada en podas en altura y talas de grandes arboles. Trabajamos en sitios inaccesibles para maquinaria y abaratamos costes por no tener que usarla. Trabajamos con técnicas de trepa y apeos controlados.":
      "Altuerako inausketetan eta zuhaitz handien mozketetan espezializatutako enpresa gara. Makineria iristen ez den tokietan lan egiten dugu eta kostuak merkatzen ditugu hori erabili behar ez dugulako. Igoera-teknikekin eta mozketa kontrolatuekin lan egiten dugu.",
    "Somos una empresa especializada en podas en altura y talas de grandes árboles. Trabajamos en sitios inaccesibles para maquinaria y abaratamos costes por no tener que usarla. Trabajamos con técnicas de trepa y apeos controlados.":
      "Altuerako inausketetan eta zuhaitz handien mozketetan espezializatutako enpresa gara. Makineria iristen ez den tokietan lan egiten dugu eta kostuak merkatzen ditugu hori erabili behar ez dugulako. Igoera-teknikekin eta mozketa kontrolatuekin lan egiten dugu.",
    "Gestionamos los residuos de podas y talas.": "Inausketa eta mozketen hondakinak kudeatzen ditugu.",
    "Conoce al equipo": "Ezagutu taldea",
    "Bortziri · Cinco Villas": "Bortziri · Bost Hiriak",

    // — Home: prensa —
    "En los medios": "Komunikabideetan",
    "Salimos en la tele y en el periódico.": "Telebistan eta egunkarian agertu gara.",
    "Nuestro trabajo y nuestros vídeos han llamado la atención de la prensa de Navarra y del País Vasco.":
      "Gure lanak eta bideoek Nafarroako eta Euskal Herriko prentsaren arreta erakarri dute.",
    "Entrevista en televisión": "Telebistako elkarrizketa",
    "Nos entrevistaron sobre nuestro oficio en altura.": "Altuerako gure lanbideari buruz elkarrizketatu gintuzten.",
    "Puedes ver la entrevista completa en nuestro perfil de Instagram, donde explicamos de forma gráfica y didáctica a qué nos dedicamos.":
      "Elkarrizketa osoa gure Instagram profilean ikus dezakezu, non zertan aritzen garen modu grafiko eta didaktikoan azaltzen dugun.",
    "Ver entrevista completa": "Ikusi elkarrizketa osoa",
    "Artículo Diario de Navarra": "Diario de Navarra artikulua",
    "Tu navegador no admite vídeo HTML5.": "Zure nabigatzaileak ez du HTML5 bideorik onartzen.",

    // — Home: instagram —
    "Síguenos en Instagram.": "Jarraitu gaitzazu Instagramen.",
    "Grabamos nuestros trabajos con la GoPro desde lo alto del árbol. Más de 4.300 personas ya nos siguen.":
      "Gure lanak GoPro-rekin grabatzen ditugu zuhaitzaren goialdetik. 4.300 lagunek baino gehiagok jarraitzen gaituzte jada.",
    "Ver perfil de Instagram de Boralan": "Ikusi Boralanen Instagram profila",

    // — Home: CTA —
    "¿Tienes un árbol complicado?": "Zuhaitz korapilatsua duzu?",
    "Cuéntanos tu caso. Te damos presupuesto sin compromiso.": "Kontatu zure kasua. Konpromisorik gabeko aurrekontua ematen dizugu.",
    "Árboles peligrosos, podas en altura o talas en sitios donde no entra la maquinaria. Lo vemos.":
      "Zuhaitz arriskutsuak, altuerako inausketak edo makineria sartzen ez den tokietako mozketak. Begiratuko dugu.",
    "Pedir presupuesto": "Eskatu aurrekontua",

    // — Servicios —
    "Lo que hacemos": "Egiten duguna",
    "en altura.": "altueran.",
    "Trepa, apeos controlados y limpieza. Resolvemos los árboles que nadie más quiere tocar.":
      "Igoera, mozketa kontrolatuak eta garbiketa. Beste inork ukitu nahi ez dituen zuhaitzak konpontzen ditugu.",
    "Servicio 01": "01 Zerbitzua", "Servicio 02": "02 Zerbitzua", "Servicio 03": "03 Zerbitzua", "Servicio 04": "04 Zerbitzua",
    "Apeamos grandes árboles trozo a trozo desde arriba, sin tirarlos de golpe. Así protegemos casas, vallados, tendidos e instalaciones que estén cerca. Cada corte es controlado y bajado con cuerda.":
      "Zuhaitz handiak goitik zatika mozten ditugu, kolpetik bota gabe. Horrela inguruko etxeak, hesiak, hariteriak eta instalazioak babesten ditugu. Mozketa bakoitza kontrolatua da eta sokarekin jaisten da.",
    "Apeo trozo a trozo": "Zatikako mozketa",
    "Sin riesgo para lo que hay alrededor.": "Inguruan dagoenarentzat arriskurik gabe.",
    "Árboles peligrosos": "Zuhaitz arriskutsuak",
    "Ejemplares con riesgo de caída o partidos.": "Erortzeko arriskua duten edo apurtutako aleak.",
    "Subimos a la copa con técnicas de trepa para podar con precisión: ramas secas, peligrosas o que molestan. Mejoramos la salud del árbol y reducimos el riesgo, sin dañar el ejemplar.":
      "Koparaino igotzen gara igoera-teknikekin zehaztasunez inausteko: adar lehorrak, arriskutsuak edo enbarazu egiten dutenak. Zuhaitzaren osasuna hobetzen dugu eta arriskua murrizten, alea hondatu gabe.",
    "Técnicas de trepa": "Igoera-teknikak",
    "Acceso a copas que la maquinaria no alcanza.": "Makineria iristen ez den kopetarako sarbidea.",
    "Poda de mantenimiento": "Mantentze-inausketa",
    "Salud, forma y seguridad del árbol.": "Zuhaitzaren osasuna, forma eta segurtasuna.",
    "Trabajamos donde no llega la maquinaria: laderas, jardines cerrados, junto a edificios o en terrenos imposibles. Al no necesitar grúas ni grandes medios, abaratamos el coste del trabajo.":
      "Makineria iristen ez den tokietan lan egiten dugu: mazelak, lorategi itxiak, eraikinen ondoan edo lur ezinezkoetan. Garabirik edo bitarteko handirik behar ez dugunez, lanaren kostua merkatzen dugu.",
    "Sin maquinaria pesada": "Makineria astunik gabe",
    "Menos coste y menos daño al entorno.": "Kostu gutxiago eta kalte gutxiago ingurunean.",
    "Terrenos complicados": "Lur korapilatsuak",
    "Laderas, cierres y espacios reducidos.": "Mazelak, itxiturak eta toki estuak.",
    "No dejamos el trabajo a medias. Nos encargamos de los restos de poda y tala y dejamos la zona limpia y ordenada cuando terminamos.":
      "Ez dugu lana erdizka uzten. Inausketa eta mozketa hondakinez arduratzen gara eta amaitzean gunea garbi eta txukun uzten dugu.",
    "Retirada de restos": "Hondakinen kentzea",
    "Recogida y gestión de la madera y la rama.": "Egurra eta adarrak biltzea eta kudeatzea.",
    "Zona limpia": "Gune garbia",
    "Terminamos y dejamos todo recogido.": "Amaitu eta dena jasota uzten dugu.",
    "Cómo trabajamos": "Nola lan egiten dugun",
    "De la llamada al árbol en el suelo.": "Deitik zuhaitza lurrera arte.",
    "Preguntas frecuentes": "Ohiko galderak",
    "Dudas habituales sobre poda y tala en altura.": "Altuerako inausketa eta mozketari buruzko ohiko zalantzak.",
    "¿Cuánto cuesta talar un árbol grande en altura?": "Zenbat balio du zuhaitz handi bat altueran moztzeak?",
    "El coste depende de la altura, el entorno y la dificultad de acceso. Al trabajar por trepa y sin grúa, abaratamos el precio frente a la maquinaria pesada. Damos presupuesto sin compromiso.": "Kostua altueraren, ingurunearen eta sarbidearen zailtasunaren araberakoa da. Igoeraz eta gururik gabe lan eginez, prezioa merkatzen dugu makineria astunaren aldean. Konpromisorik gabeko aurrekontua ematen dugu.",
    "¿Cuándo necesito una tala controlada en altura?": "Noiz behar dut altuerako mozketa kontrolatu bat?",
    "Cuando un árbol presenta riesgo de caída, está cerca de una casa o un vallado, o no se puede entrar con maquinaria. Subimos al árbol y lo cortamos trozo a trozo de forma controlada.": "Zuhaitzak erortzeko arriskua duenean, etxe edo hesi batetik gertu dagoenean, edo makineriarekin sartu ezin denean. Zuhaitzera igo eta zatika mozten dugu, modu kontrolatuan.",
    "¿Podéis quitar un árbol pegado a una casa sin dañarla?": "Etxe bati itsatsitako zuhaitz bat ken dezakezue kalterik egin gabe?",
    "Sí. Apeamos el árbol trozo a trozo desde arriba y bajamos cada corte con cuerda, protegiendo casas, vallados e instalaciones cercanas.": "Bai. Zuhaitza goitik behera zatika apeatzen dugu eta moztutako zati bakoitza sokaz jaisten dugu, inguruko etxe, hesi eta instalazioak babestuz.",
    "¿Trabajáis en sitios donde no entra la maquinaria?": "Makineria sartzen ez den tokietan lan egiten duzue?",
    "Sí. Nos especializamos en zonas inaccesibles para grúas y máquinas. Al trabajar con técnicas de trepa abaratamos costes porque no necesitamos grandes medios.": "Bai. Gururako eta makinetarako sarbide zaileko guneetan espezializatuta gaude. Igoera-teknikekin lan eginez kostuak merkatzen ditugu, ez baitugu bitarteko handirik behar.",
    "¿Os encargáis de retirar los restos de la poda o la tala?": "Inausketako edo mozketako hondarrak kentzeaz arduratzen zarete?",
    "Sí, gestionamos los residuos de podas y talas y dejamos la zona limpia.": "Bai, inausketa eta mozketako hondakinak kudeatzen ditugu eta eremua garbi uzten dugu.",
    "¿En qué zonas trabajáis?": "Zein eremutan lan egiten duzue?",
    "En Navarra (Lesaka, Bera, Igantzi, Etxalar y el resto de Bortziri / Cinco Villas) y en Gipuzkoa (Irun, Hondarribia y alrededores). Consúltanos tu caso sin compromiso.": "Nafarroan (Lesaka, Bera, Igantzi, Etxalar eta gainerako Bortziri / Bost Iriak) eta Gipuzkoan (Irun, Hondarribia eta inguruak). Galdetu zure kasua konpromisorik gabe.",
    "Un proceso sencillo, seguro y siempre con los tres en el trabajo.": "Prozesu erraza, segurua eta beti hirurok lanean.",
    "Paso 01": "01 Urratsa", "Paso 02": "02 Urratsa", "Paso 03": "03 Urratsa",
    "Valoramos el árbol": "Zuhaitza aztertzen dugu",
    "Vemos la altura, el entorno y la dificultad. Cada árbol es diferente.": "Altuera, ingurunea eta zailtasuna ikusten ditugu. Zuhaitz bakoitza desberdina da.",
    "Subimos y cortamos": "Igo eta mozten dugu",
    "Trepamos, atamos y vamos cortando de forma controlada, trozo a trozo.": "Igo, lotu eta modu kontrolatuan mozten goaz, zatika.",
    "Limpiamos la zona": "Gunea garbitzen dugu",
    "Gestionamos los residuos y dejamos todo recogido.": "Hondakinak kudeatzen ditugu eta dena jasota uzten dugu.",
    "¿Tienes un árbol que resolver?": "Konpondu beharreko zuhaitzik duzu?",
    "Cuéntanos el caso y te decimos cómo lo hacemos.": "Kontatu kasua eta nola egiten dugun esango dizugu.",
    "Presupuesto sin compromiso para talas, podas y trabajos en altura.": "Konpromisorik gabeko aurrekontua mozketa, inausketa eta altuerako lanetarako.",

    // — Nosotros —
    "Tres jóvenes que": "Altueran ekiten duten",
    "emprenden en altura.": "hiru gazte.",
    "\"La mayoría dicen que estamos locos.\" — Iker, Beñat y Jon, de Lesaka.":
      "«Gehienek erotuta gaudela diote.» — Iker, Beñat eta Jon, lesakarrak.",
    "¿Qué hacemos?": "Zer egiten dugu?",
    "Especialistas en altura.": "Altuerako adituak.",
    "Desde 2024": "2024tik",
    "Lesaka · Bortziri": "Lesaka · Bortziri",
    "El equipo": "Taldea",
    "Iker, Beñat y Jon.": "Iker, Beñat eta Jon.",
    "Tres lesakarras con las raíces en los caseríos de la zona y la motosierra cerca de las manos desde siempre.":
      "Inguruko baserrietan sustraiak dituzten hiru lesakar, betidanik motozerra eskutik gertu.",
    "29 años. Compagina Boralan con su trabajo como bombero. Hizo el curso de técnicas de trepa y poda en altura.":
      "29 urte. Boralan suhiltzaile lanarekin uztartzen du. Altuerako igoera eta inausketa teknikei buruzko ikastaroa egin zuen.",
    "26 años. Compagina el negocio con su puesto en un taller. Explica el oficio como \"difícil\" por combinar la motosierra con la altura.":
      "26 urte. Negozioa tailer bateko lanpostuarekin uztartzen du. Lanbidea «zaila» dela dio, motozerra altuerarekin uztartzeagatik.",
    "29 años. Albañil y muy ligado a la caza del jabalí. \"Mayoritariamente nos dicen que estamos locos\", ríe.":
      "29 urte. Igeltseroa eta basurde-ehizari oso lotua. «Gehienetan erotuta gaudela esaten digute», dio barrez.",
    "Nuestra historia": "Gure historia",
    "Cómo nació Boralan.": "Nola sortu zen Boralan.",
    "\"Nos conocemos del pueblo de siempre\", indican los tres a la vez al hablar de los inicios de Boralan. El proyecto surgió cuando supieron que en Madrid se impartía un curso relacionado con técnicas de trepa y poda en altura. \"Un conocido nuestro lo hizo y pensamos que a nosotros nos gustaría hacerlo. Dábamos el perfil porque siempre habíamos andado en el caserío con motosierras, con cuerdas, y entendíamos.\"":
      "«Betidanik ezagutzen dugu elkar herrian», diote hirurek aldi berean Boralanen hastapenei buruz hizketan. Proiektua sortu zen jakin zutenean Madrilen igoera eta altuerako inausketa teknikei buruzko ikastaro bat ematen zela. «Ezagun batek egin zuen eta guk ere egin nahiko genukeela pentsatu genuen. Profila genuen, beti baserrian ibili baikinen motozerrekin eta sokekin, eta ulertzen genuen.»",
    "Después realizaron otro curso de trabajos en altura con certificado oficial. El siguiente paso consistió en empezar con trabajos de pequeña escala, en casa. \"De ahí arrancamos. Vimos que no había mucha gente que hiciera eso y nosotros dábamos el perfil adecuado.\"":
      "Ondoren altuerako lanen beste ikastaro bat egin zuten ziurtagiri ofizialarekin. Hurrengo urratsa eskala txikiko lanekin hastea izan zen, etxean. «Hortik abiatu ginen. Ikusi genuen ez zegoela hori egiten zuen jende askorik eta guk profil egokia genuen.»",
    "Los encargos les han llegado desde distintas zonas, principalmente en Bortziri (Cinco Villas), y recuerdan en especial la tala de un árbol en Ventas de Igantzi. \"La altura de la grúa era de 32 metros y no llegaba a la punta del árbol\", recuerda Erro. \"Hemos hecho muchos trabajos bonitos, pero cada árbol es diferente. Unas veces la dificultad está en la altura, otras en el entorno...\"":
      "Eskaerak hainbat tokitatik iritsi zaizkie, batez ere Bortzirin, eta bereziki gogoratzen dute Igantziko Ventasen egindako zuhaitz baten mozketa. «Garabiaren altuera 32 metrokoa zen eta ez zen zuhaitzaren puntara iristen», dio Errok. «Lan polit asko egin ditugu, baina zuhaitz bakoitza desberdina da. Batzuetan zailtasuna altueran dago, beste batzuetan ingurunean...»",
    "Este año ya han conseguido dar el salto a las provincias vascas y a otros puntos de Navarra gracias a su buen hacer y a su actividad en Instagram, donde explican de forma gráfica y didáctica su labor.":
      "Aurten dagoeneko lortu dute jauzia ematea euskal probintzietara eta Nafarroako beste hainbat tokitara, beren lan onari eta Instagrameko jarduerari esker, non beren lana modu grafiko eta didaktikoan azaltzen duten.",
    "Hablan de nosotros.": "Gutaz hitz egiten dute.",
    "Nos entrevistaron sobre el oficio.": "Lanbideari buruz elkarrizketatu gintuzten.",
    "Puedes ver la entrevista completa en nuestro perfil de Instagram.": "Elkarrizketa osoa gure Instagram profilean ikus dezakezu.",
    "Vídeo en Facebook": "Facebookeko bideoa",
    "¿Hablamos?": "Hitz egingo dugu?",
    "Cuéntanos tu árbol. Nosotros nos encargamos.": "Kontatu zure zuhaitza. Gu arduratzen gara.",
    "Presupuesto sin compromiso en Navarra y País Vasco.": "Konpromisorik gabeko aurrekontua Nafarroan eta Euskal Herrian.",
    "Contactar": "Harremanetan jarri",

    // — Galería —
    "Cada árbol,": "Zuhaitz bakoitza,",
    "una historia.": "istorio bat.",
    "Fotos y vídeos reales de nuestro día a día subidos a los árboles más complicados.":
      "Gure egunerokoaren benetako argazki eta bideoak, zuhaitzik korapilatsuenetan igota.",
    "En movimiento": "Mugimenduan",
    "Vídeos.": "Bideoak.",
    "Grabamos con la GoPro desde lo alto del árbol. Así se ve nuestro trabajo.":
      "GoPro-rekin grabatzen dugu zuhaitzaren goialdetik. Horrela ikusten da gure lana.",
    "Fotos": "Argazkiak",
    "El trabajo, de cerca.": "Lana, gertutik.",
    "Más en @boralan04": "Gehiago @boralan04-n",
    "Síguenos para no perderte ningún trabajo.": "Jarraitu gaitzazu lanik ez galtzeko.",
    "Más de 4.300 personas ya ven nuestros vídeos desde lo alto del árbol.":
      "4.300 lagunek baino gehiagok ikusten dituzte jada gure bideoak zuhaitzaren goialdetik.",
    "Ver Instagram": "Ikusi Instagram",

    // — Contacto —
    "Hablemos de": "Hitz egin dezagun",
    "tu árbol.": "zure zuhaitzaz.",
    "Presupuesto sin compromiso. Cuéntanos el caso por teléfono, WhatsApp o formulario.":
      "Konpromisorik gabeko aurrekontua. Kontatu kasua telefonoz, WhatsApp bidez edo formularioz.",
    "Datos de contacto": "Harremanetarako datuak",
    "Estamos a una llamada.": "Dei batera gaude.",
    "Teléfonos": "Telefonoak",
    "Email": "Emaila",
    "Dónde estamos": "Non gauden",
    "Trabajamos en Navarra y País Vasco": "Nafarroan eta Euskal Herrian lan egiten dugu",
    "Instagram": "Instagram",
    "Pide presupuesto": "Eskatu aurrekontua",
    "Cuéntanos qué necesitas y te respondemos lo antes posible.": "Kontatu zer behar duzun eta ahalik eta lasterren erantzungo dizugu.",
    "Nombre": "Izena",
    "Teléfono": "Telefonoa",
    "Localidad del trabajo": "Lanaren herria",
    "Opcional, por si prefieres que te escribamos.": "Aukerakoa, idatzi nahiago baduzu.",
    "¿Qué necesitas?": "Zer behar duzu?",
    "Cuéntanos el árbol, la altura aproximada, el acceso…": "Kontatu zuhaitza, gutxi gorabeherako altuera, sarbidea…",
    "Enviar solicitud": "Bidali eskaera",
    "Al enviar aceptas nuestra": "Bidaltzean gure",
    "política de privacidad": "pribatutasun politika onartzen duzu",
    "Nuestra base": "Gure egoitza",
    "Lesaka, Navarra.": "Lesaka, Nafarroa.",
    "Mapa de Lesaka, Navarra": "Lesakako mapa, Nafarroa",
    "Abriendo tu cliente de correo…": "Zure posta-bezeroa irekitzen…",
    "Dinos tu nombre.": "Esan zure izena.",
    "Necesitamos un teléfono válido.": "Telefono baliodun bat behar dugu.",
    "Revisa el formato del email.": "Berrikusi emailaren formatua.",
    "Cuéntanos brevemente qué necesitas.": "Kontatu labur zer behar duzun.",
    "¡Gracias! Hemos recibido tu solicitud. Te contactamos enseguida.": "Eskerrik asko! Zure eskaera jaso dugu. Berehala jarriko gara harremanetan.",
    "No se pudo enviar. Llámanos al 628 850 027 o escríbenos a boralan04@gmail.com.": "Ezin izan da bidali. Deitu 628 850 027 zenbakira edo idatzi boralan04@gmail.com helbidera.",

    // — 404 —
    "Página no encontrada (404) | Boralan": "Orria ez da aurkitu (404) | Boralan",
    "Te has subido a la rama equivocada.": "Adar okerrera igo zara.",
    "La página que buscas no existe o se ha movido. Te bajamos al inicio.": "Bilatzen ari zaren orria ez dago edo lekuz aldatu da. Hasierara jaisten zaitugu.",
    "Volver al inicio": "Hasierara itzuli",

    // — Selector idioma —
    "Idioma": "Hizkuntza",
    "Cambiar idioma": "Aldatu hizkuntza",
    "Trabajo de tala controlada junto a una edificación": "Mozketa kontrolatua eraikin baten ondoan",
    "Tala controlada junto a una edificación": "Mozketa kontrolatua eraikin baten ondoan",
    "Operario de Boralan en una poda en altura con cuerdas de trepa": "Boralango langilea altuerako inausketan igoera-sokekin",
    "Equipo de Boralan trabajando en una zona de difícil acceso en la copa de un haya": "Boralango taldea sarbide zaileko gune batean lanean, pago baten kopan",
    "Trepa hasta la copa de un árbol en una zona de difícil acceso": "Zuhaitz baten koparaino igoera sarbide zaileko gune batean"
  },

  fr: {
    "Inicio": "Accueil",
    "Servicios": "Services",
    "Nosotros": "À propos",
    "Galería": "Galerie",
    "Contacto": "Contact",
    "Presupuesto": "Devis",
    "Saltar al contenido": "Aller au contenu",
    "Abrir menú": "Ouvrir le menu",
    "Cerrar menú": "Fermer le menu",
    "Navegación principal": "Navigation principale",
    "Navegación móvil": "Navigation mobile",
    "Trabajos de Boralan": "Travaux de Boralan",
    "Seleccionar imagen": "Sélectionner une image",
    "Arborista de Boralan trepando hasta la copa de un árbol con cuerdas": "Arboriste de Boralan grimpant à la cime d'un arbre avec des cordes",
    "Poda en altura de una haya doble mediante técnicas de trepa": "Élagage en hauteur d'un hêtre double par techniques de grimpe",
    "Trabajo vertical suspendido con cuerdas sobre un árbol de gran altura": "Travail vertical suspendu par cordes sur un arbre de grande hauteur",
    "Bosque entre la niebla en las montañas de Navarra": "Forêt dans la brume des montagnes de Navarre",
    "Tala controlada de un árbol junto a una edificación en zona de difícil acceso": "Abattage contrôlé d'un arbre près d'un bâtiment en zone d'accès difficile",
    "Luz del sol entrando entre los árboles de un bosque": "Lumière du soleil filtrant entre les arbres d'une forêt",
    "Boralan — inicio": "Boralan — accueil",
    "Migas de pan": "Fil d'Ariane",

    "Poda y tala de grandes árboles en altura. Trepa y apeos controlados en Navarra y País Vasco.":
      "Élagage et abattage de grands arbres en hauteur. Grimpe et démontage contrôlé en Navarre et au Pays basque.",
    "Navegación": "Navigation",
    "Lesaka, Navarra": "Lesaka, Navarre",
    "Todos los derechos reservados.": "Tous droits réservés.",
    "Aviso legal": "Mentions légales",
    "Privacidad": "Confidentialité",
    "Cookies": "Cookies",
    "Diseñado por": "Conçu par",
    "Escríbenos por WhatsApp": "Écrivez-nous sur WhatsApp",
    "Aviso de cookies": "Avis de cookies",
    "Usamos cookies propias y técnicas para mejorar tu experiencia. Consulta nuestra":
      "Nous utilisons des cookies propres et techniques pour améliorer votre expérience. Consultez notre",
    "política de cookies": "politique de cookies",
    "Aceptar": "Accepter",
    "Rechazar": "Refuser",

    "Subir": "Monter", "donde": "là où", "otros": "les autres", "no": "ne", "llegan.": "vont pas.",
    "Poda y tala en altura · Navarra": "Élagage et abattage en hauteur · Navarre",
    "Subimos donde": "Nous montons là où",
    "otros no llegan": "les autres n'arrivent pas",
    "Especialistas en talas controladas y podas de grandes árboles en zonas inaccesibles para maquinaria. Técnicas de trepa y apeos controlados. Abaratamos costes sin renunciar a la seguridad.":
      "Spécialistes de l'abattage contrôlé et de l'élagage de grands arbres dans des zones inaccessibles aux machines. Techniques de grimpe et démontage contrôlé. Nous réduisons les coûts sans renoncer à la sécurité.",
    "Pide presupuesto": "Demander un devis",
    "Ver servicios": "Voir les services",
    "Desplázate hacia abajo": "Faites défiler vers le bas",
    "Scroll": "Défiler",

    "Talas controladas": "Abattages contrôlés",
    "Podas en altura": "Élagage en hauteur",
    "Apeos controlados": "Démontage contrôlé",
    "Zonas inaccesibles": "Zones inaccessibles",
    "Gestión de residuos": "Gestion des déchets",

    "Qué hacemos": "Ce que nous faisons",
    "Poda y tala de árboles peligrosos, en sitios imposibles.": "Élagage et abattage d'arbres dangereux, dans des lieux impossibles.",
    "Boralan realiza talas controladas, podas en altura, trabajos en zonas inaccesibles y gestión de residuos de poda y tala en Navarra y el País Vasco, mediante técnicas de trepa y apeos controlados.": "Boralan réalise des abattages contrôlés, de l'élagage en hauteur, des travaux en zones inaccessibles et la gestion des déchets d'élagage et d'abattage en Navarre et au Pays basque, par des techniques de grimpe et de démontage contrôlé.",
    "Nos llaman cuando un árbol presenta un riesgo o cuando no se puede entrar con máquinas. Subimos, lo cortamos trozo a trozo y lo bajamos de forma controlada.":
      "On nous appelle quand un arbre présente un risque ou quand l'accès aux machines est impossible. Nous montons, le coupons morceau par morceau et le descendons de façon contrôlée.",
    "Apeo de grandes árboles trozo a trozo, sin riesgo para casas, vallados ni instalaciones cercanas.":
      "Abattage de grands arbres morceau par morceau, sans risque pour les maisons, clôtures ou installations proches.",
    "Técnicas de trepa para podar la copa con precisión, mejorando la salud y la seguridad del árbol.":
      "Techniques de grimpe pour élaguer la cime avec précision, améliorant la santé et la sécurité de l'arbre.",
    "Trabajamos donde no llega la maquinaria. Abaratamos costes al no necesitar grúas ni grandes medios.":
      "Nous travaillons là où les machines n'accèdent pas. Nous réduisons les coûts en évitant grues et gros moyens.",
    "Nos encargamos de los restos de poda y tala. Dejamos la zona limpia y lista.":
      "Nous nous occupons des résidus d'élagage et d'abattage. Nous laissons la zone propre et nette.",
    "Más información": "En savoir plus",

    "Seguidores en Instagram": "Abonnés sur Instagram",
    "Visualizaciones de media por vídeo": "Vues en moyenne par vidéo",
    "El árbol más alto que talamos": "Le plus grand arbre abattu",
    "Profesionales en cada trabajo": "Professionnels sur chaque chantier",

    "Quiénes somos": "Qui sommes-nous",
    "Tres lesakarras que emprenden en altura.": "Trois habitants de Lesaka qui entreprennent en hauteur.",
    "Somos una empresa especializada en podas en altura y talas de grandes arboles. Trabajamos en sitios inaccesibles para maquinaria y abaratamos costes por no tener que usarla. Trabajamos con técnicas de trepa y apeos controlados.":
      "Nous sommes une entreprise spécialisée dans l'élagage en hauteur et l'abattage de grands arbres. Nous travaillons dans des lieux inaccessibles aux machines et réduisons les coûts en évitant de les utiliser. Nous travaillons avec des techniques de grimpe et de démontage contrôlé.",
    "Somos una empresa especializada en podas en altura y talas de grandes árboles. Trabajamos en sitios inaccesibles para maquinaria y abaratamos costes por no tener que usarla. Trabajamos con técnicas de trepa y apeos controlados.":
      "Nous sommes une entreprise spécialisée dans l'élagage en hauteur et l'abattage de grands arbres. Nous travaillons dans des lieux inaccessibles aux machines et réduisons les coûts en évitant de les utiliser. Nous travaillons avec des techniques de grimpe et de démontage contrôlé.",
    "Gestionamos los residuos de podas y talas.": "Nous gérons les résidus d'élagage et d'abattage.",
    "Conoce al equipo": "Découvrir l'équipe",
    "Bortziri · Cinco Villas": "Bortziri · Cinco Villas",

    "En los medios": "Dans les médias",
    "Salimos en la tele y en el periódico.": "Nous sommes passés à la télé et dans le journal.",
    "Nuestro trabajo y nuestros vídeos han llamado la atención de la prensa de Navarra y del País Vasco.":
      "Notre travail et nos vidéos ont attiré l'attention de la presse de Navarre et du Pays basque.",
    "Entrevista en televisión": "Interview à la télévision",
    "Nos entrevistaron sobre nuestro oficio en altura.": "Nous avons été interviewés sur notre métier en hauteur.",
    "Puedes ver la entrevista completa en nuestro perfil de Instagram, donde explicamos de forma gráfica y didáctica a qué nos dedicamos.":
      "Vous pouvez voir l'interview complète sur notre profil Instagram, où nous expliquons de façon visuelle et pédagogique notre activité.",
    "Ver entrevista completa": "Voir l'interview complète",
    "Artículo Diario de Navarra": "Article Diario de Navarra",
    "Tu navegador no admite vídeo HTML5.": "Votre navigateur ne prend pas en charge la vidéo HTML5.",

    "Síguenos en Instagram.": "Suivez-nous sur Instagram.",
    "Grabamos nuestros trabajos con la GoPro desde lo alto del árbol. Más de 4.300 personas ya nos siguen.":
      "Nous filmons nos chantiers avec la GoPro depuis la cime de l'arbre. Plus de 4 300 personnes nous suivent déjà.",
    "Ver perfil de Instagram de Boralan": "Voir le profil Instagram de Boralan",

    "¿Tienes un árbol complicado?": "Vous avez un arbre compliqué ?",
    "Cuéntanos tu caso. Te damos presupuesto sin compromiso.": "Parlez-nous de votre cas. Devis sans engagement.",
    "Árboles peligrosos, podas en altura o talas en sitios donde no entra la maquinaria. Lo vemos.":
      "Arbres dangereux, élagage en hauteur ou abattage là où les machines n'accèdent pas. On s'en occupe.",
    "Pedir presupuesto": "Demander un devis",

    "Lo que hacemos": "Ce que nous faisons",
    "en altura.": "en hauteur.",
    "Trepa, apeos controlados y limpieza. Resolvemos los árboles que nadie más quiere tocar.":
      "Grimpe, démontage contrôlé et nettoyage. Nous résolvons les arbres que personne d'autre ne veut toucher.",
    "Servicio 01": "Service 01", "Servicio 02": "Service 02", "Servicio 03": "Service 03", "Servicio 04": "Service 04",
    "Apeamos grandes árboles trozo a trozo desde arriba, sin tirarlos de golpe. Así protegemos casas, vallados, tendidos e instalaciones que estén cerca. Cada corte es controlado y bajado con cuerda.":
      "Nous abattons les grands arbres morceau par morceau depuis le haut, sans les faire tomber d'un coup. Ainsi nous protégeons maisons, clôtures, lignes et installations à proximité. Chaque coupe est contrôlée et descendue à la corde.",
    "Apeo trozo a trozo": "Abattage morceau par morceau",
    "Sin riesgo para lo que hay alrededor.": "Sans risque pour ce qui se trouve autour.",
    "Árboles peligrosos": "Arbres dangereux",
    "Ejemplares con riesgo de caída o partidos.": "Sujets à risque de chute ou cassés.",
    "Subimos a la copa con técnicas de trepa para podar con precisión: ramas secas, peligrosas o que molestan. Mejoramos la salud del árbol y reducimos el riesgo, sin dañar el ejemplar.":
      "Nous montons dans la cime avec des techniques de grimpe pour élaguer avec précision : branches sèches, dangereuses ou gênantes. Nous améliorons la santé de l'arbre et réduisons le risque, sans l'endommager.",
    "Técnicas de trepa": "Techniques de grimpe",
    "Acceso a copas que la maquinaria no alcanza.": "Accès aux cimes que les machines n'atteignent pas.",
    "Poda de mantenimiento": "Élagage d'entretien",
    "Salud, forma y seguridad del árbol.": "Santé, forme et sécurité de l'arbre.",
    "Trabajamos donde no llega la maquinaria: laderas, jardines cerrados, junto a edificios o en terrenos imposibles. Al no necesitar grúas ni grandes medios, abaratamos el coste del trabajo.":
      "Nous travaillons là où les machines n'accèdent pas : pentes, jardins clos, près des bâtiments ou sur des terrains impossibles. Sans grues ni gros moyens, nous réduisons le coût du chantier.",
    "Sin maquinaria pesada": "Sans machinerie lourde",
    "Menos coste y menos daño al entorno.": "Moins de coût et moins de dégâts pour l'environnement.",
    "Terrenos complicados": "Terrains difficiles",
    "Laderas, cierres y espacios reducidos.": "Pentes, clôtures et espaces réduits.",
    "No dejamos el trabajo a medias. Nos encargamos de los restos de poda y tala y dejamos la zona limpia y ordenada cuando terminamos.":
      "Nous ne laissons pas le travail à moitié fait. Nous nous occupons des résidus d'élagage et d'abattage et laissons la zone propre et rangée.",
    "Retirada de restos": "Enlèvement des résidus",
    "Recogida y gestión de la madera y la rama.": "Collecte et gestion du bois et des branches.",
    "Zona limpia": "Zone propre",
    "Terminamos y dejamos todo recogido.": "Nous terminons et laissons tout rangé.",
    "Cómo trabajamos": "Comment nous travaillons",
    "De la llamada al árbol en el suelo.": "De l'appel à l'arbre au sol.",
    "Preguntas frecuentes": "Questions fréquentes",
    "Dudas habituales sobre poda y tala en altura.": "Questions courantes sur l'élagage et l'abattage en hauteur.",
    "¿Cuánto cuesta talar un árbol grande en altura?": "Combien coûte l'abattage d'un grand arbre en hauteur ?",
    "El coste depende de la altura, el entorno y la dificultad de acceso. Al trabajar por trepa y sin grúa, abaratamos el precio frente a la maquinaria pesada. Damos presupuesto sin compromiso.": "Le coût dépend de la hauteur, de l'environnement et de la difficulté d'accès. En travaillant par grimpe et sans grue, nous réduisons le prix par rapport à la machinerie lourde. Devis sans engagement.",
    "¿Cuándo necesito una tala controlada en altura?": "Quand ai-je besoin d'un abattage contrôlé en hauteur ?",
    "Cuando un árbol presenta riesgo de caída, está cerca de una casa o un vallado, o no se puede entrar con maquinaria. Subimos al árbol y lo cortamos trozo a trozo de forma controlada.": "Lorsqu'un arbre présente un risque de chute, est proche d'une maison ou d'une clôture, ou que la machinerie ne peut pas accéder. Nous montons dans l'arbre et le coupons morceau par morceau de façon contrôlée.",
    "¿Podéis quitar un árbol pegado a una casa sin dañarla?": "Pouvez-vous retirer un arbre collé à une maison sans l'endommager ?",
    "Sí. Apeamos el árbol trozo a trozo desde arriba y bajamos cada corte con cuerda, protegiendo casas, vallados e instalaciones cercanas.": "Oui. Nous démontons l'arbre morceau par morceau depuis le haut et descendons chaque coupe à la corde, en protégeant maisons, clôtures et installations proches.",
    "¿Trabajáis en sitios donde no entra la maquinaria?": "Travaillez-vous là où la machinerie ne peut pas accéder ?",
    "Sí. Nos especializamos en zonas inaccesibles para grúas y máquinas. Al trabajar con técnicas de trepa abaratamos costes porque no necesitamos grandes medios.": "Oui. Nous sommes spécialisés dans les zones inaccessibles aux grues et aux machines. En travaillant par grimpe, nous réduisons les coûts car nous n'avons pas besoin de gros moyens.",
    "¿Os encargáis de retirar los restos de la poda o la tala?": "Vous chargez-vous d'enlever les restes de l'élagage ou de l'abattage ?",
    "Sí, gestionamos los residuos de podas y talas y dejamos la zona limpia.": "Oui, nous gérons les déchets d'élagage et d'abattage et laissons la zone propre.",
    "¿En qué zonas trabajáis?": "Dans quelles zones travaillez-vous ?",
    "En Navarra (Lesaka, Bera, Igantzi, Etxalar y el resto de Bortziri / Cinco Villas) y en Gipuzkoa (Irun, Hondarribia y alrededores). Consúltanos tu caso sin compromiso.": "En Navarre (Lesaka, Bera, Igantzi, Etxalar et le reste de Bortziri / Cinco Villas) et au Guipuscoa (Irun, Hondarribia et alentours). Parlez-nous de votre cas sans engagement.",
    "Un proceso sencillo, seguro y siempre con los tres en el trabajo.": "Un processus simple, sûr et toujours à trois sur le chantier.",
    "Paso 01": "Étape 01", "Paso 02": "Étape 02", "Paso 03": "Étape 03",
    "Valoramos el árbol": "Nous évaluons l'arbre",
    "Vemos la altura, el entorno y la dificultad. Cada árbol es diferente.": "Nous regardons la hauteur, l'environnement et la difficulté. Chaque arbre est différent.",
    "Subimos y cortamos": "Nous montons et coupons",
    "Trepamos, atamos y vamos cortando de forma controlada, trozo a trozo.": "Nous grimpons, attachons et coupons de façon contrôlée, morceau par morceau.",
    "Limpiamos la zona": "Nous nettoyons la zone",
    "Gestionamos los residuos y dejamos todo recogido.": "Nous gérons les déchets et laissons tout rangé.",
    "¿Tienes un árbol que resolver?": "Un arbre à régler ?",
    "Cuéntanos el caso y te decimos cómo lo hacemos.": "Parlez-nous du cas et nous vous dirons comment nous procédons.",
    "Presupuesto sin compromiso para talas, podas y trabajos en altura.": "Devis sans engagement pour abattage, élagage et travaux en hauteur.",

    "Tres jóvenes que": "Trois jeunes qui",
    "emprenden en altura.": "entreprennent en hauteur.",
    "\"La mayoría dicen que estamos locos.\" — Iker, Beñat y Jon, de Lesaka.":
      "« La plupart disent qu'on est fous. » — Iker, Beñat et Jon, de Lesaka.",
    "¿Qué hacemos?": "Que faisons-nous ?",
    "Especialistas en altura.": "Spécialistes en hauteur.",
    "Desde 2024": "Depuis 2024",
    "Lesaka · Bortziri": "Lesaka · Bortziri",
    "El equipo": "L'équipe",
    "Iker, Beñat y Jon.": "Iker, Beñat et Jon.",
    "Tres lesakarras con las raíces en los caseríos de la zona y la motosierra cerca de las manos desde siempre.":
      "Trois habitants de Lesaka, enracinés dans les fermes de la région, la tronçonneuse à portée de main depuis toujours.",
    "29 años. Compagina Boralan con su trabajo como bombero. Hizo el curso de técnicas de trepa y poda en altura.":
      "29 ans. Concilie Boralan avec son métier de pompier. Il a suivi la formation aux techniques de grimpe et d'élagage en hauteur.",
    "26 años. Compagina el negocio con su puesto en un taller. Explica el oficio como \"difícil\" por combinar la motosierra con la altura.":
      "26 ans. Concilie l'entreprise avec son poste dans un atelier. Il décrit le métier comme « difficile » car il combine la tronçonneuse et la hauteur.",
    "29 años. Albañil y muy ligado a la caza del jabalí. \"Mayoritariamente nos dicen que estamos locos\", ríe.":
      "29 ans. Maçon et très attaché à la chasse au sanglier. « La plupart nous disent qu'on est fous », rit-il.",
    "Nuestra historia": "Notre histoire",
    "Cómo nació Boralan.": "Comment est né Boralan.",
    "\"Nos conocemos del pueblo de siempre\", indican los tres a la vez al hablar de los inicios de Boralan. El proyecto surgió cuando supieron que en Madrid se impartía un curso relacionado con técnicas de trepa y poda en altura. \"Un conocido nuestro lo hizo y pensamos que a nosotros nos gustaría hacerlo. Dábamos el perfil porque siempre habíamos andado en el caserío con motosierras, con cuerdas, y entendíamos.\"":
      "« On se connaît du village depuis toujours », disent les trois d'une même voix en évoquant les débuts de Boralan. Le projet est né lorsqu'ils ont appris qu'une formation aux techniques de grimpe et d'élagage en hauteur était dispensée à Madrid. « Une connaissance l'avait suivie et on s'est dit que ça nous plairait. On avait le profil, on avait toujours manié tronçonneuses et cordes à la ferme, et on comprenait. »",
    "Después realizaron otro curso de trabajos en altura con certificado oficial. El siguiente paso consistió en empezar con trabajos de pequeña escala, en casa. \"De ahí arrancamos. Vimos que no había mucha gente que hiciera eso y nosotros dábamos el perfil adecuado.\"":
      "Ils ont ensuite suivi une autre formation aux travaux en hauteur avec certificat officiel. L'étape suivante a été de commencer par des chantiers à petite échelle, près de chez eux. « C'est de là qu'on est partis. On a vu que peu de gens faisaient ça et qu'on avait le bon profil. »",
    "Los encargos les han llegado desde distintas zonas, principalmente en Bortziri (Cinco Villas), y recuerdan en especial la tala de un árbol en Ventas de Igantzi. \"La altura de la grúa era de 32 metros y no llegaba a la punta del árbol\", recuerda Erro. \"Hemos hecho muchos trabajos bonitos, pero cada árbol es diferente. Unas veces la dificultad está en la altura, otras en el entorno...\"":
      "Les commandes leur sont venues de différentes zones, surtout à Bortziri (Cinco Villas), et ils se souviennent en particulier de l'abattage d'un arbre à Ventas de Igantzi. « La grue faisait 32 mètres et n'atteignait pas la cime de l'arbre », se rappelle Erro. « On a fait de beaux chantiers, mais chaque arbre est différent. Parfois la difficulté tient à la hauteur, parfois à l'environnement… »",
    "Este año ya han conseguido dar el salto a las provincias vascas y a otros puntos de Navarra gracias a su buen hacer y a su actividad en Instagram, donde explican de forma gráfica y didáctica su labor.":
      "Cette année, ils ont déjà réussi à s'étendre aux provinces basques et à d'autres points de Navarre grâce à leur savoir-faire et à leur activité sur Instagram, où ils expliquent leur travail de façon visuelle et pédagogique.",
    "Hablan de nosotros.": "On parle de nous.",
    "Nos entrevistaron sobre el oficio.": "Nous avons été interviewés sur le métier.",
    "Puedes ver la entrevista completa en nuestro perfil de Instagram.": "Vous pouvez voir l'interview complète sur notre profil Instagram.",
    "Vídeo en Facebook": "Vidéo sur Facebook",
    "¿Hablamos?": "On en parle ?",
    "Cuéntanos tu árbol. Nosotros nos encargamos.": "Parlez-nous de votre arbre. On s'en occupe.",
    "Presupuesto sin compromiso en Navarra y País Vasco.": "Devis sans engagement en Navarre et au Pays basque.",
    "Contactar": "Nous contacter",

    "Cada árbol,": "Chaque arbre,",
    "una historia.": "une histoire.",
    "Fotos y vídeos reales de nuestro día a día subidos a los árboles más complicados.":
      "Photos et vidéos réelles de notre quotidien, perchés sur les arbres les plus compliqués.",
    "En movimiento": "En mouvement",
    "Vídeos.": "Vidéos.",
    "Grabamos con la GoPro desde lo alto del árbol. Así se ve nuestro trabajo.":
      "Nous filmons avec la GoPro depuis la cime de l'arbre. Voilà notre travail.",
    "Fotos": "Photos",
    "El trabajo, de cerca.": "Le travail, de près.",
    "Más en @boralan04": "Plus sur @boralan04",
    "Síguenos para no perderte ningún trabajo.": "Suivez-nous pour ne manquer aucun chantier.",
    "Más de 4.300 personas ya ven nuestros vídeos desde lo alto del árbol.":
      "Plus de 4 300 personnes regardent déjà nos vidéos depuis la cime de l'arbre.",
    "Ver Instagram": "Voir Instagram",

    "Hablemos de": "Parlons de",
    "tu árbol.": "votre arbre.",
    "Presupuesto sin compromiso. Cuéntanos el caso por teléfono, WhatsApp o formulario.":
      "Devis sans engagement. Parlez-nous de votre cas par téléphone, WhatsApp ou formulaire.",
    "Datos de contacto": "Coordonnées",
    "Estamos a una llamada.": "Un appel suffit.",
    "Teléfonos": "Téléphones",
    "Email": "E-mail",
    "Dónde estamos": "Où nous sommes",
    "Trabajamos en Navarra y País Vasco": "Nous intervenons en Navarre et au Pays basque",
    "Instagram": "Instagram",
    "Pide presupuesto": "Demander un devis",
    "Cuéntanos qué necesitas y te respondemos lo antes posible.": "Dites-nous ce dont vous avez besoin et nous répondons au plus vite.",
    "Nombre": "Nom",
    "Teléfono": "Téléphone",
    "Localidad del trabajo": "Localité du chantier",
    "Opcional, por si prefieres que te escribamos.": "Facultatif, si vous préférez que l'on vous écrive.",
    "¿Qué necesitas?": "De quoi avez-vous besoin ?",
    "Cuéntanos el árbol, la altura aproximada, el acceso…": "Décrivez l'arbre, la hauteur approximative, l'accès…",
    "Enviar solicitud": "Envoyer la demande",
    "Al enviar aceptas nuestra": "En envoyant, vous acceptez notre",
    "política de privacidad": "politique de confidentialité",
    "Nuestra base": "Notre base",
    "Lesaka, Navarra.": "Lesaka, Navarre.",
    "Mapa de Lesaka, Navarra": "Carte de Lesaka, Navarre",
    "Abriendo tu cliente de correo…": "Ouverture de votre messagerie…",
    "Dinos tu nombre.": "Indiquez votre nom.",
    "Necesitamos un teléfono válido.": "Un numéro de téléphone valide est requis.",
    "Revisa el formato del email.": "Vérifiez le format de l'e-mail.",
    "Cuéntanos brevemente qué necesitas.": "Décrivez brièvement votre besoin.",
    "¡Gracias! Hemos recibido tu solicitud. Te contactamos enseguida.": "Merci ! Nous avons bien reçu votre demande. Nous vous recontactons rapidement.",
    "No se pudo enviar. Llámanos al 628 850 027 o escríbenos a boralan04@gmail.com.": "Envoi impossible. Appelez le 628 850 027 ou écrivez à boralan04@gmail.com.",

    "Página no encontrada (404) | Boralan": "Page introuvable (404) | Boralan",
    "Te has subido a la rama equivocada.": "Vous êtes monté sur la mauvaise branche.",
    "La página que buscas no existe o se ha movido. Te bajamos al inicio.": "La page recherchée n'existe pas ou a été déplacée. On vous ramène à l'accueil.",
    "Volver al inicio": "Retour à l'accueil",

    "Idioma": "Langue",
    "Cambiar idioma": "Changer de langue",
    "Trabajo de tala controlada junto a una edificación": "Abattage contrôlé à côté d'un bâtiment",
    "Tala controlada junto a una edificación": "Abattage contrôlé à côté d'un bâtiment",
    "Operario de Boralan en una poda en altura con cuerdas de trepa": "Opérateur de Boralan lors d'un élagage en hauteur avec cordes de grimpe",
    "Equipo de Boralan trabajando en una zona de difícil acceso en la copa de un haya": "L'équipe de Boralan dans une zone d'accès difficile, au sommet d'un hêtre",
    "Trepa hasta la copa de un árbol en una zona de difícil acceso": "Grimpe jusqu'à la cime d'un arbre dans une zone d'accès difficile"
  },

  en: {
    "Inicio": "Home",
    "Servicios": "Services",
    "Nosotros": "About",
    "Galería": "Gallery",
    "Contacto": "Contact",
    "Presupuesto": "Get a quote",
    "Saltar al contenido": "Skip to content",
    "Abrir menú": "Open menu",
    "Cerrar menú": "Close menu",
    "Navegación principal": "Main navigation",
    "Navegación móvil": "Mobile navigation",
    "Trabajos de Boralan": "Boralan's work",
    "Seleccionar imagen": "Select image",
    "Arborista de Boralan trepando hasta la copa de un árbol con cuerdas": "Boralan arborist climbing to the top of a tree with ropes",
    "Poda en altura de una haya doble mediante técnicas de trepa": "Aerial pruning of a double beech using climbing techniques",
    "Trabajo vertical suspendido con cuerdas sobre un árbol de gran altura": "Rope-suspended vertical work on a very tall tree",
    "Bosque entre la niebla en las montañas de Navarra": "Forest in the mist in the mountains of Navarre",
    "Tala controlada de un árbol junto a una edificación en zona de difícil acceso": "Controlled felling of a tree next to a building in a hard-to-reach area",
    "Luz del sol entrando entre los árboles de un bosque": "Sunlight filtering through the trees of a forest",
    "Boralan — inicio": "Boralan — home",
    "Migas de pan": "Breadcrumb",

    "Poda y tala de grandes árboles en altura. Trepa y apeos controlados en Navarra y País Vasco.":
      "Pruning and felling of large trees at height. Climbing and controlled dismantling in Navarre and the Basque Country.",
    "Navegación": "Navigation",
    "Lesaka, Navarra": "Lesaka, Navarre",
    "Todos los derechos reservados.": "All rights reserved.",
    "Aviso legal": "Legal notice",
    "Privacidad": "Privacy",
    "Cookies": "Cookies",
    "Diseñado por": "Designed by",
    "Escríbenos por WhatsApp": "Message us on WhatsApp",
    "Aviso de cookies": "Cookie notice",
    "Usamos cookies propias y técnicas para mejorar tu experiencia. Consulta nuestra":
      "We use our own and technical cookies to improve your experience. See our",
    "política de cookies": "cookie policy",
    "Aceptar": "Accept",
    "Rechazar": "Decline",

    "Subir": "Going", "donde": "where", "otros": "others", "no": "can't", "llegan.": "reach.",
    "Poda y tala en altura · Navarra": "Tree pruning & felling at height · Navarre",
    "Subimos donde": "We climb where",
    "otros no llegan": "others can't reach",
    "Especialistas en talas controladas y podas de grandes árboles en zonas inaccesibles para maquinaria. Técnicas de trepa y apeos controlados. Abaratamos costes sin renunciar a la seguridad.":
      "Specialists in controlled felling and pruning of large trees in areas machinery can't reach. Climbing techniques and controlled dismantling. We cut costs without compromising safety.",
    "Pide presupuesto": "Request a quote",
    "Ver servicios": "View services",
    "Desplázate hacia abajo": "Scroll down",
    "Scroll": "Scroll",

    "Talas controladas": "Controlled felling",
    "Podas en altura": "Pruning at height",
    "Apeos controlados": "Controlled dismantling",
    "Zonas inaccesibles": "Inaccessible areas",
    "Gestión de residuos": "Waste management",

    "Qué hacemos": "What we do",
    "Poda y tala de árboles peligrosos, en sitios imposibles.": "Pruning and felling of dangerous trees, in impossible spots.",
    "Boralan realiza talas controladas, podas en altura, trabajos en zonas inaccesibles y gestión de residuos de poda y tala en Navarra y el País Vasco, mediante técnicas de trepa y apeos controlados.": "Boralan carries out controlled felling, pruning at height, work in inaccessible areas and management of pruning and felling waste in Navarre and the Basque Country, using climbing techniques and controlled dismantling.",
    "Nos llaman cuando un árbol presenta un riesgo o cuando no se puede entrar con máquinas. Subimos, lo cortamos trozo a trozo y lo bajamos de forma controlada.":
      "People call us when a tree poses a risk or when machinery can't get in. We climb, cut it piece by piece and lower it under control.",
    "Apeo de grandes árboles trozo a trozo, sin riesgo para casas, vallados ni instalaciones cercanas.":
      "Felling large trees piece by piece, with no risk to nearby houses, fences or installations.",
    "Técnicas de trepa para podar la copa con precisión, mejorando la salud y la seguridad del árbol.":
      "Climbing techniques to prune the canopy precisely, improving the tree's health and safety.",
    "Trabajamos donde no llega la maquinaria. Abaratamos costes al no necesitar grúas ni grandes medios.":
      "We work where machinery can't reach. We cut costs by avoiding cranes and heavy equipment.",
    "Nos encargamos de los restos de poda y tala. Dejamos la zona limpia y lista.":
      "We handle the pruning and felling debris. We leave the area clean and tidy.",
    "Más información": "Learn more",

    "Seguidores en Instagram": "Instagram followers",
    "Visualizaciones de media por vídeo": "Average views per video",
    "El árbol más alto que talamos": "Tallest tree we've felled",
    "Profesionales en cada trabajo": "Professionals on every job",

    "Quiénes somos": "Who we are",
    "Tres lesakarras que emprenden en altura.": "Three locals from Lesaka taking on heights.",
    "Somos una empresa especializada en podas en altura y talas de grandes arboles. Trabajamos en sitios inaccesibles para maquinaria y abaratamos costes por no tener que usarla. Trabajamos con técnicas de trepa y apeos controlados.":
      "We are a company specialised in pruning at height and felling large trees. We work in places machinery can't reach and cut costs by not needing it. We work with climbing techniques and controlled dismantling.",
    "Somos una empresa especializada en podas en altura y talas de grandes árboles. Trabajamos en sitios inaccesibles para maquinaria y abaratamos costes por no tener que usarla. Trabajamos con técnicas de trepa y apeos controlados.":
      "We are a company specialised in pruning at height and felling large trees. We work in places machinery can't reach and cut costs by not needing it. We work with climbing techniques and controlled dismantling.",
    "Gestionamos los residuos de podas y talas.": "We manage pruning and felling waste.",
    "Conoce al equipo": "Meet the team",
    "Bortziri · Cinco Villas": "Bortziri · Cinco Villas",

    "En los medios": "In the media",
    "Salimos en la tele y en el periódico.": "We've been on TV and in the press.",
    "Nuestro trabajo y nuestros vídeos han llamado la atención de la prensa de Navarra y del País Vasco.":
      "Our work and our videos have caught the attention of the press in Navarre and the Basque Country.",
    "Entrevista en televisión": "Television interview",
    "Nos entrevistaron sobre nuestro oficio en altura.": "We were interviewed about our trade at height.",
    "Puedes ver la entrevista completa en nuestro perfil de Instagram, donde explicamos de forma gráfica y didáctica a qué nos dedicamos.":
      "You can watch the full interview on our Instagram profile, where we explain what we do in a visual, hands-on way.",
    "Ver entrevista completa": "Watch full interview",
    "Artículo Diario de Navarra": "Diario de Navarra article",
    "Tu navegador no admite vídeo HTML5.": "Your browser does not support HTML5 video.",

    "Síguenos en Instagram.": "Follow us on Instagram.",
    "Grabamos nuestros trabajos con la GoPro desde lo alto del árbol. Más de 4.300 personas ya nos siguen.":
      "We film our jobs with a GoPro from the top of the tree. Over 4,300 people already follow us.",
    "Ver perfil de Instagram de Boralan": "View Boralan's Instagram profile",

    "¿Tienes un árbol complicado?": "Got a tricky tree?",
    "Cuéntanos tu caso. Te damos presupuesto sin compromiso.": "Tell us about it. Free, no-obligation quote.",
    "Árboles peligrosos, podas en altura o talas en sitios donde no entra la maquinaria. Lo vemos.":
      "Dangerous trees, pruning at height or felling where machinery can't get in. We'll take a look.",
    "Pedir presupuesto": "Request a quote",

    "Lo que hacemos": "What we do",
    "en altura.": "at height.",
    "Trepa, apeos controlados y limpieza. Resolvemos los árboles que nadie más quiere tocar.":
      "Climbing, controlled dismantling and clean-up. We tackle the trees no one else will touch.",
    "Servicio 01": "Service 01", "Servicio 02": "Service 02", "Servicio 03": "Service 03", "Servicio 04": "Service 04",
    "Apeamos grandes árboles trozo a trozo desde arriba, sin tirarlos de golpe. Así protegemos casas, vallados, tendidos e instalaciones que estén cerca. Cada corte es controlado y bajado con cuerda.":
      "We fell large trees piece by piece from the top, without dropping them all at once. This protects nearby houses, fences, power lines and installations. Every cut is controlled and lowered by rope.",
    "Apeo trozo a trozo": "Piece-by-piece felling",
    "Sin riesgo para lo que hay alrededor.": "No risk to the surroundings.",
    "Árboles peligrosos": "Dangerous trees",
    "Ejemplares con riesgo de caída o partidos.": "Specimens at risk of falling or already split.",
    "Subimos a la copa con técnicas de trepa para podar con precisión: ramas secas, peligrosas o que molestan. Mejoramos la salud del árbol y reducimos el riesgo, sin dañar el ejemplar.":
      "We climb into the canopy with climbing techniques to prune precisely: dead, dangerous or in-the-way branches. We improve the tree's health and reduce risk without harming it.",
    "Técnicas de trepa": "Climbing techniques",
    "Acceso a copas que la maquinaria no alcanza.": "Access to canopies machinery can't reach.",
    "Poda de mantenimiento": "Maintenance pruning",
    "Salud, forma y seguridad del árbol.": "The tree's health, shape and safety.",
    "Trabajamos donde no llega la maquinaria: laderas, jardines cerrados, junto a edificios o en terrenos imposibles. Al no necesitar grúas ni grandes medios, abaratamos el coste del trabajo.":
      "We work where machinery can't reach: slopes, enclosed gardens, beside buildings or on impossible terrain. With no cranes or heavy gear needed, we lower the cost of the job.",
    "Sin maquinaria pesada": "No heavy machinery",
    "Menos coste y menos daño al entorno.": "Lower cost and less damage to the surroundings.",
    "Terrenos complicados": "Difficult terrain",
    "Laderas, cierres y espacios reducidos.": "Slopes, fenced areas and tight spaces.",
    "No dejamos el trabajo a medias. Nos encargamos de los restos de poda y tala y dejamos la zona limpia y ordenada cuando terminamos.":
      "We don't leave the job half done. We handle the pruning and felling debris and leave the area clean and tidy.",
    "Retirada de restos": "Debris removal",
    "Recogida y gestión de la madera y la rama.": "Collection and management of wood and branches.",
    "Zona limpia": "Clean area",
    "Terminamos y dejamos todo recogido.": "We finish and leave everything tidy.",
    "Cómo trabajamos": "How we work",
    "De la llamada al árbol en el suelo.": "From the call to the tree on the ground.",
    "Preguntas frecuentes": "Frequently asked questions",
    "Dudas habituales sobre poda y tala en altura.": "Common questions about pruning and felling at height.",
    "¿Cuánto cuesta talar un árbol grande en altura?": "How much does it cost to fell a large tree at height?",
    "El coste depende de la altura, el entorno y la dificultad de acceso. Al trabajar por trepa y sin grúa, abaratamos el precio frente a la maquinaria pesada. Damos presupuesto sin compromiso.": "The cost depends on the height, the surroundings and how hard the access is. By working with climbing and no crane, we lower the price compared with heavy machinery. We give a free, no-obligation quote.",
    "¿Cuándo necesito una tala controlada en altura?": "When do I need a controlled felling at height?",
    "Cuando un árbol presenta riesgo de caída, está cerca de una casa o un vallado, o no se puede entrar con maquinaria. Subimos al árbol y lo cortamos trozo a trozo de forma controlada.": "When a tree is at risk of falling, is close to a house or fence, or machinery cannot get in. We climb the tree and cut it piece by piece in a controlled way.",
    "¿Podéis quitar un árbol pegado a una casa sin dañarla?": "Can you remove a tree right next to a house without damaging it?",
    "Sí. Apeamos el árbol trozo a trozo desde arriba y bajamos cada corte con cuerda, protegiendo casas, vallados e instalaciones cercanas.": "Yes. We dismantle the tree piece by piece from above and lower each cut with a rope, protecting nearby houses, fences and installations.",
    "¿Trabajáis en sitios donde no entra la maquinaria?": "Do you work where machinery cannot get in?",
    "Sí. Nos especializamos en zonas inaccesibles para grúas y máquinas. Al trabajar con técnicas de trepa abaratamos costes porque no necesitamos grandes medios.": "Yes. We specialise in areas inaccessible to cranes and machines. By working with climbing techniques we lower costs because we don't need heavy equipment.",
    "¿Os encargáis de retirar los restos de la poda o la tala?": "Do you take care of removing the pruning or felling debris?",
    "Sí, gestionamos los residuos de podas y talas y dejamos la zona limpia.": "Yes, we manage the pruning and felling waste and leave the area clean.",
    "¿En qué zonas trabajáis?": "Which areas do you work in?",
    "En Navarra (Lesaka, Bera, Igantzi, Etxalar y el resto de Bortziri / Cinco Villas) y en Gipuzkoa (Irun, Hondarribia y alrededores). Consúltanos tu caso sin compromiso.": "In Navarre (Lesaka, Bera, Igantzi, Etxalar and the rest of Bortziri / Cinco Villas) and in Gipuzkoa (Irun, Hondarribia and the surrounding area). Tell us about your case with no obligation.",
    "Un proceso sencillo, seguro y siempre con los tres en el trabajo.": "A simple, safe process — always all three of us on the job.",
    "Paso 01": "Step 01", "Paso 02": "Step 02", "Paso 03": "Step 03",
    "Valoramos el árbol": "We assess the tree",
    "Vemos la altura, el entorno y la dificultad. Cada árbol es diferente.": "We look at the height, the surroundings and the difficulty. Every tree is different.",
    "Subimos y cortamos": "We climb and cut",
    "Trepamos, atamos y vamos cortando de forma controlada, trozo a trozo.": "We climb, tie in and cut in a controlled way, piece by piece.",
    "Limpiamos la zona": "We clean the area",
    "Gestionamos los residuos y dejamos todo recogido.": "We manage the waste and leave everything tidy.",
    "¿Tienes un árbol que resolver?": "Got a tree to sort out?",
    "Cuéntanos el caso y te decimos cómo lo hacemos.": "Tell us about it and we'll explain how we'd do it.",
    "Presupuesto sin compromiso para talas, podas y trabajos en altura.": "Free, no-obligation quote for felling, pruning and work at height.",

    "Tres jóvenes que": "Three young people",
    "emprenden en altura.": "taking on heights.",
    "\"La mayoría dicen que estamos locos.\" — Iker, Beñat y Jon, de Lesaka.":
      "\"Most people say we're crazy.\" — Iker, Beñat and Jon, from Lesaka.",
    "¿Qué hacemos?": "What do we do?",
    "Especialistas en altura.": "Specialists at height.",
    "Desde 2024": "Since 2024",
    "Lesaka · Bortziri": "Lesaka · Bortziri",
    "El equipo": "The team",
    "Iker, Beñat y Jon.": "Iker, Beñat and Jon.",
    "Tres lesakarras con las raíces en los caseríos de la zona y la motosierra cerca de las manos desde siempre.":
      "Three locals from Lesaka, rooted in the area's farmsteads, with a chainsaw always close at hand.",
    "29 años. Compagina Boralan con su trabajo como bombero. Hizo el curso de técnicas de trepa y poda en altura.":
      "29 years old. Combines Boralan with his job as a firefighter. He took the course in climbing and pruning techniques at height.",
    "26 años. Compagina el negocio con su puesto en un taller. Explica el oficio como \"difícil\" por combinar la motosierra con la altura.":
      "26 years old. Combines the business with his job at a workshop. He calls the trade \"hard\" for combining the chainsaw with heights.",
    "29 años. Albañil y muy ligado a la caza del jabalí. \"Mayoritariamente nos dicen que estamos locos\", ríe.":
      "29 years old. A bricklayer, deeply into wild boar hunting. \"Most people tell us we're crazy,\" he laughs.",
    "Nuestra historia": "Our story",
    "Cómo nació Boralan.": "How Boralan began.",
    "\"Nos conocemos del pueblo de siempre\", indican los tres a la vez al hablar de los inicios de Boralan. El proyecto surgió cuando supieron que en Madrid se impartía un curso relacionado con técnicas de trepa y poda en altura. \"Un conocido nuestro lo hizo y pensamos que a nosotros nos gustaría hacerlo. Dábamos el perfil porque siempre habíamos andado en el caserío con motosierras, con cuerdas, y entendíamos.\"":
      "\"We've known each other from the village forever,\" the three say in unison when talking about Boralan's beginnings. The project came about when they heard that a course on climbing and pruning techniques at height was being taught in Madrid. \"A friend of ours did it and we thought we'd like to do it too. We fit the profile because we'd always worked around the farmstead with chainsaws and ropes, and we understood it.\"",
    "Después realizaron otro curso de trabajos en altura con certificado oficial. El siguiente paso consistió en empezar con trabajos de pequeña escala, en casa. \"De ahí arrancamos. Vimos que no había mucha gente que hiciera eso y nosotros dábamos el perfil adecuado.\"":
      "They then took another course in work at height with an official certificate. The next step was to start with small-scale jobs, close to home. \"That's where we started. We saw there weren't many people doing that and we had the right profile.\"",
    "Los encargos les han llegado desde distintas zonas, principalmente en Bortziri (Cinco Villas), y recuerdan en especial la tala de un árbol en Ventas de Igantzi. \"La altura de la grúa era de 32 metros y no llegaba a la punta del árbol\", recuerda Erro. \"Hemos hecho muchos trabajos bonitos, pero cada árbol es diferente. Unas veces la dificultad está en la altura, otras en el entorno...\"":
      "The jobs have come from different areas, mainly in Bortziri (Cinco Villas), and they especially remember felling a tree in Ventas de Igantzi. \"The crane was 32 metres high and it still couldn't reach the top of the tree,\" Erro recalls. \"We've done some great jobs, but every tree is different. Sometimes the difficulty is the height, other times the surroundings…\"",
    "Este año ya han conseguido dar el salto a las provincias vascas y a otros puntos de Navarra gracias a su buen hacer y a su actividad en Instagram, donde explican de forma gráfica y didáctica su labor.":
      "This year they've already managed to expand into the Basque provinces and other parts of Navarre thanks to their good work and their activity on Instagram, where they explain their work in a visual, hands-on way.",
    "Hablan de nosotros.": "People talk about us.",
    "Nos entrevistaron sobre el oficio.": "We were interviewed about the trade.",
    "Puedes ver la entrevista completa en nuestro perfil de Instagram.": "You can watch the full interview on our Instagram profile.",
    "Vídeo en Facebook": "Video on Facebook",
    "¿Hablamos?": "Shall we talk?",
    "Cuéntanos tu árbol. Nosotros nos encargamos.": "Tell us about your tree. We'll handle it.",
    "Presupuesto sin compromiso en Navarra y País Vasco.": "Free, no-obligation quote in Navarre and the Basque Country.",
    "Contactar": "Get in touch",

    "Cada árbol,": "Every tree,",
    "una historia.": "a story.",
    "Fotos y vídeos reales de nuestro día a día subidos a los árboles más complicados.":
      "Real photos and videos of our daily work, high up in the trickiest trees.",
    "En movimiento": "In motion",
    "Vídeos.": "Videos.",
    "Grabamos con la GoPro desde lo alto del árbol. Así se ve nuestro trabajo.":
      "We film with a GoPro from the top of the tree. This is what our work looks like.",
    "Fotos": "Photos",
    "El trabajo, de cerca.": "The work, up close.",
    "Más en @boralan04": "More on @boralan04",
    "Síguenos para no perderte ningún trabajo.": "Follow us so you don't miss a single job.",
    "Más de 4.300 personas ya ven nuestros vídeos desde lo alto del árbol.":
      "Over 4,300 people already watch our videos from the top of the tree.",
    "Ver Instagram": "View Instagram",

    "Hablemos de": "Let's talk about",
    "tu árbol.": "your tree.",
    "Presupuesto sin compromiso. Cuéntanos el caso por teléfono, WhatsApp o formulario.":
      "Free, no-obligation quote. Tell us about it by phone, WhatsApp or form.",
    "Datos de contacto": "Contact details",
    "Estamos a una llamada.": "We're just a call away.",
    "Teléfonos": "Phones",
    "Email": "Email",
    "Dónde estamos": "Where we are",
    "Trabajamos en Navarra y País Vasco": "We work in Navarre and the Basque Country",
    "Instagram": "Instagram",
    "Pide presupuesto": "Request a quote",
    "Cuéntanos qué necesitas y te respondemos lo antes posible.": "Tell us what you need and we'll get back to you as soon as possible.",
    "Nombre": "Name",
    "Teléfono": "Phone",
    "Localidad del trabajo": "Job location",
    "Opcional, por si prefieres que te escribamos.": "Optional, in case you'd rather we email you.",
    "¿Qué necesitas?": "What do you need?",
    "Cuéntanos el árbol, la altura aproximada, el acceso…": "Tell us about the tree, the approximate height, the access…",
    "Enviar solicitud": "Send request",
    "Al enviar aceptas nuestra": "By sending you accept our",
    "política de privacidad": "privacy policy",
    "Nuestra base": "Our base",
    "Lesaka, Navarra.": "Lesaka, Navarre.",
    "Mapa de Lesaka, Navarra": "Map of Lesaka, Navarre",
    "Abriendo tu cliente de correo…": "Opening your email client…",
    "Dinos tu nombre.": "Tell us your name.",
    "Necesitamos un teléfono válido.": "We need a valid phone number.",
    "Revisa el formato del email.": "Check the email format.",
    "Cuéntanos brevemente qué necesitas.": "Briefly tell us what you need.",
    "¡Gracias! Hemos recibido tu solicitud. Te contactamos enseguida.": "Thank you! We've received your request. We'll be in touch shortly.",
    "No se pudo enviar. Llámanos al 628 850 027 o escríbenos a boralan04@gmail.com.": "Couldn't send. Call us on 628 850 027 or email boralan04@gmail.com.",

    "Página no encontrada (404) | Boralan": "Page not found (404) | Boralan",
    "Te has subido a la rama equivocada.": "You've climbed the wrong branch.",
    "La página que buscas no existe o se ha movido. Te bajamos al inicio.": "The page you're looking for doesn't exist or has moved. We'll take you back home.",
    "Volver al inicio": "Back to home",

    "Idioma": "Language",
    "Cambiar idioma": "Change language",
    "Trabajo de tala controlada junto a una edificación": "Controlled felling next to a building",
    "Tala controlada junto a una edificación": "Controlled felling next to a building",
    "Operario de Boralan en una poda en altura con cuerdas de trepa": "A Boralan operator pruning at height with climbing ropes",
    "Equipo de Boralan trabajando en una zona de difícil acceso en la copa de un haya": "The Boralan team working in a hard-to-reach area, in the canopy of a beech tree",
    "Trepa hasta la copa de un árbol en una zona de difícil acceso": "Climbing to the top of a tree in a hard-to-reach area"
  }
};

/* Metadatos SEO por idioma y página (title, description, keywords).
   Clave = ruta de la página (relativa). */
const META = {
  es: {
    "": { title: "Boralan | Poda y tala de árboles en altura en Navarra y País Vasco", desc: "Poda y tala de grandes árboles en altura en Lesaka (Navarra). Trepa y apeos controlados en zonas inaccesibles, sin maquinaria pesada. Presupuesto sin compromiso." },
    "servicios": { title: "Servicios de poda y tala en altura | Boralan · Navarra", desc: "Talas controladas, podas en altura y trabajos en zonas inaccesibles en Navarra y Gipuzkoa. Apeos controlados mediante trepa. Presupuesto sin compromiso." },
    "nosotros": { title: "Quiénes somos | Boralan · Tres jóvenes que emprenden en altura", desc: "Iker, Beñat y Jon: tres lesakarras especialistas en poda y tala de árboles en altura. Conoce la historia de Boralan en Lesaka (Navarra)." },
    "galeria": { title: "Galería de trabajos | Boralan · Poda y tala en altura", desc: "Fotos y vídeos reales de trabajos de poda y tala en altura en Navarra y Gipuzkoa: talas controladas, podas mediante trepa y apeos en zonas inaccesibles." },
    "contacto": { title: "Contacto y presupuesto | Boralan · Lesaka, Navarra", desc: "Pide presupuesto sin compromiso para poda y tala de árboles en altura. Llámanos, escríbenos por WhatsApp o rellena el formulario. Boralan, Lesaka (Navarra)." }
  },
  eu: {
    "": { title: "Boralan | Zuhaitzen inausketa eta mozketa altueran Nafarroan eta Euskal Herrian", desc: "Zuhaitz handien inausketa eta mozketa altueran Lesakan (Nafarroa). Igoera eta mozketa kontrolatuak sarbide zaileko guneetan, makineria astunik gabe. Aurrekontua doan." },
    "servicios": { title: "Inausketa eta mozketa zerbitzuak altueran | Boralan · Nafarroa", desc: "Mozketa kontrolatuak, altuerako inausketak eta sarbide zaileko guneetako lanak Nafarroan eta Gipuzkoan. Mozketa kontrolatuak igoeraz. Aurrekontua doan." },
    "nosotros": { title: "Nor garen | Boralan · Altueran ekiten duten hiru gazte", desc: "Iker, Beñat eta Jon: altuerako zuhaitzen inausketan eta mozketan adituak diren hiru lesakar. Ezagutu Boralanen historia Lesakan (Nafarroa)." },
    "galeria": { title: "Lanen galeria | Boralan · Inausketa eta mozketa altueran", desc: "Boralanen lanen galeria: mozketa kontrolatuak, altuerako inausketak eta igoerak Nafarroan eta Euskal Herrian. Gure egunerokoaren benetako argazki eta bideoak." },
    "contacto": { title: "Kontaktua eta aurrekontua | Boralan · Lesaka, Nafarroa", desc: "Eskatu konpromisorik gabeko aurrekontua altuerako zuhaitzen inausketa eta mozketarako. Deitu 628 850 027 zenbakira, idatzi WhatsApp bidez edo bete formularioa. Boralan, Lesaka (Nafarroa)." }
  },
  fr: {
    "": { title: "Boralan | Élagage et abattage d'arbres en hauteur en Navarre et au Pays basque", desc: "Élagage et abattage de grands arbres en hauteur à Lesaka (Navarre). Grimpe et démontage contrôlé en zones inaccessibles, sans machinerie lourde. Devis gratuit." },
    "servicios": { title: "Services d'élagage et d'abattage en hauteur | Boralan · Navarre", desc: "Abattages contrôlés, élagage en hauteur et travaux en zones inaccessibles en Navarre et au Guipuscoa. Démontage contrôlé par grimpe. Devis sans engagement." },
    "nosotros": { title: "Qui sommes-nous | Boralan · Trois jeunes qui entreprennent en hauteur", desc: "Iker, Beñat et Jon : trois habitants de Lesaka spécialistes de l'élagage et de l'abattage d'arbres en hauteur. Découvrez l'histoire de Boralan." },
    "galeria": { title: "Galerie de chantiers | Boralan · Élagage et abattage en hauteur", desc: "Galerie des chantiers de Boralan : abattages contrôlés, élagage en hauteur et grimpes en Navarre et au Pays basque. Photos et vidéos réelles de notre quotidien dans les arbres." },
    "contacto": { title: "Contact et devis | Boralan · Lesaka, Navarre", desc: "Demandez un devis sans engagement pour l'élagage et l'abattage d'arbres en hauteur. Appelez le 628 850 027, écrivez-nous sur WhatsApp ou remplissez le formulaire. Boralan, Lesaka (Navarre)." }
  },
  en: {
    "": { title: "Boralan | Tree pruning & felling at height in Navarre and the Basque Country", desc: "Pruning and felling of large trees at height in Lesaka (Navarre). Climbing and controlled dismantling in inaccessible areas, no heavy machinery. Free quote." },
    "servicios": { title: "Tree pruning & felling services at height | Boralan · Navarre", desc: "Controlled felling, pruning at height and work in inaccessible areas in Navarre and Gipuzkoa. Controlled dismantling by climbing. Free, no-obligation quote." },
    "nosotros": { title: "About us | Boralan · Three young people taking on heights", desc: "Iker, Beñat and Jon: three locals from Lesaka specialising in tree pruning and felling at height. Discover the story of Boralan in Lesaka (Navarre)." },
    "galeria": { title: "Work gallery | Boralan · Tree pruning & felling at height", desc: "Boralan's work gallery: controlled felling, pruning at height and climbing in Navarre and the Basque Country. Real photos and videos of our daily work in the trees." },
    "contacto": { title: "Contact & quote | Boralan · Lesaka, Navarre", desc: "Request a free, no-obligation quote for tree pruning and felling at height. Call 628 850 027, message us on WhatsApp or fill in the form. Boralan, Lesaka (Navarre)." }
  }
};

module.exports = { LANGS, T, META };
