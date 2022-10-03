export const months = {
    JANUARY: "January",
    FEBRUARY: "February",
    MARCH: "March",
    APRIL: "April",
    MAY: "May",
    JUNE: "June",
    JULY: "July",
    AUGUST: "August",
    SEPTEMBER: "September",
    OCTOBER: "October",
    NOVEMBER: "November",
    DECEMBER: "December"
}

//Advantage-> Stops repetations, avoids spelling mistakes

export const getMonth = prompt("Enter the month:");

if (getMonth === months.JANUARY || getMonth === months.FEBRUARY || getMonth === months.MARCH) {
    console.log("First quorter")
}
