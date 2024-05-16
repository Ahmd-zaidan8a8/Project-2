function UserInfoCardHome({ loginData }) {
  const { gender, height, userName, weight } = loginData;

  const calcCalories = () => {
    let BMR = 0;
    let burn = 0;
    if (gender === "Male") {
      BMR = 10 * weight + 6.25 * height - 5 * 30 + 5; //age shoudld be in place for 30
      burn = BMR * 1.2;
    } else {
      BMR = 10 * weight + 6.25 * height - 5 * 30 - 161; // age should be in place for 30
      burn = BMR * 1.2;
    }

    return Math.round(burn);
  };
  const burn = calcCalories();
  return (
    <section
      className="bg-light rounded shadow-sm p-1 mb-2"
      id="userInfoCardHome"
    >
      <h4 className="fw-bold fs-3">
        The number below represents your daily caloric needs
      </h4>
      <div>
        <h1 className="text-success fw-bold d-inline rounded ">
          {burn} Calories
        </h1>
        {burn > 2000 ? (
          <p>
            *You need to consume more calories per day than the average person
            in order to maintain your weight
          </p>
        ) : (
          <p>
            *You need to consume less calories per day than the average person
            in order to maintain your weight
          </p>
        )}
      </div>
    </section>
  );
}

export default UserInfoCardHome;
