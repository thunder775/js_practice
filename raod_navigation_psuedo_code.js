call function navigate( A, T, [ AK, PT, AP, PQ, TQ, AT]){
    let result  = []
    // tracking AK
    call function navigate( K, T, [ PT, AP, PQ, TQ, AT]) {
        let result = []
        return result;
    }

    // tracking AP
    call function navigate( P, T, [PT, PQ, TQ, AT]) {
        let result = []
        result.push(PT)
        // tracking PQ
        call function navigate(Q, T, [QT, AT]) {
            let result = []
            return result.push(QT)
        }
        return result.push(PQT)
    }
    result.push(APT)
    result.push(APQT)
    // tracking AT
    result.push(AT)
    return result
}