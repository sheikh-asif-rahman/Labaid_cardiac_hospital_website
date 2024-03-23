import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./SliderConsultants.css";

// doctors image
import doctor1 from "../../assets/MyImage/doctor-1.jpg";
import doctor2 from "../../assets/MyImage/doctor-2.jpg";
import doctor3 from "../../assets/MyImage/doctor-3.jpg";
import doctor4 from "../../assets/MyImage/doctor-4.jpg";
import doctor5 from "../../assets/MyImage/doctor-5.jpg";
import doctor6 from "../../assets/MyImage/doctor-6.jpg";
import doctor7 from "../../assets/MyImage/doctor-7.jpg";
import doctor8 from "../../assets/MyImage/doctor-8.jpg";
import doctor9 from "../../assets/MyImage/doctor-9.jpg";
import doctor10 from "../../assets/MyImage/doctor-10.jpg";
import doctor11 from "../../assets/MyImage/doctor-11.jpg";
import doctor12 from "../../assets/MyImage/doctor-12.jpg";
import doctor13 from "../../assets/MyImage/doctor-13.jpg";
import doctor14 from "../../assets/MyImage/doctor-14.jpg";
import doctor15 from "../../assets/MyImage/doctor-15.jpg";
import doctor16 from "../../assets/MyImage/doctor-16.jpg";
import doctor17 from "../../assets/MyImage/doctor-17.jpg";
import doctor18 from "../../assets/MyImage/doctor-18.jpg";

