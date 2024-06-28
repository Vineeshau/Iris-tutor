import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import gradeData from '@/data/grades';

function GradeTable() {
  const downloadPDF = () => {
    const table = document.getElementById('grade-table');

    // Create a new window for printing
    const newWindow = window.open('', '', 'width=800,height=600');
    newWindow.document.write(`
      <html>
        <head>
          <title>Grade Table</title>
          <style>
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid #999;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <h1>Grade Table</h1>
          ${table.outerHTML}
        </body>
      </html>
    `);

    // Print and close the new window
    newWindow.document.close();
    newWindow.print();
    newWindow.close();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
          onClick={downloadPDF}
        >
          Download as PDF
        </button>
      </div>
      <div id="grade-table">
        <Table className="w-full table-auto border-collapse border border-gray-200">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="border border-gray-200 p-4 font-bold w-32">Name</TableHead>
              <TableHead className="border border-gray-200 p-4 font-bold w-32">Course Name</TableHead>
              <TableHead className="border border-gray-200 p-4 font-bold w-24">Status</TableHead>
              <TableHead className="border border-gray-200 p-4 font-bold w-24">Marks Scored</TableHead>
              <TableHead className="border border-gray-200 p-4 font-bold w-16">Grade</TableHead>
              <TableHead className="border border-gray-200 p-4 font-bold w-24">Total Marks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gradeData.map((item, index) => (
              <TableRow key={index} className="even:bg-gray-50 h-16">
                <TableCell className="border border-gray-200 p-4">{item.name}</TableCell>
                <TableCell className="border border-gray-200 p-4">{item.courseName}</TableCell>
                <TableCell className={`border border-gray-200 p-4 ${item.status === 'Completed' ? 'text-green-500' : 'text-red-500'}`}>
                  {item.status}
                </TableCell>
                <TableCell className="border border-gray-200 p-4">{item.marksScored}</TableCell>
                <TableCell className="border border-gray-200 p-4">{item.grade}</TableCell>
                <TableCell className="border border-gray-200 p-4">{item.totalMarks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default GradeTable;
