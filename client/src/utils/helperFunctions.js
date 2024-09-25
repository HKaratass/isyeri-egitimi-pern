// event.schedule.file.name
//             .toLocaleLowerCase('tr')
//             .replace(/ü/g, 'u')
//             .replace(/ö/g, 'o')
//             .replace(/ı/g, 'i')
//             .replace(/ğ/g, 'g')
//             .replace(/ş/g, 's')
//             .replace(/ç/g, 'c')
//             .replace(/ /g, '')
//only frontend
export function normalizeFileName(fileName) {
    const turkishCharacters = {
        'ü': 'u',
        'ö': 'o',
        'ı': 'i',
        'ğ': 'g',
        'ş': 's',
        'ç': 'c'
    };

    return fileName
        .toLowerCase('tr')
        .replace(/[üöığşç]/g, match => turkishCharacters[match])
        .replace(/ /g, '');
}

export const dateFormat_TR = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

export const startEndDateFormatter = (start, end) => {
    if (!start && !end)
        return "? - ?"
    return start?.getTime() !== end?.getTime() ?
        (
            start?.getFullYear() === end?.getFullYear() ?
                (
                    start?.getMonth() === end?.getMonth() ?
                        `${start ? start?.getDate() : "?"} - ${end ? end?.toLocaleDateString('tr-TR', dateFormat_TR) : "?"}` :
                        `${start?.getDate()} ${start ? start?.toLocaleDateString('tr-TR', { month: 'long' }) : "?"} - ${end ? end?.toLocaleDateString('tr-TR', dateFormat_TR) : "?"} `
                ) :
                `${start ? start?.toLocaleDateString('tr-TR', dateFormat_TR) : "?"} - ${end ? end?.toLocaleDateString('tr-TR', dateFormat_TR) : "?"}`
        )
        :
        `${start?.toLocaleDateString('tr-TR', dateFormat_TR)}`
}

export function TimeZonePlus3(dateString) {
    const date = new Date(dateString);
    date.setHours(date.getHours() + 3);
    return date;
}