const SliderConsultants = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="sliderconsultant">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        keyBoardControl={true}
      >
        {/* doctor 1 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor1} alt="" />
              <div>
                <h3>Dr. Lutfor Rahman</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS, MS (CTS) Chief Cardiac Surgeon LABAID Cardiac
                    Hospital"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* docto 2 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor2} alt="" />
              <div>
                <h3>Dr. Md. Lokman Hossain</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS, MS (CV & TS), FACS (USA) Cardiac Surgeon Senior
                    Consultant, Cardiac Surgery Dept. LABAID Cardiac Hospital"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doctor 3 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor3} alt="" />
              <div>
                <h3>Professor Dr. Abduz Zaher</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS, FCPS (Medicine), FACC (USA), FRCP Professor of
                    Cardiology Clinical and Interventional Cardiologist Ex.
                    Professor of Cardiology National Institute of Cardiovascular
                    Diseases Senior Consultant, LABAID Cardiac Hospital"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doctor 4 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor4} alt="" />
              <div>
                <h3>Dr. A P M Sohrabuzzaman</h3>
                <div className="consultantdetail">
                  <p>
                    "MD, FCPS Senior Consultant Cardiologist Director, Cardiac
                    Cath Lab & Heart Rhythm Services Professor, School of Health
                    Science State University of Bangladesh LABAID Cardiac
                    Hospital"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doctor 5 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor5} alt="" />
              <div>
                <h3>Professor Dr. Baren Chakraborty</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS (Dhaka), MCPS (Medicine), FCPS (Medicine), FACA (USA),
                    FCCP (USA), FRCP (Ireland), FRCP (Edin), FRCP (Glasgow),
                    FACC (USA) Senior Fellowship in Cardiology (Singapore)
                    Senior Consultant Cardiologist Chief Medical Education and
                    Research LABAID Cardiac Hospital"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doctor 6 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor6} alt="" />
              <div>
                <h3>Professor. (Dr.) M M Zahurul Alam Khan</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS (DMC), FCPS (Medicine), MD (Cardiology) Cardiology,
                    Diabetes & Medicine Specialist Ex. Professor, Dept. of
                    Cardiology BIRDEM General Hospital & Ibrahim Medical College
                    LABAID Limited (Diagnostics)"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doctor 7 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor7} alt="" />
              <div>
                <h3>Professor. (Dr.) Md. Abdul Kader Akanda</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS, FCPS (Medicine), MD (Cardiology), FACC (USA) Medicine
                    Specialist & Cardiologist Clinical & Interventional
                    Cardiologist Professor & Head of the Department, Cardiology
                    (Ret) Sir Salimullah Medical College & Mitford Hospital,
                    Dhaka Labaid Specialized Hospital"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doctor 8 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor8} alt="" />
              <div>
                <h3>Dr. Mahbubor Rahman</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS (Dhaka), MCPS (Medicine), MD (Cardiology), FACC (USA),
                    FSCAI (USA), FRCP (UK) Senior Consultant Cardiologist &
                    Medicine Specialist In-Charge: Coronary Care Unit (CCU)
                    LABAID Cardiac Hospital"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doctor 9 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor9} alt="" />
              <div>
                <h3>Dr. S. Mokaddas Hossain (Sadi)</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS, FCPS (Medicine), MD (Cardiology), FAPSIC Fellowship
                    (Singapore), Jakarta, FSCAI (USA) Associate Professor,
                    Cardiology Interventional Cardiology and Electrophysiology
                    LABAID Cardiac Hospital"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doctor 10 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor10} alt="" />
              <div>
                <h3>Dr. Arun Kumar Sharma</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS, MCPS (Medicine), MD (cardiology), FACC (USA) Clinical
                    & Interventional Cardiologist Senior Consultant & In charge
                    (CCU-2) LABAID Cardiac Hospital"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doctor 11 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor11} alt="" />
              <div>
                <h3>Dr. Nur Mohammad</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS, D CARD MCPS, MD Medicine Specialist & Cardiologist
                    Senior Consultant, Medicine & Cardiology LABAID Cardiac
                    Hospital"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doctor 12 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor12} alt="" />
              <div>
                <h3>Brig. Gen. Professor Nurunnahar Fatema S.B.P</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS, FCPS (Paediatrics), FSCAI Fellow in Diagnostic and
                    Interventional Paediatric Cardiology & Intensive Care, PSCC,
                    KSA Pediatric Interventional Cardiologist CMH, Dhaka
                    Independence Awardee LABAID Cardiac Hospital"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doctor 13 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor13} alt="" />
              <div>
                <h3>Professor. Dr. Md. Mohsin Hossain</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS, MD (Medicine), FCPS (Cardiology) Interventional
                    Cardiologist & Electrophysiologist Professor of Cardiology
                    National Institute of Cardiovascular Diseases (NICVD) Labaid
                    Cardiac Hospital"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doctor 14 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor14} alt="" />
              <div>
                <h3>Professor Dr. S M Mustafa Zaman</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS, DTCD, MD (Cardiology) Fellow - Interventional
                    Cardiology (India, Singapore, Japan) Cardiology, Chest
                    Diseases & Medicine Specialist Professor, Interventional
                    Cardiology Bangabandhu Sheikh Mujib Medical University
                    (BSMMU) Labaid Cardiac Hospital"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doctor 15 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor15} alt="" />
              <div>
                <h3>Prof. (Dr.) M G Azam</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS, MD (Cardiology) FSCAI (USA) Clinical and
                    Interventional Cardiologist Fellow, Interventional
                    Cardiologist, Germany Professor of Cardiology National
                    Institute of Cardiovascular Diseases (NICVD) LABAID Limited
                    (Diagnostics)"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doctor 16 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor16} alt="" />
              <div>
                <h3>Dr. Nur Alam</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS (Dhaka), MD (Cardiology) FSCAI (USA), FESC Member of
                    European Society of Cardiology (Rome, Italy) Clinical &
                    Interventional Cardiologist Cardiologist, Hypertension
                    Rheumatic Fever & Medicine Specialist Associate Professor of
                    Cardiology National Institute of Cardiovascular Diseases,
                    Dhaka"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doctor 17 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor17} alt="" />
              <div>
                <h3>Dr. Md. Rasul Amin (Shepon)</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS, MD, FSCAI Clinical & Interventional Cardiologist
                    Associate Professor, Dept of Cardiology Bangabandhu Sheikh
                    Mujib Medical University (BSMMU) Labaid Limited
                    (Diagnostics)"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* doctor 18 */}
        <div>
          <div className="card">
            <div className="info">
              <img src={doctor18} alt="" />
              <div>
                <h3>Dr. A.K.S Zahid Mahmud Khan</h3>
                <div className="consultantdetail">
                  <p>
                    "MBBS (Dhaka), MD (Cardiology), MRCPS (Glasgow, UK ), FSCAI
                    (USA) Clinical & Interventional Cardiologist & Medicine
                    Specialist Assistant Professor (Cardiology) National
                    Institute of Cardiovascular Diseases (NICVD) Labaid Cardiac
                    Hospital"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default SliderConsultants;
