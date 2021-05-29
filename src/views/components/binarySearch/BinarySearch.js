import React from 'react';
import { styles } from './Styles';
import { binarySearch } from './Function';

const BinarySearch = ({ value, list }) => {
    
    const { customContainer, customH1, customP, customSpan } = styles;

    const position = binarySearch({ value, list });
    
    return (
        <div className={customContainer}>
            <h1 className={customH1}>Búsqueda Binaria</h1>

            <p className={customP}>La búsqueda binaria es un algoritmo eficiente para encontrar un elemento en una lista ordenada de elementos. Funciona al dividir repetidamente a la mitad la porción de la lista que podría contener al elemento, hasta reducir las ubicaciones posibles a solo una.</p>
    
            <p className={customP}>Lista: 
                {list.map((number) => (
                    <span className={customSpan}>{number}</span>
                ))}
            </p>
            <p className={customP}>Posición del valor {value}:
                <span className={customSpan}>{position}</span>
            </p>
        </div>
    );
}
 
export default BinarySearch;