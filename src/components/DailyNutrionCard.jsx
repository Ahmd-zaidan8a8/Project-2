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
      className="table-responsive border border-1 rounded shadow-sm p-1 mt-4 mb-5"
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
            {totalNutrients.FAT?.quantity ?
            <th scope="row">
              Total Fat --- {roundToOneDecimal(totalNutrients.FAT.quantity)} g
            </th> : <th/>}

            {totalDaily.FAT?.quantity ?
            <td>{roundToOneDecimal(totalDaily.FAT.quantity)} %</td> : <td/>}
          </tr>

          <tr>
            {totalNutrients.FASAT?.quantity ?
            <th scope="row">
              Saturated Fat ---{" "}
              {roundToOneDecimal(totalNutrients.FASAT.quantity)} g
            </th> : <th/>}

            {totalNutrients.FASAT?.quantity ?
            <td>{roundToOneDecimal(totalDaily.FASAT.quantity)} %</td> : <td/>}

          </tr>
          <tr>
            {totalNutrients.CHOLE?.quantity ?
            <th scope="row">
              Cholesterol --- {roundToOneDecimal(totalNutrients.CHOLE.quantity)}{" "}
              g
            </th> : <th/>}

              {totalNutrients.CHOLE?.quantity ?
            <td>{roundToOneDecimal(totalDaily.CHOLE.quantity)} %</td> : <td/>}
          </tr>
          <tr>
            {totalNutrients.NA?.quantity ?
            <th scope="row">
              Sodium --- {roundToOneDecimal(totalNutrients.NA.quantity)} g
            </th> : <th/>}

              {totalNutrients.NA?.quantity ?
            <td>{roundToOneDecimal(totalDaily.NA.quantity)} %</td> : <td/>}
          </tr>
          <tr>
            {totalNutrients.CHOCDF?.quantity ?
            <th scope="row">
              Total Carbohydrates ---{" "}
              {roundToOneDecimal(totalNutrients.CHOCDF.quantity)} g
            </th> : <th/>}

            {totalNutrients.CHOCDF?.quantity ?
            <td>{roundToOneDecimal(totalDaily.CHOCDF.quantity)} %</td> : <td/>}

          </tr>
          <tr>
            {totalNutrients.FIBTG?.quantity ? <th scope="row">
              Dietary Fiber ---{" "}
              {roundToOneDecimal(totalNutrients.FIBTG.quantity)} g
            </th> : <th/>}

            {totalDaily.FIBTG?.quantity ? <td>{roundToOneDecimal(totalDaily.FIBTG.quantity)} %</td> : <td/>}
          </tr>
          <tr>
            {totalNutrients.SUGAR?.quantity ? <th scope="row">
              Total Sugars ---{" "}
              {roundToOneDecimal(totalNutrients.SUGAR.quantity)} g
            </th> : <th/>}
          </tr>
          <tr>
            {totalNutrients.PROCNT?.quantity ?
            <th scope="row">
              Protein --- {roundToOneDecimal(totalNutrients.PROCNT.quantity)} g
            </th> : <th/>}

              {totalDaily.PROCNT?.quantity ?
            <td>{roundToOneDecimal(totalDaily.PROCNT.quantity)} %</td> : <td/>}
          </tr>
          <tr>
            {totalNutrients.VITD?.quantity ?
            <th scope="row">
              Vitamin D --- {roundToOneDecimal(totalNutrients.VITD.quantity)} g
            </th> : <th/>}

              {totalDaily.VITD?.quantity ?
            <td>{roundToOneDecimal(totalDaily.VITD.quantity)} %</td> : <td/>}
          </tr>
          <tr>
            {totalNutrients.CA?.quantity ?
            <th scope="row">
              Calcium --- {roundToOneDecimal(totalNutrients.CA.quantity)} g
            </th> : <th/>}

              {totalDaily.CA?.quantity ?
            <td>{roundToOneDecimal(totalDaily.CA.quantity)} %</td> : <td/>}
          </tr>
          <tr>
            {totalNutrients.FE?.quantity ?
            <th scope="row">
              Iron --- {roundToOneDecimal(totalNutrients.FE.quantity)} g
            </th> : <th/>}

              {totalDaily.FE?.quantity ?
            <td>{roundToOneDecimal(totalDaily.FE.quantity)} %</td> : <td/>}
          </tr>
          <tr>
            {totalNutrients.K?.quantity ?
            <th scope="row">
              Potassium --- {roundToOneDecimal(totalNutrients.K.quantity)} g
            </th> : <th/>}

              {totalDaily.K.quantity ?
            <td>{roundToOneDecimal(totalDaily.K?.quantity)} %</td> : <td/>
              }
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
