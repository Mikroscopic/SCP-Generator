function capitalize(phrase) {
	return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}

function get_article(word) {
	// Exceptions
	if (['utensil'].includes(word))
		return 'a ';
	if ([
		'blood',
		'bread',
		'cardboard',
		'cheese',
		'chocolate',
		'clay',
		'concrete',
		'dirt',
		'fabric',
		'glass',
		'hair',
		'human tissue',
		'ice',
		'metal',
		'paper',
		'perfume',
		'plant matter',
		'plastic',
		'sand',
		'slime',
		'stone',
		'styrofoam',
		'underwear',
		'water',
		'wood'
	].includes(word))
		return '';
	// Otherwise, determine article based on first letter
	return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', '8'].includes(word.charAt(0)) ? 'an ' : 'a ';
}

function parse_specials(item) {
	switch (item) {
		case 'sp_sized_area':
			return `${Math.floor(Math.random() * 291 + 10)}-square-mile area`;
		case 'sp_nationality_s':
			return `${rand_el(nationalities)} ${randByTag('person', 0)}`;
		case 'sp_nationality_pl':
			return `${rand_el(nationalities)} people`;
		case 'sp_city_loc':
			return `city in ${rand_el(locations)}`;
		default:
			return item;
	}
}

function rand_el(words) {
	return words[Math.floor(Math.random() * words.length)];
}

function rand_id(words) {
	let index = Math.floor(Math.random() * words.length)
	let word = words[index];
	return [index, word];
}

function randByTag(tag, plural) {
	let validWords = []
	
	for (i = 0; i < subjectList.length; i++) {
		if (subjects[subjectList[i]].includes(tag)) {
			if (plural) {
				validWords.push(subjectPlurals[i]);
			} else {
				validWords.push(subjectList[i]);
			}
		}
	}

	let word = rand_el(validWords);
	while (word.charAt(0) == 'P' || word.charAt(0) == '_')
		word = rand_el(validWords);

	return parse_specials(word);
}

const adjectives = [
	'agitated',
	'angry',
	'aroused',
	'attractive',
	'blind',
	'bouncy',
	'cold',
	'confused',
	'dead',
	'elastic',
	'flammable',
	'gelatinous',
	'happy',
	'heavy',
	'hostile',
	'hungry',
	'immortal',
	'incorporeal',
	'menacing',
	'obedient',
	'sad',
	'sick',
	'smart',
	'snarky',
	'sticky',
	'strong',
	'talkative',
	'transparent',
	'ugly',
	'uncomfortable'
]

const locations = [
	'Antarctica',
	'Arizona',
	'Australia',
	'California',
	'China',
	'Colorado',
	'Egypt',
	'Florida',
	'France',
	'Germany',
	'Greece',
	'Hawaii',
	'India',
	'Indonesia',
	'Italy',
	'Japan',
	'Jupiter',
	'Kentucky',
	'Mars',
	'Massachusetts',
	'Mexico',
	'Michigan',
	'Ohio',
	'Russia',
	'South America',
	'West Africa'
]

const nationalities = [
	'African',
	'American',
	'Asian',
	'British',
	'Dutch',
	'Egyptian',
	'European',
	'French',
	'German',
	'Hispanic',
	'Indian',
	'Japanese',
	'Korean',
	'Native American',
	'Russian'
]

