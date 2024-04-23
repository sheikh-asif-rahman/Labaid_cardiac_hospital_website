import React from "react";
import Headline from "../components/Headline/Headline";
import NavigationBar from "../components/Navbar/NavigationBar";
import Title from "../components/Title/Title";
import SmallCards from "../components/SmallCards/SmallCards";
import Footer from "../components/Footer/Footer.jsx";
// image
import service1 from "../assets/MyImage/service1.png";
import service2 from "../assets/MyImage/service2.png";
import service3 from "../assets/MyImage/service3.png";
import service4 from "../assets/MyImage/service4.png";
import service5 from "../assets/MyImage/service5.png";
import service6 from "../assets/MyImage/service6.png";
import service7 from "../assets/MyImage/service7.png";
import service8 from "../assets/MyImage/service8.png";
import Consultants from "../components/Consultants/Consultants.jsx";

const OurServicePage = () => {
  return (
    <div>
      <Headline />
      <NavigationBar />
      <Title subtitle="Services" title="Major Disciplines" />
      {/* service card 1,2 */}
      <Consultants
        image_1={service1}
        name_1={"Accident And Emergency"}
        detail_1={
          "The department of emergency medicine at Labaid Hospital , which work as the quick response team , is staffed  hours a day by in- house trauma nurses and vital support services including the blood bank and laboratory services . The emergency department staffs at Labaid always strive to provide patients with the highest quality emergency care and service in an efficient and timely manner."
        }
        image_2={service2}
        name_2={"Anaesthesiology"}
        detail_2={
          "We make sure that your surgical procedure as safe, comfortable and efficient as possible. An integral support function for all specialties , the department of Anesthesiology and critical care provides inter- disciplinary medical care based on application of Anesthesia in surgery ,Diagnostics , Critical care and Pain management with an optimal evidence based approach."
        }
      />
      {/* service card 3,4 */}
      <Consultants
        image_1={service3}
        name_1={"Burn & Plastic Surgery"}
        detail_1={
          "Department of Burn, Plastic and Cosmetic Surgery of Labaid Hospitals Dhaka provides exceptional and extensive services to its patients in several aspects of Plastic Surgery. Our post graduate qualified plastic surgeon utilize the latest techniques and provide a wide variety of aesthetic and reconstructive procedures for both men and women with safe,  successful outcomes. The department offers  both surgical and non-surgical services to help patients look and feel their best."
        }
        image_2={service4}
        name_2={"Cardiothoracic And Vascular Surgery"}
        detail_2={
          "We believe you deserve nothing less than the very best in cardiovascular care. That’s why Labaid Cardiac has assembled a team of superb cardiologists, cardiac surgeons, and specially trained nursing staff, who are skilled in providing the newest available diagnostics and treatments. Our heart doctors have the expertise to personalize the right treatment plan for you, whether you’re struck with a medical emergency like a heart attack or you’re dealing with an ongoing issue such as arrhythmia."
        }
      />
      {/* service card 5,6 */}
      <Consultants
        image_1={service5}
        name_1={"Cath Lab"}
        detail_1={
          "Labaid hospital provides an inclusive treatment plan for managing various heart conditions including cardiac rehabilitation. Using the best and the latest technology, our skilled Cardiologists, compassionate staff and the well – equipped wards are performing required services."
        }
        image_2={service6}
        name_2={"Chemotherapy"}
        detail_2={
          "Labaid offers world-class care at our state-of-the-art facilities for treatment of all types of cancer. Once you and your oncologist or surgeon have decided that chemotherapy may be part of your cancer treatment, they will recommend that you receive a consultation with one of our doctors."
        }
      />
      {/* service card 7,8 */}
      <Consultants
        image_1={service7}
        name_1={"Colorectal Surgery"}
        detail_1={
          "Colorectal surgery is a medical operation that is performed on the colon, rectum and anus. Colorectal surgeons, who are also referred to as proctologists, are responsible for carrying out this procedure, which may be necessary to treat a number of conditions. These problems can be acquired or congenital, and include, but are not limited to, Crohn’s disease, ulcerative colitis and neoplastic lesions in the colorectal region, as well as birth defects (such as imperforate anus), fissures, fistulas, hemorrhoids, rectal or anal prolapse, fecal incontinence, diverticulitis, diverticular disease and other disorders."
        }
        image_2={service8}
        name_2={"Coronary Care Unit - CCU"}
        detail_2={
          "A cardiac care unit (CCU) is a specialized hospital ward designed to treat people with serious or acute heart problems. People who undergo heart surgery also are placed in the CCU as they recover. These wards are equipped to provide specialized treatment for heart conditions and are staffed with medical personnel trained in cardiac care. In many hospitals, CCUs treat a growing number of patients who, in addition to cardiovascular disease, have other chronic health issues that require management. Patients are admitted to the CCU for serious, acute, and/or unstable cardiac conditions that require round-the-clock monitoring and specialized cardiovascular therapy."
        }
      />
      <Footer />
    </div>
  );
};

export default OurServicePage;
