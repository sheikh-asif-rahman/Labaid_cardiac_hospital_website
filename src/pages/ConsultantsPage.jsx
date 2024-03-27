import React from "react";
import Headline from "../components/Headline/Headline";
import NavigationBar from "../components/Navbar/NavigationBar";
import Title from "../components/Title/Title";

// doctors image
import doctor1 from "../../src/assets/MyImage/doctor-1.jpg";
import doctor2 from "../../src/assets/MyImage/doctor-2.jpg";
import doctor3 from "../../src/assets/MyImage/doctor-3.jpg";
import doctor4 from "../../src/assets/MyImage/doctor-4.jpg";
import doctor5 from "../../src/assets/MyImage/doctor-5.jpg";
import doctor6 from "../../src/assets/MyImage/doctor-6.jpg";
import doctor7 from "../../src/assets/MyImage/doctor-7.jpg";
import doctor8 from "../../src/assets/MyImage/doctor-8.jpg";
import doctor9 from "../../src/assets/MyImage/doctor-9.jpg";
import doctor10 from "../../src/assets/MyImage/doctor-10.jpg";
import doctor11 from "../../src/assets/MyImage/doctor-11.jpg";
import doctor12 from "../../src/assets/MyImage/doctor-12.jpg";
import doctor13 from "../../src/assets/MyImage/doctor-13.jpg";
import doctor14 from "../../src/assets/MyImage/doctor-14.jpg";
import doctor15 from "../../src/assets/MyImage/doctor-15.jpg";
import doctor16 from "../../src/assets/MyImage/doctor-16.jpg";
import doctor17 from "../../src/assets/MyImage/doctor-17.jpg";
import doctor18 from "../../src/assets/MyImage/doctor-18.jpg";
import Consultants from "../components/Consultants/Consultants";
import Footer from "../components/Footer/Footer";

