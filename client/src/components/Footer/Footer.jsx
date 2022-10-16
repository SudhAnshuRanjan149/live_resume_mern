import React from "react";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import ReactToPrint from "react-to-print";
import { useReactToPrint } from 'react-to-print';


const Footer = ({compRef}) => {
//   const downloadFileName = "resume";
//   const downloadPdfDocument = () => {
//     const input = document.getElementById("resume-container");
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, "JPEG", 0, 0);
//       pdf.save(`${downloadFileName}.pdf`);
//     });
//   };

//   //   -----------------------------
//   const handlePrint = useReactToPrint({
//     content: () => compRef.current,
//   });

//   compRef.current.style="width:100vw";

  return (
    <div>
      {/* <button onClick={downloadPdfDocument}>Download Pdf</button> */}
      {/* <button onClick={handlePrint}>Print this out!</button> */}
    </div>
  );
};

export default Footer;