// Words which should only exist in plural form begin with P_
const subjects = {
	'sp_sized_area': ['place', 'large_place'],
	'sp_nationality_s': ['person'],
	abacus: ['object', 'tool'],
	accordion: ['object', 'instrument'],
	acorn: ['object', 'small'],
	actor: ['person', 'job'],
	advertisement: ['concept', 'visible'],
	airplane: ['object', 'large', 'machine', 'airborne'],
	'alarm clock': ['object', 'small', 'audio', 'machine'],
	'alcoholic drink': ['object', 'drink'],
	algorithm: ['concept', 'act'],
	alien: ['person'],
	alligator: ['object', 'animal', 'alive'],
	almanac: ['object', 'small', 'writing', 'openable'],
	altar: ['object', 'surface'],
	'amusement park': ['place', 'property', 'sp_amus_park'],
	'P_ancient writings': ['concept', 'words', 'writing', 'audio'],
	android: ['object', 'humanoid', 'machine'],
	angel: ['person'],
	anime: ['concept', 'visible'],
	'anime convention': ['place', 'event', 'participatory'],
	ant: ['object', 'small', 'animal', 'bug', 'alive'],
	apple: ['object', 'small', 'food'],
	aquarium: ['object', 'container'],
	army: ['concept', 'person_group'],
	artist: ['person', 'job'],
	athlete: ['person', 'job'],
	avocado: ['object', 'small', 'food'],
	baby: ['object', 'humanoid', 'alive'],
	bacteria: ['alive', 'disease'],
	badge: ['object', 'small', 'clothing'],
	bag: ['object', 'container', 'openable'],
	bagel: ['object', 'small', 'food'],
	balaclava: ['object', 'clothing'],
	ball: ['object', 'small', 'toy'],
	balloon: ['object', 'container', 'toy', 'airborne'],
	banana: ['object', 'small', 'food'],
	band: ['concept', 'person_group'],
	banjo: ['object', 'instrument'],
	barrel: ['object', 'container', 'openable'],
	barstool: ['object', 'furniture', 'surface'],
	baseball: ['object', 'small', 'toy'],
	'baseball bat': ['object', 'tool', 'weapon', 'toy'],
	basketball: ['object', 'small', 'toy'],
	bassoon: ['object', 'instrument'],
	bat: ['object', 'animal', 'alive', 'small'],
	bathrobe: ['object', 'clothing'],
	bathroom: ['place', 'small_place', 'passageway'],
	bathtub: ['object', 'container'],
	battery: ['object', 'small'],
	battleship: ['object', 'large', 'machine'],
	beach: ['place', 'biome'],
	bear: ['object', 'animal', 'alive'],
	beard: ['object'],
	beaver: ['object', 'animal', 'alive'],
	bed: ['object', 'furniture', 'surface'],
	bee: ['object', 'animal', 'alive', 'small', 'bug'],
	bell: ['object', 'instrument', 'small'],
	bench: ['object', 'furniture', 'surface'],
	bicycle: ['object', 'machine'],
	bikini: ['object', 'clothing'],
	P_binoculars: ['object', 'small', 'tool'],
	bird: ['object', 'animal', 'alive', 'small', 'airborne'],
	birdcage: ['object', 'container', 'openable'],
	blackboard: ['object', 'writing'],
	blanket: ['object', 'surface', 'clothing'],
	blood: ['substance', 'liquid'],
	boat: ['object', 'large', 'machine'],
	'P_body movements': ['concept', 'act'],
	bomb: ['object', 'small'],
	bone: ['object', 'small'],
	book: ['object', 'small', 'writing', 'openable'],
	boot: ['object', 'small', 'clothing'],
	bottle: ['object', 'small', 'container', 'openable'],
	bow: ['object', 'tool', 'weapon'],
	bowl: ['object', 'small', 'container'],
	box: ['object', 'container', 'openable'],
	bracelet: ['object', 'small', 'clothing'],
	brain: ['object', 'small'],
	bread: ['substance', 'food'],
	bucket: ['object', 'container'],
	building: ['place', 'property', 'building'],
	bull: ['object', 'animal', 'alive'],
	'burger joint': ['place', 'property', 'building', 'restaurant'],
	bus: ['object', 'machine'],
	'bus driver': ['person', 'job'],
	butler: ['person', 'job'],
	butterfly: ['object', 'animal', 'small', 'alive', 'bug', 'airborne'],
	button: ['object', 'small', 'tool'],
	cabin: ['place', 'property', 'building', 'residence'],
	cactus: ['object', 'plant', 'alive'],
	cake: ['object', 'food'],
	calendar: ['object', 'tool'],
	camel: ['object', 'animal', 'alive'],
	can: ['object', 'small', 'container'],
	candle: ['object', 'small', 'tool'],
	canyon: ['place', 'large_place', 'biome'],
	car: ['object', 'machine'],
	card: ['object', 'small', 'writing'],
	cardboard: ['substance'],
	'carton of milk': ['object', 'small', 'drink'],
	'cash register': ['object', 'tool', 'container', 'openable'],
	casino: ['place', 'property', 'building'],
	casket: ['object', 'container', 'openable'],
	castle: ['place', 'property', 'building', 'residence'],
	cat: ['object', 'animal', 'alive'],
	P_catacombs: ['place', 'passageway'],
	cathedral: ['place', 'building'],
	cave: ['place', 'passageway', 'biome'],
	'celestial body': ['object', 'large'],
	chair: ['object', 'furniture', 'surface'],
	cheese: ['substance', 'food'],
	chicken: ['object', 'animal', 'alive'],
	child: ['person'],
	chimpanzee: ['object', 'animal', 'alive'],
	chocolate: ['substance', 'food'],
	cigar: ['object', 'small'],
	city: ['place', 'large_place', 'residence'],
	sp_city_loc: ['place', 'large_place', 'residence'],
	clay: ['substance'],
	clock: ['object', 'small', 'machine'],
	clown: ['person', 'job'],
	cockroach: ['object', 'animal', 'alive', 'small', 'bug'],
	coin: ['object', 'small'],
	comb: ['object', 'small', 'tool'],
	'comic book': ['object', 'small', 'writing', 'openable'],
	company: ['concept', 'person_group'],
	compass: ['object', 'small', 'tool'],
	computer: ['object', 'tool', 'machine'],
	'computer program': ['concept', 'tool'],
	concrete: ['substance'],
	'containment procedure': ['concept', 'act', 'participatory'],
	'convenience store': ['place', 'property', 'store'],
	cook: ['person', 'job'],
	'cooking recipe': ['concept', 'writing'],
	country: ['place', 'large_place'],
	cowboy: ['person'],
	criminal: ['person', 'job'],
	'cruise ship': ['object', 'large', 'machine', 'place', 'property'],
	crystal: ['object'],
	cyborg: ['person'],
	'D-Class': ['person'],
	deity: ['person'],
	demon: ['humanoid', 'alive'],
	desert: ['place', 'large_place', 'biome'],
	die: ['object', 'small', 'toy'],
	dimension: ['place', 'large_place'],
	dirt: ['substance'],
	disease: ['concept', 'disease'],
	doctor: ['person', 'job'],
	dog: ['object', 'animal', 'alive'],
	doll: ['object', 'small', 'toy'],
	dolphin: ['object', 'animal', 'alive'],
	door: ['object', 'passageway', 'openable'],
	drawing: ['concept', 'visible'],
	dream: ['concept', 'event'],
	dungeon: ['place', 'passageway'],
	dwarf: ['person'],
	egg: ['object', 'small', 'food'],
	elephant: ['object', 'large', 'animal', 'alive'],
	elevator: ['object', 'passageway', 'machine'],
	elf: ['person', 'small'],
	email: ['concept', 'writing'],
	eyeball: ['object', 'small'],
	fabric: ['substance', 'clothing'],
	face: ['object', 'alive', 'visible'],
	factory: ['place', 'property', 'building'],
	fairy: ['humanoid', 'small'],
	'famous person': ['person'],
	farm: ['place', 'property', 'sp_zoo'],
	farmer: ['person', 'job'],
	'fashion boutique': ['place', 'property', 'building', 'store'],
	feather: ['object', 'small'],
	'fictional character': ['person'],
	fish: ['object', 'animal', 'small', 'alive', 'food'],
	fisherman: ['person', 'job'],
	flower: ['object', 'plant', 'alive'],
	font: ['concept', 'visible'],
	'football player': ['person', 'job'],
	forest: ['place', 'large_place', 'biome'],
	'Foundation agent': ['person', 'job'],
	'Foundation researcher': ['person', 'job'],
	'Foundation site': ['place', 'property', 'building'],
	fountain: ['object', 'machine'],
	frog: ['object', 'animal', 'small', 'alive'],
	fruit: ['object', 'small', 'food'],
	game: ['concept', 'participatory'],
	'game show host': ['person', 'job'],
	'garbage dump': ['place'],
	genie: ['person'],
	ghost: ['humanoid'],
	giant: ['person'],
	glass: ['substance'],
	'pair of glasses': ['object', 'small', 'clothing', 'tool'],
	glove: ['object', 'small', 'clothing'],
	graveyard: ['place'],
	gun: ['object', 'small', 'weapon', 'tool'],
	gymnast: ['person', 'job'],
	hair: ['substance'],
	haircut: ['concept', 'visible', 'clothing'],
	hand: ['object', 'small'],
	harp: ['object', 'instrument'],
	hat: ['object', 'small', 'clothing'],
	heart: ['object', 'small'],
	P_hieroglyphics: ['concept', 'writing', 'visible'],
	'historical figure': ['person'],
	'historical landmark': ['place'],
	horn: ['object', 'instrument'],
	horse: ['object', 'animal', 'alive'],
	hospital: ['place', 'property', 'building'],
	'hot dog': ['object', 'small', 'food'],
	hotel: ['place', 'property', 'building'],
	house: ['place', 'property', 'building', 'residence'],
	'human tissue': ['substance'],
	'humanoid entity': ['humanoid', 'alive'],
	ice: ['substance'],
	image: ['concept', 'visible'],
	island: ['place', 'large_place', 'biome'],
	janitor: ['person', 'job'],
	jar: ['object', 'container'],
	junkyard: ['place'],
	kazoo: ['object', 'small', 'instrument'],
	key: ['object', 'small', 'tool'],
	king: ['person'],
	kite: ['object', 'tool', 'airborne', 'toy'],
	knife: ['object', 'small', 'weapon', 'tool'],
	ladder: ['object', 'tool', 'passageway'],
	lake: ['place', 'biome'],
	lamp: ['object', 'small', 'tool', 'machine'],
	language: ['concept', 'words', 'writing', 'audio'],
	lawyer: ['person', 'job'],
	'left-handed person': ['person'],
	lion: ['object', 'animal', 'alive'],
	lizard: ['object', 'animal', 'small', 'alive'],
	lollipop: ['object', 'small', 'food'],
	machine: ['object', 'tool', 'machine'],
	magician: ['person', 'job'],
	magnet: ['object', 'tool'],
	mailbox: ['object', 'container', 'openable'],
	mammoth: ['object', 'animal', 'large', 'alive'],
	man: ['person'],
	mansion: ['place', 'property', 'building', 'residence'],
	map: ['object', 'writing', 'tool'],
	P_maracas: ['object', 'instrument'],
	mask: ['object', 'clothing'],
	'mathematical equation': ['concept'],
	meadow: ['place', 'biome'],
	meme: ['concept', 'visible'],
	metal: ['substance'],
	microwave: ['object', 'container', 'tool', 'machine', 'openable'],
	mirror: ['object', 'tool', 'visible'],
	monkey: ['object', 'animal', 'alive'],
	monster: ['object', 'humanoid', 'animal', 'alive'],
	mosquito: ['object', 'animal', 'small', 'alive', 'bug'],
	mountain: ['place', 'large_place', 'biome'],
	movie: ['concept', 'visible'],
	museum: ['place', 'property', 'building'],
	necklace: ['object', 'small', 'clothing'],
	neighborhood: ['place', 'residence'],
	number: ['concept', 'words'],
	nun: ['person'],
	'old man': ['person'],
	'old woman': ['person'],
	orange: ['object', 'small', 'food'],
	ostritch: ['object', 'animal', 'alive'],
	oven: ['object', 'container', 'tool', 'machine', 'openable'],
	owl: ['object', 'animal', 'alive', 'airborne'],
	painting: ['object', 'furniture', 'visible'],
	P_pants: ['object', 'clothing'],
	paper: ['substance'],
	party: ['place', 'event', 'participatory'],
	pearl: ['object', 'small'],
	pen: ['object', 'small', 'tool'],
	perfume: ['substance', 'liquid'],
	phone: ['object', 'small', 'tool', 'machine', 'audio'],
	piano: ['object', 'instrument'],
	P_plains: ['place', 'biome'],
	planet: ['place', 'large_place'],
	plant: ['object', 'plant', 'alive'],
	'plant matter': ['substance'],
	plastic: ['substance'],
	plate: ['object', 'small', 'surface'],
	plumber: ['person', 'job'],
	podcast: ['concept', 'audio'],
	poem: ['concept', 'words', 'writing', 'audio'],
	'police officer': ['person', 'job'],
	politician: ['person', 'job'],
	pool: ['container', 'passageway'],
	'poor person': ['person'],
	potato: ['object', 'small', 'food'],
	potion: ['drink'],
	priest: ['person'],
	printer: ['object', 'tool', 'machine'],
	prostitute: ['person', 'job'],
	rabbit: ['object', 'small', 'animal', 'alive'],
	radio: ['object', 'small', 'tool', 'machine', 'audio'],
	'radio station': ['concept', 'audio'],
	record: ['object', 'small', 'audio'],
	'record player': ['object', 'tool', 'machine'],
	refrigerator: ['object', 'furniture', 'tool', 'machine', 'openable'],
	'region of space': ['place', 'large_place', 'biome'],
	'region of the ocean': ['place', 'large_place', 'biome'],
	religion: ['concept', 'participatory'],
	restaurant: ['place', 'property', 'restaurant'],
	'rich person': ['person'],
	riddle: ['concept', 'words', 'writing', 'audio'],
	ring: ['object', 'small', 'clothing'],
	ritual: ['concept', 'act', 'participatory'],
	river: ['place', 'biome'],
	road: ['place', 'passageway'],
	robot: ['object', 'humanoid', 'machine'],
	rock: ['object', 'small'],
	'roller coaster': ['object', 'large'],
	room: ['place', 'small_place'],
	sand: ['substance'],
	sandwich: ['object', 'food'],
	scarecrow: ['object', 'humanoid'],
	scarf: ['object', 'clothing'],
	school: ['place', 'building'],
	P_scissors: ['object', 'small', 'tool'],
	scorpion: ['object', 'small', 'animal', 'alive', 'bug'],
	'sea creature': ['object', 'animal', 'alive'],
	seed: ['object', 'small'],
	shadow: ['humanoid', 'visible'],
	shell: ['object', 'small'],
	shirt: ['object', 'clothing'],
	shoe: ['object', 'small', 'clothing'],
	'shopping mall': ['place', 'property', 'building', 'store'],
	shovel: ['object', 'tool'],
	skeleton: ['object', 'humanoid'],
	skull: ['object', 'small'],
	slime: ['substance', 'liquid'],
	snake: ['object', 'animal', 'alive'],
	snowman: ['object', 'humanoid'],
	soldier: ['person', 'job'],
	song: ['concept', 'audio'],
	sound: ['concept', 'audio'],
	spider: ['object', 'animal', 'alive', 'bug'],
	sponge: ['object', 'animal', 'alive'],
	staircase: ['place', 'surface', 'small_place', 'passageway'],
	state: ['place', 'large_place'],
	statue: ['object', 'humanoid'],
	stone: ['substance'],
	store: ['place', 'property', 'building', 'store'],
	story: ['concept', 'words', 'writing', 'audio'],
	styrofoam: ['substance'],
	submarine: ['object', 'large', 'machine'],
	suitcase: ['object', 'container', 'small', 'openable'],
	swamp: ['place', 'biome'],
	sword: ['object', 'weapon'],
	table: ['object', 'furniture', 'surface'],
	teacher: ['person', 'job'],
	teenager: ['person'],
	'television commercial': ['concept', 'visible', 'event'],
	'television program': ['concept', 'visible'],
	'television set': ['object', 'visible', 'machine'],
	'testing chamber': ['place', 'passageway', 'small_place'],
	tiger: ['object', 'animal', 'alive'],
	'time loop': ['concept', 'event', 'participatory'],
	toaster: ['object', 'tool', 'machine'],
	toilet: ['object', 'furniture', 'tool'],
	tomato: ['object', 'small', 'food'],
	toothbrush: ['object', 'small', 'tool'],
	towel: ['object', 'tool', 'clothing'],
	town: ['place', 'residence'],
	toy: ['object', 'toy'],
	train: ['object', 'large', 'machine'],
	trumpet: ['object', 'instrument'],
	tunnel: ['place', 'passageway'],
	umbrella: ['object', 'tool', 'openable'],
	underwear: ['object', 'clothing'],
	urn: ['object', 'container', 'openable'],
	utensil: ['object', 'small', 'tool'],
	'vacuum cleaner': ['object', 'container', 'tool', 'machine'],
	vase: ['object', 'furniture', 'container', 'openable'],
	'video game': ['concept'],
	'video game convention': ['place', 'event', 'participatory'],
	vigilante: ['person', 'job'],
	village: ['place', 'residence'],
	violin: ['object', 'instrument'],
	virus: ['concept', 'disease'],
	voice: ['concept', 'audio'],
	volcano: ['object', 'large'],
	waitor: ['person', 'job'],
	waitress: ['person', 'job'],
	wall: ['object', 'surface'],
	wallet: ['object', 'small', 'container', 'openable'],
	watch: ['object', 'small', 'tool', 'clothing', 'machine'],
	water: ['substance', 'liquid'],
	'P_weather patterns': ['concept', 'event'],
	website: ['concept'],
	whale: ['object', 'animal', 'large', 'alive'],
	window: ['object', 'passageway', 'openable'],
	woman: ['person'],
	wood: ['substance'],
	P_woods: ['place', 'biome'],
	word: ['concept', 'words', 'writing', 'audio'],
	wrench: ['object', 'small', 'tool'],
	yoyo: ['object', 'small', 'tool', 'toy'],
	zebra: ['object', 'animal', 'alive'],
	zombie: ['humanoid'],
	zoo: ['place', 'property', 'sp_zoo']
}

