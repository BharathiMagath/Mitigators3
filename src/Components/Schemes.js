import React from 'react';
import '../styles/scheme.css';
import NavBar from '../Components/NavBar';
const Scheme = () => {
    return (
        <div>
        <NavBar />
        <div className="scheme-container">
            <h1 className="scheme-header">Government Schemes for Persons with Disabilities</h1>
            <div className="scheme-box">
                <h2>Main Objective</h2>
                <p>The main objective of this scheme is to provide financial grants to persons with disabilities to buy artificial limbs and auxiliary equipment...</p>

                <h2>Benefits</h2>
                <ul>
                    <li>Maximum financial grant: Rs.8,000/- for artificial limbs and auxiliary equipment.</li>
                    <li>For multi-disability cases: Up to Rs.10,000/- financial grant in one go.</li>
                </ul>

                <h2>Eligibility</h2>
                <ul>
                    <li>Residents of Uttar Pradesh with at least 40% disability certified by a Competent Authority.</li>
                    <li>Annual family income within the defined poverty line limits.</li>
                    <li>Medical Officer recommendation for required equipment.</li>
                    <li>Not benefited by similar schemes in the last three years (one year for students).</li>
                </ul>

                <h2>Application Process</h2>
                <p>
                    The application process is offline. Applicants can apply through the Office of the PWD Empowerment Officer or Jan Suvidha Kendra...
                </p>

                <h2>Documents Required</h2>
                <ul>
                    <li>Photo</li>
                    <li>Residence/domicile certificate</li>
                    <li>Certificate of disability</li>
                    <li>Caste Certificate (if applicable)</li>
                    <li>Income certificate</li>
                    <li>Medical report</li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default Scheme;
