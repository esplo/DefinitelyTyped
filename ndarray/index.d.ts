// Type definitions for ndarray v1.0.18
// Project: https://github.com/scijs/ndarray
// Definitions by: Giff Song <https://github.com/pawsong/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Data = number[] | Int8Array | Int16Array | Int32Array |
            Uint8Array | Uint16Array | Uint32Array |
            Float32Array | Float64Array | Uint8ClampedArray;

interface ndarray {
    data: Data;
    shape: number[];
    stride: number[];
    offset: number;
    dtype: 'int8' | 'int16' | 'int32' | 'uint8' | 'uint16' |'uint32' |
           'float32' | 'float64' | 'array'| 'uint8_clamped' | 'buffer' | 'generic';
    size: number;
    order: number[];
    dimension: number;
    get(...args: number[]): number;
    set(...args: number[]): number;
    index(...args: number[]): number;
    lo(...args: number[]): ndarray;
    hi(...args: number[]): ndarray;
    step(...args: number[]): ndarray;
    transpose(...args: number[]): ndarray;
    pick(...args: number[]): ndarray;
}

declare function ndarray(
    data: Data, shape?: number[], stride?: number[], offset?: number
): ndarray;

export = ndarray;