const subjectList = Object.keys(subjects);

// Words which should only exist in singular form begin with _
const subjectPlurals = [
	'_sp_sized_area',
	'sp_nationality_pl',
	'abacuses',
	'accordions',
	'acorns',
	'actors',
	'advertisements',
	'airplanes',
	'alarm clocks',
	'alcoholic drinks',
	'algorithms',
	'aliens',
	'alligators',
	'almanacs',
	'altars',
	'amusement parks',
	'ancient writings',
	'androids',
	'angels',
	'animes',
	'anime conventions',
	'ants',
	'apples',
	'aquariums',
	'armies',
	'artists',
	'athletes',
	'avocadoes',
	'babies',
	'bacteria',
	'badges',
	'bags',
	'bagels',
	'balaclavas',
	'balls',
	'balloons',
	'bananas',
	'_band',
	'banjoes',
	'barrels',
	'barstools',
	'baseballs',
	'baseball bats',
	'basketballs',
	'bassoons',
	'bats',
	'bathrobes',
	'bathrooms',
	'bathtubs',
	'batteries',
	'battleships',
	'beaches',
	'bears',
	'beards',
	'beavers',
	'beds',
	'bees',
	'bells',
	'benches',
	'bicycles',
	'bikinis',
	'binoculars',
	'birds',
	'birdcages',
	'blackboards',
	'blankets',
	'_blood',
	'boats',
	'body movements',
	'bombs',
	'bones',
	'books',
	'boots',
	'bottles',
	'bows',
	'bowls',
	'boxes',
	'bracelets',
	'brains',
	'_bread',
	'buckets',
	'buildings',
	'bulls',
	'burger joints',
	'buses',
	'bus drivers',
	'butlers',
	'butterflies',
	'buttons',
	'cabins',
	'cacti',
	'cakes',
	'calendars',
	'camels',
	'cans',
	'candles',
	'canyons',
	'cars',
	'cards',
	'_cardboard',
	'cartons of milk',
	'cash registers',
	'casinos',
	'caskets',
	'castles',
	'cats',
	'catacombs',
	'cathedrals',
	'caves',
	'celestial bodies',
	'chairs',
	'_cheese',
	'chickens',
	'children',
	'chimpanzees',
	'_chocolate',
	'cigars',
	'cities',
	'_sp_city_loc',
	'_clay',
	'clocks',
	'clowns',
	'cockroaches',
	'coins',
	'combs',
	'comic books',
	'companies',
	'compasses',
	'computers',
	'computer programs',
	'_concrete',
	'containment procedures',
	'convenience stores',
	'cooks',
	'cooking recipes',
	'countries',
	'cowboys',
	'criminals',
	'cruise ships',
	'crystals',
	'cyborgs',
	'D-Class',
	'deities',
	'demons',
	'deserts',
	'dice',
	'dimensions',
	'_dirt',
	'diseases',
	'doctors',
	'dogs',
	'dolls',
	'dolphins',
	'doors',
	'drawings',
	'dreams',
	'dungeons',
	'dwarfs',
	'eggs',
	'elephants',
	'elevators',
	'elves',
	'emails',
	'eyeballs',
	'_fabric',
	'faces',
	'factories',
	'fairies',
	'famous people',
	'farms',
	'farmers',
	'fashion boutiques',
	'feathers',
	'fictional characters',
	'fish',
	'fisherman',
	'flowers',
	'fonts',
	'football players',
	'forests',
	'Foundation agents',
	'Foundation researchers',
	'Foundation sites',
	'fountains',
	'frogs',
	'fruits',
	'games',
	'game show hosts',
	'garbage dumps',
	'genies',
	'ghosts',
	'giants',
	'_glass',
	'glasses',
	'gloves',
	'graveyards',
	'guns',
	'gymnasts',
	'_hair',
	'haircuts',
	'hands',
	'harps',
	'hats',
	'hearts',
	'hieroglyphics',
	'historical figures',
	'historical landmarks',
	'horns',
	'horses',
	'hospitals',
	'hot dogs',
	'hotels',
	'houses',
	'_human tissue',
	'humanoid entities',
	'_ice',
	'images',
	'islands',
	'janitors',
	'jars',
	'junkyards',
	'kazoos',
	'keys',
	'kings',
	'kites',
	'knives',
	'ladders',
	'lakes',
	'lamps',
	'languages',
	'lawyers',
	'left-handed people',
	'lions',
	'lizards',
	'lollipops',
	'machines',
	'magicians',
	'magnets',
	'mailboxes',
	'mammoths',
	'men',
	'mansions',
	'maps',
	'maracas',
	'masks',
	'mathematical equations',
	'meadows',
	'memes',
	'_metal',
	'microwaves',
	'mirrors',
	'monkeys',
	'monsters',
	'mosquitoes',
	'mountains',
	'movies',
	'museums',
	'necklaces',
	'neighborhoods',
	'numbers',
	'nuns',
	'old men',
	'old women',
	'oranges',
	'ostritches',
	'ovens',
	'owls',
	'paintings',
	'pants',
	'_paper',
	'parties',
	'pearls',
	'pens',
	'_perfume',
	'phones',
	'pianos',
	'plains',
	'planets',
	'plants',
	'_plant matter',
	'_plastic',
	'plates',
	'plumbers',
	'podcasts',
	'poems',
	'police officers',
	'politicians',
	'pools',
	'poor people',
	'potatoes',
	'potions',
	'priests',
	'printers',
	'prostitutes',
	'rabbits',
	'radios',
	'radio stations',
	'records',
	'record players',
	'refrigerators',
	'regions of space',
	'regions of the ocean',
	'religions',
	'restaurants',
	'rich people',
	'riddles',
	'rings',
	'rituals',
	'rivers',
	'roads',
	'robots',
	'rocks',
	'roller coasters',
	'rooms',
	'_sand',
	'sandwiches',
	'scarecrows',
	'scarves',
	'schools',
	'scissors',
	'scorpions',
	'sea creatures',
	'seeds',
	'shadows',
	'shells',
	'shirts',
	'shoes',
	'shopping malls',
	'shovels',
	'skeletons',
	'skulls',
	'_slime',
	'snakes',
	'snowmen',
	'soldiers',
	'songs',
	'sounds',
	'spiders',
	'sponges',
	'staircases',
	'states',
	'statues',
	'_stone',
	'stores',
	'stories',
	'_styrofoam',
	'submarines',
	'suitcases',
	'swamps',
	'swords',
	'tables',
	'teachers',
	'teenagers',
	'television commercials',
	'television programs',
	'television sets',
	'testing chambers',
	'tigers',
	'time loops',
	'toasters',
	'toilets',
	'tomatoes',
	'toothbrushes',
	'towels',
	'towns',
	'toys',
	'trains',
	'trumpets',
	'tunnels',
	'umbrellas',
	'_underwear',
	'urns',
	'utensils',
	'vacuum cleaners',
	'vases',
	'video games',
	'video game conventions',
	'vigilantes',
	'villages',
	'violins',
	'viruses',
	'voices',
	'volcanoes',
	'waitors',
	'waitresses',
	'walls',
	'wallets',
	'watches',
	'_water',
	'weather patterns',
	'websites',
	'whales',
	'windows',
	'women',
	'_wood',
	'woods',
	'words',
	'wrenches',
	'yoyos',
	'zebras',
	'zombies',
	'zoos'
]

