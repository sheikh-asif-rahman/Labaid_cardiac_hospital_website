import React, { useState } from "react";
import "./Labaid.css";
import Headline from "../components/Headline/Headline";
import NavigationBar from "../components/Navbar/NavigationBar";
import Title from "../components/Title/Title";
import Footer from "../components/Footer/Footer.jsx";
import service1 from "../assets/MyImage/service1.png";
import service2 from "../assets/MyImage/service2.png";
import service3 from "../assets/MyImage/service3.png";
import service4 from "../assets/MyImage/service4.png";
import service5 from "../assets/MyImage/service5.png";
import service6 from "../assets/MyImage/service6.png";
import service7 from "../assets/MyImage/service7.png";
import service8 from "../assets/MyImage/service8.png";

import Pagination from "react-bootstrap/Pagination";
import BlogsCard from "../components/BlogsCard/BlogsCard";
import ReadDetails from "../components/ReadDetails/ReadDetails.jsx";

const BlogsReading = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const cardData = [
    {
      title: "Accident And Emergency",
      subtitle:
        "The department of emergency medicine at Labaid Hospital , which work as the quick response team , is ....",
      image: service1,
    },
    {
      title: "Anaesthesiology",
      subtitle:
        "We make sure that your surgical procedure as safe, comfortable and efficient as possible. An integra ....",
      image: service2,
    },
    {
      title: "Burn & Plastic Surgery",
      subtitle:
        "Department of Burn, Plastic and Cosmetic Surgery of Labaid Hospitals Dhaka provides exceptional and ....",
      image: service3,
    },
    {
      title: "Cardiothoracic And Vascular Surgery",
      subtitle:
        "We believe you deserve nothing less than the very best in cardiovascular care. That&rsquo;s why Laba ....",
      image: service4,
    },
    {
      title: "Cath Lab",
      subtitle:
        "Labaid hospital provides an inclusive treatment plan for managing various heart conditions including ....",
      image: service5,
    },
    {
      title: "Chemotherapy",
      subtitle:
        "Labaid offers world-class care at our state-of-the-art facilities for treatment of all types of canc ....",
      image: service6,
    },
    {
      title: "Colorectal Surgery",
      subtitle:
        "Colorectal surgery is a medical operation that is performed on the colon, rectum and anus. Colorecta ....",
      image: service7,
    },
    {
      title: "Coronary Care Unit - CCU",
      subtitle:
        "A cardiac care unit (CCU) is a specialized hospital ward designed to treat people with serious or ac ....",
      image: service8,
    },
    {
      title: "Accident And Emergency",
      subtitle:
        "The department of emergency medicine at Labaid Hospital , which work as the quick response team , is ....",
      image: service1,
    },
    {
      title: "Anaesthesiology",
      subtitle:
        "We make sure that your surgical procedure as safe, comfortable and efficient as possible. An integra ....",
      image: service2,
    },
    {
      title: "Burn & Plastic Surgery",
      subtitle:
        "Department of Burn, Plastic and Cosmetic Surgery of Labaid Hospitals Dhaka provides exceptional and ....",
      image: service3,
    },
    {
      title: "Cardiothoracic And Vascular Surgery",
      subtitle:
        "We believe you deserve nothing less than the very best in cardiovascular care. That&rsquo;s why Laba ....",
      image: service4,
    },
    {
      title: "Cath Lab",
      subtitle:
        "Labaid hospital provides an inclusive treatment plan for managing various heart conditions including ....",
      image: service5,
    },
    {
      title: "Chemotherapy",
      subtitle:
        "Labaid offers world-class care at our state-of-the-art facilities for treatment of all types of canc ....",
      image: service6,
    },
    {
      title: "Colorectal Surgery",
      subtitle:
        "Colorectal surgery is a medical operation that is performed on the colon, rectum and anus. Colorecta ....",
      image: service7,
    },
    {
      title: "Coronary Care Unit - CCU",
      subtitle:
        "A cardiac care unit (CCU) is a specialized hospital ward designed to treat people with serious or ac ....",
      image: service8,
    },
    {
      title: "Accident And Emergency",
      subtitle:
        "The department of emergency medicine at Labaid Hospital , which work as the quick response team , is ....",
      image: service1,
    },
    {
      title: "Anaesthesiology",
      subtitle:
        "We make sure that your surgical procedure as safe, comfortable and efficient as possible. An integra ....",
      image: service2,
    },
    {
      title: "Burn & Plastic Surgery",
      subtitle:
        "Department of Burn, Plastic and Cosmetic Surgery of Labaid Hospitals Dhaka provides exceptional and ....",
      image: service3,
    },
    {
      title: "Cardiothoracic And Vascular Surgery",
      subtitle:
        "We believe you deserve nothing less than the very best in cardiovascular care. That&rsquo;s why Laba ....",
      image: service4,
    },
    {
      title: "Cath Lab",
      subtitle:
        "Labaid hospital provides an inclusive treatment plan for managing various heart conditions including ....",
      image: service5,
    },
    {
      title: "Chemotherapy",
      subtitle:
        "Labaid offers world-class care at our state-of-the-art facilities for treatment of all types of canc ....",
      image: service6,
    },
    {
      title: "Colorectal Surgery",
      subtitle:
        "Colorectal surgery is a medical operation that is performed on the colon, rectum and anus. Colorecta ....",
      image: service7,
    },
    {
      title: "Coronary Care Unit - CCU",
      subtitle:
        "A cardiac care unit (CCU) is a specialized hospital ward designed to treat people with serious or ac ....",
      image: service8,
    },
    {
      title: "Accident And Emergency",
      subtitle:
        "The department of emergency medicine at Labaid Hospital , which work as the quick response team , is ....",
      image: service1,
    },
    {
      title: "Anaesthesiology",
      subtitle:
        "We make sure that your surgical procedure as safe, comfortable and efficient as possible. An integra ....",
      image: service2,
    },
    {
      title: "Burn & Plastic Surgery",
      subtitle:
        "Department of Burn, Plastic and Cosmetic Surgery of Labaid Hospitals Dhaka provides exceptional and ....",
      image: service3,
    },
    {
      title: "Cardiothoracic And Vascular Surgery",
      subtitle:
        "We believe you deserve nothing less than the very best in cardiovascular care. That&rsquo;s why Laba ....",
      image: service4,
    },
    {
      title: "Cath Lab",
      subtitle:
        "Labaid hospital provides an inclusive treatment plan for managing various heart conditions including ....",
      image: service5,
    },
    {
      title: "Chemotherapy",
      subtitle:
        "Labaid offers world-class care at our state-of-the-art facilities for treatment of all types of canc ....",
      image: service6,
    },
    {
      title: "Colorectal Surgery",
      subtitle:
        "Colorectal surgery is a medical operation that is performed on the colon, rectum and anus. Colorecta ....",
      image: service7,
    },
    {
      title: "Coronary Care Unit - CCU",
      subtitle:
        "A cardiac care unit (CCU) is a specialized hospital ward designed to treat people with serious or ac ....",
      image: service8,
    },
    {
      title: "Accident And Emergency",
      subtitle:
        "The department of emergency medicine at Labaid Hospital , which work as the quick response team , is ....",
      image: service1,
    },
    {
      title: "Anaesthesiology",
      subtitle:
        "We make sure that your surgical procedure as safe, comfortable and efficient as possible. An integra ....",
      image: service2,
    },
    {
      title: "Burn & Plastic Surgery",
      subtitle:
        "Department of Burn, Plastic and Cosmetic Surgery of Labaid Hospitals Dhaka provides exceptional and ....",
      image: service3,
    },
    {
      title: "Cardiothoracic And Vascular Surgery",
      subtitle:
        "We believe you deserve nothing less than the very best in cardiovascular care. That&rsquo;s why Laba ....",
      image: service4,
    },
    {
      title: "Cath Lab",
      subtitle:
        "Labaid hospital provides an inclusive treatment plan for managing various heart conditions including ....",
      image: service5,
    },
    {
      title: "Chemotherapy",
      subtitle:
        "Labaid offers world-class care at our state-of-the-art facilities for treatment of all types of canc ....",
      image: service6,
    },
    {
      title: "Colorectal Surgery",
      subtitle:
        "Colorectal surgery is a medical operation that is performed on the colon, rectum and anus. Colorecta ....",
      image: service7,
    },
    {
      title: "Coronary Care Unit - CCU",
      subtitle:
        "A cardiac care unit (CCU) is a specialized hospital ward designed to treat people with serious or ac ....",
      image: service8,
    },
    // Add more card data objects here as needed
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cardData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  const renderPaginationItems = () => {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };
  return (
    <div>
      <Headline />
      <NavigationBar />
      <Title subtitle="Blogs" title="Latest Journal" />
      <BlogsCard cardData={currentItems} />
      <Pagination className="pagination">{renderPaginationItems()}</Pagination>
      <Footer />
    </div>
  );
};

export default BlogsReading;
