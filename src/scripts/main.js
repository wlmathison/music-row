// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.

const jumpStop = [];
const chatten = [];
const polar = [];

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

const createFunkArtist = (name, age) => {
    return {
        "Artist Name": name,
        "Age": age
    }
};
const createRapArtist = (name, age) => {
    return {
        "Artist Name": name,
        "Age": age
    }
};
const createCountryArtist = (name, age) => {
    return {
        "Artist Name": name,
        "Age": age
    }
};
const createPopArtist = (name, age) => {
    return {
        "Artist Name": name,
        "Age": age
    }
};
const createBluegraassArtist = (name, age) => {
    return {
        "Artist Name": name,
        "Age": age
    }
};

// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old

chatten.push(createCountryArtist("Bruce Atkins", 23))
polar.push(createPopArtist("Jensen Brown", 20))
jumpStop.push(createFunkArtist("Dre Funkz", 25))
jumpStop.push(createRapArtist("Dusta Grimes", 21))
chatten.push(createBluegraassArtist("Bartholomew Danielson", 23))
chatten.push(createCountryArtist("Avilee Dallas", 19))
polar.push(createPopArtist("Austin Kinkaid", 22))
jumpStop.push(createRapArtist("Loyoncé Branis", 27))

console.log(jumpStop)
console.log(chatten)
console.log(polar)