function rand_attrib(tag, plural) {
	let w;
	switch (tag) {
		case 'act':
			return rand_id([
				`which ${(plural) ? 'turn' : 'turns'} ${randByTag('person', 1)} into ${randByTag('object', 1)}`,
				`which ${(plural) ? 'summon' : 'summons'} ${get_article(w = rand_el(adjectives)) + w} ${randByTag('humanoid', 0)}`,
				`which ${(plural) ? 'summon' : 'summons'} a swarm of ${randByTag('bug', 1)}`,
				`which ${(plural) ? 'open' : 'opens'} a portal to ${get_article(w = randByTag('place', 0)) + w}`
			]);
		case 'airborne':
			return rand_id([
				`which never ${(plural) ? 'land' : 'lands'}`,
				`which ${(plural) ? 'fly' : 'flies'} upside down`,
				`which ${(plural) ? 'fly' : 'flies'} ${Math.floor(Math.random() * 201) + 200} km above sea level`,
				`which can fly into space`
			]);
		case 'alive':
			return rand_id([
				`which ${(plural) ? 'die if they come' : 'dies if it comes'} into contact with ${randByTag('object', 1)}`,
				`which ${(plural) ? 'are' : 'is'} undead`,
				`which ${(plural) ? 'are' : 'is'} only alive at night`,
				`which cannot die`
			]);
		case 'animal':
			return rand_id([
				`which must be fed ${randByTag('object', 1)}`,
				`which ${(plural) ? 'are ' + randByTag('job', 1) : 'is ' + get_article(w = randByTag('job', 0)) + w}`,
				`which ${(plural) ? 'speak' : 'speaks'} with ${get_article(w = rand_el(nationalities)) + w} accent`,
				`which ${(plural) ? 'have ' + randByTag('object', 1) + ' for hearts' : 
					'has ' + get_article(w = randByTag('object', 0)) + w + ' for a heart'}`,
				`which ${(plural) ? 'have ' + randByTag('object', 1) + ' for brains' : 
					'has ' + get_article(w = randByTag('object', 0)) + w + ' for a brain'}`,
				`which ${(plural) ? 'have' : 'has'} no mouth`
			]);
		case 'audio':
			return rand_id([
				`which ${(plural) ? 'make anyone who hears them' : 'makes anyone who hears it'} become ${rand_el(adjectives)}`,
				`which ${(plural) ? 'turn anyone who hears them' : 'turns anyone who hears it'} into ${get_article(w = randByTag('object', 0)) + w}`,
				`which ${(plural) ? 'are' : 'is'} always heard at the same volume`,
				`which always ${(plural) ? 'echo' : 'echoes'}`
			]);
		case 'biome':
			return rand_id([
				`which ${(plural) ? 'are' : 'is'} inhabited exclusively by ${randByTag('animal', 1)}`,
				`which ${(plural) ? 'stay' : 'stays'} at a constant ${Math.floor(Math.random() * 101) -20} degrees Celsius`,
				`which ${(plural) ? 'experience' : 'experiences'} unusual levels of rainfall`
			]);
		case 'bug':
			return rand_id([
				`which ${(plural) ? 'have' : 'has'} glowing pincers`,
				`which ${(plural) ? 'have' : 'has'} wings made of ${randByTag('substance', 0)}`,
				`which ${(plural) ? 'swarm' : 'swarms'} in the shape of ${get_article(w = randByTag('object', 0)) + w}`
			]);
		case 'building':
			return rand_id([
				`which ${(plural) ? 'have' : 'has'} an infinite number of rooms`,
				`which ${(plural) ? 'have' : 'has'} no exits`,
				`which ${(plural) ? 'are' : 'is'} ${Math.floor(Math.random() * 1451) + 50} stories tall`,
				`which spontaneously ${(plural) ? 'change their' : 'changes its'} floorplan`
			]);
		case 'clothing':
			return rand_id([
				`which ${(plural) ? 'turn' : 'turns'} the wearer into ${get_article(w = randByTag('animal', 0)) + w}`,
				`which ${(plural) ? 'allow' : 'allows'} the wearer to fly`,
				`which ${(plural) ? 'make' : 'makes'} the wearer invincible`,
				`which ${(plural) ? 'make' : 'makes'} the wearer invisible`,
			]);
		case 'concept':
			return rand_id([
				`which ${(plural) ? 'make' : 'makes'} ${randByTag('person', 1)} become increasingly ${rand_el(adjectives)}`,
				`which ${(plural) ? 'make' : 'makes'} ${randByTag('person', 1)} dance`,
				`which ${(plural) ? 'make' : 'makes'} ${randByTag('person', 1)} go crazy`,
				`which ${(plural) ? 'make' : 'makes'} ${randByTag('person', 1)} fight each other`,
				`which ${(plural) ? 'make' : 'makes'} ${randByTag('person', 1)} lose their memory`,
				`which ${(plural) ? 'cause' : 'causes'} ${randByTag('person', 1)} to think they are ${randByTag('object', 1)}`,
				`which ${(plural) ? 'cause' : 'causes'} ${randByTag('person', 1)} to hallucinate`,
				`which ${(plural) ? 'heal' : 'heals'} ${randByTag('person', 1)}`,
				`which ${(plural) ? 'kill' : 'kills'} ${randByTag('person', 1)}`,
				`which ${(plural) ? 'cause' : 'causes'} ${get_article(w = randByTag('object', 0)) + w} to appear`,
				`which ${(plural) ? 'cause' : 'causes'} ${randByTag('object', 1)} to disappear`,
				`which ${(plural) ? 'influence' : 'influences'} the thoughts of ${randByTag('person', 1)}`,
				`which only ${(plural) ? 'affect' : 'affects'} ${randByTag('object', 1)}`,
				`which ${(plural) ? 'cause' : 'causes'} ${randByTag('object', 1)} to emerge from nearby ${randByTag('substance', 0)}`,
				`which ${(plural) ? 'corrode' : 'corrodes'} ${randByTag('substance', 0)}`,
				`which ${(plural) ? 'are' : 'is'} antimemetic`,
				`which ${(plural) ? 'spread' : 'spreads'} memetically`,
				`which ${(plural) ? 'change' : 'changes'} reality`,
				`which ${(plural) ? 'affect' : 'affects'} the climate`,
				`which ${(plural) ? 'revive' : 'revives'} the dead`,
				`which ${(plural) ? 'cause' : 'causes'} natural disasters`,
				`which ${(plural) ? 'tell' : 'tells'} the future`,
				`which ${(plural) ? 'have' : 'has'} a physical form`,
				`which ${(plural) ? 'manipulate' : 'manipulates'} time`,
				`which ${(plural) ? 'read' : 'reads'} minds`,
				`which ${(plural) ? 'evoke' : 'evokes'} a sense of dread`,
				`which ${(plural) ? 'create' : 'creates'} a sense of tranquility`,
				`which ${(plural) ? 'do' : 'does'} not exist`,
				`which instantly ${(plural) ? 'spark' : 'sparks'} an argument`,
				`which can only be described with ${randByTag('concept', 1)}`,
				`which everyone perceives differently`
			]);
		case 'container':
			return rand_id([
				`which ${(plural) ? 'each contain' : 'contains'} ${get_article(w = randByTag('large', 0)) + w}`,
				`which ${(plural) ? 'are' : 'is'} unable to hold ${randByTag('substance', 0)}`,
				`which ${(plural) ? 'consume' : 'consumes'} anything put inside`
			]);
		case 'disease':
			return rand_id([
				`which ${(plural) ? 'turn' : 'turns'} those affected into ${randByTag('object', 1)}`,
				`which ${(plural) ? 'make' : 'makes'} people allergic to ${randByTag('object', 1)}`,
				`which ${(plural) ? 'cause' : 'causes'} people to believe they are ${randByTag('object', 1)}`,
				`which ${(plural) ? 'prevent' : 'prevents'} those affected from dying`,
				`which ${(plural) ? 'clone' : 'clones'} the affected person`
			]);
		case 'drink':
			return rand_id([
				`which automatically ${(plural) ? 'replenish themselves' : 'replenishes itself'}`,
				`which ${(plural) ? 'make' : 'makes'} people incredibly strong`,
				`which ${(plural) ? 'make' : 'makes'} people taller`,
				`which ${(plural) ? 'make' : 'makes'} people faster`
			]);
		case 'event':
			return rand_id([
				`which ${(plural) ? 'happen' : 'happens'} every ${Math.floor(Math.random() * 11) + 2} years`,
				`which ${(plural) ? 'happen' : 'happens'} every ${Math.floor(Math.random() * 31) + 10} minutes`,
				`which did not happen, despite multiple eyewitness accounts`
			]);
		case 'food':
			return rand_id([
				`which ${(plural) ? 'taste like ' + randByTag('object', 1) : 
					'tastes like ' + get_article(w = randByTag('object', 0)) + w}`,
				`which ${(plural) ? 'contain' : 'contains'} ${(Math.floor(Math.random() * 20) + 5) * 1000} calories`,
				`which ${(plural) ? 'rot' : 'rots'} teeth one by one`,
				`which ${(plural) ? 'expand' : 'expands'} when consumed`
			]);
		case 'furniture':
			return rand_id([
				`which ${(plural) ? 'explode' : 'explodes'} when placed in any room containing ${get_article(w = randByTag('furniture', 0)) + w}`,
				`which ${(plural) ? 'teleport' : 'teleports'} to different rooms`,
				`which ${(plural) ? 'resemble' : 'resembles'} human anatomy`
			]);
		case 'humanoid':
			return rand_id([
				`which ${(plural) ? 'have' : 'has'} ${Math.floor(Math.random() * 10) + 3} eyes`,
				`which ${(plural) ? 'have' : 'has'} ${Math.floor(Math.random() * 10) + 3} arms`,
				`which can shapeshift`
			]);
		case 'instrument':
			return rand_id([
				`which only ${(plural) ? 'play' : 'plays'} "Three Blind Mice"`,
				`which always ${(plural) ? 'play' : 'plays'} at the same volume`,
				`which gradually ${(plural) ? 'increase' : 'increases'} in pitch as ${(plural) ? 'they are' : 'it is'} played`
			]);
		case 'job':
			return rand_id([
				`who ${(plural) ? 'get' : 'gets'} paid in ${randByTag('object', 1)}`,
				`who ${(plural) ? 'use' : 'uses'} ${randByTag('tool', 1)} to do their job`,
				`who ${(plural) ? 'work' : 'works'} for the Chaos Insurgency`
			]);
		case 'large':
			return rand_id([
				`which ${(plural) ? 'weigh' : 'weighs'} ${Math.round(Math.random() * 5100 + 500) / 100} grams`,
				`which ${(plural) ? 'are' : 'is'} extremely tiny`
			]);
		case 'large_place':
			return rand_id([
				`which ${(plural) ? 'are' : 'is'} completely devoid of water`,
				`where a population of sentient ${randByTag('object', 1)} rule`,
				`where people are terrorized by giant ${randByTag('object', 1)}`,
				`where days are ${Math.floor(Math.random()*4) + 2} times longer`,
				`which ${(plural) ? 'are' : 'is'} contained within ${get_article(w = randByTag('container', 0)) + w}`
			]);
		case 'liquid':
			return rand_id([
				`which ${(plural) ? 'are' : 'is'} constantly boiling`,
				`which always ${(plural) ? 'flow' : 'flows'} east`,
				`which ${(plural) ? 'evaporate' : 'evaporates'} when poured into ${randByTag('container', 1)}`
			]);
		case 'machine':
			return rand_id([
				`which ${(plural) ? 'are' : 'is'} powered by ${randByTag('object', 1)}`,
				`which only ${(plural) ? 'function' : 'functions'} in ${randByTag('place', 1)}`,
				`which must be repaired with ${get_article(w = randByTag('tool', 0)) + w}`
			]);
		case 'object':
			return rand_id([
				`which ${(plural) ? 'are' : 'is'} made of ${randByTag('substance', 0)}`,
				`which ${(plural) ? 'look like ' + randByTag('object', 1) : 
					'looks like ' + get_article(w = randByTag('object', 0)) + w}`,
				`which ${(plural) ? 'become' : 'becomes'} sentient when in contact with ${randByTag('object', 1)}`,
				`which ${(plural) ? 'eat' : 'eats'} ${randByTag('person', 1)}`,
				`which ${(plural) ? 'are' : 'is'} possesed by ${get_article(w = rand_el(adjectives)) + w} ${randByTag('person', 0)}`,
				`which ${(plural) ? 'pass' : 'passes'} through ${randByTag('substance')}`,
				`which instantly ${(plural) ? 'become' : 'becomes'} ${rand_el(adjectives)} when observed`,
				`which ${(plural) ? 'speak' : 'speaks'} to ${randByTag('person', 1)}`,
				`which ${(plural) ? 'heal' : 'heals'} ${randByTag('person', 1)}`,
				`which ${(plural) ? 'kill' : 'kills'} ${randByTag('person', 1)}`,
				`which ${(plural) ? 'attract' : 'attracts'} ${randByTag('object', 1)}`,
				`which ${(plural) ? 'repel' : 'repels'} ${randByTag('object', 1)}`,
				`which ${(plural) ? 'are' : 'is'} trapped inside ${get_article(w = randByTag('container', 0)) + w}`,
				`which ${(plural) ? 'are' : 'is'} only found in ${randByTag('place', 1)}`,
				`which ${(plural) ? 'are' : 'is'} antimemetic`,
				`which ${(plural) ? 'are' : 'is'} indestructible`,
				`which ${(plural) ? 'are' : 'is'} invisible`,
				`which ${(plural) ? 'are' : 'is'} very old`,
				`which ${(plural) ? 'are' : 'is'} permanently on fire`,
				`which ${(plural) ? 'disappear' : 'disappears'} when touched`,
				`which ${(plural) ? 'come' : 'comes'} from outer space`,
				`which ${(plural) ? 'freeze' : 'freezes'} people`,
				`which ${(plural) ? 'extend' : 'extends'} infinitely`,
				`which ${(plural) ? 'demand' : 'demands'} a blood sacrifice`,
				`which ${(plural) ? 'levitate' : 'levitates'}`,
				`which ${(plural) ? 'teleport' : 'teleports'}`,
				`which ${(plural) ? 'explode' : 'explodes'} into ${randByTag('small', 1)}`,
				`which ${(plural) ? 'sing' : 'sings'}`,
				`which ${(plural) ? 'fight each other' : 'fights people'}`,
				`which ${(plural) ? 'manipulate' : 'manipulates'} time`,
				`which ${(plural) ? 'defy' : 'defies'} the laws of thermodynamics`,
				`which ${(plural) ? 'stabilize' : 'stabilizes'} reality`,
				`which ${(plural) ? 'do' : 'does'} not technically exist`,
				`which spontaneously ${(plural) ? 'duplicate' : 'duplicates'}`,
				`which constantly ${(plural) ? 'spin' : 'spins'}`,
				`which can only be described with ${randByTag('concept', 1)}`,
				`which can generate infinite ${randByTag('object', 1)}`,
				`which must be contained in ${randByTag('substance', 0)}`,
				`which everyone ${(plural) ? 'perceive' : 'perceives'} differently`,
				`which cannot be moved`,
				`which can talk`
			]);
		case 'openable':
			return rand_id([
				`which ${(plural) ? 'emit' : 'emits'} a screaming sound when opened`,
				`which cannot be opened`
			]);
		case 'participatory':
			return rand_id([
				`which ${(plural) ? 'turn' : 'turns'} everyone involved into ${randByTag('object', 1)}`,
				`in which all the participants are ${randByTag('person', 1)}`
			]);
		case 'passageway':
			return rand_id([
				`which ${(plural) ? 'transport' : 'transports'} people to ${get_article(w = randByTag('place', 0)) + w}`,
				`which ${(plural) ? 'lead' : 'leads'} to ${rand_el(locations)}`
			]);
		case 'person':
			return rand_id([
				`who ${(plural) ? 'are' : 'is'} made of ${randByTag('substance', 0)}`,
				`who ${(plural) ? 'are' : 'is'} part ${randByTag('object', 0)}`,
				`who ${(plural) ? 'are' : 'is'} abnormally ${rand_el(adjectives)}`,
				`who ${(plural) ? 'are' : 'is'} trapped inside ${get_article(w = randByTag('container', 0)) + w}`,
				`who ${(plural) ? 'are' : 'is'} possesed by ${get_article(w = randByTag('person', 0)) + w}`,
				`who ${(plural) ? 'each are' : 'is'} secretly ${get_article(w = randByTag('object', 0)) + w}`,
				`who ${(plural) ? 'use' : 'uses'} ${randByTag('concept', 1)} to control ${randByTag('person', 1)}`,
				`who ${(plural) ? 'use' : 'uses'} ${randByTag('concept', 1)} to steal the memories of ${randByTag('person', 1)}`,
				`who ${(plural) ? 'use' : 'uses'} ${randByTag('object', 1)} like ${randByTag('tool', 1)}`,
				`who only ${(plural) ? 'eat' : 'eats'} ${randByTag('object', 1)}`,
				`who ${(plural) ? 'have' : 'has'} ${Math.floor(Math.random()*7) + 3} arms`,
				`who ${(plural) ? 'have ' + randByTag('object', 1) + ' for heads' :
					'has ' + get_article(w = randByTag('object', 0)) + w + ' for a head'}`,
				`who ${(plural) ? 'have' : 'has'} ${randByTag('object', 1)} for hands`,
				`who only ${(plural) ? 'live' : 'lives'} in ${randByTag('place', 1)}`,
                `who constantly ${(plural) ? 'ask' : 'asks'} for ${randByTag('object', 1)}`,
                `who constantly ${(plural) ? 'talk' : 'talks'} about ${randByTag('object', 1)}`,
                `who ${(plural) ? 'are' : 'is'} from the future`,
                `who ${(plural) ? 'are' : 'is'} from the past`,
                `who ${(plural) ? 'are' : 'is'} from another dimension`,
                `who ${(plural) ? 'are' : 'is'} inhumanly flexible`,
                `who ${(plural) ? 'are' : 'is'} undead`,
                `who ${(plural) ? 'are' : 'is'} telekinetic`,
                `who ${(plural) ? 'reflect' : 'reflects'} all damage`,
                `who ${(plural) ? 'have' : 'has'} no personal records`,
                `who ${(plural) ? 'come' : 'comes'} from outer space`,
                `who ${(plural) ? 'have sad backstories' : 'has a sad backstory'}`,
                `who ${(plural) ? 'are members of a cult' : 'leads a cult'}`,
                `who ${(plural) ? 'levitate' : 'levitates'}`,
                `who ${(plural) ? 'regenerate' : 'regenerates'}`,
                `who only ${(plural) ? 'come' : 'comes'} out at night`,
                `who only ${(plural) ? 'appear' : 'appears'} during a full moon`,
                `who ${(plural) ? 'are' : 'is'} only alive during the day`,
                `who ${(plural) ? 'try' : 'tries'} to overthrow the foundation`,
                `who ${(plural) ? 'do' : 'does'} not exist`,
                `who can read the minds of ${randByTag('person', 1)}`,
                `who can communicate with ${randByTag('object', 1)}`,
                `who can transform into ${get_article(w = randByTag('object', 0)) + w}`,
                `who can destroy anything that isn't made of ${randByTag('substance', 0)}`,
                `who can teleport to ${get_article(w = randByTag('place', 0)) + w} at will`,
                `who can phase through ${randByTag('substance', 0)}`,
                `who can run ${Math.floor(Math.random()*200) + 50} mph`,
                `who can jump ${Math.floor(Math.random()*140) + 10} feet in the air`,
                `who must be fed ${randByTag('object', 1)}`,
                `who must be contained in ${randByTag('substance', 0)}`,
                `who cannot be killed`,
                `who can bend reality`,
				`who can fly`
			]);
		case 'person_group':
			return rand_id([
				`which ${(plural) ? 'are' : 'is'} made up of ${randByTag('person', 1)}`,
				`which ${(plural) ? 'are' : 'is'} made up of ${randByTag('animal', 1)}`,
				`which ${(plural) ? 'have' : 'has'} ${Math.floor(Math.random() * 2481) + 20} members`
			]);
		case 'place':
			return rand_id([
				`where gravity is reversed, but only for ${randByTag('object', 1)}`,
				`where gravity is reversed`,
				`where information can only be recorded via ${randByTag('concept', 1)}`,
				`where ${randByTag('person', 1)} kill each other`,
				`where ${randByTag('person', 1)} are unable to sleep`,
				`where ${randByTag('person', 1)} are unable to speak`,
				`where ${get_article(w = randByTag('person', 0)) + w} watches you`,
				`where ${get_article(w = randByTag('concept', 0)) + w} controls the laws of physics`,
				`where everything is made of ${randByTag('substance', 0)}`,
				`where people are teleported to ${get_article(w = randByTag('place', 0)) + w} upon exiting`,
				`where everyone is ${rand_el(adjectives)}`,
				`where everyone is transformed into ${get_article(w = randByTag('object', 0)) + w}`,
				`where everyone is ${get_article(w = randByTag('person', 0)) + w}`,
				`where everything is abnormally ${rand_el(adjectives)}`,
				`where everything is ${Math.floor(Math.random() * 4) + 2} times bigger`,
				`where everything is ${Math.floor(Math.random() * 4) + 2} times smaller`,
				`where there are absolutely no ${randByTag('object', 1)}`,
				`where there is an abundance of ${randByTag('object', 1)}`,
				`where everyone wears ${randByTag('object', 1)} on their head`,
				`which can only be entered via ${get_article(w = randByTag('passageway', 0)) + w}`,
				`which can only be entered via ${get_article(w = randByTag('concept', 0)) + w}`,
				`which only ${randByTag('person', 1)} can enter`,
				`where ${randByTag('concept', 1)} do not exist`,
				`where everyone perceives things differently`,
				`where everyone shares consciousness`,
				`where everyone is asleep`,
				`where everything is underwater`,
				`where everything is upside down`,
				`where everything is sideways`,
				`where perception is greatly altered`,
				`where sound does not exist`,
				`where smell does not exist`,
				`where taste does not exist`,
				`where time is stopped`,
				`time is slower`
			]);
		case 'plant':
			return rand_id([
				`which only ${(plural) ? 'grow' : 'grows'} in ${randByTag('substance', 0)}`,
				`which ${(plural) ? 'grow' : 'grows'} ${randByTag('object', 1)}`
			]);
		case 'property':
			return rand_id([
				`which ${(plural) ? 'are' : 'is'} owned by ${get_article(w = randByTag('person', 0)) + w}`,
				`which ${(plural) ? 'are' : 'is'} being leased to ${get_article(w = randByTag('person', 0)) + w}`
			]);
		case 'residence':
			return rand_id([
				`where ${(plural) ? randByTag('person', 1) + ' live' : get_article(w = randByTag('person', 0)) + w + ' lives'}`,
				`where all the ${randByTag('furniture', 1)} are made of ${randByTag('substance', 0)}`
			]);
		case 'restaurant':
			return rand_id([
				`which only ${(plural) ? 'serve' : 'serves'} ${randByTag('food', 1)}`,
				`where all the staff are ${randByTag('object', 1)}`
			]);
		case 'small':
			return rand_id([
				`which ${(plural) ? 'are' : 'is'} abnormally large`,
				`which ${(plural) ? 'come' : 'comes'} back when thrown`,
				`which ${(plural) ? 'emit' : 'emits'} light when held`
			]);
		case 'small_place':
			return rand_id([
				`which ${(plural) ? 'have their' : 'has its'} own time zone`,
				`which can fit ${Math.floor(Math.random() * 300) + 100} people`
			]);
		case 'sp_amus_park':
			return rand_id([
				`where all the rides are made of ${randByTag('substance', 0)}`,
				`where all the rides turn people into ${randByTag('object', 1)}`
			]);
		case 'sp_zoo':
			return rand_id([
				`where all the animals are ${randByTag('animal', 1)}`,
				`which ${(plural) ? 'have' : 'has'} ${Math.floor(Math.random() * 9001) + 1000} animals`
			]);
		case 'store':
			return rand_id([
				`which only ${(plural) ? 'sell' : 'sells'} ${randByTag('object', 1)}`,
				`where the ${(plural) ? 'managers are ' + randByTag('person', 1) : 'manager is ' + get_article(w = randByTag('person', 0)) + w}`,
				`where the customers are all ${randByTag('object', 1)}`
			]);
		case 'substance':
			return rand_id([
				`which is indestructible`,
				`which has an odd chemical composition`,
				`which is highly radioactive`,
				`which has an odd smell`,
				`which changes color`,
				`which is incredibly dense`
			]);
		case 'surface':
			return rand_id([
				`which ${(plural) ? 'turn' : 'turns'} anything placed on ${(plural) ? 'them' : 'it'} into ${get_article(w = randByTag('object', 0)) + w}`,
				`which ${(plural) ? 'become' : 'becomes'} uneven when unobserved`
			]);
		case 'tool':
			return rand_id([
				`which only ${(plural) ? 'work' : 'works'} in ${randByTag('place', 1)}`,
				`which can only be used once`
			]);
		case 'toy':
			return rand_id([
				`which ${(plural) ? 'make' : 'makes'} people sad when played with`,
				`which cannot stop being played with`
			]);
		case 'visible':
			return rand_id([
				`which ${(plural) ? 'cause' : 'causes'} observers to cry`,
				`which ${(plural) ? 'disappear' : 'disappears'} when observed`,
				`which ${(plural) ? 'kill' : 'kills'} those who look at ${(plural) ? 'them' : 'it'}`
			]);
		case 'weapon':
			return rand_id([
				`which ${(plural) ? 'set their targets' : 'sets its target'} on fire`,
				`which ${(plural) ? 'attack on their' : 'attacks on its'} own`,
				`which can only damage ${randByTag('person', 1)}`
			]);
		case 'words':
			return rand_id([
				`which can only be spoken by ${randByTag('person', 1)}`,
				`which ${(plural) ? 'cause' : 'causes'} a flash of lightning when spoken`
			]);
		case 'writing':
			return rand_id([
				`which can only be read by ${randByTag('person', 1)}`,
				`which ${(plural) ? 'tell' : 'tells'} the future`
			]);
		default:
			return rand_id([
				`err`,
				`err`
			]);
	}
}

