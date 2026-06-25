function calculateTax(income: number): number
{
    if (income < 50_000)
        return income * 1.2;
    return income * 1.3;
}
//tsc filename.js compile
//tsc --init create config file
//tsc compiles all typescript files  