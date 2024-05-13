
function DailyNutritionCard( { nutritionDetails}) {

    if(!nutritionDetails) {
        return <div>Loading...</div>;
    }
    const { totalNutrients, totalDaily, calories } = nutritionDetails;
    return (
        <section id="dailyNutritionCard">
            <div>
                <h1>Nutrition Facts</h1>
            </div>
            <div>
                <h3>Amount Per Serving</h3>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Calories</th>
                        <th scope="col">{calories}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Total Fat</th>
                        {/* <td>{nutritionDetails} g</td> */}
                        <td>{totalDaily.FAT.quantity} %</td>
                    </tr>
                    <tr>
                        <th scope="row">Saturated Fat</th>
                        {/* <td>{nutritionDetails} g</td> */}
                        <td>{totalDaily.FASAT.quantity} %</td>
                    </tr>
                    <tr>
                        <th scope="row">Trans Fat</th>
                        {/* <td colspan="2">{nutritionDetails} g</td> */}
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Cholesterol</th>
                        {/* <td>{nutritionDetails} mg</td> */}
                        <td>{totalDaily.CHOLE.quantity} %</td>
                    </tr>
                    <tr>
                        <th scope="row">Sodium</th>
                        {/* <td>{nutritionDetails} mg</td> */}
                        <td>{totalDaily.NA.quantity} %</td>
                    </tr>
                    <tr>
                        <th scope="row">Total Carbohydrates</th>
                        {/* <td>{nutritionDetails} g</td> */}
                        <td>{totalDaily.CHOCDF.quantity} %</td>
                    </tr>
                    <tr>
                        <th scope="row">Dietary Fiber</th>
                        {/* <td>{nutritionDetails} g</td> */}
                        <td>{totalDaily.FIBTG.quantity} %</td>
                    </tr>
                    <tr>
                        <th scope="row">Total Sugars</th>
                        {/* <td>{nutritionDetails} g</td> */}
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Protein</th>
                        {/* <td>{nutritionDetails} g</td> */}
                        <td>{totalDaily.PROCNT.quantity} %</td>
                    </tr>
                    <tr>
                        <th scope="row">Vitamin D</th>
                        {/* <td>{nutritionDetails} ug</td> */}
                        <td>{totalDaily.VITD.quantity} %</td>
                    </tr>
                    <tr>
                        <th scope="row">Calcium</th>
                        {/* <td>{nutritionDetails} mg</td> */}
                        <td>{totalDaily.CA.quantity} %</td>
                    </tr>
                    <tr>
                        <th scope="row">Iron</th>
                        {/* <td>{nutritionDetails} mg</td> */}
                        <td>{totalDaily.FE.quantity} %</td>
                    </tr>
                    <tr>
                        <th scope="row">Potassium</th>
                        {/* <td>{nutritionDetails} mg</td> */}
                        <td>{totalDaily.K.quantity} %</td>
                    </tr>
                </tbody>
                <tfoot className="tableFooter">
                    <td>*Percent Daily Values are based on a 2000 calorie diet</td>
                </tfoot>
            </table>
        </section>
    )
}

export default DailyNutritionCard;