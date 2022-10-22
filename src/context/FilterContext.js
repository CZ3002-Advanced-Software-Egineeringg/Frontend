import React, { useContext, useState, useEffect } from "react";

const FilterContext = React.createContext();

export const useFilter = () => useContext(FilterContext);
export const FilterProvider = ({ children }) => {

    const [filteredPreschools,setFilteredPreschools] = useState(null);
    const [criterias,setCriterias] = useState(null);

    //criterias
    const [location,setLocation] = useState(50);
    const [fees,setFees] = useState(5000);
    const [minFees,setMinFees] = useState("1000");
    const [maxFees,setMaxFees] = useState("4000");
    const [foodInput,setFoodInput] = useState("Default");
    const [second_langInput,setSecond_langInput] = useState("Chinese");
    const [serviceInput,setServiceInput] = useState("Default" );
    const [sparkInput,setSparkInput] = useState("Default");
    const [transportInput,setTransportInput] = useState("Default");
    const [exOperatingHoursInput,setExOperatingHoursInput] = useState("Default")

    //variables for dropdown titles (for display purposes)
    const [foodTitle,setFoodTitle] = useState("Select food type");
    const [secondlangTitle,setSecondlangTitle] = useState("Choose Second Language");
    const [sparkTitle,setSparkTitle] = useState("Availability");
    const [transportTitle,setTransportTitle] = useState("Availability");
    const [exOperatingHoursInputTitle,setExOperatingHoursInputTitle] = useState("Availability");
    const [serviceTitle,setServiceTitle] = useState("Services");

    const value = {
        //filtered preschools
        filteredPreschools,
        setFilteredPreschools,

        //crieria values chosen by user 
        criterias,
        setCriterias,

        //criteria options for filterbars
        location,setLocation,
        fees,setFees,
        minFees,setMinFees,
        maxFees,setMaxFees,
        foodInput,setFoodInput,
        second_langInput,setSecond_langInput,
        serviceInput,setServiceInput,
        sparkInput,setSparkInput,
        transportInput,setTransportInput,
        exOperatingHoursInput,setExOperatingHoursInput,

        //criteria titles for ui purposes
        foodTitle,setFoodTitle,
        secondlangTitle,setSecondlangTitle,
        sparkTitle,setSparkTitle,
        transportTitle,setTransportTitle,
        exOperatingHoursInputTitle,setExOperatingHoursInputTitle,
        serviceTitle,setServiceTitle,
    };

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    );
};