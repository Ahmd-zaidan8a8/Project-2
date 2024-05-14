function UserInfoCardHome({gender, height, userName, weight}) {
    //receiving props from homepage
    const calcCalories = (weight , height) => {
        let BMR = 0;
        let burn = 0;
        if (gender === "Male") {
            BMR = (10 * weight) + (6.25 * height) - (5 * 30) + 5 //age shoudld be in place for 30
            burn = BMR * 1.2;
        } else {
            BMR = (10 * weight) + (6.25 * height) - (5 * 30) - 161 // age should be in place for 30
            burn = BMR * 1.2;
        }

        return burn;

    }
    const burn = calcCalories(weight , height);
    return (
        <section id="userInfoCardHome">
            
            <h3>Hey {userName}, </h3>
            <h4>The number below represents your daily caloric needs based upon the health information you provided</h4>
            <div>
                <h1>{burn} Calories</h1>
                {burn > 2000 ? <p>You need to consume more calories per day than the average person in order to maintain your weight</p>:
                 <p>You need to consume less calories per day than the average person in order to maintain your weight</p>}
            </div>

            {/* <p>Below you will find our analysis tool, which allows you to enter any food items by weight and receive detailed nutritional information</p>

            <p>You can then capture these nutrient details and track your calories in your mealplan manager by clicking on the "add meal" button</p> */}

        </section>
    )
}

export default UserInfoCardHome;