function get_new_scp() {

	// Select a random noun for the subject
	const scp_id = Math.floor(Math.random() * subjectList.length);
	let scp_item = subjectList[scp_id];

	// Determine if singular or plural
	let plural = 0;
	if (scp_item.charAt(0) == 'P' || Math.random() > 0.6) {
		plural = 1;
		scp_item = subjectPlurals[scp_id];
	}
	if (scp_item.charAt(0) == '_') {
		plural = 0;
		scp_item = subjectList[scp_id];
	}

	// Handle special cases
	scp_item = parse_specials(scp_item);
	
	// Select a random tag from the word
	let tag1 = rand_el(subjects[subjectList[scp_id]]);

	// Select a random atrribute to describe the item
	let attrib1 = rand_attrib(tag1, plural);
	
	// Build the description
	let desc = ((plural) ? '' : get_article(scp_item)) + scp_item + ' ' + attrib1[1];

	// Sometimes include second discription
	if (Math.random() > 0.6) {
		let tag2 = rand_el(subjects[subjectList[scp_id]]);
		let attrib2 = rand_attrib(tag2, plural);

		// Prevent the same attribute from being used twice
		while(tag1 == tag2 && attrib1[0] == attrib2[0])
			attrib2 = rand_attrib(tag2, plural);

		desc = desc + ' and ' + attrib2[1];
	}

	return capitalize(desc);
}

module.exports = {
	get_new_scp: get_new_scp
};