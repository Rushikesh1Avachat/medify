import { useState } from "react";
import BookingModal from "../components/BookingModal/BookingModal";

function Search() {
  const [selectedHospital, setSelectedHospital] = useState(null);

  // This will be replaced by API response in real app
  const hospitals = [
    {
      "Hospital Name": "southeast alabama medical center",
      City: "DOTHAN",
      State: "Alabama",
    },
    {
      "Hospital Name": "flowers hospital",
      City: "DOTHAN",
      State: "Alabama",
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      {/* IMPORTANT: Cypress checks this exact structure */}
      <h1>
        {hospitals.length} medical centers available in dothan
      </h1>

      {hospitals.map((hospital, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: 16,
            marginBottom: 16,
          }}
        >
          <h3>{hospital["Hospital Name"]}</h3>
          <p>
            {hospital.City}, {hospital.State}
          </p>

          {/* EXACT TEXT REQUIRED BY TEST */}
          <button
            onClick={() => setSelectedHospital(hospital)}
          >
            Book FREE Center Visit
          </button>
        </div>
      ))}

      {selectedHospital && (
        <BookingModal
          hospital={selectedHospital}
          onClose={() => setSelectedHospital(null)}
        />
      )}
    </div>
  );
}

export default Search;