const ConsultantsPage = () => {
  return (
    <div>
      <Headline />
      <NavigationBar />
      <Title subtitle="Leading Consultants" title="Cardiac Surgery" />
      <Consultants
        image_1={doctor1}
        name_1={"Dr. Lutfor Rahman"}
        detail_1={
          "MBBS, MS (CTS) Chief Cardiac Surgeon LABAID Cardiac Hospital"
        }
        image_2={doctor2}
        name_2={"Dr. Md. Lokman Hossain"}
        detail_2={
          "MBBS, MS (CV & TS), FACS (USA) Cardiac Surgeon Senior Consultant, Cardiac Surgery Dept. LABAID Cardiac Hospital"
        }
      />
      <Title subtitle="Leading Consultants" title="Cardiology" />
      <Consultants
        image_1={doctor3}
        name_1={"Professor Dr. Abduz Zaher"}
        detail_1={
          "MBBS, FCPS (Medicine), FACC (USA), FRCP Professor of Cardiology Clinical and Interventional Cardiologist Ex. Professor of Cardiology National Institute of Cardiovascular Diseases Senior Consultant, LABAID Cardiac Hospital"
        }
        image_2={doctor4}
        name_2={"Dr. A P M Sohrabuzzaman"}
        detail_2={
          "MD, FCPS Senior Consultant Cardiologist Director, Cardiac Cath Lab & Heart Rhythm Services Professor, School of Health Science State University of Bangladesh LABAID Cardiac Hospital"
        }
      />
      <Consultants
        image_1={doctor5}
        name_1={"Professor Dr. Baren Chakraborty"}
        detail_1={
          "MBBS (Dhaka), MCPS (Medicine), FCPS (Medicine), FACA (USA), FCCP (USA), FRCP (Ireland), FRCP (Edin), FRCP (Glasgow), FACC (USA) Senior Fellowship in Cardiology (Singapore) Senior Consultant Cardiologist Chief Medical Education and Research LABAID Cardiac Hospital"
        }
        image_2={doctor6}
        name_2={"Professor. (Dr.) M M Zahurul Alam Khan"}
        detail_2={
          "MBBS (DMC), FCPS (Medicine), MD (Cardiology) Cardiology, Diabetes & Medicine Specialist Ex. Professor, Dept. of Cardiology BIRDEM General Hospital & Ibrahim Medical College LABAID Limited (Diagnostics)"
        }
      />
      <Consultants
        image_1={doctor7}
        name_1={"Professor. (Dr.) Md. Abdul Kader Akanda"}
        detail_1={
          "MBBS, FCPS (Medicine), MD (Cardiology), FACC (USA) Medicine Specialist & Cardiologist Clinical & Interventional Cardiologist Professor & Head of the Department, Cardiology (Ret) Sir Salimullah Medical College & Mitford Hospital, Dhaka Labaid Specialized Hospital"
        }
        image_2={doctor8}
        name_2={"Dr. Mahbubor Rahman"}
        detail_2={
          "MBBS (Dhaka), MCPS (Medicine), MD (Cardiology), FACC (USA), FSCAI (USA), FRCP (UK) Senior Consultant Cardiologist & Medicine Specialist In-Charge: Coronary Care Unit (CCU) LABAID Cardiac Hospital"
        }
      />
      <Consultants
        image_1={doctor9}
        name_1={"Dr. S. Mokaddas Hossain (Sadi)"}
        detail_1={
          "MBBS, FCPS (Medicine), MD (Cardiology), FAPSIC Fellowship (Singapore), Jakarta, FSCAI (USA) Associate Professor, Cardiology Interventional Cardiology and Electrophysiology LABAID Cardiac Hospital"
        }
        image_2={doctor10}
        name_2={"Dr. Arun Kumar Sharma"}
        detail_2={
          "MBBS, MCPS (Medicine), MD (cardiology), FACC (USA) Clinical & Interventional Cardiologist Senior Consultant & In charge (CCU-2) LABAID Cardiac Hospital"
        }
      />
      <Consultants
        image_1={doctor11}
        name_1={"Dr. Nur Mohammad"}
        detail_1={
          "MBBS, D CARD MCPS, MD Medicine Specialist & Cardiologist Senior Consultant, Medicine & Cardiology LABAID Cardiac Hospital"
        }
        image_2={doctor12}
        name_2={"Brig. Gen. Professor Nurunnahar Fatema S.B.P"}
        detail_2={
          "MBBS, FCPS (Paediatrics), FSCAI Fellow in Diagnostic and Interventional Paediatric Cardiology & Intensive Care, PSCC, KSA Pediatric Interventional Cardiologist CMH, Dhaka Independence Awardee LABAID Cardiac Hospital"
        }
      />
      <Consultants
        image_1={doctor13}
        name_1={"Professor. Dr. Md. Mohsin Hossain"}
        detail_1={
          "MBBS, MD (Medicine), FCPS (Cardiology) Interventional Cardiologist & Electrophysiologist Professor of Cardiology National Institute of Cardiovascular Diseases (NICVD) Labaid Cardiac Hospital"
        }
        image_2={doctor14}
        name_2={"Professor Dr. S M Mustafa Zaman"}
        detail_2={
          "MBBS, DTCD, MD (Cardiology) Fellow - Interventional Cardiology (India, Singapore, Japan) Cardiology, Chest Diseases & Medicine Specialist Professor, Interventional Cardiology Bangabandhu Sheikh Mujib Medical University (BSMMU) Labaid Cardiac Hospital"
        }
      />
      <Consultants
        image_1={doctor15}
        name_1={"Prof. (Dr.) M G Azam"}
        detail_1={
          "MBBS, MD (Cardiology) FSCAI (USA) Clinical and Interventional Cardiologist Fellow, Interventional Cardiologist, Germany Professor of Cardiology National Institute of Cardiovascular Diseases (NICVD) LABAID Limited (Diagnostics)"
        }
        image_2={doctor16}
        name_2={"Dr. Nur Alam"}
        detail_2={
          "MBBS (Dhaka), MD (Cardiology) FSCAI (USA), FESC Member of European Society of Cardiology (Rome, Italy) Clinical & Interventional Cardiologist Cardiologist, Hypertension Rheumatic Fever & Medicine Specialist Associate Professor of Cardiology National Institute of Cardiovascular Diseases, Dhaka"
        }
      />
      <Consultants
        image_1={doctor17}
        name_1={"Dr. Md. Rasul Amin (Shepon)"}
        detail_1={
          "MBBS, MD, FSCAI Clinical & Interventional Cardiologist Associate Professor, Dept of Cardiology Bangabandhu Sheikh Mujib Medical University (BSMMU) Labaid Limited (Diagnostics)"
        }
        image_2={doctor18}
        name_2={"Dr. A.K.S Zahid Mahmud Khan"}
        detail_2={
          "MBBS (Dhaka), MD (Cardiology), MRCPS (Glasgow, UK ), FSCAI (USA) Clinical & Interventional Cardiologist & Medicine Specialist Assistant Professor (Cardiology) National Institute of Cardiovascular Diseases (NICVD) Labaid Cardiac Hospital"
        }
      />
      <Footer />
    </div>
  );
};

export default ConsultantsPage;
