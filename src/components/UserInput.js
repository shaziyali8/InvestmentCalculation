export default function UserInput({ onInputUpdate, inputValue }) {
    return (
        <div id="userInputs">
            <table>
                <tr>
                    <td>
                        <label>Initial Investment</label>
                        <input type="number" value={inputValue.InitialInvestment}
                            onChange={(event) => onInputUpdate("InitialInvestment", event.target.value)} />
                    </td>
                    <td>
                        <label>Annual Investment</label>
                        <input type="number" value={inputValue.AnnualInvestment}
                            onChange={(event) => onInputUpdate("AnnualInvestment", event.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Expected Return %</label>
                        <input type="number" value={inputValue.ExpectedReturn}
                            onChange={(event) => onInputUpdate("ExpectedReturn", event.target.value)} />
                    </td>
                    <td>
                        <label>Duration</label>
                        <input type="number" value={inputValue.Duration}
                            onChange={(event) => onInputUpdate("Duration", event.target.value)} />
                    </td>
                </tr>
            </table>
        </div>
    )
}