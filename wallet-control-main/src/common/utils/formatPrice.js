export const formatPrice = (number, currency) => {
    let locale = 'pl-PL';

    switch (currency) {
        case 'USD':
            locale = 'en-US';
            break;
        case 'TRY':
            locale = 'tr-TR';
            break;
        default:
            break;
    }

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(number);
};