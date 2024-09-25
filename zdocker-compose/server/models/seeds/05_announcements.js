/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('announcements').del()
  await knex('announcements').insert([
    {
      event_id: 1,
      head: "Lorem Ipsum (B)",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Primis vestibulum dui, dictum scelerisque tempor integer felis rhoncus ullamcorper.",
    },
    {
      head: "Lorem Ipsum",
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Magna sit amet purus gravida quis. Cras semper auctor neque vitae tempus quam pellentesque nec. Sapien nec sagittis aliquam malesuada bibendum arcu. A lacus vestibulum sed arcu non odio. In fermentum posuere urna nec tincidunt. Enim diam vulputate ut pharetra. Fermentum leo vel orci porta non. Luctus venenatis lectus magna fringilla urna porttitor. Blandit aliquam etiam erat velit. Ultricies leo integer malesuada nunc vel risus commodo. Tellus pellentesque eu tincidunt tortor. Pellentesque id nibh tortor id aliquet lectus proin nibh.

        Arcu dictum varius duis at consectetur lorem. Commodo viverra maecenas accumsan lacus vel. Sapien eget mi proin sed libero enim sed. Eu volutpat odio facilisis mauris sit amet massa vitae. Rutrum quisque non tellus orci ac auctor augue mauris augue. In egestas erat imperdiet sed euismod nisi porta. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Risus nec feugiat in fermentum posuere. Vestibulum sed arcu non odio euismod lacinia at quis. Mollis nunc sed id semper. Aenean et tortor at risus. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Euismod elementum nisi quis eleifend quam adipiscing. At erat pellentesque adipiscing commodo elit at imperdiet. Arcu dui vivamus arcu felis bibendum. Morbi tristique senectus et netus et malesuada fames. Nam at lectus urna duis. Ac placerat vestibulum lectus mauris ultrices eros in cursus.

        Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Tristique magna sit amet purus gravida quis blandit. Et odio pellentesque diam volutpat commodo sed egestas egestas. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Est ullamcorper eget nulla facilisi etiam dignissim. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Turpis egestas integer eget aliquet. Sed libero enim sed faucibus turpis in eu mi. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Gravida in fermentum et sollicitudin ac. Dictum at tempor commodo ullamcorper a. Odio pellentesque diam volutpat commodo. At quis risus sed vulputate odio. Pellentesque massa placerat duis ultricies lacus sed. Enim facilisis gravida neque convallis.

        Quis risus sed vulputate odio ut enim. Nisl purus in mollis nunc sed id. At lectus urna duis convallis convallis tellus id interdum velit. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Ut porttitor leo a diam sollicitudin tempor. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Diam maecenas sed enim ut sem viverra aliquet eget sit. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Tortor at risus viverra adipiscing. Amet massa vitae tortor condimentum lacinia quis. Ac tortor vitae purus faucibus ornare suspendisse. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Vel fringilla est ullamcorper eget nulla. Adipiscing elit pellentesque habitant morbi tristique senectus. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Bibendum est ultricies integer quis auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tempus egestas sed sed risus.

        Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Nunc consequat interdum varius sit amet mattis vulputate. Dignissim sodales ut eu sem integer vitae justo. Morbi tristique senectus et netus et malesuada fames. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. A diam sollicitudin tempor id eu nisl nunc. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Id faucibus nisl tincidunt eget nullam non. Elit eget gravida cum sociis natoque penatibus et. Volutpat odio facilisis mauris sit amet massa. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Ipsum consequat nisl vel pretium. Blandit massa enim nec dui nunc mattis enim ut. Lectus quam id leo in vitae turpis massa sed elementum. At in tellus integer feugiat. Sagittis aliquam malesuada bibendum arcu vitae. Viverra nam libero justo laoreet sit amet cursus. Ut tellus elementum sagittis vitae.
      `,
    },
    {
      event_id: 1,
      head: "Lorem Ipsum (B)",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent lobortis nibh cubilia sollicitudin metus montes parturient. Facilisi pretium nulla sagittis maximus; hac montes odio. Primis cubilia at platea porttitor bibendum ipsum nisl suspendisse. Hac mauris ligula taciti; class erat leo adipiscing. Facilisi mus massa diam est auctor maximus class? Ante mus massa lectus sodales adipiscing mauris rhoncus vel suspendisse. Condimentum mi id potenti aliquet venenatis orci conubia.",
    },
    {
      event_id: 1,
      head: "Lorem Ipsum (B)",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Primis vestibulum dui, dictum scelerisque tempor integer felis rhoncus ullamcorper. Curae pellentesque integer est; massa tristique pulvinar conubia sapien interdum? Adipiscing rutrum facilisis est finibus cras. Justo montes accumsan mauris; nullam efficitur et eros. Augue class dapibus ipsum aliquet feugiat ligula turpis. Quis potenti magnis maximus; ornare per interdum.",
    },
    {
      head: "Lorem Ipsum",
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Magna sit amet purus gravida quis. Cras semper auctor neque vitae tempus quam pellentesque nec. Sapien nec sagittis aliquam malesuada bibendum arcu. A lacus vestibulum sed arcu non odio. In fermentum posuere urna nec tincidunt. Enim diam vulputate ut pharetra. Fermentum leo vel orci porta non. Luctus venenatis lectus magna fringilla urna porttitor. Blandit aliquam etiam erat velit. Ultricies leo integer malesuada nunc vel risus commodo. Tellus pellentesque eu tincidunt tortor. Pellentesque id nibh tortor id aliquet lectus proin nibh.

        Arcu dictum varius duis at consectetur lorem. Commodo viverra maecenas accumsan lacus vel. Sapien eget mi proin sed libero enim sed. Eu volutpat odio facilisis mauris sit amet massa vitae. Rutrum quisque non tellus orci ac auctor augue mauris augue. In egestas erat imperdiet sed euismod nisi porta. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Risus nec feugiat in fermentum posuere. Vestibulum sed arcu non odio euismod lacinia at quis. Mollis nunc sed id semper. Aenean et tortor at risus. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Euismod elementum nisi quis eleifend quam adipiscing. At erat pellentesque adipiscing commodo elit at imperdiet. Arcu dui vivamus arcu felis bibendum. Morbi tristique senectus et netus et malesuada fames. Nam at lectus urna duis. Ac placerat vestibulum lectus mauris ultrices eros in cursus.

        Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Tristique magna sit amet purus gravida quis blandit. Et odio pellentesque diam volutpat commodo sed egestas egestas. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Est ullamcorper eget nulla facilisi etiam dignissim. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Turpis egestas integer eget aliquet. Sed libero enim sed faucibus turpis in eu mi. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Gravida in fermentum et sollicitudin ac. Dictum at tempor commodo ullamcorper a. Odio pellentesque diam volutpat commodo. At quis risus sed vulputate odio. Pellentesque massa placerat duis ultricies lacus sed. Enim facilisis gravida neque convallis.

        Quis risus sed vulputate odio ut enim. Nisl purus in mollis nunc sed id. At lectus urna duis convallis convallis tellus id interdum velit. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Ut porttitor leo a diam sollicitudin tempor. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Diam maecenas sed enim ut sem viverra aliquet eget sit. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Tortor at risus viverra adipiscing. Amet massa vitae tortor condimentum lacinia quis. Ac tortor vitae purus faucibus ornare suspendisse. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Vel fringilla est ullamcorper eget nulla. Adipiscing elit pellentesque habitant morbi tristique senectus. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Bibendum est ultricies integer quis auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tempus egestas sed sed risus.

        Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Nunc consequat interdum varius sit amet mattis vulputate. Dignissim sodales ut eu sem integer vitae justo. Morbi tristique senectus et netus et malesuada fames. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. A diam sollicitudin tempor id eu nisl nunc. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Id faucibus nisl tincidunt eget nullam non. Elit eget gravida cum sociis natoque penatibus et. Volutpat odio facilisis mauris sit amet massa. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Ipsum consequat nisl vel pretium. Blandit massa enim nec dui nunc mattis enim ut. Lectus quam id leo in vitae turpis massa sed elementum. At in tellus integer feugiat. Sagittis aliquam malesuada bibendum arcu vitae. Viverra nam libero justo laoreet sit amet cursus. Ut tellus elementum sagittis vitae.
      `,
    },
    {
      head: "Lorem Ipsum",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat phasellus nisi amet, ridiculus ligula commodo mollis elit rutrum.",
    },
    {
      event_id: 1,
      head: "Lorem Ipsum (Bağlantılı Uzun)",
      description: 
      `
        Lorem ipsum odor amet, consectetuer adipiscing elit. Aenean cras lectus senectus non ipsum facilisis vulputate vestibulum. Auctor fermentum feugiat nibh habitasse lobortis himenaeos. Nulla blandit et fusce non velit tincidunt cubilia urna. Dui blandit phasellus urna rutrum aptent. Fermentum sed lectus fringilla; lacinia facilisi iaculis netus sollicitudin. Feugiat cursus ullamcorper sagittis nulla himenaeos purus. Orci facilisi habitant ornare felis gravida diam class. Hac montes massa magnis maximus gravida cursus consectetur nisl. Curabitur convallis aptent donec turpis, facilisis non.

        Congue interdum quam ut cras morbi eleifend sit tristique? Dictumst elementum dis sodales ullamcorper parturient. Elit curae lectus vivamus porttitor orci. Pharetra tristique lacinia purus natoque vehicula velit inceptos. Pellentesque habitasse euismod donec praesent tempor proin pretium mi sociosqu. Tortor bibendum interdum ligula egestas nam praesent. Gravida justo dolor ad dui natoque integer auctor. Viverra class himenaeos a elit amet egestas imperdiet.

        Imperdiet turpis tempor libero quam suscipit nunc praesent est nunc. Volutpat penatibus mollis eget pellentesque vel nisl cursus. Molestie tincidunt eleifend feugiat primis aenean tellus varius. Convallis nullam maximus nam auctor etiam. Vehicula dignissim nisl quisque metus; efficitur dis pulvinar eget. Urna amet convallis aliquam convallis suscipit. Gravida pharetra rutrum facilisi integer urna dis auctor diam.

        Sagittis id nullam scelerisque quam facilisi mi in nulla. Nisi pellentesque sodales integer neque vehicula eleifend et. Placerat nec hac id mus arcu fusce. Pretium mollis venenatis semper primis, magna etiam suscipit quis. Augue lacus pretium neque sem lobortis. Nascetur faucibus viverra commodo penatibus fames per vestibulum. Eleifend mauris velit ultricies tempus vel nunc.

        Egestas odio nascetur tortor ut natoque rutrum. Natoque hendrerit ad amet ridiculus ultricies integer pellentesque. Aptent leo dignissim adipiscing nascetur proin. Leo ultrices nibh maecenas tempus pharetra. Lobortis varius cras viverra etiam; vivamus est enim aliquam. Eleifend felis consequat vestibulum curae penatibus.

        Ipsum penatibus tempus ex donec pharetra maximus parturient ex. Sociosqu habitasse elit felis nullam maximus; lobortis vehicula nunc. Maximus sed adipiscing dictum venenatis laoreet commodo amet ad. Diam varius pulvinar pulvinar commodo aptent habitasse vestibulum adipiscing. Ligula et nam sodales volutpat suscipit nunc magna donec. Tincidunt litora imperdiet sollicitudin phasellus morbi taciti ullamcorper mi. Ut venenatis commodo ad tempus cubilia curabitur lobortis pharetra. Euismod tortor dui dis est aliquet augue.

        Pulvinar magna nullam class maximus parturient elementum. Mus eu sed cras per fringilla ac senectus torquent. Himenaeos mus habitant quis; rutrum velit cubilia sodales hendrerit. Himenaeos quisque facilisis; id elit ut euismod felis nec. Rutrum praesent nascetur dictum ultrices facilisis velit. Sit ligula penatibus dictum sagittis gravida fringilla taciti vehicula. Semper faucibus class scelerisque class cubilia habitasse. Integer interdum nisi justo eros auctor sapien pulvinar ridiculus. Augue rhoncus adipiscing interdum dictumst imperdiet elementum mauris.

        Cras vestibulum dictum ligula convallis nibh inceptos imperdiet mi. Augue sagittis at dignissim habitant sed. Fringilla scelerisque ad purus suspendisse curae placerat; odio facilisis. Rutrum laoreet ridiculus netus a tellus diam amet. Purus netus cubilia tristique lorem rutrum odio enim dis. Leo volutpat ultrices magnis; habitasse habitant justo netus hendrerit. Asenectus nec non mauris condimentum fusce nunc cubilia commodo. Consectetur dui aliquet hac volutpat felis senectus euismod ut. In nisi felis pellentesque, dolor lacinia congue. Scelerisque eu placerat tempor nisl orci id nec, euismod libero.

        Volutpat elit sagittis bibendum lacinia, convallis iaculis arcu sociosqu. Hendrerit aenean vulputate venenatis ridiculus tortor tempor ex suspendisse. Etiam adipiscing condimentum molestie turpis facilisi efficitur lacus. Enim mattis mollis lobortis finibus inceptos tristique, leo tincidunt? Pulvinar fames mi in urna maecenas cras varius. Tincidunt nam euismod enim elit ad consectetur. Eros elit maximus sagittis penatibus erat eros. Torquent class mollis pretium, id posuere vehicula. Suspendisse ut commodo suscipit torquent suscipit ligula eros vitae commodo.
      `,
    },
    {
      head: "29 Ekimi Mesajı",
      description: 
      `
        Cumhuriyetimizin 101. yıl dönümünü büyük bir gurur ve coşkuyla kutluyoruz. Bu anlamlı günde, başta Gazi Mustafa Kemal Atatürk olmak üzere, Kurtuluş Savaşı'nın tüm kahramanlarını saygı, minnet ve özlemle anıyoruz. Atatürk’ün önderliğinde kurulan Türkiye Cumhuriyeti, bağımsızlık ve özgürlük mücadelesinin en büyük zaferlerinden biri olarak dünya tarihine geçmiştir. Cumhuriyet, Türk milletinin bağımsızlık iradesini ve özgürlüğe olan inancını simgelemektedir.

        Cumhuriyet, sadece bir yönetim sistemi değil, aynı zamanda çağdaşlaşma ve medeniyet yolunda atılmış en büyük adımdır. Atatürk’ün de belirttiği gibi, egemenlik kayıtsız şartsız milletindir. Bu anlayış, ulusumuzun demokratik değerleri benimsemesi ve kendini sürekli yenileyerek çağdaş dünyada hak ettiği yeri alması için bir yol haritası olmuştur. Bugün, Cumhuriyetimizin değerlerine sıkı sıkıya bağlı kalarak, özgürlük, eşitlik ve adalet ilkelerine sahip çıkmaya devam ediyoruz.

        Geleceğe olan inancımızı her zaman diri tutarak, Cumhuriyetimizin ışığı altında birlik ve beraberlik içinde daha güzel yarınlara yürüyoruz. Atatürk’ün bizlere emanet ettiği bu büyük mirasın sorumluluğunun farkındayız ve onun ilkelerini yaşatmak için var gücümüzle çalışmaya devam edeceğiz. Yaşasın Cumhuriyet!

        (This message was generated by ChatGPT)
      `,
    },
    {
      event_id: 1,
      head: "Lorem Ipsum (Bağlantılı Duyuru)",
      description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Nam viverra dignissim at nam rutrum dapibus nam eu adipiscing. Rutrum varius arcu pharetra phasellus; interdum tincidunt.",
    },
    {
      head: "10 Kasım Atatürk\'ü Anma Mesajı",
      description: 
      `
        Cumhuriyetimizin kurucusu, Gazi Mustafa Kemal Atatürk’ü saygı, minnet ve özlemle anıyoruz. Emanetin emin ellerde, izindeyiz. #10Kasım (generated by ChatGPT)
      `,
    },
  ]).then(console.log(" - - - ANNOUNCEMENTS: Seed Run Successful - - -"));
};
