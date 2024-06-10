import { calculateInvestmentResults, formatter } from "../investment"
export default function Result({ inputNumber }) {
    const res = calculateInvestmentResults(inputNumber)
    const InitialInvestment = res[0].valueEndOfYear - res[0].interest - res[0].AnnualInvestment
    return (
        <table border={"1px"}>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(year)</th>
                <th>Total Interest</th>
                <th>invested Capital</th>
            </tr>
            {
                res.map((element, index) => {

                    const totalIntrest = element.valueEndOfYear - element.AnnualInvestment * element.year - InitialInvestment
                    const totalAmountInvested = element.valueEndOfYear - totalIntrest
                    return (
                        <tr key={index}>
                            <td>{element.year}</td>
                            <td>{formatter.format(element.valueEndOfYear)}</td>
                            <td>{formatter.format(element.interest)}</td>
                            <td>{formatter.format(totalIntrest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })
            }

        </table>
    )
}