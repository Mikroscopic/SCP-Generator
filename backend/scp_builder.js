function capitalize(phrase) {
	return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}

function get_article(word) {
	// Exceptions
	if (["utensil"].includes(word))
		return 'a ';
	if (["underwear"].includes(word))
	return '';
	return ['a', 'e', 'i', 'o', 'u'].includes(word.charAt(0)) ? 'an ' : 'a ';
}

function rand_el(words) {
	return words[Math.floor(Math.random() * words.length)];
}

function randByTag(tag) {
	let validWords = []
	
	for (i = 0; i < subjectList.length; i++) {
		if (subjects[subjectList[i]].includes(tag))
			validWords.push(subjectList[i]);
	}

	return rand_el(validWords);
}

// Words which should only exist in plural form begin with P
const subjects = {
	abacus: ['object', 'tool'],
	accordion: ['object', 'instrument'],
	acorn: ['object', 'small']
}

const subjectList = Object.keys(subjects);

const subjectPlurals = [
	'abacuses',
	'accordions',
	'acorns'
]

function rand_attrib(tag, plural) {
	let w;
	switch (tag) {
		case 'instrument':
			return rand_el([
				`which ${(plural) ? 'play' : 'plays'} music`
			]);
		case 'object':
			return rand_el([
				`which ${(plural) ? 'have' : 'has'} weight`,
				`which ${(plural) ? 'use' : 'uses'} ${(get_article(w = randByTag('tool'))) + w}`
			]);
		case 'small':
			return rand_el([
				`which ${(plural) ? 'are' : 'is'} abnormally large`
			]);
		case 'tool':
			return rand_el([
				`which ${(plural) ? 'are' : 'is'} useful`
			]);
		default:
			return `err`;
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
	
	// Select a random tag from the word
	let tag = rand_el(subjects[subjectList[scp_id]])
	
	// Build the description
	let desc = ((plural) ? '' : get_article(scp_item)) + scp_item + ' ' + rand_attrib(tag, plural);

	return capitalize(desc);
}

module.exports = {
	get_new_scp: get_new_scp
};