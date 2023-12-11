function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];

    const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
    const evenNumbers = numberArray1.filter(a => a % 2 === 0);
    const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

    return (
        <div>
            <h4>FilterFunction</h4>
            <p>numberArray1 = {JSON.stringify(numberArray1)}</p>
            <p>numberArray1.filter((a) => a > 2) = {JSON.stringify(numbersGreaterThan2)}</p>
            <p>numberArray1.filter((a) => a % 2 === 0) = {JSON.stringify(evenNumbers)}</p>
            <p>numberArray1.filter((a) => a % 2 !== 0) = {JSON.stringify(oddNumbers)}</p>
        </div>
    )
}

export default FilterFunction;