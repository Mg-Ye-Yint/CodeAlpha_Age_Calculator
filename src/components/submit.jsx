"use client";

import React, { useState } from "react";

const Submit = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState(0);
  const [ageCalculated, setAgeCalculated] = useState(false); 

  const calculateAge = () => {
    
    if (!dateOfBirth) {
      alert("Please enter a valid date of birth.");
      return; // Early exit if no date of birth is set
    }
    setAgeCalculated(true);
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
    if (days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
      months--;
    }

    setAge({ years, months, days });
  };

  const formatUnit = (unit, singular) => {
    return `${unit} ${singular}${unit > 1 ? "s" : ""}`;
  };

  return (
    <div className="bg-teal-800 justify-center items-center flex flex-col w-[60%] h-[200px]">
      <p className="text-white font-semibold">
        Please enter your date of birth.
      </p>
      <div className="w-full flex flex-col items-center">
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          className="mt-4 p-2 w-3/4 max-w-xs"
        />
        <button
          className="bg-white text-teal-800 w-[80px] h-[30px] mt-2 rounded-md font-semibold hover:bg-gray-400 
          hover:text-teal-900"
          onClick={calculateAge}
        >
          Calculate
        </button>
      </div>
      {ageCalculated === true ? <>{age.years < 0 ? (
        <p className="text-white font-semibold mt-2">You are not yet born.</p>
      ) : (
        <p className="text-white font-semibold mt-2">
         You are {formatUnit(age.years, 'year')}, {formatUnit(age.months, 'month')} and {formatUnit(age.days, 'day')} old.
        </p>
      )}</> : <>  <p className="text-white font-semibold mt-2">Your current age will be displayed here after you submit your birthday.</p></>}
      
    </div>
  );
};

export default Submit;
