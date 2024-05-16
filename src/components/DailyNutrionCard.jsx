function DailyNutritionCard({ nutritionDetails }) {
  if (!nutritionDetails) {
    return <div>Loading...</div>;
  }
  const { totalNutrients, totalDaily, calories } = nutritionDetails;

  const roundToOneDecimal = (num) => {
    return num.toFixed(1);
  };

  return (
    <section
      className="table-responsive border border-1 rounded shadow-sm p-1 mt-4"
      id="dailyNutritionCard"
    >
      <div>
        <h1>Nutrition Facts</h1>
      </div>
      <div>
        <h3>Amount Per Serving</h3>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="fs-3" scope="col">
              Calories
            </th>
            <th className="fs-3" scope="col">
              {calories}
            </th>
          </tr>
          <tr>
            <th scope="col"></th>
            <th scope="col">% Daily Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              Total Fat --- {roundToOneDecimal(totalNutrients.FAT.quantity)} g
            </th>
            <td>{roundToOneDecimal(totalDaily.FAT.quantity)} %</td>
          </tr>
          <tr>
            <th scope="row">
              Saturated Fat ---{" "}
              {roundToOneDecimal(totalNutrients.FASAT.quantity)} g
            </th>
            <td>{roundToOneDecimal(totalDaily.FASAT.quantity)} %</td>
          </tr>
          <tr>
            <th scope="row">
              Trans Fat --- {roundToOneDecimal(totalNutrients.FATRN.quantity)} g
            </th>
          </tr>
          <tr>
            <th scope="row">
              Cholesterol --- {roundToOneDecimal(totalNutrients.CHOLE.quantity)}{" "}
              g
            </th>

            <td>{roundToOneDecimal(totalDaily.CHOLE.quantity)} %</td>
          </tr>
          <tr>
            <th scope="row">
              Sodium --- {roundToOneDecimal(totalNutrients.NA.quantity)} g
            </th>

            <td>{roundToOneDecimal(totalDaily.NA.quantity)} %</td>
          </tr>
          <tr>
            <th scope="row">
              Total Carbohydrates ---{" "}
              {roundToOneDecimal(totalNutrients.CHOCDF.quantity)} g
            </th>
            <td>{roundToOneDecimal(totalDaily.CHOCDF.quantity)} %</td>
          </tr>
          <tr>
            <th scope="row">
              Dietary Fiber ---{" "}
              {roundToOneDecimal(totalNutrients.FIBTG.quantity)} g
            </th>

            <td>{roundToOneDecimal(totalDaily.FIBTG.quantity)} %</td>
          </tr>
          <tr>
            <th scope="row">
              Total Sugars ---{" "}
              {roundToOneDecimal(totalNutrients.SUGAR.quantity)} g
            </th>
          </tr>
          <tr>
            <th scope="row">
              Protein --- {roundToOneDecimal(totalNutrients.PROCNT.quantity)} g
            </th>

            <td>{roundToOneDecimal(totalDaily.PROCNT.quantity)} %</td>
          </tr>
          <tr>
            <th scope="row">
              Vitamin D --- {roundToOneDecimal(totalNutrients.VITD.quantity)} g
            </th>

            <td>{roundToOneDecimal(totalDaily.VITD.quantity)} %</td>
          </tr>
          <tr>
            <th scope="row">
              Calcium --- {roundToOneDecimal(totalNutrients.CA.quantity)} g
            </th>

            <td>{roundToOneDecimal(totalDaily.CA.quantity)} %</td>
          </tr>
          <tr>
            <th scope="row">
              Iron --- {roundToOneDecimal(totalNutrients.FE.quantity)} g
            </th>

            <td>{roundToOneDecimal(totalDaily.FE.quantity)} %</td>
          </tr>
          <tr>
            <th scope="row">
              Potassium --- {roundToOneDecimal(totalNutrients.K.quantity)} g
            </th>

            <td>{roundToOneDecimal(totalDaily.K.quantity)} %</td>
          </tr>
        </tbody>
        <tfoot className="tableFooter">
          <tr>
            <td>*Percent Daily Values are based on a 2000 calorie diet</td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}

export default DailyNutritionCard;
