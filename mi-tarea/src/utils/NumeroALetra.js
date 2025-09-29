export default function numberToLetter(n) {
    if (n === 1000) return 'mil'
    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve']
    const especiales = { 10: 'diez', 11: 'once', 12: 'doce', 13: 'trece', 14: 'catorce', 15: 'quince', 20: 'veinte' }
    const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa']
    const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos']


    if (n < 10) return unidades[n]
    if (especiales[n]) return especiales[n]
    if (n < 20) return 'dieci' + unidades[n - 10]
    if (n < 30) {
        if (n === 20) return 'veinte'
        return 'veinti' + unidades[n - 20]
    }
    if (n < 100) {
        const d = Math.floor(n / 10)
        const u = n % 10
        return decenas[d] + (u ? ' y ' + unidades[u] : '')
    }
    if (n === 100) return 'cien'
    if (n < 1000) {
        const c = Math.floor(n / 100)
        const rest = n % 100
        return centenas[c] + (rest ? ' ' + numberToLetter(rest) : '')
    }
    return ''
}