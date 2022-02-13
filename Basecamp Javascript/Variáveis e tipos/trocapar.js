function trocaPar(array){
    if(!array){
        return -1
    }
    for(i = 0; i < array.length;i++){
        if(array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }
    return array
}

console.log(trocaPar([1, 2, 3, 4, 5, 6]));