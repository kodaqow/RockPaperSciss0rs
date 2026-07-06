function greet (name) {
    if (!name) {
        console.log(`Hey there!`);
    } else {
        console.log(`Hey ${name}!`);
    }
}

greet('Slava');
greet();

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}

convertToFahrenheit(17);

function convertToCelsius(fahrenheit) {
    return (fahrenheit + 32) * 5 / 9
}

convertToCelsius(120);

function convertTemperature (degrees, unit) {
    if (unit === "F") {
        const result = convertToCelsius(degrees);
        return `${result} C`;
    } else if (unit === "C") {
        const result = convertToFahrenheit(degrees);
        return `${result} F`;
    }
}

convertTemperature(10, 'F');
convertTemperature(8, 'C');

function convertLength(length, from, to) {
    if (from === 'miles' && to === 'km') {
        const result = length *= 1.6;
        return `${result} ${to}`;
    } else if (from === 'miles' && to === 'ft') {
        const result = length *= 5280;
        return `${result} ${to}`;
    } else if (from === 'km' && to === 'miles') {
        const result = length /= 1.6;
        return `${result} ${to}`;
    } else if (from === 'km' && to === 'ft') {
        const result = length *= 3281;
        return `${result} ${to}`;
    } else if (from === 'ft' && to === 'km') {
        const result = length /= 3281;
        return `${result} ${to}`;
    } else if (from === 'ft' && to === 'miles') {
        const result = length /= 5280;
        return `${result} ${to}`;
    } else if (from !== 'miles' && from !== 'km' && from !== 'ft') {
        return `Invalid unit: ${from}`;
    } else if (to !== 'ft' && to !== 'km' && to !== 'miles') {
        return `Invalid unit: ${to}`;
    }
}

convertLength(5, 'miles', 'km')
convertLength(10, 'km', 'miles');
convertLength(5, 'miles', 'ft')
convertLength(5, 'ft', 'miles')
convertLength(5, 'km', 'ft')
convertLength(5, 'ft', 'km')
convertLength(5, 'lbs', 'km')
convertLength(5, 'km', 'lbs')
convertLength(5, 'lbs', 'lbs')