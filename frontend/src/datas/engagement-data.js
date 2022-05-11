// Data for the engagement page !

const engagementData = [
  {
    id: 1,
    text: "Je m'engage à éteindre la lumière",
    likes: 268,
    engage: false,
    category: "Facile",
    explication:
      "On a tous vu cette publicité : « C’est pas Versailles ici ! ». Eh bien oui, éteindre la lumière, c’est bon pour votre budget et pour la planète. Même si vous habitez à Versailles. D’ailleurs, Louis XIV ne s’éclairait pas grâce à l’électricité mais à la bougie.Pensez-y :) ",
  },
  {
    id: 2,
    text: "Je m'engage à trier mes déchets",
    likes: 153,
    engage: false,
    category: "Facile",
    explication:
      "Trier ses déchets permet de recycler les déchets et d’économiser des ressources naturelles. En triant correctement ses déchets, les emballages et les verres sont réutilisés pour produire de nouveaux objets, ainsi éviter de puiser dans les ressources naturelles de la Terre. ",
  },
  {
    id: 3,
    text: "Je m'engage à éteindre mes appareils éléctriques",
    likes: 94,
    engage: false,
    category: "Facile",
    explication:
      "Un appareil mis en veille consomme quand même de l’électricité. Ils peuvent représenter jusqu’à 10% de votre facture. Afin de faire des économies et limiter votre consommation, débrancher tout simplement vos appareils lorsqu’ils ne servent plus : grille-pain, bouilloire, cafetière ou encore chargeur de téléphone. Pour vous faciliter la vie, optez pour des multiprises avec des boutons marche/arrêt. En un seul geste, vous éteindrez et allumerez tous vos appareils.",
  },
  {
    id: 4,
    text: "Je m'engage à limiter le chauffage et la climatisation ",
    likes: 85,
    engage: false,
    category: "Facile",
    explication:
      "Que ce soit en hiver ou en été, on a souvent tendance à en faire trop. Inutile de mettre le chauffage à fond dans votre chambre sachant que la température idéale se situe vers 17°C. En hiver, baisser la température de votre chauffage de 1°C et vous pourrez déjà constater la différence sur votre facture. En été, c’est la même chose. Si vous utilisez une climatisation, ne mettez pas trop froid. En plus de risquer d’attraper un rhume si vous sortez pendant la canicule après être resté dans une maison fraîche, votre facture sera aussi salée qu’en hiver. Et pour éviter les déperditions de chaleur, n’oubliez pas de baissez les volets. ",
  },
  {
    id: 5,
    text: " Je m'engage à boire l’eau du robinet ",
    likes: 7,
    engage: false,
    category: "Facile",
    explication:
      "En France, nous avons la chance extrême d’avoir une eau potable dans tous nos robinets. À quoi bon dépenser de l’argent dans des bouteilles en plastiques alors que vous avez de l’eau directement chez vous ? Si vous craignez les éventuels défauts de goûts, vous pouvez investir dans une fontaine à eau, dans des filtres à charbons ou tout simplement dans une carafe filtrante.",
  },
  {
    id: 6,
    text: "Je m'engage à mettre un couvercle sur les casseroles ",
    likes: 6,
    engage: false,
    category: "Facile",
    explication:
      "En cuisine, faire bouillir de l’eau peut parfois prendre du temps. Et ça consomme. Pour accélérer le processus d’ébullition, passer moins de temps et cuisine et réduire votre consommation d’énergie, pensez tout simplement à poser un couvercle sur vos casseroles. ",
  },
  {
    id: 7,
    text: "Je m'engage à manger moins de viande ",
    likes: 6,
    engage: false,
    category: "Intermediaire",
    explication:
      "En France 15 000 litres d’eau sont nécessaires pour produite 1kg de viande bovine (eau bue par l’animal et eau qui sert à la production de la nourriture pour cet animal). Pour 1 kg de porc, c’est 6000 litres. Pour 1 kg de poulet, c’est 4 000. Pour les légumineuses, les fruits et les légumes demandent nettement moins d’eau. Pour faire un petit geste, remplacer plusieurs fois dans la semaine des plats habituellement avec viande par des repas végétariens. Par exemple, tentez des lasagnes végétariennes (courgettes et aubergine) au lieu des lasagnes bolognaises, des steaks de sojas et de betterave au lieu du steak de bœuf, des hachis Parmentier aux légumes, des tajines aux lentilles et au riz, croquette-monsieur aux épinards et à la mozzarella, un chili végétarien ou encore des fajitas à l’avocat et aux haricots rouge. ",
  },
  {
    id: 8,
    text: "Je m'engage à adopter des ampoules LED ",
    likes: 85,
    engage: false,
    category: "Intermediaire",
    explication:
      "Bien qu’elles coûtent plus cher à l’achat que des ampoules classiques, les LED consomment 80% d’électricité en moins et ont une durée de vie plus longue. Vous pouvez même recevoir des ampoules gratuites sur www.mesapoulesgratuites.fr ",
  },
  {
    id: 9,
    text: "Je m'engage à faire des lessives à basse température",
    likes: 38,
    engage: false,
    category: "Intermediare",
    explication:
      "Fini l’époque où le lavage à basse température laissait des tâches sur vos vêtements ! Aujourd'hui, les lessives sont très efficaces (même celles faite maison). 80% de l’électricité utilisée par la machine à laver sert à faire chauffer l’eau. Alors essayez de privilégier des lavages à 30°C ou 40°C au lieu des habituels 60°C. ",
  },
  {
    id: 10,
    text: "Je m'engage à dire stop aux emballages",
    likes: 100,
    engage: false,
    category: "Intermediare",
    explication:
      "Difficile de limiter les emballages lors de vos achats ? Et pourtant c'est possible. Pour cela, il y a plusieurs techniques. Dans l'idéal faites vos courses dans des vracs et achetez vos viandes et poissons à la coupe. Aussi, privilégiez des emballages recyclables (verre, métal) ou des matériaux biodégradables (papier, carton). Sinon, achetez en grande quantités (si vous êtes certains de ne pas gaspiller). En effet, en plus de faire des économies en achetant en grandes quantités (le beurre, les produits pour le corps en 750 ml, les céréales en format familial…), vous contribuez à la baisse du plastique",
  },
  {
    id: 11,
    text: "Je m'engage à privilégier les produits locaux et bio ",
    likes: 150,
    engage: false,
    category: "Intermediare",
    explication:
      "Les produits locaux réduisent l’impact écologique lié aux transports de marchandises. Il est toujours préférable de faire travailler le petit producteur du coin qu’une usine à l’autre bout du pays ! De plus, si vous manger bio, vous avez la garantie que la production est plus respectueuse de l’environnement (pas d’engrais chimique, d’insecticides…). Pour les œufs, la viande et les poissons, privilégiez au maximum le local et les entreprises qui sont certifiés par des labels qui garantissent le bien-être animal (élevé en plein air, meilleures conditions d’abattages, pêche responsable…)",
  },
  {
    id: 12,
    text: "Je m'engage à utiliser les moteurs de recherche écologiques  ",
    likes: 1,
    engage: false,
    category: "Intermediare",
    explication:
      "Même s’il est très pratique, Google n’est pas le plus ecofriendly des moteurs de recherche. Avec une industrie liée au numérique qui représente environ 10% des gaz à effets de serre dans le monde, certains moteurs vont réduire cet impact comme Écosia, Écogine ou Lilo. Pour les amoureux des animaux, YouCare permet de reverser de l’argent à chaque recherche effectuée pour nourrir des animaux. Ces moteurs de recherches compensent le carbone émis par les recherches avec des plantations d’arbres dans le monde. ",
  },
  {
    id: 13,
    text: "Je m'engage à numériser au lieu d’imprimer  ",
    likes: 206,
    engage: false,
    category: "Intermediare",
    explication:
      "Aujourd'hui, nous sommes nombreux à travailler depuis nos écrans et il est parfois plus pratique de conserver les documents sous leur format numérique que sous leur format papier. Lorsque l’impression n’est pas nécessaire, numérisez !",
  },
  {
    id: 14,
    text: "Je m'engage à acheter d’occasion   ",
    likes: 122,
    engage: false,
    category: "Intermediare",
    explication:
      "Vous avez besoin d’un bureau ? Chinez-le sur Le Bon Coin, allez dans les marchés aux puces, suivez les articles qui se vend sur le Facebook Marketplace. Besoin d’un nouveau téléphone ? Tentez le reconditionné, il est garanti 1 ou 2 ans ! Envie de nouveaux livres ? Chinez les romandes policiers pour 1 ou 2€ l’unité dans les foires aux livres (généralement, les fonds reviennent à des associations). Aujourd'hui, de nombreux sites Internet et sociétés permettent la vente et l’achat d’occasion. De quoi acquérir des objets sans trop de ruiner.",
  },
  {
    id: 15,
    text: "Je m'engage à vendre mes affaires inutiles",
    likes: 105,
    engage: false,
    category: "Intermediare",
    explication:
      "De nombreux objets en tous genre sont jetés ou alors délaissez au fond du garage. Alors qu’ils pourraient bénéficier d’une nouvelle vie ou ravir un nouveau propriétaire. Vous ne portez plus vos vêtements ? Vendez-les sur Vinted. Vos enfants grandissent et ne jouent plus avec leurs vieux jouets ? Vendez-les ou offrez-les à des associations.",
  },
  {
    id: 16,
    text: "Je m'engage à faire mes propres produits ménagers ",
    likes: 15,
    engage: false,
    category: "Expert",
    explication:
      "Une très grosse tendance sur les réseaux sociaux depuis quelques années : faire ses propres produits ménagers : lessives, tablettes pour le lave-vaisselle, produits d’entretien… De nombreux sites Internet partagent leurs recettes de cuisine ultra simple à base de bicarbonate de soude, de vinaigre blanc et d’huiles essentielles. Vous pouvez également rejoindre des groupes sur les réseaux sociaux qui partagent leurs bonnes astuces et vous donnent des conseils pour faire un petit pas pour l’environnement tout en respectant votre budget.",
  },
  {
    id: 17,
    text: "Je m'engage à récupérer l’eau de pluie pour arroser mes plantes  ",
    likes: 97,
    engage: false,
    category: "Expert",
    explication:
      "De plus en plus de Français adoptent des récupérateurs de eaux de pluie. Pourquoi ? Environ 45% de l’eau utilisée au quotidien ne doit pas forcément être potable (arroser les plantes, laver la voiture…). Avec un récupérateur, vous pourrez utiliser cette eau propre pour ces tâches-là. Et sans débourser un centime d’eau. Si le prix d’achat est élevé (entre 2000 et 2500€ pour une cuve de 5000 litres, vous pouvez en trouvez des moins cher sur Le Bon Coin, chez des particuliers qui publient des annonces en ligne ou alors lors de soldes/fin de série/liquidations.",
  },
  {
    id: 18,
    text: "Je m'engage à faire mon propre compost ",
    likes: 35,
    engage: false,
    category: "Expert",
    explication:
      "Si vous avez un jardin (ou un jardin partagé pour les appartements), il est très simple de réduire ses déchets. Installé au fond du jardin, vous pourrez y éliminer vos épluchures de fruits et de légumes, les coquilles d’œufs, les fleurs fanées ou encore le marc de café). D’ailleurs, le marc de café peut être déposé dans vos massifs de fleurs pour repousser vos chiens et chats qui auraient tendance à y faire leurs besoins.",
  },
  {
    id: 19,
    text: "Je m'engage à limiter mes déplacements en voiture  ",
    likes: 400,
    engage: false,
    category: "Expert",
    explication:
      "Difficile de prendre autre chose que la voiture lorsque vous habitez en pleine campagne et que le commerce le plus proche est à plusieurs kilomètres. Mais il reste toutefois possible d’agir à sa propre échelle et limiter la pollution. Covoiturage, transports en commun, se mettre à la marche ou au vélo électrique sont des gestes qui ont leur importance. On estimerait à 135 000 le nombre de passagers par jour en covoiturage en France (sur de longues distances). Chaque geste compte. De même, si vous partez en vacances, privilégiez le train à l’avion. En plus de consommer nettement moins, vous pourrez admirer le paysage des régions que vous traversez. C’est toujours plus sympa que des nuages pendant 1 heure !",
  },
  {
    id: 20,
    text: "Je m'engage à recycler les liquides  ",
    likes: 79,
    engage: false,
    category: "Expert",
    explication:
      "Comme pour les toilettes, ne videz surtout pas vos déchets liquides dans l’évier : produits ménagers, solvants, huile de vidange, huile de friteuse… Pour les recycler, mettrez-les dans des bouteilles et amenez-les en déchetterie.",
  },
  {
    id: 21,
    text: "Je m'engage à recycler autant que possible   ",
    likes: 108,
    engage: false,
    category: "Expert",
    explication:
      "Aujourd'hui, tout ou presque peut être recycler ou détourner. Au lieu de jeter quelque chose, trouvez-lui une nouvelle fonctionne. Un pot en verre peut devenir un pot à confiture maison ou alors une bougie, un vêtement déchiré peut être découpé et servir de torchon pour les vitres ou pour nettoyer votre voiture. Ou un vieux meuble peut être modernisé avec un coup de peinture… ",
  },
  {
    id: 22,
    text: "Je m'engage à récupérer les invendus   ",
    likes: 7,
    engage: false,
    category: "Expert",
    explication:
      "Trop d’aliments sont jetés parce qu’ils n’ont pas été vendus dans chez les grands distributeurs. Que ce soient des « légumes moches », des produits en date limite de consommation ou encore des sandwichs invendus, certaines applications comme Too Good To Go vous permettent de récupérer à bas prix les invendus et de faire de vraies affaires. Une solution efficace pour lutter contre le gaspillage, tout en faisant des économies.",
  },
];

export default engagementData;
